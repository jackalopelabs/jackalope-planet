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
        
        // Fix position if below ground
        if (player.model.position.y < this.groundLevel) {
            player.model.position.y = this.groundLevel;
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
        
        // Basic ground collision
        if (player.model.position.y < this.groundLevel) {
            player.model.position.y = this.groundLevel;
            player.velocity.y = 0;
            player.isGrounded = true;
            
            // Update position tracking
            player.position.copy(player.model.position);
        } else if (player.model.position.y > this.groundLevel + this.groundedThreshold) {
            player.isGrounded = false;
        }
    }
    
    /**
     * Resolve collisions with environment objects
     * @param {Player} player - The player to check collisions for
     */
    resolveEnvironmentCollisions(player) {
        // Simple example - assuming player has a collision radius
        const playerRadius = 0.5;
        
        // This would be replaced with actual collision detection from the game's physics system
        // Placeholder for future implementation
    }
}

export { HumanPhysics }; 