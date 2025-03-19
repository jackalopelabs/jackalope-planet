import * as THREE from 'three';
import { Player } from './Player';

class BunnyPlayer extends Player {
    constructor(game) {
        super(game);
        
        // Third-person specific properties
        this.thirdPersonDistance = 5;
        this.thirdPersonHeight = 2;
        this.eyeHeight = 0.8;
        this.cameraTarget = new THREE.Vector3();
        
        this.init();
    }
    
    init() {
        // Create bunny model
        this.model = this.game.assetLoader.createBunnyModel();
        this.model.position.set(0, 0.5, 0); // Half height above ground
        this.scene.add(this.model);
        this.position.copy(this.model.position);
        
        // Set initial camera position
        this.updateCameraPosition();
    }
    
    update(delta) {
        const inputState = this.game.inputManager.getKeysState();
        const orbitState = this.game.inputManager.getCameraOrbitState();
        
        // Smoothly update camera orbit angles
        const cameraAngle = THREE.MathUtils.lerp(
            orbitState.cameraAngle,
            orbitState.targetCameraAngle,
            0.1
        );
        
        const cameraAngleY = THREE.MathUtils.lerp(
            orbitState.cameraAngleY,
            orbitState.targetCameraAngleY,
            0.1
        );
        
        // Update the input manager with the interpolated values
        this.game.inputManager.updateCameraOrbit({
            cameraAngle,
            cameraAngleY
        });
        
        // Get camera-relative movement directions
        const forward = new THREE.Vector3(0, 0, -1);
        forward.applyAxisAngle(new THREE.Vector3(0, 1, 0), cameraAngle);
        forward.y = 0;
        forward.normalize();
        
        const right = new THREE.Vector3(1, 0, 0);
        right.applyAxisAngle(new THREE.Vector3(0, 1, 0), cameraAngle);
        right.y = 0;
        right.normalize();
        
        // Calculate movement vector
        const movementVector = new THREE.Vector3();
        let isMoving = false;
        
        if (inputState.w) {
            movementVector.add(forward.clone().multiplyScalar(this.movementSpeed * delta));
            isMoving = true;
        }
        if (inputState.s) {
            movementVector.add(forward.clone().multiplyScalar(-this.movementSpeed * delta));
            isMoving = true;
        }
        if (inputState.a) {
            movementVector.add(right.clone().multiplyScalar(-this.movementSpeed * delta));
            isMoving = true;
        }
        if (inputState.d) {
            movementVector.add(right.clone().multiplyScalar(this.movementSpeed * delta));
            isMoving = true;
        }
        
        // Apply movement
        if (isMoving) {
            this.movePlayer(movementVector);
            
            // Set target direction to movement direction
            this.targetDirection.copy(movementVector).normalize();
        }
        
        // Rotate player to face movement direction
        if (isMoving || this.direction.angleTo(this.targetDirection) > 0.01) {
            this.rotateToDirection(this.targetDirection, delta);
        }
        
        // Update camera position based on player position
        this.updateCameraPosition();
    }
    
    handleMouseMove(event, mouseState) {
        const orbitState = this.game.inputManager.getCameraOrbitState();
        let targetCameraAngle = orbitState.targetCameraAngle;
        let targetCameraAngleY = orbitState.targetCameraAngleY;
        
        // Only update camera orbit if instructions are hidden
        if (this.game.inputManager.instructions.style.display === 'none') {
            if (mouseState.prevMouseX === 0 && mouseState.prevMouseY === 0) {
                // First movement after showing the game, just return
                return;
            }
            
            const deltaX = event.clientX - mouseState.prevMouseX;
            const deltaY = event.clientY - mouseState.prevMouseY;
            
            // Adjust the orbital camera position based on mouse movement
            const orbitSpeed = this.game.inputManager.orbitSpeed * 0.6;
            
            targetCameraAngle -= deltaX * orbitSpeed;
            targetCameraAngleY = Math.max(
                0.1,
                Math.min(1.5, targetCameraAngleY + deltaY * orbitSpeed)
            );
            
            // Update the target camera angles in the input manager
            this.game.inputManager.updateCameraOrbit({
                targetCameraAngle,
                targetCameraAngleY
            });
        }
    }
    
    updateCameraPosition() {
        const orbitState = this.game.inputManager.getCameraOrbitState();
        
        // Calculate camera position based on angles (spherical coordinates)
        const offset = new THREE.Vector3(
            Math.sin(orbitState.cameraAngle) * this.thirdPersonDistance,
            this.thirdPersonHeight * orbitState.cameraAngleY,
            Math.cos(orbitState.cameraAngle) * this.thirdPersonDistance
        );
        
        // Position camera relative to player
        this.camera.position.copy(this.position).add(offset);
        
        // Camera looks at player
        this.cameraTarget.copy(this.position).add(new THREE.Vector3(0, 0.5, 0));
        this.camera.lookAt(this.cameraTarget);
    }
    
    onInstructionsDismissed() {
        // Reset camera orbit when instructions are dismissed
        this.updateCameraPosition();
    }
}

export { BunnyPlayer }; 