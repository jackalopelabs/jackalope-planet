import * as THREE from 'three';
import { Player } from './Player';
import { BunnyPhysics } from './physics/BunnyPhysics';
import { BunnyMovement } from './movement/BunnyMovement';
import { BunnyControls } from './controls/BunnyControls';

class BunnyPlayer extends Player {
    constructor(game, options = {}) {
        super(game, {
            eyeHeight: 0.8,
            ...options
        });
        
        // Third-person camera properties
        this.thirdPersonDistance = options.thirdPersonDistance || 5;
        this.thirdPersonHeight = options.thirdPersonHeight || 2;
        this.cameraTarget = new THREE.Vector3();
        
        // Initialize components
        this.setPhysics(new BunnyPhysics(options.physics || {}));
        this.setMovement(new BunnyMovement(options.movement || {}));
        this.setControls(new BunnyControls(options.controls || {}));
        
        // Setup camera zoom callback - ensure the method exists before calling
        if (this.controls && typeof this.controls.setCameraZoomCallback === 'function') {
            this.controls.setCameraZoomCallback(this.adjustCameraDistance.bind(this));
        } else {
            console.warn('BunnyPlayer: controls.setCameraZoomCallback is not available');
        }
        
        // Initialize player
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
        // Call the component-based update from parent class
        super.update(delta);
        
        // Update camera position
        this.updateCameraPosition();
    }
    
    /**
     * Adjust camera distance when using mouse wheel
     * @param {number} direction - Positive for zoom out, negative for zoom in
     */
    adjustCameraDistance(direction) {
        // Adjust camera distance based on scroll direction
        this.thirdPersonDistance += direction * 0.5;
        
        // Clamp to reasonable range
        this.thirdPersonDistance = Math.max(2, Math.min(10, this.thirdPersonDistance));
    }
    
    /**
     * Update third-person camera position
     */
    updateCameraPosition() {
        if (!this.model) return;
        
        // Get orbit state from controls
        const orbitState = this.controls ? this.controls.cameraOrbit : { cameraAngle: 0, cameraAngleY: 0 };
        
        // Calculate camera position based on orbit angles
        const cameraOffset = new THREE.Vector3(
            Math.sin(orbitState.cameraAngle) * this.thirdPersonDistance,
            this.thirdPersonHeight + Math.sin(orbitState.cameraAngleY) * this.thirdPersonDistance,
            Math.cos(orbitState.cameraAngle) * this.thirdPersonDistance
        );
        
        // Set camera position
        this.camera.position.copy(this.model.position).add(cameraOffset);
        
        // Set camera target position (slightly above player model)
        this.cameraTarget.copy(this.model.position).add(new THREE.Vector3(0, this.eyeHeight, 0));
        this.camera.lookAt(this.cameraTarget);
    }
    
    onInstructionsDismissed() {
        super.onInstructionsDismissed();
    }
}

export { BunnyPlayer }; 