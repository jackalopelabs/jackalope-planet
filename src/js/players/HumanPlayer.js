import * as THREE from 'three';
import { Player } from './Player';
import { HumanPhysics } from './physics/HumanPhysics';
import { HumanMovement } from './movement/HumanMovement';
import { HumanControls } from './controls/HumanControls';
import { Flamethrower } from './weapons/Flamethrower';

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
        
        // Weapon system
        this.weapon = null;
        this.isFiring = false;
        
        // Prevent delayed setup from running if player is cleaned up
        this.isActive = true;
        
        console.log('HumanPlayer constructor - first person mode:', this.isFirstPerson);
        
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

        // If first-person mode is enabled, set it up immediately after initialization
        if (this.isFirstPerson) {
            // Setup without delay
            this.setupFirstPersonCamera();
            this.toggleViewMode(true);
            
            // Double-check that camera is properly set as active with a small delay
            setTimeout(() => {
                if (this.isActive && this.isFirstPerson && this.fpCamera && this.game) {
                    console.log('Ensuring first-person camera is active after small delay');
                    this.game.setActiveCamera(this.fpCamera);
                }
            }, 100);
        }
    }
    
    init() {
        // Create human model
        this.model = this.game.assetLoader.createHumanModel();
        this.model.position.set(0, 1.0, 0); // Full height above ground
        this.scene.add(this.model);
        this.position.copy(this.model.position);
        
        console.log('Human model initialized at position:', this.model.position);
        
        // Set initial camera position (third-person)
        this.updateCameraPosition();
        
        // Initialize weapon system
        this.initWeapon();
    }
    
    /**
     * Initialize the weapon for the player
     */
    initWeapon() {
        // Only have weapons in first-person mode
        if (this.isFirstPerson) {
            // Create a flamethrower weapon
            this.weapon = new Flamethrower(this);
            console.log('Flamethrower weapon initialized');
        }
    }
    
    /**
     * Set up first-person camera
     */
    setupFirstPersonCamera() {
        console.log('Setting up first-person camera');
        
        if (!this.model || !this.isActive) {
            console.error('Cannot setup first-person camera: model not initialized or player not active');
            return;
        }
        
        // Create a new camera for first-person view if it doesn't exist
        if (!this.fpCamera) {
            this.fpCamera = new THREE.PerspectiveCamera(
                75, 
                window.innerWidth / window.innerHeight, 
                0.1, 
                1000
            );
            console.log('First-person camera created');
        }
        
        // Position camera at eye level
        this.fpCamera.position.set(0, this.eyeHeight, 0);
        
        // Remove the camera from any previous parent
        if (this.fpCamera.parent) {
            this.fpCamera.parent.remove(this.fpCamera);
        }
        
        // Add camera to the model
        this.model.add(this.fpCamera);
        console.log('First-person camera added to model:', this.model.uuid);
        
        // Make camera look forward 
        this.fpCamera.rotation.set(0, 0, 0);
        this.fpCamera.updateProjectionMatrix();
        
        // Hide player model in first-person
        this.model.traverse(child => {
            if (child.isMesh) {
                child.layers.set(1); // Put on layer 1 to hide from fpCamera
            }
        });
        
        // fpCamera only renders layer 0 (not player model)
        this.fpCamera.layers.set(0); // Reset to only see layer 0
        
        console.log('First-person camera setup complete');
        
        // Make sure the camera gets used for rendering
        if (this.isFirstPerson && this.game && typeof this.game.setActiveCamera === 'function') {
            console.log('Setting first-person camera as active after setup');
            this.game.setActiveCamera(this.fpCamera);
            
            // Create first-person visuals for hands
            this.createFirstPersonVisuals();
        }
    }
    
    /**
     * Handle mouse down event
     * @param {MouseEvent} event - Mouse event
     */
    handleMouseDown(event) {
        super.handleMouseDown(event);
        
        // Only handle weapon firing in first-person mode
        if (this.isFirstPerson && this.weapon) {
            // Left mouse button (0) for firing
            if (event.button === 0) {
                this.startFiring();
            }
        }
    }
    
    /**
     * Handle mouse up event
     * @param {MouseEvent} event - Mouse event
     */
    handleMouseUp(event) {
        super.handleMouseUp(event);
        
        // Only handle weapon firing in first-person mode
        if (this.isFirstPerson && this.weapon) {
            // Left mouse button (0) for firing
            if (event.button === 0) {
                this.stopFiring();
            }
        }
    }
    
    /**
     * Start firing the weapon
     */
    startFiring() {
        if (this.weapon) {
            this.isFiring = true;
            this.weapon.startFire();
            console.log('Started firing weapon');
        }
    }
    
    /**
     * Stop firing the weapon
     */
    stopFiring() {
        if (this.weapon) {
            this.isFiring = false;
            this.weapon.stopFire();
            console.log('Stopped firing weapon');
        }
    }
    
    update(delta) {
        if (!this.model || !this.isActive) {
            console.warn('HumanPlayer update: model not initialized or player not active');
            return;
        }
        
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
        
        // Update weapon system
        if (this.weapon) {
            this.weapon.update(delta);
        }
    }
    
    /**
     * Update first-person camera rotation based on look direction
     * @param {THREE.Vector2} lookDirection - Current look direction
     */
    updateFirstPersonCamera(lookDirection) {
        if (!this.fpCamera || !this.isActive) {
            console.warn('Cannot update first-person camera: fpCamera is null or player not active');
            return;
        }
        
        if (!lookDirection) {
            console.warn('Cannot update first-person camera: lookDirection is null');
            return;
        }
        
        // Apply look direction as euler rotation
        const eulerRotation = new THREE.Euler(
            lookDirection.y, // Pitch (up/down)
            lookDirection.x, // Yaw (left/right) 
            0,              // Roll (keep upright)
            'YXZ'           // Order of rotations
        );
        
        // Set camera rotation directly
        this.fpCamera.rotation.copy(eulerRotation);
        
        // Rotate the model to match camera's horizontal direction.
        // IMPORTANT: This rotation is used for movement direction calculations in HumanMovement
        if (this.model) {
            // Only use the horizontal component (y-axis rotation) for the model
            this.model.rotation.y = lookDirection.x;
        }
    }
    
    /**
     * Toggle between first and third person view
     * @param {boolean} firstPerson - Whether to use first-person view
     */
    toggleViewMode(firstPerson) {
        if (this.isFirstPerson === firstPerson || !this.isActive) return;
        
        this.isFirstPerson = firstPerson;
        console.log('Toggling view mode to:', firstPerson ? 'first-person' : 'third-person');
        
        // Sync the view mode with the controls
        if (this.controls && typeof this.controls.updateViewMode === 'function') {
            this.controls.updateViewMode(this.isFirstPerson);
        }
        
        // Update weapon system based on view mode
        if (this.isFirstPerson) {
            // Initialize weapon if not already done
            if (!this.weapon) {
                this.initWeapon();
            } else if (this.weapon) {
                // Make sure the weapon is properly attached
                this.weapon.attachToPlayer();
            }
        } else {
            // Stop firing when switching to third-person
            if (this.isFiring) {
                this.stopFiring();
            }
        }
        
        if (this.isFirstPerson) {
            // Switch to first-person
            if (!this.fpCamera) {
                this.setupFirstPersonCamera();
            } else {
                // Make sure camera is still properly attached to the model
                if (this.fpCamera.parent !== this.model && this.model) {
                    if (this.fpCamera.parent) {
                        this.fpCamera.parent.remove(this.fpCamera);
                    }
                    this.model.add(this.fpCamera);
                    console.log('Reattached camera to model');
                }
                
                // Make sure camera has correct position and rotation
                this.fpCamera.position.set(0, this.eyeHeight, 0);
                this.fpCamera.rotation.set(0, 0, 0);
                this.fpCamera.updateMatrixWorld(true);
                
                // Set camera to render everything except the player model
                this.fpCamera.layers.set(0); // First reset to only basic layer
                
                // Switch to first-person camera for rendering
                if (this.game && typeof this.game.setActiveCamera === 'function') {
                    this.game.setActiveCamera(this.fpCamera);
                    console.log('Switched to first-person camera');
                    
                    // Debug camera state
                    console.log('FP Camera position:', this.fpCamera.position);
                    console.log('FP Camera rotation:', this.fpCamera.rotation);
                    console.log('FP Camera parent:', this.fpCamera.parent ? this.fpCamera.parent.uuid : 'none');
                }
            }
            
            // Hide player model from itself (from the first-person camera)
            if (this.model) {
                this.model.traverse(child => {
                    if (child.isMesh) {
                        child.layers.set(1); // Put on layer 1 to hide from fpCamera
                    }
                });
            }
        } else {
            // Switch to third-person
            if (this.game.camera) {
                // Reset to main camera
                this.game.setActiveCamera(this.game.camera);
                console.log('Switched to third-person camera');
            }
            
            // Show player model again
            if (this.model) {
                this.model.traverse(child => {
                    if (child.isMesh) {
                        child.layers.set(0); // Reset to default layer
                    }
                });
            }
        }
    }
    
    /**
     * Adjust camera distance when using mouse wheel
     * @param {number} direction - Positive for zoom out, negative for zoom in
     */
    adjustCameraDistance(direction) {
        // Only in third-person mode
        if (this.isFirstPerson || !this.isActive) return;
        
        // Adjust camera distance based on scroll direction
        this.thirdPersonDistance += direction * 0.5;
        
        // Clamp to reasonable range
        this.thirdPersonDistance = Math.max(2, Math.min(10, this.thirdPersonDistance));
    }
    
    /**
     * Update third-person camera position
     */
    updateCameraPosition() {
        if (!this.model || this.isFirstPerson || !this.isActive) return;
        
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
        
        // Reinitialize first-person mode if active
        if (this.isFirstPerson && this.isActive) {
            console.log('Reinitializing first-person camera after instructions dismissed');
            
            // Setup or ensure camera is correctly set
            if (!this.fpCamera) {
                this.setupFirstPersonCamera();
            }
            
            // Make sure we're in first-person mode
            this.toggleViewMode(true);
            
            // Delay the camera setup slightly to ensure everything is ready
            setTimeout(() => {
                if (this.isActive && this.isFirstPerson && this.fpCamera && this.game) {
                    console.log('Ensuring first-person camera is active after delay');
                    this.game.setActiveCamera(this.fpCamera);
                }
            }, 50);
        }
    }
    
    cleanup() {
        console.log('HumanPlayer cleanup');
        
        // Mark as inactive to prevent delayed operations
        this.isActive = false;
        
        if (this.fpCamera) {
            // Remove first-person camera
            if (this.fpCamera.parent) {
                this.fpCamera.parent.remove(this.fpCamera);
            }
            this.fpCamera = null;
        }
        
        // Clean up weapon
        if (this.weapon) {
            this.weapon.cleanup();
            this.weapon = null;
        }
        
        super.cleanup();
    }
    
    /**
     * Create simple visuals for first-person view (like hands or a weapon)
     */
    createFirstPersonVisuals() {
        // Only create if they don't exist and we're in first-person mode
        if (!this.isFirstPerson || !this.fpCamera || this.fpVisuals) return;
        
        // Create a simple arm/weapon model visible in first-person
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.5);
        const material = new THREE.MeshBasicMaterial({ color: 0x888888 });
        this.fpVisuals = new THREE.Mesh(geometry, material);
        
        // Position it to look like hands/weapon in FPS games (bottom right)
        this.fpVisuals.position.set(0.2, -0.2, -0.5);
        
        // Add to the camera so it moves with the view
        this.fpCamera.add(this.fpVisuals);
        
        console.log('Added first-person visuals');
    }
    
    /**
     * Remove first-person visuals when switching to third-person
     */
    removeFirstPersonVisuals() {
        if (this.fpVisuals && this.fpCamera) {
            this.fpCamera.remove(this.fpVisuals);
            this.fpVisuals = null;
            console.log('Removed first-person visuals');
        }
    }
}

export { HumanPlayer }; 