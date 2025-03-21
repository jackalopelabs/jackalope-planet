import * as THREE from 'three';
import { Player } from './Player';
import { HumanPhysics } from './physics/HumanPhysics';
import { HumanMovement } from './movement/HumanMovement';
import { HumanControls } from './controls/HumanControls';
import { Flamethrower } from './weapons/Flamethrower';

class HumanPlayer extends Player {
    constructor(game, options = {}) {
        // CRITICAL FIX: Ensure isLocal and isActive are true
        const modifiedOptions = {
            eyeHeight: 1.6,
            ...options,
            isLocal: true, // Force isLocal to true
            isActive: true // Force isActive to true
        };
        
        // Get scene reference from game
        const scene = game ? game.scene : null;
        if (!scene && game) {
            console.warn(`%c HumanPlayer (constructor): Scene reference not available from game. Player ID: ${options.id || 'unknown'}`, 'color: orange;');
        }
        
        // Pass scene as second parameter to match updated Player constructor
        super(game, scene, modifiedOptions);
        
        // CRITICAL: Force isLocal to true AGAIN after super constructor (defensive)
        this.isLocal = true;
        
        // Camera properties
        this.thirdPersonDistance = options.thirdPersonDistance || 5;
        this.thirdPersonHeight = options.thirdPersonHeight || 2;
        this.cameraTarget = new THREE.Vector3();
        
        // CRITICAL FIX: Make sure camera is properly referenced from game
        if (game && game.camera) {
            this.camera = game.camera;
        } else {
            console.warn(`%c HumanPlayer constructor: No camera available from game (player: ${this.id})`, 'color: orange;');
        }
        
        // First-person camera
        this.fpCamera = null;
        this.isFirstPerson = options.isFirstPerson || false;
        
        // Weapon system
        this.weapon = null;
        this.isFiring = false;
        
        // CRITICAL FIX: Debug player state
        console.log(`%c HumanPlayer constructor - isActive: ${this.isActive}, isLocal: ${this.isLocal}`, 'color: #aaf;');
        console.log(`%c HumanPlayer constructor - firstPersonMode: ${this.isFirstPerson}`, 'color: #aaf;');
        
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
                    console.log(`%c Ensuring first-person camera is active after small delay (player: ${this.id}, isActive: ${this.isActive})`, 'color: #afa;');
                    this.game.setActiveCamera(this.fpCamera);
                } else {
                    console.log(`%c NOT activating camera for player: ${this.id}, isActive: ${this.isActive}`, 'color: #faa;');
                }
            }, 100);
        }
    }
    
    init() {
        console.log(`HumanPlayer: Starting initialization (player: ${this.id}, isActive: ${this.isActive})`);
        
        // Ensure we have access to the game and asset loader
        if (!this.game || !this.game.assetLoader) {
            console.error('HumanPlayer: Game or AssetLoader not available!');
            return;
        }
        
        // Check for scene reference
        if (!this.game.scene) {
            console.error('HumanPlayer: Scene reference is missing from game object!');
            console.log('Game object:', this.game);
            return;
        }
        
        // Create human model
        console.log('HumanPlayer: Requesting human model from AssetLoader');
        try {
            this.model = this.game.assetLoader.createHumanModel();
            
            if (!this.model) {
                console.error('HumanPlayer: Failed to create human model');
                return;
            }
            
            console.log('HumanPlayer: Model created successfully');
            this.model.position.set(0, 1.0, 0); // Full height above ground
            console.log('HumanPlayer: Model position set to:', this.model.position);
            
            // Enable shadows for the human model
            console.log('HumanPlayer: Setting up shadows for model');
            this.model.traverse(node => {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                    console.log('HumanPlayer: Enabled shadows for mesh:', node.uuid);
                }
            });
            
            console.log('HumanPlayer: Adding model to scene');
            if (this.game && this.game.scene) {
                this.game.scene.add(this.model);
                console.log('HumanPlayer: Model added to scene successfully');
            } else {
                console.error('HumanPlayer: Cannot add model to scene - scene reference is missing!');
            }
            
            this.position.copy(this.model.position);
            
            console.log('HumanPlayer: Model position:', this.model.position);
            console.log('HumanPlayer: Model parent:', this.model.parent ? this.model.parent.uuid : 'none');
            console.log('HumanPlayer: Model visible:', this.model.visible);
            console.log('HumanPlayer: Model children count:', this.model.children.length);
            
            // Set initial camera position (third-person)
            console.log('HumanPlayer: Setting up initial camera position');
            this.updateCameraPosition();
            
            // Initialize weapon system
            console.log('HumanPlayer: Initializing weapon system');
            this.initWeapon();
            
            console.log('HumanPlayer: Initialization complete');
        } catch (error) {
            console.error('HumanPlayer: Error during initialization:', error);
        }
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
        
        // Hide player model parts in first-person, except arms
        this.model.traverse(child => {
            if (child instanceof THREE.Mesh) {
                // Check if this is an arm mesh (based on its position)
                const isArm = child.name && child.name.toLowerCase().includes('arm');
                const position = new THREE.Vector3();
                child.getWorldPosition(position);
                const isArmPosition = Math.abs(position.x) > 0.3 && position.y > 0.5 && position.y < 1.3;
                
                if (isArm || isArmPosition) {
                    // Put arms on layer 0 so they're visible in first-person
                    child.layers.set(0);
                    console.log('Keeping arm visible in first-person:', child.name || 'unnamed mesh');
                } else {
                    // Put other body parts on layer 1 to hide from fpCamera
                    child.layers.set(1);
                }
            }
        });
        
        // fpCamera only renders layer 0 (not player model, except arms)
        this.fpCamera.layers.set(0);
        
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
     * Override the update method to add better debugging
     * @param {number} delta - Time since last update in seconds
     * @param {boolean} processInput - Whether to process input controls
     */
    update(deltaTime, processInput = true) {
        // ENHANCED LOGGING: HumanPlayer-specific logging
        if (Math.random() < 0.02) { // Approximately once every 50 frames
            console.log(
                `%c 👨‍🚒 MERC UPDATE: ${this.id} - isActive=${this.isActive}, processInput=${processInput}, isFirstPerson=${this.isFirstPerson}`, 
                'background: #a52; color: #fda; font-size: 12px; padding: 3px;'
            );
            
            if (this.fpCamera) {
                console.log(
                    `%c 📷 FP Camera state: ${this.fpCamera.uuid}`, 
                    'background: #522; color: #fda; padding: 2px;',
                    `Position: (${this.fpCamera.position.x.toFixed(2)}, ${this.fpCamera.position.y.toFixed(2)}, ${this.fpCamera.position.z.toFixed(2)})`
                );
            }
            
            // Log weapon state
            if (this.weapon) {
                console.log(
                    `%c 🔫 Weapon state:`, 
                    'background: #522; color: #fda; padding: 2px;',
                    `Type: ${this.weapon.constructor.name}`
                );
            }
        }
        
        // First call parent update method to handle common player logic
        super.update(deltaTime, processInput);
        
        // Deal with view mode changes
        if (this.isFirstPerson !== this.wasFirstPerson) {
            // Log mode change
            console.log(`%c 👀 MERC VIEW MODE CHANGE: ${this.wasFirstPerson ? 'First → Third' : 'Third → First'} person`, 
                       'background: orange; color: black; padding: 3px;');
            
            this.wasFirstPerson = this.isFirstPerson;
        }
        
        // Skip remaining updates if we don't have a model
        if (!this.model) {
            if (Math.random() < 0.05) { // Only log occasionally
                console.log(`%c ⚠️ No model found for human player ${this.id}`, 'color: red;');
            }
            return;
        }
        
        // Update camera position for this human player if active
        if (this.isActive) {
            this.updateCameraPosition();
            
            // FIXED: Use this.weapon consistently instead of weaponSystem
            if (this.weapon && processInput) {
                this.weapon.update(deltaTime);
                
                if (Math.random() < 0.01) {
                    console.log(`%c 🔫 Updating weapon for ${this.id}`, 'background: #525; color: #faf; padding: 2px;');
                }
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
                
                // Remove placeholder visuals if they exist and we have a real weapon
                if (this.fpVisuals && this.fpCamera) {
                    console.log('Removing placeholder visuals since proper weapon exists');
                    this.fpCamera.remove(this.fpVisuals);
                    this.fpVisuals = null;
                }
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
        // CRITICAL FIX: Add more robust defensive checks
        if (!this.model || this.isFirstPerson || !this.isActive) {
            return;
        }
        
        // CRITICAL FIX: Check if camera exists
        if (!this.camera) {
            if (Math.random() < 0.01) { // Log occasionally to prevent spam
                console.log(`%c HumanPlayer: Cannot update camera position - camera is null (player: ${this.id})`, 'color: orange;');
            }
            
            // Try to use game camera if available
            if (this.game && this.game.camera) {
                this.camera = this.game.camera;
                console.log(`%c HumanPlayer: Using game camera as fallback (player: ${this.id})`, 'color: #afa;');
            } else {
                return; // No camera available at all
            }
        }
        
        // Get orbit state from controls
        const orbitState = this.controls ? this.controls.cameraOrbit : { cameraAngle: 0, cameraAngleY: 0 };
        
        // Calculate camera position based on orbit angles
        const cameraOffset = new THREE.Vector3(
            Math.sin(orbitState.cameraAngle) * this.thirdPersonDistance,
            this.thirdPersonHeight + Math.sin(orbitState.cameraAngleY) * this.thirdPersonDistance,
            Math.cos(orbitState.cameraAngle) * this.thirdPersonDistance
        );
        
        // Set camera position with additional safety check
        if (this.camera && this.camera.position) {
            this.camera.position.copy(this.model.position).add(cameraOffset);
            
            // Set camera target position (at eye level of player)
            this.cameraTarget.copy(this.model.position).add(new THREE.Vector3(0, this.eyeHeight, 0));
            
            // Make sure lookAt is safe
            if (typeof this.camera.lookAt === 'function') {
                this.camera.lookAt(this.cameraTarget);
            }
        }
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
        
        // Skip creating the box visual if we already have a proper weapon
        if (this.weapon) {
            console.log('Skipping placeholder visuals since proper weapon exists');
            return;
        }
        
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
    
    /**
     * Get current action state for networking
     * @returns {Object} Action state
     */
    getActionState() {
        const actions = {};
        
        // Add firing state if applicable
        if (this.weapon) {
            actions.fire = this.isFiring ? 'start' : 'stop';
        }
        
        // Include current view mode
        actions.viewMode = this.isFirstPerson ? 'firstPerson' : 'thirdPerson';
        
        return actions;
    }
    
    /**
     * Process actions received from network
     * @param {Object} actions - Action data
     */
    processNetworkActions(actions) {
        // Call parent method first
        super.processNetworkActions(actions);
        
        // Handle flamethrower state for remote players
        if (actions.fire && this.weapon) {
            if (actions.fire === 'start' && !this.isFiring) {
                this.isFiring = true;
                this.weapon.startFire();
            } else if (actions.fire === 'stop' && this.isFiring) {
                this.isFiring = false;
                this.weapon.stopFire();
            }
        }
        
        // Handle view mode changes
        if (actions.viewMode) {
            const shouldBeFirstPerson = actions.viewMode === 'firstPerson';
            if (shouldBeFirstPerson !== this.isFirstPerson) {
                this.toggleViewMode(shouldBeFirstPerson);
            }
        }
    }
}

export { HumanPlayer }; 