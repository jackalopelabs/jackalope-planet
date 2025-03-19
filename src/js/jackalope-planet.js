import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import '../css/jackalope-planet.css';

class JackalopeScene {
    constructor(containerId) {
        this.containerId = containerId;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.player = null;
        this.controls = null;
        this.clock = new THREE.Clock();
        
        // Game mechanics
        this.mode = 'third_person'; // Start in third-person; toggle with 'T'
        this.keys = { w: false, a: false, s: false, d: false };
        this.movementSpeed = 5;
        this.eyeHeight = 0.8; // Height for first-person view
        this.thirdPersonDistance = 5;
        this.thirdPersonHeight = 2;
        
        // Movement directions
        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        
        // Additional properties to fix vibration
        this.cameraTarget = new THREE.Vector3();
        this.playerDirection = new THREE.Vector3(0, 0, -1);
        this.lastCameraForward = new THREE.Vector3(0, 0, -1);
        this.isMovingBackward = false;
        
        this.init();
    }
    
    init() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with ID '${this.containerId}' not found`);
            return;
        }
        
        container.style.backgroundColor = '#050520';
        
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x050520);
        
        this.camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 5, 5); // Initial position for visibility
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
        
        // Add lights
        this.addLights();
        
        // Create flat ground and player
        this.createGround();
        this.createPlayer(); // Create simple player model
        this.addStars();
        
        // Setup controls
        this.controls = new PointerLockControls(this.camera, this.renderer.domElement);
        
        // Add instructions overlay
        this.addInstructions(container);
        
        // Add keyboard event listeners
        this.setupEventListeners(container);
        
        // Event listeners for resize
        window.addEventListener('resize', () => this.handleResize(container));
        
        // Start in third-person mode
        this.switchToThirdPerson();
        
        // Start animation
        this.animate();
    }
    
    addInstructions(container) {
        const instructions = document.createElement('div');
        instructions.className = 'instructions';
        instructions.innerHTML = `
            <div class="instructions-content">
                <h2>Game Controls</h2>
                <p>Click to play</p>
                <p>W, A, S, D to move</p>
                <p>Mouse to look around</p>
                <p>Press T to toggle between modes</p>
                <p>Press ESC to exit game mode</p>
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
    }
    
    setupEventListeners(container) {
        // Handle pointer lock for first-person and third-person modes
        this.instructions.addEventListener('click', () => {
            this.controls.lock();
        });
        
        this.controls.addEventListener('lock', () => {
            this.instructions.style.display = 'none';
        });
        
        this.controls.addEventListener('unlock', () => {
            this.instructions.style.display = 'flex';
        });
        
        // Keyboard controls for movement and mode switching
        const handleKey = (event) => {
            if (!this.controls.isLocked) return;
            
            const key = event.code;
            const pressed = event.type === 'keydown';
            
            if (key === 'KeyW') {
                this.keys.w = pressed;
                this.moveForward = pressed;
            } else if (key === 'KeyA') {
                this.keys.a = pressed;
                this.moveLeft = pressed;
            } else if (key === 'KeyS') {
                this.keys.s = pressed;
                this.moveBackward = pressed;
            } else if (key === 'KeyD') {
                this.keys.d = pressed;
                this.moveRight = pressed;
            } else if (key === 'KeyT' && pressed) {
                if (this.mode === 'first_person') {
                    this.switchToThirdPerson();
                } else if (this.mode === 'third_person') {
                    this.switchToFirstPerson();
                }
            }
        };
        
        document.addEventListener('keydown', handleKey);
        document.addEventListener('keyup', handleKey);
    }
    
    handleResize(container) {
        if (!this.camera || !this.renderer) return;
        
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
    }
    
    addLights() {
        // Add ambient and directional light
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);
    }
    
    createGround() {
        // Create a grid helper for the ground - fixed orientation
        const gridSize = 100;
        const gridDivisions = 100;
        const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0xffffff, 0x888888);
        // No rotation needed - GridHelper is already on the XZ plane by default
        gridHelper.position.y = 0.01; // Slightly above the ground to prevent z-fighting
        this.scene.add(gridHelper);
        
        // Simple flat ground plane
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0x8844aa,
            roughness: 0.7,
            metalness: 0.3,
            transparent: true,
            opacity: 0.7 // Make the ground semi-transparent to see the grid better
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2; // Lay flat on XZ plane
        ground.position.y = 0;
        this.scene.add(ground);
    }
    
    createPlayer() {
        // Create a simple player model (basic polygon)
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x3366bb });
        this.player = new THREE.Mesh(geometry, material);
        
        // Add a small cone to indicate forward direction
        const directionIndicator = new THREE.Mesh(
            new THREE.ConeGeometry(0.2, 0.5, 4),
            new THREE.MeshStandardMaterial({ color: 0xff3333 })
        );
        directionIndicator.position.set(0, 0, 0.75); // Changed from -0.75 to 0.75 to be at front
        directionIndicator.rotation.x = -Math.PI / 2; // Changed to point forward
        this.player.add(directionIndicator);
        
        this.player.position.set(0, 0.5, 0); // Half height above ground
        this.scene.add(this.player);
    }
    
    addStars() {
        // Add stars in the background
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.05,
        });
        
        const starPositions = [];
        for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 100;
            const y = Math.random() * 50 + 10; // Above ground
            const z = (Math.random() - 0.5) * 100;
            starPositions.push(x, y, z);
        }
        
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
        const stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(stars);
    }
    
    switchToFirstPerson() {
        // Position camera at eye level of the player
        const eyeHeightVector = new THREE.Vector3(0, this.eyeHeight, 0);
        this.camera.position.copy(this.player.position).add(eyeHeightVector);
        
        // Get current direction
        const direction = new THREE.Vector3(0, 0, -1);
        direction.applyQuaternion(this.player.quaternion);
        
        // Update controls rotation to match player's
        this.controls.getObject().position.copy(this.camera.position);
        
        // Set the mode to first-person
        this.mode = 'first_person';
    }
    
    switchToThirdPerson() {
        // Calculate camera position behind the player
        const direction = new THREE.Vector3(0, 0, 1); // Behind the player
        direction.applyQuaternion(this.player.quaternion);
        direction.multiplyScalar(this.thirdPersonDistance);
        
        // Add height offset
        direction.y += this.thirdPersonHeight;
        
        // Set camera position
        this.camera.position.copy(this.player.position).add(direction);
        
        // Look at player
        this.cameraTarget.copy(this.player.position).add(new THREE.Vector3(0, 0.5, 0));
        this.camera.lookAt(this.cameraTarget);
        
        // Set the mode to third-person
        this.mode = 'third_person';
    }
    
    animate() {
        if (!this.scene || !this.camera || !this.renderer || !this.player) return;
        
        requestAnimationFrame(() => this.animate());
        
        const delta = this.clock.getDelta();
        
        if (this.mode === 'first_person') {
            // First-person mode controls - Manual movement implementation
            const controlObject = this.controls.getObject();
            const velocity = new THREE.Vector3();
            const direction = new THREE.Vector3();
            
            // Calculate velocity based on keys
            direction.z = Number(this.moveForward) - Number(this.moveBackward);
            direction.x = Number(this.moveLeft) - Number(this.moveRight); // Fixed inverted controls
            direction.normalize();
            
            if (this.moveForward || this.moveBackward) {
                velocity.z -= direction.z * this.movementSpeed * delta;
            }
            if (this.moveLeft || this.moveRight) {
                velocity.x -= direction.x * this.movementSpeed * delta;
            }
            
            // Move the camera
            controlObject.translateX(velocity.x);
            controlObject.translateZ(velocity.z);
            
            // Update player position to follow camera
            const cameraPosition = controlObject.position;
            this.player.position.x = cameraPosition.x;
            this.player.position.z = cameraPosition.z;
            
            // Keep player on the ground
            this.player.position.y = 0.5; // Half height above ground
            controlObject.position.y = this.player.position.y + this.eyeHeight;
            
            // Update player rotation to match camera yaw (only Y rotation)
            const cameraDirection = new THREE.Vector3(0, 0, -1);
            cameraDirection.applyQuaternion(this.camera.quaternion);
            cameraDirection.y = 0; // Keep on xz plane
            cameraDirection.normalize();
            
            // Set player rotation
            if (cameraDirection.length() > 0.001) {
                this.player.lookAt(this.player.position.clone().add(cameraDirection));
            }
        } else if (this.mode === 'third_person') {
            // Get camera's forward direction (projected onto XZ plane)
            const cameraForward = new THREE.Vector3();
            this.camera.getWorldDirection(cameraForward);
            cameraForward.y = 0; // Keep movement on ground plane
            cameraForward.normalize();
            
            // Store the camera's forward direction for stability if this is the first frame
            if (!this.lastCameraForward) {
                this.lastCameraForward = cameraForward.clone();
            }
            
            // Get camera's right direction - correctly calculated for intuitive controls
            const cameraRight = new THREE.Vector3();
            cameraRight.crossVectors(cameraForward, new THREE.Vector3(0, 1, 0)).normalize();
            
            // Calculate movement vector based on camera orientation
            const movementVector = new THREE.Vector3();
            let isMovingForward = false;
            const wasMovingBackward = this.isMovingBackward;
            this.isMovingBackward = false;
            let isStrafing = false;
            
            if (this.keys.w) {
                movementVector.add(cameraForward.clone().multiplyScalar(this.movementSpeed * delta));
                isMovingForward = true;
            }
            if (this.keys.s) {
                movementVector.add(cameraForward.clone().multiplyScalar(-this.movementSpeed * delta));
                this.isMovingBackward = true;
            }
            if (this.keys.a) {
                movementVector.add(cameraRight.clone().multiplyScalar(-this.movementSpeed * delta));
                isStrafing = true;
            }
            if (this.keys.d) {
                movementVector.add(cameraRight.clone().multiplyScalar(this.movementSpeed * delta));
                isStrafing = true;
            }
            
            // Apply movement to player
            const isMoving = movementVector.lengthSq() > 0.0001;
            if (isMoving) {
                this.player.position.add(movementVector);
                
                // Determine target direction for player to face
                let targetDirection;
                
                if (isMovingForward) {
                    // Moving forward takes priority - always face forward 
                    targetDirection = cameraForward.clone();
                    
                    // Store this direction for later when we need backward facing
                    this.lastCameraForward.copy(cameraForward);
                } 
                else if (this.isMovingBackward && !isStrafing) {
                    // Moving backward - face backward (away from camera)
                    // Use the last known forward direction to prevent flipping
                    targetDirection = this.lastCameraForward.clone().negate();
                }
                
                // Only update rotation if we have a target direction and aren't only strafing
                if (targetDirection && (!isStrafing || isMovingForward || this.isMovingBackward)) {
                    // Slower lerp for backward movement to prevent oscillation
                    const lerpFactor = this.isMovingBackward ? 0.03 : 0.1;
                    
                    // Apply smooth rotation
                    this.playerDirection.lerp(targetDirection, lerpFactor);
                    const lookTarget = this.player.position.clone().add(this.playerDirection);
                    this.player.lookAt(lookTarget);
                }
            }
            
            // Camera follows player - position always based on player's facing direction, not movement
            const cameraOffset = new THREE.Vector3();
            
            // Make camera position opposite to player facing direction
            cameraOffset.copy(this.playerDirection).negate().multiplyScalar(this.thirdPersonDistance);
            cameraOffset.y = this.thirdPersonHeight;
            
            const targetCameraPosition = this.player.position.clone().add(cameraOffset);
            
            // Very smooth camera movement to prevent jitter
            this.camera.position.lerp(targetCameraPosition, 0.05);
            
            // Camera always looks at player 
            this.cameraTarget.copy(this.player.position).add(new THREE.Vector3(0, 0.5, 0));
            this.camera.lookAt(this.cameraTarget);
        }
        
        // Render the scene
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize Jackalope Planet when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Find all jackalope planet containers
    const containers = document.querySelectorAll('.jackalope-planet-canvas-container');
    
    // Initialize each container with a new JackalopeScene instance
    containers.forEach(container => {
        const containerId = container.getAttribute('id');
        if (containerId) {
            new JackalopeScene(containerId);
        }
    });
}); 