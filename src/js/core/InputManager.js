class InputManager {
    constructor(game, container) {
        this.game = game;
        this.container = container;
        this.instructions = null;
        
        // Input state
        this.keys = { w: false, a: false, s: false, d: false };
        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        
        // Mouse state
        this.isMouseDown = false;
        this.prevMouseX = 0;
        this.prevMouseY = 0;
        
        // Camera orbit properties (for third person)
        this.cameraAngle = Math.PI; 
        this.cameraAngleY = 0.5;
        this.targetCameraAngle = this.cameraAngle;
        this.targetCameraAngleY = this.cameraAngleY;
        this.orbitSpeed = 0.005;
        
        // First-person mode flag - this will be synced with game.gameMode
        this.isFirstPerson = (this.game && this.game.gameMode === 'first_person');
        
        // Initialize player ID counter for new player creation
        this.playerIdCounter = 1;
        
        const log = window.jpLog || console.log;
        log('InputManager created - FP mode: ' + this.isFirstPerson, 'debug');
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        if (!this.container) {
            const logError = window.jpLog ? 
                (msg) => window.jpLog(msg, 'error') : 
                console.error;
            logError('InputManager: container is null, cannot setup event listeners');
            return;
        }
        
        const log = window.jpLog || console.log;
        log('Setting up InputManager event listeners', 'debug');
        
        // Mouse controls
        this.container.addEventListener('mousedown', (event) => {
            this.handleMouseDown(event);
        });
        
        document.addEventListener('mousemove', (event) => {
            this.handleMouseMove(event);
        });
        
        document.addEventListener('mouseup', (event) => {
            this.handleMouseUp(event);
        });
        
        // Prevent spacebar from scrolling the page
        window.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
                event.preventDefault();
            }
        });
        
        // Key press event listeners for movement and mode switching
        document.addEventListener('keydown', (event) => this.handleKeyDown(event));
        document.addEventListener('keyup', (event) => this.handleKeyUp(event));
        
        // Pointer lock change event
        document.addEventListener('pointerlockchange', () => {
            log('Pointer lock state changed: ' + !!document.pointerLockElement, 'debug');
        });
        
        // Pointer lock error event
        document.addEventListener('pointerlockerror', () => {
            const logError = window.jpLog ? 
                (msg) => window.jpLog(msg, 'error') : 
                console.error;
            logError('Pointer lock error');
        });
        
        log('InputManager event listeners setup complete', 'debug');
    }
    
    handleMouseDown(event) {
        const log = window.jpLog || console.log;
        log('Mouse down in InputManager', 'debug');
        
        // Request pointer lock specifically when in first-person mode
        if (this.isFirstPerson && this.container) {
            if (document.pointerLockElement !== this.container) {
                log('Requesting pointer lock for first-person mode', 'debug');
                this.container.requestPointerLock();
            }
        }
        
        if (this.game.player) {
            this.game.player.handleMouseDown(event);
        }
        
        if (this.instructions) {
            this.instructions.style.display = 'none';
            
            // Initialize player controls when clicking on the game area
            if (this.game.player) {
                log('Initializing player controls from mouse down', 'debug');
                this.game.player.onInstructionsDismissed();
            }
        }
        
        this.isMouseDown = true;
        this.prevMouseX = event.clientX;
        this.prevMouseY = event.clientY;
    }
    
    handleMouseUp(event) {
        const log = window.jpLog || console.log;
        log('Mouse up in InputManager', 'debug');
        this.isMouseDown = false;
        
        // Forward mouse up event to player for weapon firing
        if (this.game.player) {
            this.game.player.handleMouseUp(event);
        }
    }
    
    handleMouseMove(event) {
        if (this.game.player) {
            this.game.player.handleMouseMove(event, {
                prevMouseX: this.prevMouseX,
                prevMouseY: this.prevMouseY,
                isMouseDown: this.isMouseDown
            });
        }
        
        // Update previous mouse position
        if (this.instructions && this.instructions.style.display === 'none') {
            this.prevMouseX = event.clientX;
            this.prevMouseY = event.clientY;
        }
    }
    
    handleKeyDown(event) {
        const key = event.code;
        const log = window.jpLog || console.log;
        
        // Only log key presses in debug mode and very rarely
        const DEBUG = window.DEBUG_MODE === true;
        
        // Handle game keys
        switch(key) {
            case 'KeyW':
                this.keys.w = true;
                this.moveForward = true;
                break;
            case 'KeyA':
                this.keys.a = true;
                this.moveLeft = true;
                break;
            case 'KeyS':
                this.keys.s = true;
                this.moveBackward = true;
                break;
            case 'KeyD':
                this.keys.d = true;
                this.moveRight = true;
                break;
            case 'Space':
                this.keys.space = true;
                if (this.game.player) {
                    this.game.player.jump();
                }
                break;
        }
        
        // Special key handling
        if (key === 'KeyT') {
            // Toggle between first and third person modes
            if (DEBUG) {
                log('T key pressed: Switching player mode', 'debug');
            }
            if (this.game.switchPlayerMode) {
                this.game.switchPlayerMode();
            } else {
                log('switchPlayerMode not found on game object', 'warning');
            }
        } else if (key === 'KeyR') {
            // Reload/restart
            if (DEBUG) {
                log('R key pressed: Restarting game', 'debug');
            }
            if (typeof this.game.restart === 'function') {
                this.game.restart();
            }
        } else if (key === 'KeyI') {
            // Show instructions
            if (DEBUG) {
                log('I key pressed: Showing instructions', 'debug');
            }
            this.showInstructions();
        } else if (key === 'KeyD' && event.shiftKey) {
            // Enhanced diagnostics with Shift+D
            if (DEBUG) {
                log('Shift+D pressed: Running enhanced diagnostics', 'debug');
            }
            
            // Toggle diagnostic overlay
            if (this.game.toggleDebugOverlay) {
                this.game.toggleDebugOverlay();
            }
            
            if (this.game.diagnosePlayerState) {
                // Force fix any issues found in diagnosis
                this.game.diagnosePlayerState(true);
                
                // Force re-selection of the active player
                if (this.game.player) {
                    this.game.setActivePlayer(this.game.player);
                }
            }
        } else if (key === 'KeyD') {
            // Standard diagnostics with D
            if (DEBUG) {
                log('D pressed: Running diagnostics', 'debug');
            }
            if (this.game.diagnosePlayerState) {
                this.game.diagnosePlayerState();
            }
        } else if (key === 'KeyG') {
            // Toggle God Mode
            if (DEBUG) {
                log('G pressed: Toggling God Mode', 'debug');
            }
            if (this.game.toggleGodMode) {
                const godModeState = this.game.toggleGodMode();
                if (DEBUG) {
                    log('God Mode is now: ' + (godModeState ? 'ON' : 'OFF'), 'debug');
                }
            }
        } else if (key === 'Digit1') {
            // Spawn a Jackalope
            if (this.game.isGodMode) {
                if (DEBUG) {
                    log('1 pressed: Spawning Jackalope', 'debug');
                }
                const newPlayer = this.spawnPlayerForTeam('jackalope');
                if (DEBUG && newPlayer) {
                    log('New jackalope spawned: ' + newPlayer.id, 'debug');
                }
            } else if (DEBUG) {
                log('Cannot spawn Jackalope - God Mode is disabled', 'warning');
            }
        } else if (key === 'Digit2') {
            // Spawn a Merc
            if (this.game.isGodMode) {
                if (DEBUG) {
                    log('2 pressed: Spawning Merc', 'debug');
                }
                const newPlayer = this.spawnPlayerForTeam('merc');
                if (DEBUG && newPlayer) {
                    log('New merc spawned: ' + newPlayer.id, 'debug');
                }
            } else if (DEBUG) {
                log('Cannot spawn Merc - God Mode is disabled', 'warning');
            }
        } else if (key === 'KeyP') {
            // Toggle player info overlay
            if (DEBUG) {
                log('P pressed: Showing player info', 'debug');
            }
            if (this.game.addPlayerInfoOverlay) {
                this.game.addPlayerInfoOverlay();
            }
        }
    }
    
    handleKeyUp(event) {
        const key = event.code;
        
        // Update key state
        switch(key) {
            case 'KeyW':
                this.keys.w = false;
                this.moveForward = false;
                break;
            case 'KeyA':
                this.keys.a = false;
                this.moveLeft = false;
                break;
            case 'KeyS':
                this.keys.s = false;
                this.moveBackward = false;
                break;
            case 'KeyD':
                this.keys.d = false;
                this.moveRight = false;
                break;
            case 'Space':
                this.keys.space = false;
                break;
            case 'Escape':
                this.showInstructions();
                break;
        }
    }
    
    /**
     * Spawn a test player for the specified team
     * @param {string} team - 'jackalope' or 'merc'
     */
    spawnPlayerForTeam(team, options = {}) {
        const log = window.jpLog || console.log;
        const DEBUG = window.DEBUG_MODE === true;
        
        // Only log when in debug mode
        if (DEBUG) {
            log(`InputManager spawning player for team: ${team}`, 'debug');
        }
        
        // Normalize team and generate player ID
        team = String(team);
        const id = `${team}_${this.playerIdCounter++}`;
        
        // Create player options object with explicit local and active settings
        const finalOptions = {
            ...options,
            team,
            id,
            isLocal: true,
            isActive: true
        };
        
        // Create the player
        const player = this.game.createNewPlayer(finalOptions);
        
        // Verify the player was created successfully
        if (player) {
            log(`Player created: ${player.id} (${player.team})`, 'info');
            
            // Force-set the game's active player and update all dependencies
            player.isLocal = true;
            player.isActive = true;
            this.game.player = player;
            this.game.setActivePlayer(player);
            
            // Run diagnostics only if in debug mode
            if (DEBUG && typeof this.game.diagnosePlayerState === 'function') {
                this.game.diagnosePlayerState();
            }
        } else {
            log(`Failed to create player for team ${team}`, 'error');
        }
        
        return player;
    }
    
    addInstructions(container) {
        const log = window.jpLog || console.log;
        
        if (window.DEBUG_MODE) {
            log('Adding instructions overlay', 'debug');
        }
        
        const instructions = document.createElement('div');
        instructions.className = 'instructions';
        instructions.innerHTML = `
            <div class="instructions-content">
                <h2>Game Controls</h2>
                <p>Click to play</p>
                <h3>Basic Controls</h3>
                <p>W, A, S, D to move</p>
                <p>In third-person: Hold and drag mouse to orbit camera</p>
                <p>In first-person: Mouse to look around</p>
                <p>In first-person: Click to shoot flamethrower</p>
                <p>Press T to toggle between modes</p>
                <p>Press ESC to exit game mode</p>
                
                <h3>Multiplayer Controls</h3>
                <p>G - Toggle God Mode (admin controls)</p>
                <p>1 - Spawn a Jackalope (in God Mode)</p>
                <p>2 - Spawn a Merc (in God Mode)</p>
                <p>P - Show player info overlay</p>
            </div>
        `;
        instructions.style.position = 'absolute';
        instructions.style.top = '0';
        instructions.style.left = '0';
        instructions.style.width = '100%';
        instructions.style.height = '100%';
        instructions.style.display = 'flex';
        instructions.style.flexDirection = 'column';
        instructions.style.justifyContent = 'center';
        instructions.style.alignItems = 'center';
        instructions.style.color = 'white';
        instructions.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        instructions.style.fontFamily = 'Arial, sans-serif';
        instructions.style.zIndex = '100';
        instructions.style.cursor = 'pointer';
        instructions.style.textAlign = 'center';
        
        this.instructions = instructions;
        container.appendChild(instructions);
        
        // Click to dismiss instructions
        instructions.addEventListener('click', () => {
            if (window.DEBUG_MODE) {
                log('Instructions clicked, initializing player', 'debug');
            }
            this.hideInstructions();
            if (this.game.player) {
                this.game.player.onInstructionsDismissed();
            }
        });
    }
    
    showInstructions() {
        if (this.instructions) {
            this.instructions.style.display = 'flex';
        }
    }
    
    hideInstructions() {
        if (this.instructions) {
            this.instructions.style.display = 'none';
            
            // Reset mouse position tracking
            this.prevMouseX = 0;
            this.prevMouseY = 0;
        }
    }
    
    getKeysState() {
        return {
            ...this.keys,
            moveForward: this.moveForward,
            moveBackward: this.moveBackward, 
            moveLeft: this.moveLeft,
            moveRight: this.moveRight
        };
    }
    
    /**
     * Get the current input state, including key states and actions
     * This method is used by the physics system to determine movement
     * @returns {Object} Input state object
     */
    getInputState() {
        const keyState = this.getKeysState();
        
        // Create a standard format for input that physics components can use
        return {
            keys: keyState,
            actions: {
                jump: this.keys.space || false,
                sprint: this.keys.shift || false
            },
            // Add additional properties that might be needed by physics
            isFirstPerson: this.isFirstPerson
        };
    }
    
    getCameraOrbitState() {
        return {
            cameraAngle: this.cameraAngle,
            cameraAngleY: this.cameraAngleY,
            targetCameraAngle: this.targetCameraAngle,
            targetCameraAngleY: this.targetCameraAngleY
        };
    }
    
    updateCameraOrbit(angles) {
        this.cameraAngle = angles.cameraAngle ?? this.cameraAngle;
        this.cameraAngleY = angles.cameraAngleY ?? this.cameraAngleY;
        this.targetCameraAngle = angles.targetCameraAngle ?? this.targetCameraAngle;
        this.targetCameraAngleY = angles.targetCameraAngleY ?? this.targetCameraAngleY;
    }
    
    setupKeyboardListeners() {
        // Keyboard events
        document.addEventListener('keydown', (event) => {
            if (this.controlsEnabled) {
                this.handleKeyDown(event);
            }
            
            // Add diagnostics key (uppercase D) that works even if controls are disabled
            if (event.key === 'D' && event.shiftKey) {
                console.log('%c🔍 Diagnostics key pressed', 'color: #ff0; background: #33a; padding: 3px;');
                if (this.game && typeof this.game.diagnosePlayerState === 'function') {
                    this.game.diagnosePlayerState();
                }
            }
        });
        
        document.addEventListener('keyup', (event) => {
            if (this.controlsEnabled) {
                this.handleKeyUp(event);
            }
        });
    }
}

export { InputManager }; 