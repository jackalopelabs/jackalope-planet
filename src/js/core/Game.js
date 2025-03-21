import * as THREE from 'three';
import { AssetLoader } from './AssetLoader';
import { InputManager } from './InputManager';
import { BunnyPlayer } from '../players/BunnyPlayer';
import { HumanPlayer } from '../players/HumanPlayer';
import { World } from '../world/World';
import { Networking } from '../utils/Networking';

export class Game {
    constructor(containerId) {
        console.log('Game: Constructor called with containerId:', containerId);
        this.containerId = containerId;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.clock = new THREE.Clock();
        
        // Game components
        this.world = null;
        this.player = null; // Current active player
        this.players = []; // Array of all players in the game
        this.inputManager = null;
        this.assetLoader = null;
        this.container = null;
        this.networking = null;
        
        // Multiplayer properties
        this.isMultiplayerEnabled = false;
        this.isGodMode = true; // Admin mode to switch between players
        this.localPlayerId = null;
        
        // Game state
        this.gameMode = 'third_person'; // Will be determined/assigned for asymmetrical gameplay
        console.log('Game: Initial game mode:', this.gameMode);
        
        this._isTogglingMode = false;
        
        this.init();
    }
    
    init() {
        console.log('Game: Starting initialization');
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with ID '${this.containerId}' not found`);
            return;
        }
        
        this.container = container;
        container.style.backgroundColor = '#050520';
        
        // Setup scene, camera, renderer
        this.setupRenderer(container);
        
        // Initialize asset loader first
        try {
            // Initialize asset loader and world
            console.log('Game: Creating AssetLoader');
            this.assetLoader = new AssetLoader();
            console.log('Game: Creating World');
            this.world = new World(this.scene);
            
            // Initialize networking
            this.networking = new Networking();
            
            // Setup input manager with instructions
            this.setupInputManager(container);
            
            // Set up event listeners
            window.addEventListener('resize', () => this.handleResize());
            document.addEventListener('fullscreenchange', () => this.handleResize());
            
            // Ensure initial size is correct
            this.handleResize();
            
            // Start animation loop
            this.animate();
        } catch (error) {
            console.error('Error initializing game:', error);
        }
    }
    
    setupRenderer(container) {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x050520);
        
        this.camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 5, 5);
        
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            powerPreference: 'high-performance' // Request high performance GPU
        });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        
        // Enable shadow maps for the renderer with higher quality
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows
        this.renderer.physicallyCorrectLights = true; // Use physically correct lighting model
        this.renderer.outputEncoding = THREE.sRGBEncoding; // Correct output encoding for better colors
        
        // Set pixel ratio for better rendering on high-DPI displays (but limit for performance)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        console.log('[DEBUG] Renderer initialized with shadows:', this.renderer.shadowMap.enabled);
        
        container.appendChild(this.renderer.domElement);
    }
    
    setupInputManager(container) {
        // Create input manager
        this.inputManager = new InputManager(this, container);
        
        // Add instructions overlay
        this.inputManager.addInstructions(container);
        
        // Create player only after input manager is fully set up
        this.createNewPlayer();
    }
    
    createPlayer() {
        // This is now a legacy method that calls createNewPlayer
        // Keep for backward compatibility
        this.createNewPlayer();
    }
    
    /**
     * Create a new player and add to the game
     * @param {Object} options - Player options
     * @param {string} options.team - 'jackalope' or 'merc'
     * @param {string} options.id - Player identifier
     * @param {boolean} options.isLocal - Whether this is a local player
     * @param {boolean} options.isActive - Whether this player is active
     * @returns {Player} The created player instance
     */
    createNewPlayer(options = {}) {
        console.log('%c PLAYER CREATE - Original input options:', 'background: #222; color: #ff0; padding: 5px;');
        console.log(options);
        
        // CRITICAL FIX: Create a clean copy of options to prevent external modification
        // and directly access keys of options with safety checks
        const isLocalValue = options.isLocal === true || options.isLocal === 'true';
        const isActiveValue = options.isActive === true || options.isActive === 'true';
        
        // Create a new clean options object
        const playerOptions = {
            team: options.team || (this.gameMode === 'first_person' ? 'merc' : 'jackalope'),
            id: options.id || `player_${Math.floor(Math.random() * 10000)}`,
            // CRITICAL FIX: Default initial player must be isLocal=true, otherwise no player will get input
            isLocal: isLocalValue || this.players.length === 0, // First player is local by default
            isActive: isActiveValue || this.players.length === 0 // First player is active by default
        };
        
        // SUPER CRITICAL: Force values for special merc players
        if (playerOptions.team === 'merc' && playerOptions.id && playerOptions.id.startsWith('merc_')) {
            console.log('%c 🛑 CRITICAL: Detected Merc player - forcing isLocal=true, isActive=true', 
                       'background: #f00; color: white; font-weight: bold; padding: 5px;');
            playerOptions.isLocal = true;
            playerOptions.isActive = true;
        }
        
        // CRITICAL FIX: Force first player to always be local
        if (this.players.length === 0) {
            console.log('%c 🛑 CRITICAL: This is the first player - forcing isLocal=true, isActive=true', 
                       'background: #f00; color: white; font-weight: bold; padding: 5px;');
            playerOptions.isLocal = true;
            playerOptions.isActive = true;
        }
        
        console.log('%c PLAYER CREATE - FINAL options after processing:', 'background: #222; color: #0f0; padding: 5px;');
        console.log(playerOptions);
        
        // Determine player type based on team
        const isFirstPerson = playerOptions.team === 'merc';
        if (isFirstPerson) {
            this.gameMode = 'first_person';
        } else {
            this.gameMode = 'third_person';
        }
        
        console.log('Game: Creating player with team:', playerOptions.team, 'isFirstPerson:', isFirstPerson);
        
        // Ensure AssetLoader is initialized
        if (!this.assetLoader) {
            console.error('Game: AssetLoader not initialized!');
            return null;
        }
        
        // Create player based on team
        let newPlayer = null;
        
        try {
            if (playerOptions.team === 'merc') {
                console.log('Game: Creating Merc (Human) player');
                
                // CRITICAL FIX: Pass the isLocal and isActive values directly from our clean options object
                newPlayer = new HumanPlayer(this, {
                    isFirstPerson: true,
                    physics: { gravity: 9.8 },
                    movement: { movementSpeed: 5 },
                    controls: { 
                        sensitivity: 0.002, 
                        invertY: false,
                        firstPersonMode: true
                    },
                    isLocal: playerOptions.isLocal,  // DIRECT ACCESS
                    isActive: playerOptions.isActive  // DIRECT ACCESS
                });
                
                console.log('Game: Human player created');
            } else {
                console.log('Game: Creating Jackalope (Bunny) player');
                
                // CRITICAL FIX: Pass the isLocal and isActive values directly from our clean options object
                newPlayer = new BunnyPlayer(this, {
                    physics: { gravity: 7.5 },
                    movement: { movementSpeed: 7 },
                    controls: { sensitivity: 0.0025 },
                    isLocal: playerOptions.isLocal,  // DIRECT ACCESS
                    isActive: playerOptions.isActive  // DIRECT ACCESS
                });
                
                console.log('Game: Bunny player created');
            }
            
            // CRITICAL: Directly set these properties on the player
            if (newPlayer) {
                Object.defineProperty(newPlayer, 'id', { 
                    value: playerOptions.id,
                    writable: false 
                });
                
                Object.defineProperty(newPlayer, 'team', { 
                    value: playerOptions.team,
                    writable: false 
                });
                
                // Force set these values
                newPlayer.isLocal = playerOptions.isLocal;
                newPlayer.isActive = playerOptions.isActive;
                
                console.log(`Game: Player created with id=${newPlayer.id}, team=${newPlayer.team}, isLocal=${newPlayer.isLocal}, isActive=${newPlayer.isActive}`);
            }
            
            // Initialize physics with scene access for terrain detection
            if (newPlayer.physics && typeof newPlayer.physics.setScene === 'function') {
                console.log('Game: Setting up player physics');
                newPlayer.physics.setScene(this.scene);
            }
            
            // Add to players array
            this.players.push(newPlayer);
            console.log(`Game: Added player to players array. Count: ${this.players.length}`);
            
            // If this is the local player, save the ID
            if (playerOptions.isLocal) {
                this.localPlayerId = newPlayer.id;
            }
            
            // CRITICAL FIX: If this needs to be the active player
            if (playerOptions.isActive) {
                console.log(`Game: Setting player ${newPlayer.id} as active because isActive=${playerOptions.isActive}`);
                
                // Deactivate any existing active player
                if (this.player && this.player !== newPlayer) {
                    console.log(`Game: Deactivating previous active player: ${this.player.id}`);
                    this.player.isActive = false;
                }
                
                // Set this as the active player before calling setActivePlayer
                this.setActivePlayer(newPlayer);
            }
            
            // Initialize controls immediately if instructions are not shown
            if (this.inputManager && 
                this.inputManager.instructions && 
                this.inputManager.instructions.style.display === 'none' &&
                newPlayer.isLocal) {
                
                console.log('Game: Auto-initializing player controls');
                newPlayer.onInstructionsDismissed();
            }
            
            return newPlayer;
        } catch (error) {
            console.error('Error creating player:', error);
            return null;
        }
    }
    
    /**
     * Set the active player
     * @param {Player|string} player - Player instance or player ID
     */
    setActivePlayer(player) {
        // Add extra defensive check
        if (!player) {
            console.error(`%c⚠️ Cannot set null/undefined as active player!`, 'background: red; color: white; padding: 5px;');
            return;
        }
    
        // If player is a string (ID), find the player instance
        let playerInstance = player;
        if (typeof player === 'string') {
            playerInstance = this.players.find(p => p.id === player);
            if (!playerInstance) {
                console.error(`%c⚠️ Game: Player with ID ${player} not found`, 'background: red; color: white; padding: 5px;');
                return;
            }
        }
        
        // Add defensive check for player instance
        if (!playerInstance) {
            console.error(`%c⚠️ Cannot set invalid player as active player!`, 'background: red; color: white; padding: 5px;');
            return;
        }
        
        // CRITICAL: If this is a merc player, double check it has local and active flags set properly
        if (playerInstance.team === 'merc' && playerInstance.id && playerInstance.id.startsWith('merc_')) {
            console.log(`%c⚠️ Merc player being activated, ENSURING isLocal=true and isActive=true`, 
                       'background: #f70; color: black; padding: 3px; font-weight: bold;');
            playerInstance.isLocal = true; // Extra enforcement
        }
        
        // Log previous active player for debugging
        const oldPlayer = this.player;
        console.log('%c 🔀 SWITCHING ACTIVE PLAYER', 'background: #553; color: #ffa; font-size: 14px;');
        console.log('%c From:', 'color: #faa;', oldPlayer ? `${oldPlayer.id} (${oldPlayer.team})` : 'none');
        console.log('%c To:', 'color: #afa;', `${playerInstance.id} (${playerInstance.team})`);
        
        // CRITICAL FIX: First deactivate ALL players to ensure clean state
        this.players.forEach(p => {
            if (p !== playerInstance && p.isActive) {
                console.log(`%c Deactivating player: ${p.id}`, 'color: #f88;');
                p.isActive = false;
            }
        });
        
        // Set as the active player
        this.player = playerInstance;
        
        // CRITICAL FIX: Use Object.defineProperty to lock this value
        try {
            // First set the value directly for maximum compatibility
            this.player.isActive = true;
            
            // Then try to make it non-writable to protect it
            Object.defineProperty(this.player, 'isActive', {
                value: true,
                writable: true,  // Keep writable so it can be toggled if needed
                configurable: true
            });
            
            console.log(`%c ✅ Set active player to: ${this.player.id}, isActive=${this.player.isActive}`, 
                       'background: #050; color: white; padding: 3px;');
        } catch (err) {
            console.log(`%c ⚠️ Could not lock isActive property: ${err.message}`, 'color: orange;');
            // Fallback: Just set the property directly again
            this.player.isActive = true;
        }
        
        // Update game mode based on player type
        const oldGameMode = this.gameMode;
        this.gameMode = this.player.team === 'merc' ? 'first_person' : 'third_person';
        
        if (oldGameMode !== this.gameMode) {
            console.log(`%c Game mode updated: ${oldGameMode} → ${this.gameMode}`, 'color: #faf;');
        }
        
        // CRITICAL FIX: Cancel any pending camera timeouts
        if (this._cameraActivationTimeout) {
            clearTimeout(this._cameraActivationTimeout);
            this._cameraActivationTimeout = null;
        }
        
        // CRITICAL FIX: EXPLICITLY set additional properties that should match the active state
        if (this.player.team === 'merc') {
            console.log(`%c 👁️ Setting first-person camera and controls for Merc player`, 'color: #aff;');
            // Set first person properties
            if (this.inputManager) {
                this.inputManager.isFirstPerson = true;
            }
        } else {
            console.log(`%c 👁️ Setting third-person camera and controls for Jackalope player`, 'color: #aff;');
            // Set third person properties
            if (this.inputManager) {
                this.inputManager.isFirstPerson = false;
            }
        }
        
        // CRITICAL FIX: First determine which camera to use
        let targetCamera = null;
        if (this.gameMode === 'first_person' && this.player.fpCamera) {
            targetCamera = this.player.fpCamera;
            console.log(`%c Will use first-person camera: ${targetCamera.uuid}`, 'color: #9f9;');
        } else if (this.player.camera) {
            targetCamera = this.player.camera;
            console.log(`%c Will use third-person camera: ${targetCamera.uuid}`, 'color: #9f9;');
        } else {
            console.warn('No suitable camera found for player, using default game camera');
            targetCamera = this.camera;
        }
        
        // CRITICAL FIX: Set camera immediately and then also with a small delay
        // to account for any async camera creation
        if (targetCamera) {
            // Immediate setting
            this.setActiveCamera(targetCamera);
            
            // Also set after a delay to ensure camera is fully set up
            this._cameraActivationTimeout = setTimeout(() => {
                // Verify camera still exists and player is still active
                if (this.player === playerInstance && this.player.isActive) {
                    // Check again which camera to use (it might have been created in the meantime)
                    let finalCamera = null;
                    if (this.gameMode === 'first_person' && this.player.fpCamera) {
                        finalCamera = this.player.fpCamera;
                    } else if (this.player.camera) {
                        finalCamera = this.player.camera;
                    } else {
                        finalCamera = this.camera;
                    }
                    
                    // Set the camera
                    this.setActiveCamera(finalCamera);
                    console.log(`%c Final camera set: ${finalCamera.uuid}`, 'color: #9f9;');
                    
                    // Request pointer lock for first-person mode with retries
                    if (this.gameMode === 'first_person') {
                        this.requestPointerLockWithRetry();
                    }
                } else {
                    console.warn('Player is no longer active, skipping delayed camera activation');
                }
            }, 100); // Slightly longer delay to ensure camera creation
        }
        
        // CRITICAL FIX: Reset input manager state for clean new input
        if (this.inputManager) {
            // Update first-person flag
            this.inputManager.isFirstPerson = (this.gameMode === 'first_person');
            
            // Reset all keys and movement states
            this.inputManager.keys = { w: false, a: false, s: false, d: false };
            this.inputManager.moveForward = false;
            this.inputManager.moveBackward = false;
            this.inputManager.moveLeft = false;
            this.inputManager.moveRight = false;
            
            console.log(`%c Reset input manager - isFirstPerson: ${this.inputManager.isFirstPerson}`, 'color: #afa;');
        }
        
        // Update player info overlay
        this.addPlayerInfoOverlay();
        
        // Run a diagnostic after a small delay to verify the switch
        setTimeout(() => this.diagnosePlayerState(), 200);
        
        return this.player;
    }
    
    /**
     * Helper method to request pointer lock with retry logic
     */
    requestPointerLockWithRetry(attempts = 0, maxAttempts = 5) {
        if (!this.container || attempts >= maxAttempts) {
            if (attempts >= maxAttempts) {
                console.warn(`%c Failed to acquire pointer lock after ${maxAttempts} attempts`, 'color: #f88;');
            }
            return;
        }
        
        // Only request if not already locked
        if (document.pointerLockElement !== this.container) {
            console.log(`%c 🔒 Requesting pointer lock (attempt ${attempts + 1})`, 'color: #afa;');
            
            try {
                this.container.requestPointerLock();
                
                // Check if it worked after a small delay
                setTimeout(() => {
                    if (document.pointerLockElement !== this.container) {
                        console.log(`%c Pointer lock attempt ${attempts + 1} failed, retrying...`, 'color: #f88;');
                        this.requestPointerLockWithRetry(attempts + 1, maxAttempts);
                    } else {
                        console.log('%c ✅ Pointer lock acquired successfully', 'color: #8f8;');
                    }
                }, 100);
            } catch (e) {
                console.error('Error requesting pointer lock:', e);
            }
        }
    }
    
    /**
     * Find a player by ID
     * @param {string} id - Player ID
     * @returns {Player|null} Player instance or null if not found
     */
    getPlayerById(id) {
        return this.players.find(p => p.id === id) || null;
    }
    
    /**
     * Remove a player from the game
     * @param {string} playerId - ID of the player to remove
     */
    removePlayer(playerId) {
        const playerIndex = this.players.findIndex(p => p.id === playerId);
        if (playerIndex === -1) {
            console.error(`Game: Player with ID ${playerId} not found`);
            return;
        }
        
        // Get the player instance
        const player = this.players[playerIndex];
        
        // Clean up the player
        player.cleanup();
        
        // Remove from players array
        this.players.splice(playerIndex, 1);
        console.log(`Game: Removed player ${playerId}. Remaining: ${this.players.length}`);
        
        // If this was the active player, set a new active player
        if (this.player === player && this.players.length > 0) {
            this.setActivePlayer(this.players[0]);
        }
    }
    
    /**
     * Switch to the next player (for God Mode)
     */
    cycleToNextPlayer() {
        console.log('%c 🔄 ATTEMPTING TO CYCLE TO NEXT PLAYER - isGodMode:', 'color: #9900ff; font-size: 14px;', this.isGodMode);
        
        // Only works in God Mode
        if (!this.isGodMode) {
            console.log('%c ❌ God Mode is disabled, cannot cycle players', 'color: red');
            return this.gameMode;
        }
        
        // If no players, do nothing
        if (this.players.length === 0) {
            console.log('%c ❌ No players to cycle through', 'color: red');
            return this.gameMode;
        }
        
        // Find current player index
        const currentIndex = this.players.indexOf(this.player);
        console.log(`Current player index: ${currentIndex}, Total players: ${this.players.length}`);
        
        // Get next player index (circular)
        const nextIndex = (currentIndex + 1) % this.players.length;
        
        // Debug: Log all players and their IDs before switching
        console.log('%c 📊 Available players before switching:', 'background: #333; color: #0ff;');
        this.players.forEach((p, idx) => {
            console.log(`%c Player ${idx}: id=${p.id}, team=${p.team}, isLocal=${p.isLocal}, active=${p === this.player}`, 
                        p === this.player ? 'color: yellow; font-weight: bold;' : 'color: #aaa;');
        });
        
        // CRITICAL FIX: Make sure the current player knows it's no longer active
        if (this.player) {
            console.log(`%c 📊 Setting current player ${this.player.id} to inactive`, 'color: #f88;');
            this.player.isActive = false;
        }
        
        // Set next player as active
        this.setActivePlayer(this.players[nextIndex]);
        
        // CRITICAL FIX: Make sure the new player knows it's active
        if (this.player) {
            console.log(`%c 📊 Setting new player ${this.player.id} to active`, 'color: #8f8;');
            this.player.isActive = true;
        }
        
        console.log(`%c 🎮 Cycled to player ${this.player.id}, team: ${this.player.team}`, 'color: #00ff00');
        
        return this.gameMode;
    }
    
    switchPlayerMode() {
        // If in God Mode, cycle to next player instead of changing modes
        if (this.isGodMode && this.players.length > 1) {
            return this.cycleToNextPlayer();
        }
        
        // Toggle between game modes - keep a reference to what we're switching TO
        const previousMode = this.gameMode;
        const targetMode = this.gameMode === 'first_person' ? 'third_person' : 'first_person';
        this.gameMode = targetMode;
        
        console.log(`Switching player mode from ${previousMode} to ${this.gameMode}`);
        
        // Add a flag to prevent double-toggling
        if (this._isTogglingMode) {
            console.warn('Already toggling mode, ignoring redundant request');
            return this.gameMode;
        }
        
        this._isTogglingMode = true;
        
        // Properly clean up existing player
        if (this.player) {
            // First ensure any pointer lock is released for clean switching
            if (document.pointerLockElement && document.exitPointerLock) {
                document.exitPointerLock();
            }
            
            // Wait a small delay before cleanup to ensure pointer lock is released
            setTimeout(() => {
                // Clean up existing player
                this.player.cleanup();
                
                // Create new player with the toggled mode
                const newPlayerOptions = {
                    team: this.gameMode === 'first_person' ? 'merc' : 'jackalope',
                    id: this.player.id, // Keep same ID
                    isLocal: true,
                    isActive: true
                };
                this.createNewPlayer(newPlayerOptions);
                
                // Initialize physics with scene access for terrain detection
                if (this.player && this.player.physics && typeof this.player.physics.setScene === 'function') {
                    this.player.physics.setScene(this.scene);
                }
                
                // If switching to first-person, need to request pointer lock
                if (this.gameMode === 'first_person' && this.player) {
                    // Small delay to ensure player is fully initialized
                    setTimeout(() => {
                        if (this.container && document.pointerLockElement !== this.container) {
                            console.log('Requesting pointer lock after switching to first-person mode');
                            this.container.requestPointerLock();
                        }
                    }, 100);
                }
                
                // Update input manager's firstPerson flag if it exists
                if (this.inputManager) {
                    this.inputManager.isFirstPerson = (this.gameMode === 'first_person');
                }
                
                // Reset the toggling flag after a safe amount of time
                setTimeout(() => {
                    this._isTogglingMode = false;
                }, 500);
            }, 50);
        } else {
            this.createNewPlayer();
            
            // Reset the toggling flag after a safe amount of time
            setTimeout(() => {
                this._isTogglingMode = false;
            }, 500);
        }
        
        return this.gameMode;
    }
    
    handleResize() {
        if (!this.container || !this.camera || !this.renderer) return;
        
        // Update renderer size
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.renderer.setSize(width, height);
        
        // Update camera aspect ratio
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        
        // Update all player cameras
        this.players.forEach(player => {
            if (player.camera) {
                player.camera.aspect = width / height;
                player.camera.updateProjectionMatrix();
            }
            
            if (player.fpCamera) {
                player.fpCamera.aspect = width / height;
                player.fpCamera.updateProjectionMatrix();
            }
        });
        
        console.log('Resized renderer and camera:', width, 'x', height);
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const delta = this.clock.getDelta();
        
        // DIAGNOSTIC: Occasionally run a full diagnosis of the player state
        if (Math.random() < 0.005) { // About once every 200 frames
            this.diagnosePlayerState();
        }
        
        // Debug: Occasionally log active player state with MUCH MORE VISIBLE output
        if (Math.random() < 0.02) { // Increased frequency - approximately once every 50 frames
            console.log(
                '%c 🎯 GAME ANIMATION LOOP - ACTIVE PLAYER:', 
                'background: #224; color: #ffa; font-size: 14px; padding: 5px;',
                this.player ? `${this.player.id} (${this.player.team})` : 'none'
            );
            
            // Add keyboard state info
            if (this.inputManager) {
                console.log(
                    '%c 🎮 KEYBOARD STATE:', 
                    'background: #242; color: #afa; padding: 3px;',
                    `W:${this.inputManager.keys.w ? '✅' : '❌'} ` +
                    `A:${this.inputManager.keys.a ? '✅' : '❌'} ` +
                    `S:${this.inputManager.keys.s ? '✅' : '❌'} ` +
                    `D:${this.inputManager.keys.d ? '✅' : '❌'}`
                );
            }
                      
            // CRITICAL FIX: Check for isActive mismatches across all players
            let foundActiveMismatch = false;
            this.players.forEach(player => {
                const shouldBeActive = (player === this.player);
                if (player.isActive !== shouldBeActive) {
                    console.log(`%c ⚠️ Player active state mismatch: ${player.id} (isActive=${player.isActive}, should be ${shouldBeActive})`, 
                                'background: red; color: white;');
                    foundActiveMismatch = true;
                    // Fix the mismatch
                    player.isActive = shouldBeActive;
                }
            });
            
            if (foundActiveMismatch) {
                console.log('%c ✅ Fixed player active state mismatches', 'color: #0f0;');
            }
        }
        
        // Update world
        if (this.world) {
            this.world.update(delta);
        }
        
        // CRITICAL FIX: Log which player is getting input with a MUCH MORE VISIBLE format
        if (Math.random() < 0.02 && this.player) { // Increased to once every 50 frames
            console.log(
                `%c 🎮 GAME SENDING INPUT TO: ${this.player.id} (${this.player.team})`, 
                'background: #050; color: #afa; font-size: 14px; padding: 5px;'
            );
        }
        
        // CRITICAL: Add special handling for Merc players
        let mercPlayerFound = false;
        let activeMercPlayer = null;
        
        // Update all players
        let playersWithErrors = 0;
        this.players.forEach(player => {
            try {
                // Track all merc players for extra handling
                if (player.team === 'merc' && player.id && player.id.startsWith('merc_')) {
                    if (player.isActive) {
                        mercPlayerFound = true;
                        activeMercPlayer = player;
                    }
                }
            
                // CRITICAL FIX: Ensure player.isActive matches the game's active player state
                if (player === this.player && !player.isActive) {
                    console.log(`%c 🛠️ Fixing active state for player: ${player.id}`, 'background: #a00; color: white; padding: 3px;');
                    player.isActive = true;
                } else if (player !== this.player && player.isActive) {
                    console.log(`%c 🛠️ Fixing inactive state for player: ${player.id}`, 'background: #a00; color: white; padding: 3px;');
                    player.isActive = false;
                }
                
                // Only update input for the active local player
                const isActiveLocal = (player === this.player && player.isLocal);
                
                // Debug: Occasionally log player processing status with MORE VISIBLE output
                if (Math.random() < 0.005 && this.players.length > 1) { // Rare but more visible
                    console.log(
                        `%c ${isActiveLocal ? '✅' : '❌'} Player: ${player.id} (${player.team}) - ${isActiveLocal ? 'WITH' : 'without'} input`,
                        `background: ${isActiveLocal ? '#252' : '#522'}; color: ${isActiveLocal ? '#afa' : '#faa'}; padding: 3px;`
                    );
                }
                
                // CRITICAL FIX: Wrap player update in try/catch to prevent game crashes
                try {
                    player.update(delta, isActiveLocal);
                } catch (error) {
                    playersWithErrors++;
                    console.error(`%c 🚨 ERROR updating player ${player.id}:`, 'background: red; color: white; padding: 3px;', error);
                    
                    // Log extra debugging info to help diagnose the issue
                    console.log('%c Debug info for failed player update:', 'color: orange;');
                    console.log('Player object:', player);
                    console.log('Player team:', player.team);
                    console.log('Player position:', player.position);
                    console.log('Has physics:', !!player.physics);
                    console.log('Has movement:', !!player.movement);
                    console.log('Has controls:', !!player.controls);
                    console.log('Is active local:', isActiveLocal);
                    
                    // Try to recover if possible - reinitialize components
                    if (!player.physics && typeof player.initPhysics === 'function') {
                        console.log(`%c 🔄 Attempting to recover player ${player.id} by reinitializing physics`, 'color: #aaf;');
                        try {
                            player.initPhysics();
                        } catch (e) {
                            console.error('Failed to recover player physics:', e);
                        }
                    }
                }
            } catch (error) {
                playersWithErrors++;
                console.error(`%c 🚨 CRITICAL ERROR in Game.animate with player ${player.id}:`, 'background: red; color: white; padding: 3px;', error);
            }
        });
        
        // Log if we had errors
        if (playersWithErrors > 0) {
            console.warn(`%c 📊 Game update had errors with ${playersWithErrors}/${this.players.length} players`, 'color: orange;');
        }
        
        // CRITICAL: Special case to force-update mercs if no active merc was found
        if (!mercPlayerFound && activeMercPlayer) {
            console.log(`%c 🚨 CRITICAL: No active Merc found but we have an inactive one: ${activeMercPlayer.id}`, 
                       'background: red; color: white; padding: 5px;');
            
            // Force activate the merc and make it active
            activeMercPlayer.isActive = true;
            activeMercPlayer.isLocal = true;
            this.player = activeMercPlayer;
            
            // Force an immediate update with input processing
            try {
                activeMercPlayer.update(delta, true);
            } catch (error) {
                console.error(`Failed to update forced merc player:`, error);
            }
        }
        
        // Render the scene with the active camera
        try {
            if (this.scene && this.camera && this.renderer) {
                this.renderer.render(this.scene, this.camera);
            }
        } catch (error) {
            console.error(`%c 🚨 ERROR in renderer:`, 'background: red; color: white; padding: 3px;', error);
        }
    }
    
    /**
     * Set the active camera for rendering
     * @param {THREE.Camera} camera - The camera to use for rendering
     */
    setActiveCamera(camera) {
        if (!camera) {
            console.error('setActiveCamera: camera is null or undefined');
            return;
        }
        
        console.log('Setting active camera:', camera.type, camera.uuid);
        
        // Save the camera reference
        this.camera = camera;
        
        // Update aspect ratio for the new camera
        if (this.container) {
            camera.aspect = this.container.clientWidth / this.container.clientHeight;
            camera.updateProjectionMatrix();
            console.log('Updated camera aspect ratio:', camera.aspect);
        } else {
            console.warn('Cannot update camera aspect ratio: container is null');
        }
    }
    
    /**
     * Add a debug overlay showing player info
     */
    addPlayerInfoOverlay() {
        // Create or update player info overlay
        if (!this.playerInfoOverlay) {
            this.playerInfoOverlay = document.createElement('div');
            this.playerInfoOverlay.style.position = 'absolute';
            this.playerInfoOverlay.style.top = '10px';
            this.playerInfoOverlay.style.left = '10px';
            this.playerInfoOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            this.playerInfoOverlay.style.color = 'white';
            this.playerInfoOverlay.style.padding = '10px';
            this.playerInfoOverlay.style.fontFamily = 'monospace';
            this.playerInfoOverlay.style.fontSize = '12px';
            this.playerInfoOverlay.style.zIndex = '1000';
            this.playerInfoOverlay.style.borderRadius = '5px';
            this.container.appendChild(this.playerInfoOverlay);
        }
        
        // Update overlay with player info
        const playerInfoHtml = `
            <div><strong>God Mode:</strong> ${this.isGodMode ? 'ON' : 'OFF'}</div>
            <div><strong>Players (${this.players.length}):</strong></div>
            ${this.players.map(p => {
                const isActive = p === this.player;
                return `<div style="${isActive ? 'color: yellow;' : ''}">
                    ${isActive ? '► ' : ''}
                    ${p.id} (${p.team}) ${p.isLocal ? '[LOCAL]' : '[REMOTE]'}
                </div>`;
            }).join('')}
        `;
        this.playerInfoOverlay.innerHTML = playerInfoHtml;
    }
    
    /**
     * Show a detailed debug overlay with complete game state
     * This is toggled by Shift+D
     */
    toggleDebugOverlay() {
        // If the diagnostic overlay exists, remove it
        if (this.diagnosticOverlay) {
            this.container.removeChild(this.diagnosticOverlay);
            this.diagnosticOverlay = null;
            console.log('%c 🔍 Debug overlay removed', 'color: #aaf;');
            return;
        }
        
        // Create the diagnostic overlay
        this.diagnosticOverlay = document.createElement('div');
        this.diagnosticOverlay.style.position = 'absolute';
        this.diagnosticOverlay.style.top = '50px';
        this.diagnosticOverlay.style.right = '10px';
        this.diagnosticOverlay.style.backgroundColor = 'rgba(0, 0, 40, 0.9)';
        this.diagnosticOverlay.style.color = 'white';
        this.diagnosticOverlay.style.padding = '15px';
        this.diagnosticOverlay.style.fontFamily = 'monospace';
        this.diagnosticOverlay.style.fontSize = '14px';
        this.diagnosticOverlay.style.zIndex = '1001';
        this.diagnosticOverlay.style.borderRadius = '8px';
        this.diagnosticOverlay.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        this.diagnosticOverlay.style.maxWidth = '500px';
        this.diagnosticOverlay.style.maxHeight = '80%';
        this.diagnosticOverlay.style.overflowY = 'auto';
        
        // Collect diagnostic information
        const activeCount = this.players.filter(p => p.isActive).length;
        const localCount = this.players.filter(p => p.isLocal).length;
        
        // Build comprehensive diagnostic HTML
        const diagnosticHtml = `
            <div style="text-align:center; margin-bottom:10px; color:#aaf; font-weight:bold; font-size:16px;">
                GAME DIAGNOSTIC OVERLAY
            </div>
            
            <div style="margin-bottom:15px; padding:8px; background:rgba(0,20,80,0.5); border-radius:5px;">
                <div style="color:#afa; font-weight:bold;">GAME STATE</div>
                <div>Game Mode: <span style="color:#ffa;">${this.gameMode}</span></div>
                <div>God Mode: <span style="color:#ffa;">${this.isGodMode ? 'ON' : 'OFF'}</span></div>
                <div>Total Players: <span style="color:#ffa;">${this.players.length}</span></div>
                <div>Active Players: <span style="color:${activeCount > 1 ? '#f55' : '#5f5'};">${activeCount}</span></div>
                <div>Local Players: <span style="color:${localCount > 0 ? '#5f5' : '#f55'};">${localCount}</span></div>
            </div>
            
            <div style="margin-bottom:15px; padding:8px; background:rgba(0,20,80,0.5); border-radius:5px;">
                <div style="color:#afa; font-weight:bold;">ACTIVE PLAYER</div>
                ${this.player ? `
                    <div>ID: <span style="color:#ffa;">${this.player.id}</span></div>
                    <div>Team: <span style="color:#ffa;">${this.player.team}</span></div>
                    <div>Local: <span style="color:${this.player.isLocal ? '#5f5' : '#f55'};">${this.player.isLocal}</span></div>
                    <div>Active: <span style="color:${this.player.isActive ? '#5f5' : '#f55'};">${this.player.isActive}</span></div>
                    <div>Position: <span style="color:#aaf;">(${this.player.position?.x.toFixed(2) || 'N/A'}, ${this.player.position?.y.toFixed(2) || 'N/A'}, ${this.player.position?.z.toFixed(2) || 'N/A'})</span></div>
                ` : `<div style="color:#f55;">No active player!</div>`}
            </div>
            
            <div style="margin-bottom:15px; padding:8px; background:rgba(0,20,80,0.5); border-radius:5px;">
                <div style="color:#afa; font-weight:bold;">ALL PLAYERS</div>
                <div style="max-height:150px; overflow-y:auto;">
                    ${this.players.map((p, i) => `
                        <div style="margin:5px 0; padding:5px; background:rgba(${p === this.player ? '80,100,0' : '40,40,60'},0.7); border-radius:3px;">
                            <div>Player ${i+1}: <span style="${p === this.player ? 'color:#ff0; font-weight:bold;' : ''}">${p.id}</span></div>
                            <div style="display:flex; justify-content:space-between;">
                                <span>Team: ${p.team}</span>
                                <span>Local: <span style="color:${p.isLocal ? '#5f5' : '#f55'};">${p.isLocal}</span></span>
                                <span>Active: <span style="color:${p.isActive ? '#5f5' : '#f55'};">${p.isActive}</span></span>
                            </div>
                            ${p.position ? `<div style="font-size:12px; color:#aaf;">Pos: (${p.position.x.toFixed(1)}, ${p.position.y.toFixed(1)}, ${p.position.z.toFixed(1)})</div>` : ''}
                        </div>
                    `).join('') || '<div>No players</div>'}
                </div>
            </div>
            
            <div style="margin-bottom:15px; padding:8px; background:rgba(0,20,80,0.5); border-radius:5px;">
                <div style="color:#afa; font-weight:bold;">INPUT STATE</div>
                ${this.inputManager ? `
                    <div>First Person Mode: <span style="color:#ffa;">${this.inputManager.isFirstPerson}</span></div>
                    <div style="display:flex; justify-content:space-around; margin-top:5px;">
                        <div style="background:rgba(0,0,0,0.5); padding:5px; border-radius:3px; text-align:center; flex:1;">
                            <div style="color:${this.inputManager.keys.w ? '#5f5' : '#888'}; font-weight:bold;">W</div>
                            <div style="font-size:10px;">${this.inputManager.keys.w ? 'PRESSED' : 'inactive'}</div>
                        </div>
                        <div style="display:flex; justify-content:space-between; flex:3;">
                            <div style="background:rgba(0,0,0,0.5); padding:5px; border-radius:3px; text-align:center; flex:1; margin:0 2px;">
                                <div style="color:${this.inputManager.keys.a ? '#5f5' : '#888'}; font-weight:bold;">A</div>
                                <div style="font-size:10px;">${this.inputManager.keys.a ? 'PRESSED' : 'inactive'}</div>
                            </div>
                            <div style="background:rgba(0,0,0,0.5); padding:5px; border-radius:3px; text-align:center; flex:1; margin:0 2px;">
                                <div style="color:${this.inputManager.keys.s ? '#5f5' : '#888'}; font-weight:bold;">S</div>
                                <div style="font-size:10px;">${this.inputManager.keys.s ? 'PRESSED' : 'inactive'}</div>
                            </div>
                            <div style="background:rgba(0,0,0,0.5); padding:5px; border-radius:3px; text-align:center; flex:1; margin:0 2px;">
                                <div style="color:${this.inputManager.keys.d ? '#5f5' : '#888'}; font-weight:bold;">D</div>
                                <div style="font-size:10px;">${this.inputManager.keys.d ? 'PRESSED' : 'inactive'}</div>
                            </div>
                        </div>
                    </div>
                ` : '<div>Input Manager not available</div>'}
            </div>
            
            <div style="margin-bottom:10px; text-align:center; font-size:12px; color:#aaa;">
                Press Shift+D again to hide this overlay
            </div>
        `;
        
        this.diagnosticOverlay.innerHTML = diagnosticHtml;
        this.container.appendChild(this.diagnosticOverlay);
        
        console.log('%c 🔍 Debug overlay added', 'color: #aaf;');
    }
    
    /**
     * Toggle God Mode on/off
     */
    toggleGodMode() {
        this.isGodMode = !this.isGodMode;
        console.log(`%c 🔮 God Mode ${this.isGodMode ? 'ENABLED' : 'DISABLED'}`, 'background: purple; color: white; font-size: 14px; padding: 5px;');
        this.addPlayerInfoOverlay();
        return this.isGodMode;
    }
    
    /**
     * Diagnostic method to check and fix player state inconsistencies
     * Call this when player input or camera issues are suspected
     * @param {boolean} forceFix - If true, will force fix player states even if no mismatch is detected
     */
    diagnosePlayerState(forceFix = false) {
        console.log('%c🔍 RUNNING PLAYER STATE DIAGNOSIS', 'background: #228; color: white; font-size: 14px; padding: 5px;');
        
        if (!this.players || this.players.length === 0) {
            console.log('%c No players found!', 'color: red');
            return;
        }
        
        // Check active player reference
        console.log('%c Game active player:', 'color: #afa;', 
            this.player ? `${this.player.id} (${this.player.team})` : 'None');
            
        // Check all players and their states
        console.log('%c All Players:', 'color: #aaf;');
        
        let activePlayerCount = 0;
        let localPlayerCount = 0;
        let activeMismatchFound = false;
        
        this.players.forEach((player, index) => {
            const isTheActivePlayer = (player === this.player);
            const hasActiveFlag = player.isActive === true;
            const hasLocalFlag = player.isLocal === true;
            
            // Count players by state
            if (hasActiveFlag) activePlayerCount++;
            if (hasLocalFlag) localPlayerCount++;
            
            // Check for mismatches
            const hasActiveMismatch = isTheActivePlayer !== hasActiveFlag;
            if (hasActiveMismatch) activeMismatchFound = true;
            
            // Log player state
            console.log(
                `%c Player ${index}: ${player.id} (${player.team}) - ` +
                `Active: ${hasActiveFlag ? '✅' : '❌'} ` +
                `Local: ${hasLocalFlag ? '✅' : '❌'} ` +
                `Game.player reference: ${isTheActivePlayer ? '✅' : '❌'} ` +
                `${hasActiveMismatch ? '⚠️ MISMATCH' : ''}`,
                hasActiveMismatch ? 'color: #f55; font-weight: bold;' : 
                hasActiveFlag ? 'color: #5f5; font-weight: bold;' : 'color: #aaa;'
            );
            
            // Check camera state for the player
            if (player.camera) {
                console.log(`   - Has third-person camera: ${player.camera ? '✅' : '❌'}`);
            }
            if (typeof player.setupFirstPersonCamera === 'function') {
                console.log(`   - Has first-person camera: ${player.fpCamera ? '✅' : '❌'}`);
            }
        });
        
        // Summary statistics
        console.log(`%c Total players: ${this.players.length}, Active: ${activePlayerCount}, Local: ${localPlayerCount}`,
            'color: #aaf;');
            
        // Check input manager state
        if (this.inputManager) {
            console.log('%c Input Manager State:', 'color: #faa;');
            console.log(`   - First Person Mode: ${this.inputManager.isFirstPerson ? '✅' : '❌'}`);
            console.log(`   - Movement Keys: W:${this.inputManager.keys.w ? '✅' : '❌'} ` +
                       `A:${this.inputManager.keys.a ? '✅' : '❌'} ` +
                       `S:${this.inputManager.keys.s ? '✅' : '❌'} ` +
                       `D:${this.inputManager.keys.d ? '✅' : '❌'}`);
        }
        
        // Fix mismatches if found or if force fix is enabled
        if (activeMismatchFound || forceFix) {
            console.log('%c' + (forceFix ? '🔧 FORCE FIXING ALL PLAYER STATES' : '⚠️ FIXING PLAYER STATE MISMATCHES'), 
                       'background: #a30; color: white; padding: 3px;');
            
            // First deactivate all players
            this.players.forEach(player => {
                player.isActive = false;
            });
            
            // Now activate only the correct player
            if (this.player) {
                this.player.isActive = true;
                console.log(`%c ✅ Set player ${this.player.id} as the only active player`, 'color: #5f5;');
                
                // Make sure camera is correctly set for the player type
                if (forceFix) {
                    const targetCamera = (this.player.team === 'merc' && this.player.fpCamera) 
                        ? this.player.fpCamera 
                        : this.player.camera || this.camera;
                        
                    if (targetCamera) {
                        console.log(`%c 📷 Force setting camera to ${this.player.team === 'merc' ? 'first-person' : 'third-person'} mode`, 
                                  'color: #5ff;');
                        this.setActiveCamera(targetCamera);
                    }
                    
                    // Make sure input manager settings match player type
                    if (this.inputManager) {
                        const shouldBeFirstPerson = (this.player.team === 'merc');
                        this.inputManager.isFirstPerson = shouldBeFirstPerson;
                        console.log(`%c 🎮 Force set input manager to ${shouldBeFirstPerson ? 'first-person' : 'third-person'} mode`, 
                                  'color: #5ff;');
                    }
                }
            } else if (this.players.length > 0) {
                // If no active player is set but we have players, set the first one as active
                this.player = this.players.find(p => p.isLocal) || this.players[0];
                this.player.isActive = true;
                console.log(`%c ✅ Auto-selected player ${this.player.id} as active`, 'color: #5f5;');
                
                // Update everything that depends on the active player
                this.setActivePlayer(this.player);
            }
        }
        
        console.log('%c END OF DIAGNOSIS', 'background: #228; color: white; font-size: 12px; padding: 3px;');
    }
}