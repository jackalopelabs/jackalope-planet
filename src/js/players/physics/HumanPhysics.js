import { BasePhysics } from './BasePhysics';
import * as THREE from 'three';

class HumanPhysics extends BasePhysics {
    constructor(options = {}) {
        // Humans have standard gravity and friction
        super({
            gravity: 9.8,
            frictionCoefficient: 0.2,
            airResistance: 0.01,
            maxVelocity: 8,
            ...options
        });
        
        // Human-specific physics properties
        this.groundedThreshold = options.groundedThreshold || 0.1;
        this.mass = options.mass || 70; // kg
        this.inertiaFactor = options.inertiaFactor || 0.85;
        this.groundLevel = 1.0; // Human stands taller than bunny
        
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
        const log = window.jpLog || console.log;
        this.terrainObjects = [];
        
        this.scene.traverse((object) => {
            // Only collect objects that are specifically marked as terrain colliders
            if (object.isMesh && object.userData && object.userData.isTerrainCollider) {
                this.terrainObjects.push(object);
            }
        });
        
        log('Found ' + this.terrainObjects.length + ' terrain colliders for human physics', 'debug');
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
     * Apply physics to human player
     * @param {Player} player - The human player to apply physics to
     * @param {number} delta - Time since last frame in seconds
     */
    apply(player, delta) {
        if (!player.velocity) {
            player.velocity = new THREE.Vector3(0, 0, 0);
            player.isGrounded = true;
        }
        
        if (!player.model) return;
        
        // Get terrain height at current position
        const terrainHeight = this.getTerrainHeight(player.model.position);
        
        // Calculate minimum height including the player's ground offset
        const minHeight = terrainHeight + this.groundLevel;
        
        // Fix position if below terrain
        if (player.model.position.y < minHeight) {
            player.model.position.y = minHeight;
            player.position.copy(player.model.position);
            player.isGrounded = true;
            player.velocity.y = 0;
        }
        
        // Apply regular gravity
        if (!player.isGrounded) {
            player.velocity.y -= this.gravity * delta;
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
        
        // Apply inertia - humans take longer to change direction
        if (player.previousVelocity) {
            // Only apply inertia to XZ plane, not Y
            const currentXZ = new THREE.Vector2(player.velocity.x, player.velocity.z);
            const previousXZ = new THREE.Vector2(player.previousVelocity.x, player.previousVelocity.z);
            
            currentXZ.lerp(previousXZ, this.inertiaFactor * delta);
            
            player.velocity.x = currentXZ.x;
            player.velocity.z = currentXZ.y;
        }
        
        // Store previous velocity for inertia
        if (!player.previousVelocity) {
            player.previousVelocity = new THREE.Vector3();
        }
        player.previousVelocity.copy(player.velocity);
        
        // Limit velocity
        this.limitVelocity(player);
        
        // Apply only Y velocity to position from physics
        // XZ movement is handled by the movement component
        const verticalMovement = new THREE.Vector3(0, player.velocity.y * delta, 0);
        player.movePlayer(verticalMovement);
        
        // Check terrain collision after movement
        const newTerrainHeight = this.getTerrainHeight(player.model.position);
        const newMinHeight = newTerrainHeight + this.groundLevel;
        
        if (player.model.position.y < newMinHeight) {
            // Player is below terrain after movement, adjust height
            player.model.position.y = newMinHeight;
            player.velocity.y = 0;
            player.isGrounded = true;
            
            // Update position tracking
            player.position.copy(player.model.position);
        } else if (player.model.position.y > newMinHeight + this.groundedThreshold) {
            // Player is above terrain, not grounded
            player.isGrounded = false;
        }
    }
    
    /**
     * Resolve collisions with environment objects
     * @param {Player} player - The player to check collisions for
     */
    resolveEnvironmentCollisions(player) {
        // This method can be enhanced later for more complex collision detection
    }
}

export { HumanPhysics }; 