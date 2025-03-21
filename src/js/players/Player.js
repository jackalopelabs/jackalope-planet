import * as THREE from 'three';

class Player {
    constructor(game, options = {}) {
        this.game = game;
        this.scene = game.scene;
        this.camera = game.camera;
        this.model = null;
        this.position = new THREE.Vector3(0, 0, 0);
        this.direction = new THREE.Vector3(0, 0, -1);
        this.targetDirection = new THREE.Vector3(0, 0, -1);
        
        // Component references - to be set by child classes
        this.physics = null;
        this.movement = null;
        this.controls = null;
        
        // Common player properties
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.isGrounded = true;
        this.eyeHeight = options.eyeHeight || 1.6;
        
        // Multiplayer properties
        this.id = options.id || `player_${Math.floor(Math.random() * 10000)}`;
        this.team = options.team || 'unknown';
        this.isLocal = options.isLocal !== undefined ? options.isLocal : true;
        this.networkState = {
            position: new THREE.Vector3(),
            rotation: new THREE.Euler(),
            velocity: new THREE.Vector3(),
            timestamp: 0,
            actions: {}
        };
        
        console.log(`Player ${this.id} initialized (team: ${this.team}, local: ${this.isLocal})`);
    }
    
    init() {
        // This should be implemented by child classes
        console.warn('Player.init() should be implemented by child classes');
    }
    
    /**
     * Update player state
     * @param {number} delta - Time since last update in seconds
     * @param {boolean} processInput - Whether to process input controls (only for local active player)
     */
    update(delta, processInput = true) {
        // Only process input if this is the active local player
        if (processInput && this.isLocal) {
            // Get input from controls
            const input = this.controls ? this.controls.getInput() : null;
            
            // Update movement based on input
            if (this.movement && input) {
                this.movement.update(input, delta, this);
            }
        } else if (!this.isLocal) {
            // For remote players, interpolate position/rotation from network data
            this.interpolateFromNetworkState(delta);
        }
        
        // Apply physics regardless of input source
        if (this.physics) {
            this.physics.apply(this, delta);
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
        // Forward to controls if available and this is a local player
        if (this.isLocal && this.controls) {
            this.controls.handleMouseDown(event);
        }
    }
    
    handleMouseMove(event, mouseState) {
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
        console.log('Instructions dismissed, initializing controls');
        
        // Initialize controls if not already done and this is a local player
        if (this.isLocal && this.controls && typeof this.controls.init === 'function') {
            try {
                // Make sure we have a valid container
                if (!this.game || !this.game.container) {
                    console.error('Cannot initialize controls: game.container is null or undefined');
                    return;
                }
                
                this.controls.init(this.game.container);
                console.log('Controls initialized successfully');
            } catch (error) {
                console.error('Error initializing player controls:', error);
            }
        } else {
            console.warn('No controls to initialize or init method not available');
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
        console.log(`Cleaning up player ${this.id}`);
        
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
            console.warn('Attempting to set null controls component');
            return;
        }
        
        this.controls = controlsComponent;
        console.log('Controls component set');
        
        // Ensure controls has all required methods
        const requiredMethods = ['getInput', 'init', 'cleanup'];
        for (const method of requiredMethods) {
            if (typeof this.controls[method] !== 'function') {
                console.warn(`Controls component missing required method: ${method}`);
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
}

export { Player }; 