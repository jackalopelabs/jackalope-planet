import * as THREE from 'three';
import { HumanPhysics } from './physics/HumanPhysics';
import { BunnyPhysics } from './physics/BunnyPhysics';

class Player {
    constructor(game, scene, options = {}) {
        // Set up logging
        const log = window.jpLog || console.log;
        const logWarn = window.jpLog ? 
            (msg) => window.jpLog(msg, 'warning') : 
            console.warn;
        const logError = window.jpLog ? 
            (msg) => window.jpLog(msg, 'error') : 
            console.error;
            
        // Log options for debugging
        log('Player constructor called with options:', 'debug', options);
        
        this.game = game;
        this.scene = scene;
        
        // Basic properties
        this.id = options.id || `player_${Math.floor(Math.random() * 10000)}`;
        this.team = options.team || 'unknown';
        
        // CRITICAL: Ensure isLocal property is explicitly set as a true boolean for local players
        // This fixes bugs where isLocal can be lost or overwritten
        this.isLocal = options.isLocal === true;
        
        // Force boolean conversion
        if (options.isLocal === 'true' || options.isLocal === 1) {
            this.isLocal = true;
        }
        
        // CRITICAL: Ensure the isActive property is reliable
        this.isActive = options.isActive === true;
        
        // Force boolean conversion
        if (options.isActive === 'true' || options.isActive === 1) {
            this.isActive = true;
        }
        
        // Store original values for comparison
        this._originalIsLocal = this.isLocal;
        this._originalIsActive = this.isActive;
        this._originalOptions = JSON.parse(JSON.stringify(options)); // Deep copy of initial options
        
        // Player state
        this.health = options.health || 100;
        this.maxHealth = options.maxHealth || 100;
        this.isAlive = true;
        
        // 3D properties
        this.eyeHeight = options.eyeHeight || 1.7; // meters above ground
        this.position = new THREE.Vector3(0, this.eyeHeight, 0);
        this.rotation = new THREE.Euler(0, 0, 0, 'YXZ');
        
        // CRITICAL FIX: Initialize direction vector to prevent MathUtils.lerp errors
        this.direction = new THREE.Vector3(0, 0, -1); // Default forward direction
        
        this.model = null;
        
        // Camera handling - make sure we have a reference to a camera
        if (game && game.camera) {
            this.camera = game.camera;
        } else {
            logWarn('Player.constructor: No camera available from game (player: ' + this.id + ')');
            this.camera = null;
        }
        
        // Network state for remote player interpolation
        this.networkState = {
            position: new THREE.Vector3(),
            rotation: new THREE.Euler(),
            velocity: new THREE.Vector3(),
            timestamp: 0,
            actions: {}
        };
        
        // Components (these will be set by subclasses)
        this.physics = null;
        this.movement = null;
        this.controls = null;
        
        // Debug logs
        log('Player created: ' + this.id + ' (team: ' + this.team + ', local: ' + this.isLocal + ', active: ' + this.isActive + ')', 'debug');
    }
    
    init() {
        // This should be implemented by child classes
        logWarn('Player.init() should be implemented by child classes');
    }
    
