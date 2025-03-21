import { BaseControls } from './BaseControls';
import * as THREE from 'three';

class BunnyControls extends BaseControls {
    constructor(options = {}) {
        // Bunnies have different control sensitivity
        super({
            sensitivity: 0.0025,
            invertY: false,
            lockPointer: true,
            enableGamepad: true,
            ...options
        });
        
        // Bunny-specific control properties
        this.orbitSmoothingFactor = options.orbitSmoothingFactor || 0.1;
        this.maxVerticalAngle = options.maxVerticalAngle || Math.PI / 3; // 60 degrees
        this.container = null;
        this.isPointerLocked = false;
        
        // Bound methods for event listeners
        this.boundKeyDown = this.handleKeyDown.bind(this);
        this.boundKeyUp = this.handleKeyUp.bind(this);
        this.boundMouseDown = this.handleMouseDown.bind(this);
        this.boundMouseUp = this.handleMouseUp.bind(this);
        this.boundMouseMove = this.handleMouseMove.bind(this);
        this.boundPointerLockChange = this.handlePointerLockChange.bind(this);
        this.boundWheel = this.handleWheel.bind(this);
    }

    /**
     * Initialize control event listeners
     * @param {HTMLElement} container - DOM element to attach listeners to
     */
    init(container) {
        if (!container) {
            console.error('BunnyControls.init: Container is null or undefined');
            return;
        }

        this.container = container;
        
        // Keyboard controls
        window.addEventListener('keydown', this.boundKeyDown);
        window.addEventListener('keyup', this.boundKeyUp);
        
        // Mouse controls
        container.addEventListener('mousedown', this.boundMouseDown);
        window.addEventListener('mouseup', this.boundMouseUp);
        window.addEventListener('mousemove', this.boundMouseMove);
        window.addEventListener('wheel', this.boundWheel);
        
        // Pointer lock for third-person camera control
        document.addEventListener('pointerlockchange', this.boundPointerLockChange);
        
        // Request pointer lock on container click
        if (this.lockPointer) {
            container.addEventListener('click', () => {
                if (document.pointerLockElement !== container) {
                    container.requestPointerLock();
                }
            });
        }
        
        console.log('BunnyControls initialized with container:', container.id);
    }

    /**
     * Handle pointer lock change
     */
    handlePointerLockChange() {
        this.isPointerLocked = document.pointerLockElement === this.container;
        console.log('Pointer lock changed:', this.isPointerLocked);
    }

    /**
     * Handle mouse wheel for zoom
     * @param {WheelEvent} event - Mouse wheel event
     */
    handleWheel(event) {
        // Adjust camera distance based on scroll direction
        const scrollDirection = Math.sign(event.deltaY);
        
        // Pass to camera system in Player if callback exists
        if (typeof this.onCameraZoom === 'function') {
            this.onCameraZoom(scrollDirection);
        }
    }

    /**
     * Handle mouse movement specifically for orbiting camera
     * @param {MouseEvent} event - Mouse move event
     */
    handleMouseMove(event) {
        super.handleMouseMove(event);
        
        // Only update camera orbit when pointer is locked
        if (this.isPointerLocked) {
            // Apply sensitivity to mouse movement
            const deltaX = event.movementX * this.sensitivity;
            const deltaY = event.movementY * this.sensitivity * (this.invertY ? -1 : 1);
            
            // Update orbit angles
            this.cameraOrbit.targetCameraAngle -= deltaX;
            this.cameraOrbit.targetCameraAngleY += deltaY;
            
            // Clamp vertical angle to prevent over-rotation
            this.cameraOrbit.targetCameraAngleY = Math.max(
                -this.maxVerticalAngle,
                Math.min(this.maxVerticalAngle, this.cameraOrbit.targetCameraAngleY)
            );
            
            // Smoothly interpolate camera angles
            this.cameraOrbit.cameraAngle = THREE.MathUtils.lerp(
                this.cameraOrbit.cameraAngle,
                this.cameraOrbit.targetCameraAngle,
                this.orbitSmoothingFactor
            );
            
            this.cameraOrbit.cameraAngleY = THREE.MathUtils.lerp(
                this.cameraOrbit.cameraAngleY,
                this.cameraOrbit.targetCameraAngleY,
                this.orbitSmoothingFactor
            );
        }
    }

    /**
     * Get combined input state
     * @returns {Object} Combined input state from keyboard, mouse, and gamepad
     */
    getInput() {
        // Create movement direction vector from WASD keys
        const moveDirection = new THREE.Vector3(0, 0, 0);
        
        // Check for movement keys with better debugging
        const isWPressed = this.keys['w'] || this.keys['arrowup'] || false;
        const isSPressed = this.keys['s'] || this.keys['arrowdown'] || false;
        const isAPressed = this.keys['a'] || this.keys['arrowleft'] || false;
        const isDPressed = this.keys['d'] || this.keys['arrowright'] || false;
        
        // Occasionally log key state for debugging
        if (Math.random() < 0.01) {
            console.log(`%c 🎮 BunnyControls key state:`, 'color: #aaf;', {
                w: isWPressed,
                a: isAPressed,
                s: isSPressed,
                d: isDPressed,
                shift: this.keys['shift'] || false,
                space: this.keys[' '] || false
            });
        }
        
        // Set movement direction based on key state
        if (isWPressed) moveDirection.z = -1;
        if (isSPressed) moveDirection.z = 1;
        if (isAPressed) moveDirection.x = -1;
        if (isDPressed) moveDirection.x = 1;
        
        // Normalize for diagonal movement
        if (moveDirection.length() > 1) {
            moveDirection.normalize();
        }
        
        // Actions
        const actions = {
            jump: this.keys[' '] || false,
            sprint: this.keys['shift'] || false,
            interact: this.keys['e'] || this.mouseState.buttons[0] || false
        };
        
        // Create enhanced input object that includes both directional vector AND raw key state
        // This ensures the player movement can handle inputs consistently
        return {
            moveDirection,
            lookDirection: new THREE.Vector2(
                this.mouseState.movement.x,
                this.mouseState.movement.y
            ),
            actions,
            cameraOrbit: { ...this.cameraOrbit },
            // Add raw key state to ensure Player.processInput can access it directly
            keys: {
                w: isWPressed,
                a: isAPressed,
                s: isSPressed,
                d: isDPressed,
                shift: this.keys['shift'] || false,
                space: this.keys[' '] || false
            },
            // Add redundant movement flags to ensure compatibility with all systems
            moveForward: isWPressed,
            moveBackward: isSPressed,
            moveLeft: isAPressed,
            moveRight: isDPressed
        };
    }

    /**
     * Clean up event listeners
     */
    cleanup() {
        window.removeEventListener('keydown', this.boundKeyDown);
        window.removeEventListener('keyup', this.boundKeyUp);
        window.removeEventListener('mousedown', this.boundMouseDown);
        window.removeEventListener('mouseup', this.boundMouseUp);
        window.removeEventListener('mousemove', this.boundMouseMove);
        document.removeEventListener('pointerlockchange', this.boundPointerLockChange);
    }

    /**
     * Set callback for camera zoom - overrides BaseControls implementation
     * for specific bunny behavior if needed
     * @param {Function} callback - Function to call when zoom changes
     */
    setCameraZoomCallback(callback) {
        this.onCameraZoom = callback;
    }
}

export { BunnyControls }; 