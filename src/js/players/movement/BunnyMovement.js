import { BaseMovement } from './BaseMovement';
import * as THREE from 'three';

class BunnyMovement extends BaseMovement {
    constructor(options = {}) {
        // Bunnies move faster but turn more gradually
        super({
            movementSpeed: 7,
            rotationSpeed: 4.0,
            jumpForce: 7,
            acceleration: 12,
            deceleration: 4,
            ...options
        });
        
        this.lastDirection = new THREE.Vector3();
        this.moveBuffer = new THREE.Vector3();
        
        // Sprint properties
        this.sprintMultiplier = 2.0;
        this.isSprinting = false;
        
        // Hopping properties (only used in sprint mode)
        this.hopTime = 0;
        this.hopFrequency = 3; // Lower frequency for longer, smoother hops
        this.hopAmplitude = 0.15; // Gentle hop height
        this.visualOffset = new THREE.Vector3(0, 0, 0);
    }

    /**
     * Update bunny movement based on input
     * @param {Object} input - Input state from controls
     * @param {number} delta - Time since last frame in seconds
     * @param {Player} player - The bunny player to move
     */
    update(input, delta, player) {
        const moveDirection = input.moveDirection;
        const actions = input.actions;
        
        // Check for sprint input (shift key)
        this.isSprinting = actions.sprint || false;
        
        // Calculate camera-relative movement direction
        const cameraAngle = input.cameraOrbit.cameraAngle || 0;
        
        // Get camera-relative movement directions
        const forward = new THREE.Vector3(0, 0, -1);
        forward.applyAxisAngle(new THREE.Vector3(0, 1, 0), cameraAngle);
        forward.y = 0; // Keep movement on ground plane
        forward.normalize();
        
        const right = new THREE.Vector3(1, 0, 0);
        right.applyAxisAngle(new THREE.Vector3(0, 1, 0), cameraAngle);
        right.y = 0; // Keep movement on ground plane
        right.normalize();
        
        // Calculate movement vector
        const movementVector = new THREE.Vector3();
        let isMoving = false;
        
        // Apply sprint multiplier if sprinting
        const currentSpeed = this.isSprinting ? 
            this.movementSpeed * this.sprintMultiplier : 
            this.movementSpeed;
        
        if (moveDirection.z < 0) { // Forward
            movementVector.add(forward.clone().multiplyScalar(currentSpeed * delta));
            isMoving = true;
        }
        if (moveDirection.z > 0) { // Back
            movementVector.add(forward.clone().multiplyScalar(-currentSpeed * delta));
            isMoving = true;
        }
        if (moveDirection.x < 0) { // Left
            movementVector.add(right.clone().multiplyScalar(-currentSpeed * delta));
            isMoving = true;
        }
        if (moveDirection.x > 0) { // Right
            movementVector.add(right.clone().multiplyScalar(currentSpeed * delta));
            isMoving = true;
        }
        
        // Apply movement
        if (isMoving) {
            // Create a copy for movement (without Y component)
            const groundMovement = new THREE.Vector3(
                movementVector.x,
                0, // Keep Y at 0 to prevent flying
                movementVector.z
            );
            
            // Smooth out movement with acceleration
            this.moveBuffer.x = THREE.MathUtils.lerp(
                this.moveBuffer.x, 
                groundMovement.x, 
                this.acceleration * delta
            );
            
            this.moveBuffer.z = THREE.MathUtils.lerp(
                this.moveBuffer.z, 
                groundMovement.z, 
                this.acceleration * delta
            );
            
            // Apply hopping animation only when sprinting
            if (this.isSprinting && player.isGrounded) {
                // Update hop time
                this.hopTime += delta * this.hopFrequency;
                
                // Use a smoother sine curve with easing for a gentler animation
                // Using a custom curve that starts and ends more gradually
                const t = (Math.sin(this.hopTime) + 1) * 0.5; // normalize to 0-1
                const smoothT = t * t * (3 - 2 * t); // smoothstep function
                const hopOffset = smoothT * this.hopAmplitude;
                
                // Smoothly interpolate to the target hop height
                this.visualOffset.y = THREE.MathUtils.lerp(
                    this.visualOffset.y,
                    hopOffset, 
                    Math.min(1, 6 * delta) // Fast enough to look responsive but still smooth
                );
                
                // Apply the hop offset to the model only
                if (player.model) {
                    player.model.position.y = Math.max(0.5, player.position.y) + this.visualOffset.y;
                }
            } else {
                // When not sprinting, gradually return to normal height
                if (this.visualOffset.y > 0.001) {
                    this.visualOffset.y *= (1 - Math.min(1, 10 * delta));
                    if (player.model) {
                        player.model.position.y = Math.max(0.5, player.position.y) + this.visualOffset.y;
                    }
                } else if (player.model) {
                    // Make sure the model's position is aligned with player position
                    player.model.position.y = Math.max(0.5, player.position.y);
                }
            }
            
            // Use a clean vector for movement (without affecting Y)
            const finalMovement = new THREE.Vector3(
                this.moveBuffer.x,
                0, // Don't affect Y position through movement
                this.moveBuffer.z
            );
            
            // Move player with buffered movement
            this.move(player, finalMovement);
            
            // Set target direction to movement direction
            this.lastDirection.copy(groundMovement).normalize();
            
            // Rotate player to face movement direction if we have meaningful direction
            if (this.lastDirection.lengthSq() > 0.01) {
                this.rotate(player, this.lastDirection, delta);
            }
        } else {
            // Decelerate when not pressing movement keys
            this.moveBuffer.x *= (1 - this.deceleration * delta);
            this.moveBuffer.z *= (1 - this.deceleration * delta);
            
            if (this.moveBuffer.length() > 0.01) {
                const decelerationMovement = new THREE.Vector3(
                    this.moveBuffer.x,
                    0, // Don't affect Y position
                    this.moveBuffer.z
                );
                this.move(player, decelerationMovement);
            }
            
            // Gradually return to normal height when not moving
            if (this.visualOffset.y > 0.001) {
                this.visualOffset.y *= (1 - Math.min(1, 10 * delta));
                if (player.model) {
                    player.model.position.y = Math.max(0.5, player.position.y) + this.visualOffset.y;
                }
            } else if (player.model) {
                // Ensure model position is aligned
                player.model.position.y = Math.max(0.5, player.position.y);
            }
        }
        
        // Handle jump
        if (actions.jump && player.isGrounded) {
            this.jump(player);
        }
    }
}

export { BunnyMovement }; 