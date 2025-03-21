import * as THREE from 'three';
import { Player } from './Player';
import { BunnyPhysics } from './physics/BunnyPhysics';
import { BunnyMovement } from './movement/BunnyMovement';
import { BunnyControls } from './controls/BunnyControls';

class BunnyPlayer extends Player {
    constructor(game, options = {}) {
        // CRITICAL FIX: Ensure isLocal and isActive are true
        const modifiedOptions = {
            eyeHeight: 0.8,
            ...options,
            isLocal: true, // Force isLocal to true
            isActive: true // Force isActive to true
        };
        
        // Get scene reference from game
        const scene = game ? game.scene : null;
        if (!scene && game) {
            console.warn(`%c BunnyPlayer (constructor): Scene reference not available from game. Player ID: ${options.id || 'unknown'}`, 'color: orange;');
        }
        
        // Pass scene as second parameter to match updated Player constructor
        super(game, scene, modifiedOptions);
        
        // CRITICAL: Force isLocal to true AGAIN after super constructor (defensive)
        this.isLocal = true;
        
        // Third-person camera properties
        this.thirdPersonDistance = options.thirdPersonDistance || 5;
        this.thirdPersonHeight = options.thirdPersonHeight || 2;
        this.cameraTarget = new THREE.Vector3();
        
        // CRITICAL FIX: Make sure camera is properly referenced from game
        if (game && game.camera) {
            this.camera = game.camera;
        } else {
            console.warn(`%c BunnyPlayer constructor: No camera available from game (player: ${this.id})`, 'color: orange;');
        }
        
        // CRITICAL FIX: Initialize physics with explicit error handling
        try {
            const physics = new BunnyPhysics(options.physics || {});
            this.setPhysics(physics);
            
            // Verify physics was set correctly and log result
            if (this.physics) {
                console.log(`%c BunnyPlayer: Physics initialized successfully (id: ${this.id})`, 'color: #5f5;');
                
                // Explicitly set scene reference
                if (this.game && this.game.scene && typeof this.physics.setScene === 'function') {
                    this.physics.setScene(this.game.scene);
                    console.log(`%c BunnyPlayer: Physics scene reference set (id: ${this.id})`, 'color: #5f5;');
                }
            } else {
                console.error(`%c BunnyPlayer: Failed to set physics component (id: ${this.id})`, 'color: red;');
            }
        } catch (error) {
            console.error(`%c BunnyPlayer: Error initializing physics: ${error.message} (id: ${this.id})`, 'color: red;');
            // Attempt recovery
            if (typeof this.initPhysics === 'function') {
                console.log(`%c BunnyPlayer: Attempting physics recovery (id: ${this.id})`, 'color: #aaf;');
                this.initPhysics();
            }
        }
        
        // Initialize other components
        this.setMovement(new BunnyMovement(options.movement || {}));
        this.setControls(new BunnyControls(options.controls || {}));
        
        // Setup camera zoom callback - ensure the method exists before calling
        if (this.controls && typeof this.controls.setCameraZoomCallback === 'function') {
            this.controls.setCameraZoomCallback(this.adjustCameraDistance.bind(this));
        } else {
            console.warn('BunnyPlayer: controls.setCameraZoomCallback is not available');
        }
        
        // CRITICAL FIX: Log the important state flags after initialization
        console.log(`%c BunnyPlayer: Created with state - isLocal: ${this.isLocal}, isActive: ${this.isActive} (id: ${this.id})`, 'background: #252; color: #afa;');
        
        // Initialize player
        this.init();
    }
    
