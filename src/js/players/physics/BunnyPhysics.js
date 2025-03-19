import { BasePhysics } from './BasePhysics';
import * as THREE from 'three';

class BunnyPhysics extends BasePhysics {
    constructor(options = {}) {
        // Bunnies have lower gravity and higher jump
        super({
            gravity: 7.5,
            frictionCoefficient: 0.05,
            airResistance: 0.015,
            maxVelocity: 12,
            ...options
        });
        
        // Bunny-specific physics properties
        this.bounceCoefficient = options.bounceCoefficient || 0.3;
        this.floatiness = options.floatiness || 0.8;
        this.groundLevel = 0.5; // Half height above ground
    }

    /**
     * Apply physics to bunny player
     * @param {Player} player - The bunny player to apply physics to
     * @param {number} delta - Time since last frame in seconds
     */
    apply(player, delta) {
        if (!player.velocity) {
            player.velocity = new THREE.Vector3(0, 0, 0);
            player.isGrounded = true;
        }
        
        // Fix position if below ground
        if (player.model && player.model.position.y < this.groundLevel) {
            player.model.position.y = this.groundLevel;
            player.position.copy(player.model.position);
            player.isGrounded = true;
            player.velocity.y = 0;
        }
        
        // Apply gravity with floatiness factor (bunnies fall slower)
        if (!player.isGrounded) {
            const adjustedGravity = this.gravity * this.floatiness;
            player.velocity.y -= adjustedGravity * delta;
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
        player.movePlayer(verticalMovement);
        
        // Basic ground collision
        if (player.model && player.model.position.y < this.groundLevel) {
            player.model.position.y = this.groundLevel;
            player.position.copy(player.model.position);
            
            // Bounce when landing with velocity
            if (player.velocity.y < -1) {
                player.velocity.y = -player.velocity.y * this.bounceCoefficient;
            } else {
                player.velocity.y = 0;
                player.isGrounded = true;
            }
        } else if (player.model && player.model.position.y > this.groundLevel + 0.1) {
            // If we're above ground level, we're not grounded
            player.isGrounded = false;
        }
    }
}

export { BunnyPhysics }; 