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
        
        // Game state
        this.gameMode = 'third_person'; // Will be determined/assigned for asymmetrical gameplay
        
        this.init();
    }
    
    init() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with ID '${this.containerId}' not found`);
            return;
        }
        
        container.style.backgroundColor = '#050520';
        
        // Setup scene, camera, renderer
        this.setupRenderer(container);
        
        // Initialize components
        this.assetLoader = new AssetLoader();
        this.inputManager = new InputManager(this, container);
        this.world = new World(this.scene);
        
        // Create player based on game mode (will be assigned in real gameplay)
        // For now, we'll allow toggling for testing purposes
        this.createPlayer();
        
        // Add instructions overlay
        this.inputManager.addInstructions(container);
        
        // Set up event listeners
        window.addEventListener('resize', () => this.handleResize());
        document.addEventListener('fullscreenchange', () => this.handleResize());
        
        // Ensure initial size is correct
        this.handleResize();
        
        // Start animation loop
        this.animate();
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
    
    createPlayer() {
        // For testing purposes, we'll start with the third-person mode (bunny)
        if (this.gameMode === 'third_person') {
            this.player = new BunnyPlayer(this);
        } else {
            this.player = new HumanPlayer(this);
        }
    }
    
    switchPlayerMode() {
        // Remove current player from scene
        if (this.player) {
            this.player.cleanup();
        }
        
        // Toggle game mode
        this.gameMode = this.gameMode === 'third_person' ? 'first_person' : 'third_person';
        
        // Create new player based on mode
        this.createPlayer();
    }
    
    handleResize() {
        const container = document.getElementById(this.containerId);
        if (!container || !this.camera || !this.renderer) return;
        
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        // Update camera aspect ratio
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        
        // Update renderer size
        this.renderer.setSize(width, height);
        
        // Update pixel ratio for retina displays
        this.renderer.setPixelRatio(window.devicePixelRatio);
    }
    
    animate() {
        if (!this.scene || !this.camera || !this.renderer || !this.player) return;
        
        requestAnimationFrame(() => this.animate());
        
        const delta = this.clock.getDelta();
        
        // Update player
        if (this.player) {
            this.player.update(delta);
        }
        
        // Render the scene
        this.renderer.render(this.scene, this.camera);
    }
} 