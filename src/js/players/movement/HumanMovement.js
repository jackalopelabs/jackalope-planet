import { BaseMovement } from './BaseMovement';
import * as THREE from 'three';

class HumanMovement extends BaseMovement {
    constructor(options = {}) {
        // Humans move at normal pace but turn quickly
        super({
            movementSpeed: 5,
            rotationSpeed: 5.5,
            jumpForce: 5,
            acceleration: 8,
            deceleration: 6,
            ...options
        });
        
        // Human-specific movement properties
        this.sprintMultiplier = options.sprintMultiplier || 1.8;
        this.crouchMultiplier = options.crouchMultiplier || 0.5;
        this.isCrouching = false;
        this.isSprinting = false;
        this.headBobAmount = options.headBobAmount || 0.05;
        this.headBobSpeed = options.headBobSpeed || 5;
        this.headBobTime = 0;
        this.footstepDistance = 0;
        this.footstepThreshold = options.footstepThreshold || 2;
        this.moveBuffer = new THREE.Vector3();
    }

    /**
     * Update human movement based on input
     * @param {Object} input - Input state from controls
     * @param {number} delta - Time since last frame in seconds
     * @param {Player} player - The human player to move
     */
    update(input, delta, player) {
        const moveDirection = input.moveDirection;
        const actions = input.actions;
        const isFirstPerson = input.firstPersonMode;
        
        // Handle crouching
        if (actions.crouch !== this.isCrouching) {
            this.isCrouching = actions.crouch;
            // Adjust player height/collision when crouching changes
            // e.g., player.model.scale.y = this.isCrouching ? 0.7 : 1.0;
        }
        
        // Handle sprinting
        this.isSprinting = actions.sprint && !this.isCrouching && moveDirection.z < 0;
        
        // Calculate effective movement speed
        let effectiveSpeed = this.movementSpeed;
        if (this.isSprinting) effectiveSpeed *= this.sprintMultiplier;
        if (this.isCrouching) effectiveSpeed *= this.crouchMultiplier;
        
        // Calculate movement vector in camera-relative space
        const movementVector = new THREE.Vector3();
        let isMoving = false;
        
        if (isFirstPerson) {
            // First-person mode - movement relative to camera direction
            if (moveDirection.z !== 0 || moveDirection.x !== 0) {
                isMoving = true;
                
                // Get the camera's forward and right vectors
                const cameraDirection = new THREE.Vector3();
                if (player.fpCamera) {
                    // Get world camera direction (ignoring pitch for movement)
                    const matrix = new THREE.Matrix4();
                    matrix.extractRotation(player.fpCamera.matrixWorld);
                    
                    // Forward vector (from camera's -Z direction)
                    cameraDirection.set(0, 0, -1).applyMatrix4(matrix);
                    cameraDirection.y = 0; // Project onto XZ plane
                    cameraDirection.normalize();
                    
                    // Right vector (perpendicular to forward)
                    const right = new THREE.Vector3();
                    right.crossVectors(new THREE.Vector3(0, 1, 0), cameraDirection).normalize();
                    
                    // Combine forward/backward and left/right components
                    if (moveDirection.z !== 0) {
                        // Negate the moveDirection.z value to fix inverted forward/backward
                        movementVector.add(cameraDirection.clone().multiplyScalar(-moveDirection.z * effectiveSpeed * delta));
                    }
                    
                    if (moveDirection.x !== 0) {
                        // Negate the moveDirection.x value to fix inverted left/right
                        movementVector.add(right.clone().multiplyScalar(-moveDirection.x * effectiveSpeed * delta));
                    }
                }
            }
        } else {
            // Third-person mode - orbit camera relative movement
            if (moveDirection.z !== 0 || moveDirection.x !== 0) {
                isMoving = true;
                
                // Get the orbit camera angle
                const orbitAngle = input.cameraOrbit ? input.cameraOrbit.cameraAngle : 0;
                
                // Calculate forward and right vectors based on camera angle
                const forward = new THREE.Vector3(0, 0, -1);
                forward.applyAxisAngle(new THREE.Vector3(0, 1, 0), orbitAngle);
                forward.y = 0; // Keep movement on ground plane
                forward.normalize();
                
                const right = new THREE.Vector3(1, 0, 0);
                right.applyAxisAngle(new THREE.Vector3(0, 1, 0), orbitAngle);
                right.y = 0; // Keep movement on ground plane
                right.normalize();
                
                // Apply movement
                if (moveDirection.z !== 0) {
                    movementVector.add(forward.clone().multiplyScalar(moveDirection.z * effectiveSpeed * delta));
                }
                
                if (moveDirection.x !== 0) {
                    movementVector.add(right.clone().multiplyScalar(moveDirection.x * effectiveSpeed * delta));
                }
            }
        }
        
        // Apply movement and head bob when moving
        if (isMoving) {
            // Create a clean ground movement vector (no Y component)
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
            
            // Use a clean movement vector (without changing Y)
            const finalMovement = new THREE.Vector3(
                this.moveBuffer.x,
                0, // Don't affect vertical position through movement
                this.moveBuffer.z
            );
            
            // Move player
            this.move(player, finalMovement);
            
            // Calculate head bob for first person camera
            if (player.isGrounded) {
                this.headBobTime += delta * this.headBobSpeed * 
                    (this.isSprinting ? 1.5 : 1.0) * 
                    (this.isCrouching ? 0.7 : 1.0);
                
                const headBob = Math.sin(this.headBobTime) * this.headBobAmount;
                
                // Apply to first-person camera if present and in first-person mode
                if (isFirstPerson && player.fpCamera && player.model) {
                    player.fpCamera.position.y = player.eyeHeight + headBob;
                }
                
                // Track distance for footsteps
                this.footstepDistance += groundMovement.length();
                if (this.footstepDistance >= this.footstepThreshold) {
                    this.playFootstepSound(player);
                    this.footstepDistance = 0;
                }
            }
            
            // Only rotate the model in third-person mode
            // In first-person, model rotation is handled by HumanPlayer.updateFirstPersonCamera
            if (!isFirstPerson) {
                // Set target direction to movement direction for rotation
                const targetDir = groundMovement.clone().normalize();
                if (targetDir.lengthSq() > 0.01) {
                    // Rotate player to face movement direction
                    this.rotate(player, targetDir, delta);
                }
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
        }
        
        // Handle jump
        if (actions.jump && player.isGrounded) {
            this.jump(player);
        }
    }
    
    /**
     * Play appropriate footstep sound based on movement state
     * @param {Player} player - The player to play footstep for
     */
    playFootstepSound(player) {
        let soundType = 'normal';
        if (this.isSprinting) soundType = 'sprint';
        if (this.isCrouching) soundType = 'crouch';
        
        // Reference to game's sound system would go here
        // e.g., player.game.soundManager.playSound(`footstep_${soundType}`);
    }
}

export { HumanMovement }; 