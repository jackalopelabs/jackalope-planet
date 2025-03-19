import * as THREE from 'three';
import { Player } from './Player';
import { HumanPhysics } from './physics/HumanPhysics';
import { HumanMovement } from './movement/HumanMovement';
import { HumanControls } from './controls/HumanControls';

class HumanPlayer extends Player {
    constructor(game, options = {}) {
        super(game, {
            eyeHeight: 1.6,
            ...options
        });
        
        // Camera properties
        this.thirdPersonDistance = options.thirdPersonDistance || 5;
        this.thirdPersonHeight = options.thirdPersonHeight || 2;
        this.cameraTarget = new THREE.Vector3();
        
        // First-person camera
        this.fpCamera = null;
        this.isFirstPerson = options.isFirstPerson || false;
        
        // Initialize components
        this.setPhysics(new HumanPhysics(options.physics || {}));
        this.setMovement(new HumanMovement(options.movement || {}));
        this.setControls(new HumanControls({
            firstPersonMode: this.isFirstPerson,
            ...(options.controls || {})
        }));
        
        // Setup camera zoom callback - ensure the method exists before calling
        if (this.controls && typeof this.controls.setCameraZoomCallback === 'function') {
            this.controls.setCameraZoomCallback(this.adjustCameraDistance.bind(this));
        } else {
            console.warn('HumanPlayer: controls.setCameraZoomCallback is not available');
        }
        
        // Initialize player
        this.init();

        // If first person mode is enabled, switch to it immediately
        if (this.isFirstPerson) {
            console.log('Starting in first-person mode, setting up camera');
            this.toggleViewMode(true);
        }
    }
    
    init() {
        // Create human model
        this.model = this.game.assetLoader.createHumanModel();
        this.model.position.set(0, 1.0, 0); // Full height above ground
        this.scene.add(this.model);
        this.position.copy(this.model.position);
        
        // Create first-person camera if needed
        if (this.isFirstPerson) {
            this.setupFirstPersonCamera();
        }
        
        // Set initial camera position
        this.updateCameraPosition();
    }
    
    /**
     * Set up first-person camera
     */
    setupFirstPersonCamera() {
        console.log('Setting up first-person camera');
        
        // Create a new camera for first-person view
        this.fpCamera = new THREE.PerspectiveCamera(
            75, window.innerWidth / window.innerHeight, 0.1, 1000
        );
        
        // Position at eye level
        this.fpCamera.position.set(0, this.eyeHeight, 0);
        
        // Add to player model
        if (this.model) {
            this.model.add(this.fpCamera);
            
            // Make sure the camera is looking forward
            this.fpCamera.lookAt(new THREE.Vector3(0, this.eyeHeight, -1));
            
            // Hide player model in first-person
            this.model.traverse(child => {
                if (child.isMesh) {
                    child.layers.set(1); // Put on layer 1 to hide from fpCamera
                }
            });
            
            // fpCamera only renders layer 0 (not player model)
            this.fpCamera.layers.enable(0);
            this.fpCamera.layers.disable(1);
            
            console.log('First-person camera setup complete');
        } else {
            console.error('Cannot set up first-person camera: model is null');
        }
    }
    
    update(delta) {
        // Call the component-based update from parent class
        super.update(delta);
        
        // Check if view mode changed
        const input = this.controls ? this.controls.getInput() : null;
        if (input && input.firstPersonMode !== this.isFirstPerson) {
            console.log('View mode change detected in input, toggling view');
            this.toggleViewMode(input.firstPersonMode);
        }
        
        // Update camera position for third-person
        if (!this.isFirstPerson) {
            this.updateCameraPosition();
        } else if (this.fpCamera && input) {
            // Update first-person camera rotation based on look direction
            this.updateFirstPersonCamera(input.lookDirection);
        }
    }
    
    /**
     * Update first-person camera rotation based on look direction
     * @param {THREE.Vector2} lookDirection - Current look direction
     */
    updateFirstPersonCamera(lookDirection) {
        if (!this.fpCamera) return;
        
        // Apply look direction to camera rotation
        // We only rotate the camera, not the whole model in first person
        const eulerRotation = new THREE.Euler(
            lookDirection.y, // Pitch (up/down)
            lookDirection.x, // Yaw (left/right)
            0,              // Roll (keep upright)
            'YXZ'           // Order of rotations
        );
        
        this.fpCamera.setRotationFromEuler(eulerRotation);
        
        // Also rotate the model horizontally to face movement direction
        if (this.model) {
            const modelRotation = new THREE.Euler(
                0,              // No pitch
                lookDirection.x, // Only yaw
                0,              // No roll
                'YXZ'
            );
            this.model.setRotationFromEuler(modelRotation);
        }
    }
    
    /**
     * Toggle between first and third person view
     * @param {boolean} firstPerson - Whether to use first-person view
     */
    toggleViewMode(firstPerson) {
        if (this.isFirstPerson === firstPerson) return;
        
        this.isFirstPerson = firstPerson;
        console.log('Toggling view mode to:', firstPerson ? 'first-person' : 'third-person');
        
        if (this.isFirstPerson) {
            // Switch to first-person
            if (!this.fpCamera) {
                this.setupFirstPersonCamera();
            }
            
            // Use the first-person camera
            if (this.fpCamera && this.game && typeof this.game.setActiveCamera === 'function') {
                this.game.setActiveCamera(this.fpCamera);
                console.log('Switched to first-person camera');
            } else {
                console.error('Failed to switch to first-person camera');
            }
            
            // Hide player model from itself
            if (this.model) {
                this.model.traverse(child => {
                    if (child.isMesh) {
                        child.layers.set(1);
                    }
                });
            }
        } else {
            // Switch to third-person
            if (this.game && typeof this.game.setActiveCamera === 'function') {
                this.game.setActiveCamera(this.camera);
                console.log('Switched to third-person camera');
            } else {
                console.error('Failed to switch to third-person camera');
            }
            
            // Show player model
            if (this.model) {
                this.model.traverse(child => {
                    if (child.isMesh) {
                        child.layers.set(0);
                    }
                });
            }
            
            // Update third-person camera
            this.updateCameraPosition();
        }
    }
    
    /**
     * Adjust camera distance when using mouse wheel
     * @param {number} direction - Positive for zoom out, negative for zoom in
     */
    adjustCameraDistance(direction) {
        // Only in third-person mode
        if (this.isFirstPerson) return;
        
        // Adjust camera distance based on scroll direction
        this.thirdPersonDistance += direction * 0.5;
        
        // Clamp to reasonable range
        this.thirdPersonDistance = Math.max(2, Math.min(10, this.thirdPersonDistance));
    }
    
    /**
     * Update third-person camera position
     */
    updateCameraPosition() {
        if (!this.model || this.isFirstPerson) return;
        
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
        
        // Set camera target position (at eye level of player)
        this.cameraTarget.copy(this.model.position).add(new THREE.Vector3(0, this.eyeHeight, 0));
        this.camera.lookAt(this.cameraTarget);
    }
    
    onInstructionsDismissed() {
        super.onInstructionsDismissed();
    }
    
    cleanup() {
        super.cleanup();
        
        if (this.fpCamera) {
            // Remove first-person camera
            if (this.model) {
                this.model.remove(this.fpCamera);
            }
            this.fpCamera = null;
        }
    }
}

export { HumanPlayer }; 