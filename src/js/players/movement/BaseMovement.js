import * as THREE from 'three';

class BaseMovement {
    constructor(options = {}) {
        this.movementSpeed = options.movementSpeed || 5;
        this.rotationSpeed = options.rotationSpeed || 5.0;
        this.jumpForce = options.jumpForce || 5;
        this.acceleration = options.acceleration || 10;
        this.deceleration = options.deceleration || 5;
    }

    /**
     * Update entity movement based on input
     * @param {Object} input - Input state containing direction vectors, button states, etc.
     * @param {number} delta - Time since last frame in seconds
     * @param {Player} player - The player entity to move
     */
    update(input, delta, player) {
        // Base implementation - override in subclasses
        console.warn('BaseMovement.update() should be implemented by subclasses');
    }

    /**
     * Move entity by a given vector
     * @param {Player} player - The player entity to move
     * @param {THREE.Vector3} movementVector - Vector to move by
     */
    move(player, movementVector) {
        if (player.model) {
            player.model.position.add(movementVector);
            player.position.copy(player.model.position);
        }
    }

    /**
     * Rotate entity to face a target direction
     * @param {Player} player - The player entity to rotate
     * @param {THREE.Vector3} targetDirection - Direction to face
     * @param {number} delta - Time since last frame in seconds
     */
    rotate(player, targetDirection, delta) {
        // CRITICAL FIX: Add defensive checks for all required objects
        if (!player || !player.model) {
            console.log(`%c ⚠️ Cannot rotate player - missing player or model`, 'color: orange;');
            return;
        }
        
        // Ensure targetDirection is valid
        if (!targetDirection || typeof targetDirection.clone !== 'function') {
            console.log(`%c ⚠️ Invalid targetDirection for player rotation`, 'color: orange;');
            return;
        }
        
        // Create a quaternion for the target rotation
        const targetQuaternion = new THREE.Quaternion();
        
        try {
            // Calculate the target rotation using a look matrix
            const lookMatrix = new THREE.Matrix4();
            const lookDirection = targetDirection.clone().negate();
            const upVector = new THREE.Vector3(0, 1, 0);
            lookMatrix.lookAt(new THREE.Vector3(0, 0, 0), lookDirection, upVector);
            targetQuaternion.setFromRotationMatrix(lookMatrix);
            
            // Calculate the step size for rotation
            const step = Math.min(1.0, this.rotationSpeed * delta);
            
            // Interpolate current rotation towards target rotation
            player.model.quaternion.slerp(targetQuaternion, step);
            
            // CRITICAL FIX: Ensure player.direction exists before using lerp
            if (!player.direction) {
                console.log(`%c 🔄 Creating missing direction vector for player`, 'color: #afa;');
                player.direction = new THREE.Vector3(0, 0, -1); // Default forward direction
            }
            
            // CRITICAL FIX: Use safer method for updating direction
            if (player.direction && typeof player.direction.copy === 'function' && 
                typeof player.direction.normalize === 'function') {
                // Instead of using lerp (which may not be available), use basic vector operations
                player.direction.copy(player.direction.clone().multiplyScalar(1 - step)
                    .add(targetDirection.clone().multiplyScalar(step)))
                    .normalize();
            } else {
                // Fallback to direct copy if lerp or other methods aren't available
                console.log(`%c ⚠️ Using fallback direction update for player`, 'color: orange;');
                player.direction = targetDirection.clone().normalize();
            }
        } catch (error) {
            console.log(`%c 🚨 Error rotating player: ${error.message}`, 'color: red;');
            // Create an emergency direction vector if needed
            if (!player.direction) {
                player.direction = new THREE.Vector3(0, 0, -1);
            }
        }
    }

    /**
     * Make entity jump
     * @param {Player} player - The player entity to make jump
     */
    jump(player) {
        if (player.isGrounded && player.velocity) {
            player.velocity.y = this.jumpForce;
            player.isGrounded = false;
        }
    }
}

export { BaseMovement }; 