    /**
     * Update player state
     * @param {number} delta - Time since last update in seconds
     * @param {boolean} processInput - Whether to process input controls (only for local active player)
     */
    update(delta, processInput = true) {
        // Get logging functions
        const log = window.jpLog || console.log;
        const logWarn = window.jpLog ? 
            (msg) => window.jpLog(msg, 'warning') : 
            console.warn;
        const logError = window.jpLog ? 
            (msg) => window.jpLog(msg, 'error') : 
            console.error;
            
        // CRITICAL DEBUG: Log the player state occasionally to avoid console spam
        const shouldLogUpdate = Math.random() < 0.01; // Log roughly 1% of updates

        if (shouldLogUpdate) {
            // Log player updates
            log('👤 PLAYER UPDATE: ' + this.id + ' (' + this.team + ') - isActive: ' + this.isActive + ', processInput: ' + processInput, 'debug');
            
            // Check for mismatch between game's active player and this player's isActive state
            if (this.game.player === this && !this.isActive) {
                logWarn('⚠️ CRITICAL: Player state mismatch! This player (' + this.id + ') is game.player but isActive=false');
            }
            else if (this.game.player !== this && this.isActive) {
                logWarn('⚠️ CRITICAL: Player state mismatch! This player (' + this.id + ') has isActive=true but is not game.player');
            }
        }

        // Only process input if this is an active local player AND processInput flag is true
        if (this.isLocal && processInput) {
            // MORE DETAILED LOG: Show when input is being processed
            if (shouldLogUpdate) {
                log('🎮 PROCESSING INPUT FOR: ' + this.id + ' - Keyboard state: W:' + this.game.inputManager.keys.w + 
                    ', A:' + this.game.inputManager.keys.a + 
                    ', S:' + this.game.inputManager.keys.s + 
                    ', D:' + this.game.inputManager.keys.d, 'debug');
            }
            
            // Process player input if player is active
            this.processInput(delta);
        }
        
        // CRITICAL FIX: Add defensive check for physics object and update method
        if (this.physics && typeof this.physics.apply === 'function') {
            // Update physics - use apply method from physics component (not update)
            try {
                // Get input from game's input manager if available
                const input = this.game?.inputManager?.getInputState() || {};
                this.physics.apply(this, delta, input);
            } catch (error) {
                logError('Physics error for player ' + this.id + ': ' + error.message);
            }
        } else if (shouldLogUpdate) {
            // Log missing physics for debugging
            logWarn('⚠️ Physics missing or invalid for player ' + this.id);
            
            // If physics doesn't exist, try to reinitialize it if possible
            if (!this.physics && this.game && this.game.scene) {
                log('🔄 Attempting to reinitialize physics for player ' + this.id, 'debug');
                if (typeof this.initPhysics === 'function') {
                    this.initPhysics();
                }
            }
        }
        
        // Update position from physics - ONLY if physics exists and has a position
        if (this.physics && this.model && this.physics.position) {
            this.position.copy(this.physics.position);
            this.model.position.copy(this.physics.position);
        }

        // Update camera if this is the current player
        if (this.isActive && this.camera) {
            if (typeof this.updateCameraPosition === 'function') {
                this.updateCameraPosition(delta);
            } else {
                if (Math.random() < 0.01) {
                    logWarn('Player ' + this.id + ' (' + this.team + ') has no updateCameraPosition method');
                }
            }
        }
        
        // If this is a local player, send state updates to the network
        if (this.isLocal && this.game.isMultiplayerEnabled) {
            this.sendNetworkUpdate();
        }
    }
    
    /**
     * Set network state for remote player
     * @param {Object} state - Network state data
     */
    setNetworkState(state) {
        if (!state) return;
        
        // CRITICAL: Store current isLocal value to preserve it
        const wasLocal = this.isLocal;
        
        // Store incoming network state for interpolation
        if (state.position) {
            this.networkState.position.set(state.position.x, state.position.y, state.position.z);
        }
        
        if (state.rotation) {
            this.networkState.rotation.set(state.rotation.x, state.rotation.y, state.rotation.z);
        }
        
        if (state.velocity) {
            this.networkState.velocity.set(state.velocity.x, state.velocity.y, state.velocity.z);
        }
        
        this.networkState.timestamp = state.timestamp || Date.now();
        this.networkState.actions = state.actions || {};
        
        // CRITICAL: Preserve isLocal value - NEVER let it be overwritten by network state
        this.isLocal = wasLocal;
        
        // Process actions immediately
        if (state.actions) {
            this.processNetworkActions(state.actions);
        }
    }
    
