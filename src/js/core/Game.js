import * as THREE from 'three';
import { AssetLoader } from './AssetLoader';
import { InputManager } from './InputManager';
import { BunnyPlayer } from '../players/BunnyPlayer';
import { HumanPlayer } from '../players/HumanPlayer';
import { World } from '../world/World';

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
        this.players = []; // Array to store multiple players
        this.activePlayer = null; // Reference to currently controlled player
        this.inputManager = null;
        this.assetLoader = null;
        this.container = null;
        
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
    
    createNewPlayer() {
        console.log('Game: Creating new player. Current game mode:', this.gameMode);
        
        // Ensure AssetLoader is initialized
        if (!this.assetLoader) {
            console.error('Game: AssetLoader not initialized!');
            return;
        }
        
        // Create player based on game mode
        try {
            let newPlayer;
            if (this.gameMode === 'first_person') {
                console.log('Game: Creating first-person player');
                
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
                console.log('Game: Creating third-person player');
                
                // Create the bunny player (default is third-person)
                newPlayer = new BunnyPlayer(this, {
                    physics: { gravity: 7.5 },
                    movement: { movementSpeed: 7 },
                    controls: { sensitivity: 0.0025 }
                });
                
                console.log('Game: Bunny player created');
            }
            
            // Initialize physics with scene access for terrain detection
            if (newPlayer.physics && typeof newPlayer.physics.setScene === 'function') {
                console.log('Game: Setting up player physics');
                newPlayer.physics.setScene(this.scene);
            }
            
            // Add the new player to our players array
            this.players.push(newPlayer);
            
            // Set this as the active player
            this.activePlayer = newPlayer;
            
            // Position the new player slightly offset from existing players
            if (this.players.length > 1) {
                const offset = (this.players.length - 1) * 2; // 2 units between each player
                newPlayer.position.set(offset, 5, offset);
            }
            
            console.log('Game: Player created successfully:', this.gameMode);
            
            // Initialize controls immediately if instructions are not shown
            if (this.inputManager && 
                this.inputManager.instructions && 
                this.inputManager.instructions.style.display === 'none') {
                
                console.log('Game: Auto-initializing player controls');
                newPlayer.onInstructionsDismissed();
            }
            
            return newPlayer;
        } catch (error) {
            console.error('Error creating player:', error);
            return null;
        }
    }
    
    // New method to create an additional player without changing game mode
    createAdditionalPlayer() {
        console.log('Game: Creating additional player in current mode:', this.gameMode);
        console.log('Game: Current number of players:', this.players.length);
        
        // Create a new player with the current game mode
        const newPlayer = this.createNewPlayer();
        
        if (newPlayer) {
            console.log('Game: Additional player created successfully');
            console.log('Game: Total players after creation:', this.players.length);
            
            // If in first-person mode, need to handle pointer lock
            if (this.gameMode === 'first_person') {
                setTimeout(() => {
                    if (this.container && document.pointerLockElement !== this.container) {
                        console.log('Requesting pointer lock for new first-person player');
                        this.container.requestPointerLock();
                    }
                }, 100);
            }
            
            // Update input manager's firstPerson flag if it exists
            if (this.inputManager) {
                this.inputManager.isFirstPerson = (this.gameMode === 'first_person');
            }
            
            // Make sure the player is visible
            if (newPlayer.model) {
                newPlayer.model.visible = true;
                console.log('Game: Ensured new player model is visible');
            }
            
            // Add debug sphere to visualize player position
            const debugSphere = new THREE.Mesh(
                new THREE.SphereGeometry(0.5, 16, 16),
                new THREE.MeshBasicMaterial({ color: 0xff0000 })
            );
            debugSphere.position.copy(newPlayer.position);
            this.scene.add(debugSphere);
            console.log('Game: Added debug sphere at player position');
        } else {
            console.error('Game: Failed to create additional player');
        }
        
        return newPlayer;
    }
    
    switchPlayerMode() {
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
        
        // Create a new player in the new mode
        const newPlayer = this.createNewPlayer();
        
        if (newPlayer) {
            // If switching to first-person, need to request pointer lock
            if (this.gameMode === 'first_person') {
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
        }
        
        // Reset the toggling flag after a safe amount of time
        setTimeout(() => {
            this._isTogglingMode = false;
        }, 500);
        
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
        
        // If player has first-person camera, update that too
        if (this.activePlayer && this.activePlayer.fpCamera) {
            this.activePlayer.fpCamera.aspect = width / height;
            this.activePlayer.fpCamera.updateProjectionMatrix();
        }
        
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
            if (player) {
                player.update(delta);
            }
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
} 