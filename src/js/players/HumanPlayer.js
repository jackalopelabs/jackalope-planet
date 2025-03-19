import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { Player } from './Player';

class HumanPlayer extends Player {
    constructor(game) {
        super(game);
        
        // First-person specific properties
        this.eyeHeight = 1.6; // Typical human eye height
        this.controls = null; // Pointer lock controls
        
        this.init();
    }
    
    init() {
        // Create the human model
        this.model = this.game.assetLoader.createHumanModel();
        this.model.position.set(0, 0.9, 0); // Half height above ground
        this.scene.add(this.model);
        this.position.copy(this.model.position);
        
        // Setup pointer lock controls for first-person mode
        this.controls = new PointerLockControls(this.camera, this.game.renderer.domElement);
        
        // Position camera at eye level of the player
        const eyeHeightVector = new THREE.Vector3(0, this.eyeHeight, 0);
        this.camera.position.copy(this.position).add(eyeHeightVector);
        
        // Update controls position
        this.controls.getObject().position.copy(this.camera.position);
        
        // Set up controls event listeners
        this.setupControlsEvents();
    }
    
    setupControlsEvents() {
        // Pointer lock event listeners
        this.controls.addEventListener('lock', () => {
            if (this.game.inputManager.instructions) {
                this.game.inputManager.instructions.style.display = 'none';
            }
        });
        
        this.controls.addEventListener('unlock', () => {
            if (this.game.inputManager.instructions) {
                this.game.inputManager.instructions.style.display = 'flex';
            }
        });
    }
    
    update(delta) {
        // Only update if pointer is locked (in game mode)
        if (this.controls.isLocked) {
            const inputState = this.game.inputManager.getKeysState();
            const controlObject = this.controls.getObject();
            const velocity = new THREE.Vector3();
            const direction = new THREE.Vector3();
            
            // Calculate velocity based on keys
            direction.z = Number(inputState.moveForward) - Number(inputState.moveBackward);
            direction.x = Number(inputState.moveLeft) - Number(inputState.moveRight);
            direction.normalize();
            
            if (inputState.moveForward || inputState.moveBackward) {
                velocity.z -= direction.z * this.movementSpeed * delta;
            }
            
            if (inputState.moveLeft || inputState.moveRight) {
                velocity.x -= direction.x * this.movementSpeed * delta;
            }
            
            // Move the camera
            controlObject.translateX(velocity.x);
            controlObject.translateZ(velocity.z);
            
            // Update player position to follow camera
            const cameraPosition = controlObject.position.clone();
            this.model.position.x = cameraPosition.x;
            this.model.position.z = cameraPosition.z;
            
            // Keep player on the ground
            this.model.position.y = 0.9; // Half height above ground
            
            // Ensure camera stays at correct eye height
            controlObject.position.y = this.model.position.y + this.eyeHeight;
            
            // Update position tracking
            this.position.copy(this.model.position);
            
            // Update player rotation to match camera yaw (only Y rotation)
            const cameraDirection = new THREE.Vector3(0, 0, -1);
            cameraDirection.applyQuaternion(this.camera.quaternion);
            cameraDirection.y = 0; // Keep on xz plane
            cameraDirection.normalize();
            
            // Set player rotation if we have a valid direction
            if (cameraDirection.length() > 0.001) {
                this.model.lookAt(this.model.position.clone().add(cameraDirection));
                this.direction.copy(cameraDirection);
                this.targetDirection.copy(cameraDirection);
            }
        }
    }
    
    handleMouseDown(event) {
        // Lock pointer when player clicks in first-person mode
        if (!this.controls.isLocked) {
            this.controls.lock();
        }
    }
    
    onInstructionsDismissed() {
        // Lock pointer when instructions are dismissed
        if (!this.controls.isLocked) {
            this.controls.lock();
        }
    }
    
    cleanup() {
        // Unlock pointer controls when switching modes
        if (this.controls && this.controls.isLocked) {
            this.controls.unlock();
        }
        
        // Remove event listeners and DOM elements
        if (this.controls) {
            // Remove event listeners here if needed
            this.controls = null;
        }
        
        // Call parent cleanup to remove model
        super.cleanup();
    }
}

export { HumanPlayer }; 