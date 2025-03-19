import * as THREE from 'three';
import { AssetLoader } from './AssetLoader';
import { InputManager } from './InputManager';
import { BunnyPlayer } from '../players/BunnyPlayer';
import { HumanPlayer } from '../players/HumanPlayer';
import { World } from '../world/World';

export class Game {
    constructor(containerId) {
        this.containerId = containerId;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.clock = new THREE.Clock();
        
        // Game components
        this.world = null;
        this.player = null;
        this.inputManager = null;
        this.assetLoader = null;
        this.container = null;
        
        // Game state
        this.gameMode = 'third_person'; // Will be determined/assigned for asymmetrical gameplay
        
        this._isTogglingMode = false;
        
        this.init();
    }
    
    init() {
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
            this.assetLoader = new AssetLoader();
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
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
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
        // Clean up existing player if any
        if (this.player) {
            this.player.cleanup();
        }
        
        // Create player based on game mode
        try {
            if (this.gameMode === 'first_person') {
                console.log('Creating first-person player');
                
                // Create the human player with first-person mode enabled
                this.player = new HumanPlayer(this, {
                    isFirstPerson: true,
                    physics: { gravity: 9.8 },
                    movement: { movementSpeed: 5 },
                    controls: { 
                        sensitivity: 0.002, 
                        invertY: false,
                        firstPersonMode: true  // Make sure controls know we're in first-person mode
                    }
                });
                
                // Make sure first-person mode stays active (prevent auto-toggle)
                if (this.player.fpCamera) {
                    // Delay slightly to ensure everything is ready
                    setTimeout(() => {
                        if (this.player && this.player.isFirstPerson && this.player.fpCamera) {
                            console.log('Ensuring first-person camera is active');
                            this.setActiveCamera(this.player.fpCamera);
                        }
                    }, 50);
                }
            } else {
                console.log('Creating third-person player');
                this.player = new BunnyPlayer(this, {
                    physics: { gravity: 7.5 },
                    movement: { movementSpeed: 7 },
                    controls: { sensitivity: 0.0025 }
                });
            }
            
            console.log('Player created:', this.gameMode);
            
            // Initialize controls immediately if instructions are not shown
            if (this.inputManager && 
                this.inputManager.instructions && 
                this.inputManager.instructions.style.display === 'none') {
                
                console.log('Auto-initializing player controls');
                this.player.onInstructionsDismissed();
            }
        } catch (error) {
            console.error('Error creating player:', error);
        }
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
                this.createNewPlayer();
                
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
        
        // If player has first-person camera, update that too
        if (this.player && this.player.fpCamera) {
            this.player.fpCamera.aspect = width / height;
            this.player.fpCamera.updateProjectionMatrix();
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
        
        // Update player
        if (this.player) {
            this.player.update(delta);
        }
        
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