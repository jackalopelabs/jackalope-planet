import { BasePhysics } from './BasePhysics';
import * as THREE from 'three';

class BunnyPhysics extends BasePhysics {
    constructor(options = {}) {
        // Bunnies have lower gravity and higher jump
        super({
            gravity: 25,
            frictionCoefficient: 0.05,
            airResistance: 0.03,
            maxVelocity: 12,
            ...options
        });
        
        // Bunny-specific physics properties
        this.bounceCoefficient = options.bounceCoefficient || 0.2;
        this.floatiness = options.floatiness || 1.2;
        this.groundLevel = 0.5; // Half height above ground
        
        // Terrain collision detection
        this.raycaster = new THREE.Raycaster();
        this.downDirection = new THREE.Vector3(0, -1, 0);
        this.terrainObjects = [];
        this.scene = null;
    }
    
    /**
     * Set the scene for terrain collision detection
     * @param {THREE.Scene} scene - The scene containing terrain objects
     */
    setScene(scene) {
        this.scene = scene;
        
        // Find terrain objects
        if (this.scene) {
            this.findTerrainObjects();
        }
    }
    
    /**
     * Find objects marked as terrain colliders in the scene
     */
    findTerrainObjects() {
        this.terrainObjects = [];
        
        this.scene.traverse((object) => {
            // Only collect objects that are specifically marked as terrain colliders
            if (object.isMesh && object.userData && object.userData.isTerrainCollider) {
                this.terrainObjects.push(object);
            }
        });
        
        console.log(`Found ${this.terrainObjects.length} terrain colliders for bunny physics`);
    }
    
    /**
     * Get the terrain height at a specific position
     * @param {THREE.Vector3} position - The position to check
     * @returns {number} The terrain height at that position
     */
    getTerrainHeight(position) {
        if (this.terrainObjects.length === 0) {
            return 0; // Default ground level if no terrain objects
        }
        
        // Create ray starting point above the position
        const rayStart = new THREE.Vector3(position.x, 20, position.z); // Start high above
        
        // Cast ray downward
        this.raycaster.set(rayStart, this.downDirection);
        
        // Check for intersections with terrain objects
        const intersects = this.raycaster.intersectObjects(this.terrainObjects);
        
        // If we found an intersection, return its height
        if (intersects.length > 0) {
            return intersects[0].point.y;
        }
        
        // No intersection found, return default ground level
        return 0;
    }

    /**
     * Apply physics to bunny player
     * @param {Player} player - The bunny player to apply physics to
     * @param {number} delta - Time since last frame in seconds
     * @param {Object} input - Input state from InputManager
     */
    apply(player, delta, input = {}) {
        // DEBUG: Add more detailed logging for physics updates
        const debugPhysics = Math.random() < 0.01; // Log occasionally
        
        if (debugPhysics) {
            console.log(`%c 🪂 BunnyPhysics.apply for player ${player.id}:`, 'color: #afa;', {
                input: input,
                hasVelocity: !!player.velocity,
                playerPos: player.position?.clone(),
                modelPos: player.model?.position?.clone(),
                isGrounded: player.isGrounded
            });
        }
        
        // Initialize velocity if it doesn't exist
        if (!player.velocity) {
            player.velocity = new THREE.Vector3(0, 0, 0);
            player.isGrounded = true;
            console.log(`%c 🪂 Created velocity for player ${player.id}`, 'color: #afa;');
        }
        
        // CRITICAL: Verify player and model exist before proceeding
        if (!player || !player.model) {
            console.warn(`%c 🪂 Cannot apply physics - player model missing for ${player?.id || 'unknown'}`, 'color: orange;');
            return;
        }
        
        // Get terrain height at current position
        const terrainHeight = this.getTerrainHeight(player.model.position || player.position);
        
        // Calculate minimum height including the player's ground offset
        const minHeight = terrainHeight + this.groundLevel;
        
        // Fix position if below terrain
        if (player.model.position.y < minHeight) {
            player.model.position.y = minHeight;
            player.position.copy(player.model.position);
            player.isGrounded = true;
            player.velocity.y = 0;
            
            if (debugPhysics) {
                console.log(`%c 🪂 Grounded player at height ${minHeight.toFixed(2)}`, 'color: #afa;');
            }
        }
        
        // Handle jumping when jump action is triggered and player is grounded
        // Check both modern input format and legacy format
        const shouldJump = (input.actions && input.actions.jump) || input.jump;
        if (shouldJump && player.isGrounded) {
            player.velocity.y = 4.0; // Lower jump height (was 5.0)
            player.isGrounded = false;
            console.log(`%c 🪂 Bunny hop! Player ${player.id}`, 'color: #ff9;');
        }
        
        // Apply gravity with floatiness factor (bunnies fall slower)
        if (!player.isGrounded) {
            const adjustedGravity = this.gravity * this.floatiness;
            player.velocity.y -= adjustedGravity * delta;
            
            if (debugPhysics) {
                console.log(`%c 🪂 Applied gravity: ${adjustedGravity.toFixed(2)}, new Y velocity: ${player.velocity.y.toFixed(2)}`, 'color: #afa;');
            }
        }
        
        // Apply air resistance when jumping/falling
        if (!player.isGrounded) {
            const airDrag = player.velocity.clone()
                .multiplyScalar(-this.airResistance * delta);
            player.velocity.add(airDrag);
        }
        
        // Apply friction when on ground
        if (player.isGrounded) {
            this.applyFriction(player, delta);
            // Ensure Y velocity is zero when grounded
            player.velocity.y = 0;
        }
        
        // Limit velocity
        this.limitVelocity(player);
        
        // Apply velocity to position (only Y component from physics)
        // XZ movement is handled by the movement component
        const verticalMovement = new THREE.Vector3(0, player.velocity.y * delta, 0);
        
        if (debugPhysics) {
            console.log(`%c 🪂 Moving player by: ${verticalMovement.y.toFixed(4)} units`, 'color: #afa;');
        }
        
        // CRITICAL: Ensure movePlayer method exists before calling it
        if (typeof player.movePlayer === 'function') {
            player.movePlayer(verticalMovement);
        } else {
            console.warn(`%c 🪂 Cannot move player - movePlayer method missing for ${player.id}`, 'color: orange;');
            // Apply movement directly
            if (player.model && player.model.position) {
                player.model.position.add(verticalMovement);
                player.position.copy(player.model.position);
            }
        }
        
        // Check terrain collision after movement
        const newTerrainHeight = this.getTerrainHeight(player.model?.position || player.position);
        const newMinHeight = newTerrainHeight + this.groundLevel;
        
        if (player.model && player.model.position.y < newMinHeight) {
            player.model.position.y = newMinHeight;
            player.position.copy(player.model.position);
            
            // Bounce when landing with velocity
            if (player.velocity.y < -1) {
                player.velocity.y = -player.velocity.y * this.bounceCoefficient;
            } else {
                player.velocity.y = 0;
                player.isGrounded = true;
            }
        } else if (player.model && player.model.position.y > newMinHeight + 0.1) {
            // If we're above ground level, we're not grounded
            player.isGrounded = false;
        }
    }
}

export { BunnyPhysics }; 