    /**
     * Process actions received from network
     * @param {Object} actions - Action data
     */
    processNetworkActions(actions) {
        // Process remote player actions like firing weapons, jumping, etc.
        if (actions.fire && this.team === 'merc') {
            // Handle firing weapon for remote merc players
            if (actions.fire === 'start' && this.weapon) {
                this.weapon.startFire();
            } else if (actions.fire === 'stop' && this.weapon) {
                this.weapon.stopFire();
            }
        }
        
        // Add other action handling as needed
    }
    
    /**
     * Interpolate position/rotation based on network state
     * @param {number} delta - Time since last update
     */
    interpolateFromNetworkState(delta) {
        if (!this.model) return;
        
        // Simple position interpolation
        if (this.networkState.position.lengthSq() > 0) {
            // Calculate interpolation factor (0.1 = smooth, 1.0 = immediate)
            const lerpFactor = Math.min(delta * 10, 1.0);
            
            // Interpolate position
            this.model.position.lerp(this.networkState.position, lerpFactor);
            this.position.copy(this.model.position);
            
            // Interpolate rotation (if facing direction changed)
            if (this.networkState.rotation) {
                const targetRotation = new THREE.Quaternion().setFromEuler(this.networkState.rotation);
                this.model.quaternion.slerp(targetRotation, lerpFactor);
            }
        }
    }
    
    /**
     * Send player state update to network
     */
    sendNetworkUpdate() {
        if (!this.game.networking || !this.model) return;
        
        // Prepare state data to send
        const stateData = {
            id: this.id,
            team: this.team,
            position: {
                x: this.model.position.x,
                y: this.model.position.y,
                z: this.model.position.z
            },
            rotation: {
                x: this.model.rotation.x,
                y: this.model.rotation.y,
                z: this.model.rotation.z
            },
            velocity: {
                x: this.velocity.x,
                y: this.velocity.y,
                z: this.velocity.z
            },
            timestamp: Date.now(),
            actions: this.getActionState()
        };
        
        // Send update using networking component
        if (this.game.networking.updatePlayerState) {
            this.game.networking.updatePlayerState(stateData);
        }
    }
    
    /**
     * Get current action state for networking
     * @returns {Object} Action state
     */
    getActionState() {
        // Base implementation - child classes should override to add specific actions
        return {};
    }
    
    handleMouseDown(event) {
        // Debug which player is receiving mouse down events
        const isActive = this === this.game.player;
        if (isActive && this.isLocal) {
            log('🖱️ Mouse down event received by ' + this.id + ' (' + this.team + ')', 
                      'background: #335; color: #afa; padding: 2px;');
        }
        
        // Forward to controls if available and this is a local player
        if (this.isLocal && this.controls) {
            this.controls.handleMouseDown(event);
        }
    }
    
    handleMouseMove(event, mouseState) {
        // Debug mouse move events occasionally
        const isActive = this === this.game.player;
        if (isActive && this.isLocal && Math.random() < 0.001) {
            log('🖱️ Mouse move processed by ' + this.id + ' (' + this.team + ')', 
                      'background: #335; color: #8cf; padding: 2px;');
        }
        
        // Forward to controls if available and this is a local player
        if (this.isLocal && this.controls) {
            // Check if we're in pointer lock mode
            if (document.pointerLockElement === this.game.container) {
                // For pointer lock, use movementX/Y instead of position
                const pointerLockState = {
                    movementX: event.movementX || 0,
                    movementY: event.movementY || 0,
                    isPointerLocked: true
                };
                
                // Forward pointer lock mouse data to controls
                this.controls.handleMouseMove(event, pointerLockState);
            } else {
                // Standard mouse movement tracking for third-person
                this.controls.handleMouseMove(event, mouseState);
            }
        }
    }
    
