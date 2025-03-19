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
        
        // Update key state
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
            // Toggle between player modes (for testing purposes)
            const newMode = this.game.switchPlayerMode();
            console.log('Switched to player mode:', newMode);
        } else if (key === 'Escape' && pressed) {
            this.showInstructions();
        }
    }
    
    addInstructions(container) {
        console.log('Adding instructions overlay');
        
        const instructions = document.createElement('div');
        instructions.className = 'instructions';
        instructions.innerHTML = `
            <div class="instructions-content">
                <h2>Game Controls</h2>
                <p>Click to play</p>
                <p>W, A, S, D to move</p>
                <p>In third-person: Hold and drag mouse to orbit camera</p>
                <p>In first-person: Mouse to look around</p>
                <p>In first-person: Click to shoot flamethrower</p>
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
}

export { InputManager }; 