    init() {
        // Create bunny model
        this.model = this.game.assetLoader.createBunnyModel();
        this.model.position.set(0, 0.5, 0); // Half height above ground
        
        // Enable shadows for the bunny model and change color to white/light gray
        this.model.traverse(node => {
            if (node instanceof THREE.Mesh) {
                node.castShadow = true;
                node.receiveShadow = true;
                
                // Change the bunny color to white/light gray
                if (node.material) {
                    // Check if it's the main body material (avoid changing eyes, nose, etc.)
                    if (node.material.name && node.material.name.includes('Body')) {
                        node.material = node.material.clone(); // Clone to avoid affecting other instances
                        node.material.color.set(0xf0f0f0); // Very light gray, almost white
                    } else if (node.material.name && node.material.name.includes('Fur')) {
                        node.material = node.material.clone();
                        node.material.color.set(0xffffff); // Pure white for fur parts
                    } else if (!node.material.name || (!node.material.name.includes('Eye') && !node.material.name.includes('Nose'))) {
                        // For any unnamed materials or those not explicitly eyes/nose
                        node.material = node.material.clone();
                        node.material.color.set(0xe8e8e8); // Light gray for other parts
                    }
                }
            }
        });
        
        // CRITICAL FIX: Use the game.scene reference with safety checks
        if (this.game && this.game.scene) {
            this.game.scene.add(this.model);
            console.log(`BunnyPlayer: Model added to scene successfully (id: ${this.id})`);
        } else {
            console.error(`BunnyPlayer: Cannot add model to scene - scene reference is missing! (id: ${this.id})`);
        }
        
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
        // CRITICAL FIX: Add defensive checks for model and camera
        if (!this.model) {
            if (Math.random() < 0.01) { // Log occasionally to prevent spam
                console.log(`%c BunnyPlayer: Cannot update camera position - model is null (player: ${this.id})`, 'color: orange;');
            }
            return;
        }
        
        // CRITICAL FIX: Check if camera exists
        if (!this.camera) {
            if (Math.random() < 0.01) { // Log occasionally to prevent spam
                console.log(`%c BunnyPlayer: Cannot update camera position - camera is null (player: ${this.id})`, 'color: orange;');
            }
            
            // Try to use game camera if available
            if (this.game && this.game.camera) {
                this.camera = this.game.camera;
                console.log(`%c BunnyPlayer: Using game camera as fallback (player: ${this.id})`, 'color: #afa;');
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
        
        // Set camera position - with additional safety check
        if (this.camera && this.camera.position) {
            this.camera.position.copy(this.model.position).add(cameraOffset);
            
            // Set camera target position (slightly above player model)
            this.cameraTarget.copy(this.model.position).add(new THREE.Vector3(0, this.eyeHeight, 0));
            
            // Make sure lookAt is safe too
            if (typeof this.camera.lookAt === 'function') {
                this.camera.lookAt(this.cameraTarget);
            }
        }
    }
    
    onInstructionsDismissed() {
        super.onInstructionsDismissed();
    }
    
    /**
     * Get current action state for networking
     * @returns {Object} Action state
     */
    getActionState() {
        const actions = {};
        
        // Include camera orbit angles (for syncing third-person camera between clients)
        if (this.controls && this.controls.cameraOrbit) {
            actions.cameraOrbit = {
                angle: this.controls.cameraOrbit.cameraAngle,
                angleY: this.controls.cameraOrbit.cameraAngleY
            };
        }
        
        // Include jumping state if applicable
        if (this.physics) {
            actions.isJumping = !this.physics.isGrounded;
        }
        
        return actions;
    }
    
    /**
     * Process actions received from network
     * @param {Object} actions - Action data
     */
    processNetworkActions(actions) {
        // Call parent method first
        super.processNetworkActions(actions);
        
        // Handle camera orbit angles for visual consistency
        if (actions.cameraOrbit && this.controls && this.controls.cameraOrbit) {
            // We only use this for visual consistency, not for actual camera control
            // This helps other clients see which way the bunny is looking
            if (actions.cameraOrbit.angle !== undefined) {
                this.controls.cameraOrbit.targetCameraAngle = actions.cameraOrbit.angle;
            }
            
            if (actions.cameraOrbit.angleY !== undefined) {
                this.controls.cameraOrbit.targetCameraAngleY = actions.cameraOrbit.angleY;
            }
        }
    }
    
    /**
     * Process input specifically for bunny players
     * This overrides the base Player.processInput for bunny-specific handling
     * @param {number} deltaTime - Time since last update
     */
    processInput(deltaTime) {
        // Skip processing if not active
        if (!this.isActive) {
            if (Math.random() < 0.01) { // Log occasionally to prevent console spam
                console.log(`%c ℹ️ BunnyPlayer: Skipping input processing - player ${this.id} is not active`, 'color: gray;');
            }
            return;
        }
        
        // Critical debugging output - log input state to diagnose problems
        const shouldLog = Math.random() < 0.01; // Limit logging to avoid spam
        
        // Defensive check: ensure we have required components
        if (!this.controls) {
            console.log(`%c ⚠️ BunnyPlayer: Cannot process input for ${this.id} - missing controls component`, 'color: orange;');
            return;
        }
        
        // Check for valid input manager
        if (!this.game || !this.game.inputManager) {
            console.log(`%c ⚠️ BunnyPlayer: Cannot process input for ${this.id} - missing input manager`, 'color: orange;');
            return;
        }
        
        // Get input values directly from the controls component
        const input = this.controls.getInput();
        
        if (shouldLog) {
            console.log(`%c 🐰 BunnyPlayer input for ${this.id}:`, 'background: #252; color: #afa; padding: 2px;', input);
        }
        
        // Get movement vector from the input
        const moveDir = input.moveDirection;
        
        // If there's significant movement, handle it with the movement component
        if (moveDir && moveDir.lengthSq() > 0.01) {
            if (this.movement && typeof this.movement.update === 'function') {
                // Send the full input state to the movement component
                this.movement.update(input, deltaTime, this);
                
                if (shouldLog) {
                    console.log(`%c 🐰 Applied BunnyMovement with vector: (${moveDir.x.toFixed(1)}, ${moveDir.z.toFixed(1)})`, 'color: #3f3;');
                }
            } else {
                console.log(`%c ⚠️ BunnyPlayer ${this.id} - missing movement component or update method`, 'color: orange;');
                
                // Emergency fallback: move player directly if movement component is missing
                // This is a safety mechanism to ensure the player can still move
                this.emergencyMovement(input, deltaTime);
            }
        }
        
        // Handle any additional bunny-specific input processing here
    }
    
    /**
     * Emergency fallback movement when component is missing
     * @param {Object} input - Input state
     * @param {number} deltaTime - Time since last frame
     */
    emergencyMovement(input, deltaTime) {
        if (!this.model) return;
        
        console.log(`%c 🚨 Using emergency movement for bunny ${this.id}`, 'color: orange;');
        
        // Use a simple movement implementation as fallback
        const speed = 5; // Basic speed value
        const moveDir = input.moveDirection || new THREE.Vector3();
        
        // Apply forward/backward movement relative to camera
        const cameraAngle = input.cameraOrbit?.cameraAngle || 0;
        const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), cameraAngle);
        const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), cameraAngle);
        
        // Calculate movement vector
        const movement = new THREE.Vector3();
        
        if (moveDir.z < 0) movement.add(forward.clone().multiplyScalar(speed * deltaTime));
        if (moveDir.z > 0) movement.add(forward.clone().multiplyScalar(-speed * deltaTime));
        if (moveDir.x < 0) movement.add(right.clone().multiplyScalar(-speed * deltaTime));
        if (moveDir.x > 0) movement.add(right.clone().multiplyScalar(speed * deltaTime));
        
        // Apply movement
        if (movement.lengthSq() > 0) {
            this.model.position.add(movement);
            this.position.copy(this.model.position);
        }
    }
}

export { BunnyPlayer }; 