    onInstructionsDismissed() {
        log('Instructions dismissed, initializing controls');
        
        // Initialize controls if not already done and this is a local player
        if (this.isLocal && this.controls && typeof this.controls.init === 'function') {
            try {
                // Make sure we have a valid container
                if (!this.game || !this.game.container) {
                    logError('Cannot initialize controls: game.container is null or undefined');
                    return;
                }
                
                this.controls.init(this.game.container);
                log('Controls initialized successfully');
            } catch (error) {
                logError('Error initializing player controls: ' + error.message);
            }
        } else {
            logWarn('No controls to initialize or init method not available');
        }
    }
    
    // Legacy method for backward compatibility
    movePlayer(movementVector) {
        if (this.model) {
            this.model.position.add(movementVector);
            this.position.copy(this.model.position);
        }
    }
    
    // Legacy method for backward compatibility
    rotateToDirection(targetDirection, delta) {
        if (this.movement) {
            this.movement.rotate(this, targetDirection, delta);
        } else if (this.model) {
            // Original implementation for backward compatibility
            const targetQuaternion = new THREE.Quaternion();
            const lookMatrix = new THREE.Matrix4();
            const lookDirection = targetDirection.clone().negate();
            const upVector = new THREE.Vector3(0, 1, 0);
            lookMatrix.lookAt(new THREE.Vector3(0, 0, 0), lookDirection, upVector);
            targetQuaternion.setFromRotationMatrix(lookMatrix);
            
            const rotationSpeed = this.movement ? this.movement.rotationSpeed : 5.0;
            const step = Math.min(1.0, rotationSpeed * delta);
            
            this.model.quaternion.slerp(targetQuaternion, step);
            this.direction.lerp(targetDirection, step).normalize();
        }
    }
    
    cleanup() {
        log('Cleaning up player ' + this.id);
        
        // Clean up components
        if (this.controls && typeof this.controls.cleanup === 'function') {
            this.controls.cleanup();
        }
        
        // Clean up model
        if (this.model) {
            this.scene.remove(this.model);
            this.model = null;
        }
    }
    
    setPhysics(physicsComponent) {
        this.physics = physicsComponent;
    }
    
    setMovement(movementComponent) {
        this.movement = movementComponent;
    }
    
    setControls(controlsComponent) {
        if (!controlsComponent) {
            logWarn('Attempting to set null controls component');
            return;
        }
        
        this.controls = controlsComponent;
        log('Controls component set');
        
        // Ensure controls has all required methods
        const requiredMethods = ['getInput', 'init', 'cleanup'];
        for (const method of requiredMethods) {
            if (typeof this.controls[method] !== 'function') {
                logWarn('Controls component missing required method: ' + method);
            }
        }
    }
    
    /**
     * Handle mouse up event
     * @param {MouseEvent} event - Mouse event
     */
    handleMouseUp(event) {
        // Forward to controls if available and this is a local player
        if (this.isLocal && this.controls && typeof this.controls.handleMouseUp === 'function') {
            this.controls.handleMouseUp(event);
        }
    }
    
