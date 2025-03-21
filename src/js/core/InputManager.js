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
        
        console.log('InputManager created - FP mode:', this.isFirstPerson);
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        if (!this.container) {
            console.error('InputManager: container is null, cannot setup event listeners');
            return;
        }
        
        console.log('Setting up InputManager event listeners');
        
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
        document.addEventListener('keydown', (event) => this.handleKey(event, true));
        document.addEventListener('keyup', (event) => this.handleKey(event, false));
        
        // Pointer lock change event
        document.addEventListener('pointerlockchange', () => {
            console.log('Pointer lock state changed:', !!document.pointerLockElement);
        });
        
        // Pointer lock error event
        document.addEventListener('pointerlockerror', () => {
            console.error('Pointer lock error');
        });
        
        console.log('InputManager event listeners setup complete');
    }
    
    handleMouseDown(event) {
        console.log('Mouse down in InputManager');
        
        // Request pointer lock specifically when in first-person mode
        if (this.isFirstPerson && this.container) {
            if (document.pointerLockElement !== this.container) {
                console.log('Requesting pointer lock for first-person mode');
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
                console.log('Initializing player controls from mouse down');
                this.game.player.onInstructionsDismissed();
            }
        }
        
        this.isMouseDown = true;
        this.prevMouseX = event.clientX;
        this.prevMouseY = event.clientY;
    }
    
    handleMouseUp(event) {
        console.log('Mouse up in InputManager');
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
    
    handleKey(event, pressed) {
        const key = event.code;
        
        // Debug key events occasionally (but only on keydown)
        const isMovementKey = key === 'KeyW' || key === 'KeyA' || key === 'KeyS' || key === 'KeyD';
        
        // Enhanced logging for WASD keys to debug movement issues
        if (isMovementKey) {
            console.log(`%c 🎮 KEY ${pressed ? 'PRESSED' : 'RELEASED'}: ${key} - Active player: ${this.game.player?.id || 'none'}`, 
                        'background: #335; color: #afa; padding: 2px 5px;');
            
            // Check all necessary components for movement to work
            if (pressed) {
                const hasPlayer = !!this.game.player;
                const isLocalPlayer = hasPlayer && !!this.game.player.isLocal;
                const isActivePlayer = hasPlayer && !!this.game.player.isActive;
                const hasMovement = hasPlayer && !!this.game.player.movement;
                const hasPhysics = hasPlayer && !!this.game.player.physics;
                
                console.log(`%c 🎮 Movement components check:`, 'color: #afa;', {
                    hasPlayer,
                    isLocalPlayer,
                    isActivePlayer,
                    hasMovement,
                    hasPhysics,
                    keyState: {...this.keys}
                });
            }
        } else if (pressed && 
            (key === 'KeyT' || key === 'KeyG' || key === 'Digit1' || key === 'Digit2' || key === 'KeyD')) {
            console.log('%c 🔑 KEY PRESSED: ' + key, 'background: #335; color: #fff; padding: 2px 5px;');
            console.log('%c Current active player:', 'color: #aaf;', 
                        this.game.player ? `${this.game.player.id} (${this.game.player.team})` : 'none');
        }
        
        // Update key state
        if (key === 'KeyW') {
            this.keys.w = pressed;
            this.moveForward = pressed;
            // Force immediate input update
            if (this.game.player && this.game.player.isLocal && this.game.player.isActive) {
                console.log(`%c 🎮 W key ${pressed ? 'PRESSED' : 'RELEASED'}: ${this.keys.w}`, 'color: #afa;');
            }
        } else if (key === 'KeyA') {
            this.keys.a = pressed;
            this.moveLeft = pressed;
            // Force immediate input update
            if (this.game.player && this.game.player.isLocal && this.game.player.isActive) {
                console.log(`%c 🎮 A key ${pressed ? 'PRESSED' : 'RELEASED'}: ${this.keys.a}`, 'color: #afa;');
            }
        } else if (key === 'KeyS') {
            this.keys.s = pressed;
            this.moveBackward = pressed;
            // Force immediate input update
            if (this.game.player && this.game.player.isLocal && this.game.player.isActive) {
                console.log(`%c 🎮 S key ${pressed ? 'PRESSED' : 'RELEASED'}: ${this.keys.s}`, 'color: #afa;');
            }
        } else if (key === 'KeyD') {
            this.keys.d = pressed;
            this.moveRight = pressed;
            // Force immediate input update
            if (this.game.player && this.game.player.isLocal && this.game.player.isActive) {
                console.log(`%c 🎮 D key ${pressed ? 'PRESSED' : 'RELEASED'}: ${this.keys.d}`, 'color: #afa;');
            }
        }
        
        // Only handle special keys on keydown (not keyup)
        if (!pressed) return;
        
        // Handle special key presses
        if (key === 'KeyT') {
            console.log('%c 🔄 T KEY PRESSED: Switching player/mode', 'background: blue; color: white; padding: 3px;');
            // Toggle between player modes (for testing purposes)
            if (this.game.switchPlayerMode) {
                const oldMode = this.game.gameMode;
                const newMode = this.game.switchPlayerMode();
                console.log('%c Mode switched: ' + oldMode + ' → ' + newMode, 'color: blue;');
                
                // Debug current active player after switch
                setTimeout(() => {
                    console.log('%c After T key - Current active player:', 'color: #ccf;', 
                              this.game.player ? `${this.game.player.id} (${this.game.player.team})` : 'none');
                }, 200);
            }
        } else if (key === 'Escape') {
            this.showInstructions();
        } else if (key === 'KeyD') {
            // Check if Shift+D for enhanced diagnostics
            if (event.shiftKey) {
                console.log('%c 🔍 SHIFT+D KEY PRESSED: Running ENHANCED player state diagnosis', 
                           'background: #ff0; color: black; font-weight: bold; padding: 5px;');
                
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
                } else {
                    console.log('%c ❌ diagnosePlayerState function not found on game object', 'color: red');
                }
            } else {
                // Regular D key - standard diagnosis
                console.log('%c 🔍 D KEY PRESSED: Running player state diagnosis', 'background: yellow; color: black; padding: 3px;');
                if (this.game.diagnosePlayerState) {
                    this.game.diagnosePlayerState();
                } else {
                    console.log('%c ❌ diagnosePlayerState function not found on game object', 'color: red');
                }
            }
        }
        
        // Multiplayer and God Mode controls
        else if (key === 'KeyG') {
            console.log('%c 🔮 G KEY PRESSED: Toggling God Mode', 'background: purple; color: white; padding: 3px;');
            // Toggle God Mode
            if (this.game.toggleGodMode) {
                const godModeState = this.game.toggleGodMode();
                console.log('%c God Mode is now: ' + (godModeState ? 'ON' : 'OFF'), 'color: purple;');
            } else {
                console.log('%c ❌ toggleGodMode function not found on game object', 'color: red');
            }
        } else if (key === 'Digit1') {
            console.log('%c 🐰 1 KEY PRESSED: Spawning Jackalope', 'background: green; color: white; padding: 3px;');
            // Spawn a Jackalope
            if (this.game.isGodMode) {
                const newPlayer = this.spawnPlayerForTeam('jackalope');
                console.log('%c New jackalope spawned:', 'color: green;', newPlayer ? newPlayer.id : 'failed');
            } else {
                console.log('%c ❌ Cannot spawn Jackalope - God Mode is disabled', 'color: red');
            }
        } else if (key === 'Digit2') {
            console.log('%c 👤 2 KEY PRESSED: Spawning Merc', 'background: orange; color: white; padding: 3px;');
            // Spawn a Merc
            if (this.game.isGodMode) {
                const newPlayer = this.spawnPlayerForTeam('merc');
                console.log('%c New merc spawned:', 'color: orange;', newPlayer ? newPlayer.id : 'failed');
                
                // Debug the current active player after spawning
                setTimeout(() => {
                    console.log('%c After spawning - Active player:', 'color: #ffa;', 
                              this.game.player ? `${this.game.player.id} (${this.game.player.team})` : 'none');
                }, 100);
            } else {
                console.log('%c ❌ Cannot spawn Merc - God Mode is disabled', 'color: red');
            }
        } else if (key === 'KeyP') {
            console.log('%c ℹ️ P KEY PRESSED: Showing Player Info', 'background: teal; color: white; padding: 3px;');
            // Toggle player info overlay
            if (this.game.addPlayerInfoOverlay) {
                this.game.addPlayerInfoOverlay();
            } else {
                console.log('%c ❌ addPlayerInfoOverlay function not found on game object', 'color: red');
            }
        }
    }
    
    /**
     * Spawn a test player for the specified team
     * @param {string} team - 'jackalope' or 'merc'
     */
    spawnPlayerForTeam(team, options = {}) {
        console.log(`%c🔄 InputManager.spawnPlayerForTeam called with team=${team}`, 'color: #ff9; background: #333; padding: 3px;');
        
        // Normalize team and generate player ID
        team = String(team);
        const id = `${team}_${this.playerIdCounter++}`;
        
        // Create player options object with explicit local and active settings
        const playerOptions = {
            ...options,
            team,
            id,
            isLocal: true,  // CRITICAL: Explicitly set isLocal to true
            isActive: true, // CRITICAL: Explicitly set isActive to true
        };
        
        // SUPER IMPORTANT: Set these as literals, not variables or references
        Object.defineProperty(playerOptions, 'isLocal', { 
            value: true, 
            writable: false, 
            configurable: false 
        });
        Object.defineProperty(playerOptions, 'isActive', { 
            value: true, 
            writable: false, 
            configurable: false 
        });
        
        console.log(`%c📦 FINAL Player options before creation:`, 'color: #afa;');
        console.log('%c  team: ' + playerOptions.team, 'color: #afa;');
        console.log('%c  id: ' + playerOptions.id, 'color: #afa;');
        console.log('%c  isLocal: ' + playerOptions.isLocal, 'color: #afa; font-weight: bold;');
        console.log('%c  isActive: ' + playerOptions.isActive, 'color: #afa; font-weight: bold;');
        
        // Create a brand new object with copies of these values to prevent reference issues
        const finalOptions = {
            team: String(team),
            id: String(id),
            isLocal: true, 
            isActive: true
        };
        
        // Add more paranoid logging before calling createNewPlayer
        console.log(`%c⚠️ SANITY CHECK: final options REALLY ARE:`, 'color: #ff0; background: #505; padding: 3px;');
        console.log(`isLocal type: ${typeof finalOptions.isLocal}, value: ${finalOptions.isLocal}`);
        console.log(`isActive type: ${typeof finalOptions.isActive}, value: ${finalOptions.isActive}`);
        
        // CRITICAL FIX: Call createNewPlayer with a single options parameter, not multiple params
        console.log(`%c🔶 About to call game.createNewPlayer with these options:`, 'background: #550; color: #fff; padding: 3px;');
        console.log(finalOptions);
        
        const player = this.game.createNewPlayer(finalOptions);
        
        // Triple-check: force these values after creation
        if (player) {
            console.log(`%c✅ Player created: ${player.id} (team: ${player.team})`, 'color: #afa;');
            
            // CRITICAL: Force-set these values after creation
            player.isLocal = true;
            player.isActive = true;
            
            // CRITICAL: Force-set the game's active player
            this.game.player = player; // This is the property used in Game.js
            
            // CRITICAL: Force-call setActivePlayer to update all dependencies
            this.game.setActivePlayer(player);
            
            // Check if the update took effect
            console.log(`%c👀 Player state after creation: isLocal=${player.isLocal}, isActive=${player.isActive}`, 
                        'color: #ffa; background: #333; padding: 3px;');
            console.log(`%c👀 Game active player: ${this.game.player ? this.game.player.id : 'none'}`, 
                        'color: #ffa; background: #333; padding: 3px;');
                        
            // Run game diagnostics 
            if (typeof this.game.diagnosePlayerState === 'function') {
                this.game.diagnosePlayerState();
            }
            
            // Set a timeout to check player state again after a short delay
            setTimeout(() => {
                console.log(`%c⏱️ Delayed check - Player ${player.id} state: isLocal=${player.isLocal}, isActive=${player.isActive}`, 
                           'color: #ffa; background: #333; padding: 3px;');
                console.log(`%c⏱️ Delayed check - Game active player: ${this.game.player ? this.game.player.id : 'none'}`, 
                           'color: #ffa; background: #333; padding: 3px;');
                if (typeof this.game.diagnosePlayerState === 'function') {
                    this.game.diagnosePlayerState(true); // Force fix any issues
                }
            }, 500);
        } else {
            console.error(`Failed to create player for team ${team}`);
        }
        
        return player;
    }
    
    addInstructions(container) {
        console.log('Adding instructions overlay');
        
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
            console.log('Instructions clicked, hiding and initializing player');
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