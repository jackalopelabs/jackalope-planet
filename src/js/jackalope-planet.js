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
        this.controls = null; // Pointer lock controls for first-person mode
        this.clock = new THREE.Clock();
        
        // Game mechanics
        this.mode = 'third_person'; // Start in third-person; toggle with 'T'
        this.keys = { w: false, a: false, s: false, d: false };
        this.movementSpeed = 5;
        this.eyeHeight = 0.8; // Height for first-person view
        this.thirdPersonDistance = 5;
        this.thirdPersonHeight = 2;
        
        // Camera orbit properties
        this.cameraAngle = Math.PI; // Initial angle (behind player)
        this.cameraAngleY = 0.5; // Vertical angle (height)
        this.targetCameraAngle = this.cameraAngle;
        this.targetCameraAngleY = this.cameraAngleY;
        this.orbitSpeed = 0.005;
        this.isMouseDown = false;
        this.prevMouseX = 0;
        this.prevMouseY = 0;
        
        // Movement directions
        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        
        // Player properties
        this.cameraTarget = new THREE.Vector3();
        this.playerDirection = new THREE.Vector3(0, 0, -1);
        this.targetPlayerDirection = new THREE.Vector3(0, 0, -1);
        this.rotationSpeed = 5.0; // Controls how quickly the player rotates to face new direction
        
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
        
        // Setup pointer lock controls for first-person mode
        this.controls = new PointerLockControls(this.camera, this.renderer.domElement);
        
        // Add instructions overlay
        this.addInstructions(container);
        
        // Add keyboard event listeners
        this.setupEventListeners(container);
        
        // Event listeners for resize
        window.addEventListener('resize', () => this.handleResize(container));
        
        // Start in third-person mode
        this.updateCameraPosition();
        
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
                <p>In third-person: Hold and drag mouse to orbit camera</p>
                <p>In first-person: Mouse to look around</p>
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
        // Mouse controls
        container.addEventListener('mousedown', (event) => {
            if (this.mode === 'first_person') {
                this.controls.lock();
            }
            this.instructions.style.display = 'none';
        });
        
        document.addEventListener('mousemove', (event) => {
            // For third-person mode: always track mouse movement for camera orbit
            // without requiring click and drag
            if (this.mode === 'third_person' && this.instructions.style.display === 'none') {
                // Calculate mouse movement since last frame
                if (this.prevMouseX === 0 && this.prevMouseY === 0) {
                    // First movement after showing the game, just store position
                    this.prevMouseX = event.clientX;
                    this.prevMouseY = event.clientY;
                    return;
                }
                
                const deltaX = event.clientX - this.prevMouseX;
                const deltaY = event.clientY - this.prevMouseY;
                
                // Adjust sensitivity for free movement (lower than drag sensitivity)
                const freeOrbitSpeed = this.orbitSpeed * 0.6;
                
                this.targetCameraAngle -= deltaX * freeOrbitSpeed;
                
                // Invert the deltaY to fix the inverted camera controls
                // Moving mouse up should raise the camera (decrease targetCameraAngleY)
                // Moving mouse down should lower the camera (increase targetCameraAngleY)
                this.targetCameraAngleY = Math.max(
                    0.1,
                    Math.min(1.5, this.targetCameraAngleY + deltaY * freeOrbitSpeed)
                );
                
                this.prevMouseX = event.clientX;
                this.prevMouseY = event.clientY;
            }
        });
        
        // Click to dismiss instructions or lock pointer
        this.instructions.addEventListener('click', () => {
            this.instructions.style.display = 'none';
            
            // Reset mouse position tracking when starting the game
            this.prevMouseX = 0;
            this.prevMouseY = 0;
            
            if (this.mode === 'first_person') {
                this.controls.lock();
            }
        });
        
        // Pointer lock event listeners
        this.controls.addEventListener('lock', () => {
            this.instructions.style.display = 'none';
        });
        
        this.controls.addEventListener('unlock', () => {
            if (this.mode === 'first_person') {
                this.instructions.style.display = 'flex';
            }
        });
        
        // Key press event listeners for movement and mode switching
        const handleKey = (event) => {
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
            } else if (key === 'Escape') {
                if (this.mode === 'third_person') {
                    this.instructions.style.display = 'flex';
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
        this.mode = 'first_person';
        
        // Position camera at eye level of the player
        const eyeHeightVector = new THREE.Vector3(0, this.eyeHeight, 0);
        this.camera.position.copy(this.player.position).add(eyeHeightVector);
        
        // Get the direction the player is facing
        const direction = new THREE.Vector3(0, 0, -1);
        direction.applyQuaternion(this.player.quaternion);
        
        // Update controls position 
        this.controls.getObject().position.copy(this.camera.position);
    }
    
    switchToThirdPerson() {
        this.mode = 'third_person';
        
        // If we were in pointer lock, exit it when switching to third-person
        if (this.controls.isLocked) {
            this.controls.unlock();
        }
        
        this.updateCameraPosition();
    }
    
    updateCameraPosition() {
        // Smoothly interpolate camera angles
        this.cameraAngle = THREE.MathUtils.lerp(
            this.cameraAngle,
            this.targetCameraAngle,
            0.1
        );
        
        this.cameraAngleY = THREE.MathUtils.lerp(
            this.cameraAngleY,
            this.targetCameraAngleY,
            0.1
        );
        
        // Calculate camera position based on angles (spherical coordinates)
        const offset = new THREE.Vector3(
            Math.sin(this.cameraAngle) * this.thirdPersonDistance,
            this.thirdPersonHeight * this.cameraAngleY,
            Math.cos(this.cameraAngle) * this.thirdPersonDistance
        );
        
        // Position camera relative to player
        this.camera.position.copy(this.player.position).add(offset);
        
        // Camera looks at player
        this.cameraTarget.copy(this.player.position).add(new THREE.Vector3(0, 0.5, 0));
        this.camera.lookAt(this.cameraTarget);
    }
    
    animate() {
        if (!this.scene || !this.camera || !this.renderer || !this.player) return;
        
        requestAnimationFrame(() => this.animate());
        
        const delta = this.clock.getDelta();
        
        if (this.mode === 'first_person') {
            // First-person mode with pointer lock controls
            if (this.controls.isLocked) {
                const controlObject = this.controls.getObject();
                const velocity = new THREE.Vector3();
                const direction = new THREE.Vector3();
                
                // Calculate velocity based on keys
                direction.z = Number(this.moveForward) - Number(this.moveBackward);
                direction.x = Number(this.moveLeft) - Number(this.moveRight);
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
                    this.playerDirection.copy(cameraDirection);
                }
            }
        } else if (this.mode === 'third_person') {
            // Update camera position based on current orbit angles
            this.updateCameraPosition();
            
            // Get world directions for movement
            const forward = new THREE.Vector3(0, 0, -1);
            forward.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.cameraAngle);
            forward.y = 0;
            forward.normalize();
            
            const right = new THREE.Vector3(1, 0, 0);
            right.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.cameraAngle);
            right.y = 0;
            right.normalize();
            
            // Calculate movement vector
            const movementVector = new THREE.Vector3();
            let isMoving = false;
            
            if (this.keys.w) {
                movementVector.add(forward.clone().multiplyScalar(this.movementSpeed * delta));
                isMoving = true;
            }
            if (this.keys.s) {
                movementVector.add(forward.clone().multiplyScalar(-this.movementSpeed * delta));
                isMoving = true;
            }
            if (this.keys.a) {
                movementVector.add(right.clone().multiplyScalar(-this.movementSpeed * delta));
                isMoving = true;
            }
            if (this.keys.d) {
                movementVector.add(right.clone().multiplyScalar(this.movementSpeed * delta));
                isMoving = true;
            }
            
            // Apply movement
            if (isMoving) {
                // Update player position
                this.player.position.add(movementVector);
                
                // Set target direction to movement direction
                this.targetPlayerDirection.copy(movementVector).normalize();
            }
            
            // Smoothly rotate player to face movement direction
            if (isMoving || this.playerDirection.angleTo(this.targetPlayerDirection) > 0.01) {
                // Calculate the step size for rotation
                const step = Math.min(1.0, this.rotationSpeed * delta);
                
                // Create a temporary quaternion for the target rotation
                const targetQuaternion = new THREE.Quaternion();
                
                // Calculate the target rotation by creating a matrix from the direction vector
                // We need to negate the direction because lookAt creates a matrix facing toward -Z
                const lookMatrix = new THREE.Matrix4();
                const lookDirection = this.targetPlayerDirection.clone().negate();
                const upVector = new THREE.Vector3(0, 1, 0);
                lookMatrix.lookAt(new THREE.Vector3(0, 0, 0), lookDirection, upVector);
                
                // Extract the target rotation from the matrix
                targetQuaternion.setFromRotationMatrix(lookMatrix);
                
                // Interpolate current rotation towards target rotation
                this.player.quaternion.slerp(targetQuaternion, step);
                
                // Update stored player direction
                this.playerDirection.lerp(this.targetPlayerDirection, step).normalize();
            }
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