    /**
     * Process input controls
     * This is called only for the local active player
     * @param {number} deltaTime - Time since last update
     */
    processInput(deltaTime) {
        // Skip processing if not active
        if (!this.isActive) {
            log('ℹ️ Skipping input processing - player ' + this.id + ' is not active', 'color: gray;');
            return;
        }
        
        // Defensive check: ensure we have required components
        if (!this.controls) {
            log('⚠️ Cannot process input for ' + this.id + ' - missing controls component', 'color: orange;');
            return;
        }
        
        // Check for valid input manager
        if (!this.game || !this.game.inputManager) {
            log('⚠️ Cannot process input for ' + this.id + ' - missing input manager', 'color: orange;');
            return;
        }
        
        // Get input values
        const inputManager = this.game.inputManager;
        const moveForward = !!inputManager.keys.w; // Force boolean conversion
        const moveBackward = !!inputManager.keys.s;
        const moveLeft = !!inputManager.keys.a;
        const moveRight = !!inputManager.keys.d;
        
        // Debug log actual key state from input manager
        log('🎮 Input for ' + this.id + ': W:' + moveForward + ' A:' + moveLeft + ' S:' + moveBackward + ' D:' + moveRight, 
                   'background: #225; color: #cfc; padding: 2px;');
        
        // Calculate movement vector
        const movementVector = new THREE.Vector3(0, 0, 0);
        
        if (moveForward) movementVector.z -= 1;
        if (moveBackward) movementVector.z += 1;
        if (moveLeft) movementVector.x -= 1;
        if (moveRight) movementVector.x += 1;
        
        // Debug log movement vector
        const hasMovement = movementVector.lengthSq() > 0;
        if (hasMovement) {
            log('🚶 Movement vector for ' + this.id + ': (' + movementVector.x.toFixed(1) + ', ' + movementVector.z.toFixed(1) + ')', 
                       'color: #3f3;');
        }
        
        // Normalize movement vector to prevent faster diagonal movement
        if (hasMovement) {
            movementVector.normalize();
            
            // Defensive check: ensure we have a movement component
            if (this.movement && typeof this.movement.move === 'function') {
                // Apply movement with the appropriate speed
                this.movement.move(movementVector, deltaTime);
                log('✅ Applied movement to ' + this.id, 'color: #3f3;');
            } else {
                log('⚠️ Cannot move player ' + this.id + ' - missing movement component', 'color: orange;');
                
                // Attempt fallback movement - direct model position update
                if (this.model && moveForward) {
                    // Get direction vector (forward direction in model space)
                    let direction = new THREE.Vector3(0, 0, -1);
                    if (this.model.quaternion) {
                        direction.applyQuaternion(this.model.quaternion);
                    }
                    direction.normalize().multiplyScalar(5 * deltaTime); // Simple movement speed
                    
                    // Apply movement directly
                    this.model.position.add(direction);
                    this.position.copy(this.model.position);
                    log('🚨 Used emergency fallback movement for ' + this.id, 'color: orange;');
                }
            }
        }
        
        // Process any other input (jump, shoot, etc.) - to be implemented in child classes
    }
    
    /**
     * Initialize or re-initialize physics for this player
     * Should be overridden by subclasses but this provides basic recovery
     */
    initPhysics() {
        const log = window.jpLog || console.log;
        const logWarn = window.jpLog ? 
            (msg) => window.jpLog(msg, 'warning') : 
            console.warn;
            
        // Create physics component based on player type
        let physics = null;
        
        if (this.team === 'bunny') {
            log('Creating BunnyPhysics for player: ' + this.id, 'debug');
            physics = new BunnyPhysics();
        } else {
            log('Creating HumanPhysics for player: ' + this.id, 'debug');
            physics = new HumanPhysics();
        }
        
        // Set physics component
        if (physics) {
            this.setPhysics(physics);
            
            // Set scene for terrain collision if available
            if (this.game && this.game.scene) {
                if (typeof this.physics.setScene === 'function') {
                    this.physics.setScene(this.game.scene);
                } else {
                    logWarn('Physics component has no setScene method (player ' + this.id + ')');
                }
            } else {
                logWarn('Cannot set scene for physics - scene reference is missing (player ' + this.id + ')');
            }
        }
    }
    
    /**
     * Base implementation of updateCameraPosition for the Player class
     * This is overridden by child classes (BunnyPlayer, HumanPlayer) for specific camera behaviors
     * @param {number} delta - Time since last update
     */
    updateCameraPosition(delta) {
        // Base implementation - child classes will override with their specific camera logic
        if (this.model && this.camera) {
            // Simple follow camera if nothing else is implemented
            const offset = new THREE.Vector3(0, 2, 5);
            this.camera.position.copy(this.model.position).add(offset);
            this.camera.lookAt(this.model.position);
        } else if (Math.random() < 0.01) {
            // Occasional warning for debugging
            logWarn('Cannot update camera position for ' + this.id + ' - Missing model or camera');
        }
    }
}

export { Player }; 