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
        console.log('Game: Creating new player with options:', options);
        
        // Default options
        const defaultOptions = {
            team: this.gameMode === 'first_person' ? 'merc' : 'jackalope',
            id: `player_${this.players.length + 1}`,
            isLocal: true,
            isActive: this.players.length === 0 // First player is active by default
        };
        
        // Merge options
        const playerOptions = { ...defaultOptions, ...options };
        
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
                
                // Create the human player with first-person mode enabled
                newPlayer = new HumanPlayer(this, {
                    isFirstPerson: true,
                    physics: { gravity: 9.8 },
                    movement: { movementSpeed: 5 },
                    controls: { 
                        sensitivity: 0.002, 
                        invertY: false,
                        firstPersonMode: true
                    }
                });
                
                console.log('Game: Human player created');
            } else {
                console.log('Game: Creating Jackalope (Bunny) player');
                
                // Create the bunny player (default is third-person)
                newPlayer = new BunnyPlayer(this, {
                    physics: { gravity: 7.5 },
                    movement: { movementSpeed: 7 },
                    controls: { sensitivity: 0.0025 }
                });
                
                console.log('Game: Bunny player created');
            }
            
            // Set player properties
            newPlayer.id = playerOptions.id;
            newPlayer.team = playerOptions.team;
            newPlayer.isLocal = playerOptions.isLocal;
            
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
            
            // If this is the active player or it's the only player, set as active
            if (playerOptions.isActive || this.players.length === 1) {
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
        // If player is a string (ID), find the player instance
        let playerInstance = player;
        if (typeof player === 'string') {
            playerInstance = this.players.find(p => p.id === player);
            if (!playerInstance) {
                console.error(`Game: Player with ID ${player} not found`);
                return;
            }
        }
        
        // Set as the active player
        this.player = playerInstance;
        console.log('Game: Set active player to:', this.player.id, 'team:', this.player.team);
        
        // Update game mode based on player type
        this.gameMode = this.player.team === 'merc' ? 'first_person' : 'third_person';
        
        // Set appropriate camera
        if (this.gameMode === 'first_person' && this.player.fpCamera) {
            console.log('Game: Setting first-person camera as active');
            this.setActiveCamera(this.player.fpCamera);
        } else {
            console.log('Game: Setting third-person camera as active');
            this.setActiveCamera(this.player.camera);
        }
        
        // Update input manager's firstPerson flag if it exists
        if (this.inputManager) {
            this.inputManager.isFirstPerson = (this.gameMode === 'first_person');
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
        
        // Set next player as active
        this.setActivePlayer(this.players[nextIndex]);
        
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
        
        // Update world
        if (this.world) {
            this.world.update(delta);
        }
        
        // Update all players
        this.players.forEach(player => {
            // Only update input for the active local player
            const isActiveLocal = (player === this.player && player.isLocal);
            player.update(delta, isActiveLocal);
        });
        
        // Render the scene with the active camera
        if (this.scene && this.camera && this.renderer) {
            this.renderer.render(this.scene, this.camera);
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
     * Toggle God Mode on/off
     */
    toggleGodMode() {
        this.isGodMode = !this.isGodMode;
        console.log(`%c 🔮 God Mode ${this.isGodMode ? 'ENABLED' : 'DISABLED'}`, 'background: purple; color: white; font-size: 14px; padding: 5px;');
        this.addPlayerInfoOverlay();
        return this.isGodMode;
    }
} 