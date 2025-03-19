import { BaseControls } from './BaseControls';
import * as THREE from 'three';

class HumanControls extends BaseControls {
    constructor(options = {}) {
        // Humans have standard FPS controls
        super({
            sensitivity: 0.002,
            invertY: options.invertY || false,
            lockPointer: true,
            enableGamepad: true,
            ...options
        });
        
        // Human-specific control properties
        this.firstPersonMode = options.firstPersonMode || false;
        this.canToggleView = options.canToggleView !== undefined ? options.canToggleView : true;
        this.mouseSmoothingFactor = options.mouseSmoothingFactor || 0.2;
        this.container = null;
        this.isPointerLocked = false;
        
        // First-person specific properties
        this.fpLookDirection = new THREE.Vector2(0, 0);
        this.targetFpLookDirection = new THREE.Vector2(0, 0);
        
        // Flag to track view toggle request
        this.viewToggleRequested = false;
        
        // Bound methods for event listeners
        this.boundKeyDown = this.handleKeyDown.bind(this);
        this.boundKeyUp = this.handleKeyUp.bind(this);
        this.boundMouseDown = this.handleMouseDown.bind(this);
        this.boundMouseUp = this.handleMouseUp.bind(this);
        this.boundMouseMove = this.handleMouseMove.bind(this);
        this.boundPointerLockChange = this.handlePointerLockChange.bind(this);
        this.boundWheel = this.handleWheel.bind(this);
        
        console.log('HumanControls constructed, firstPersonMode:', this.firstPersonMode);
    }

    /**
     * Initialize control event listeners
     * @param {HTMLElement} container - DOM element to attach listeners to
     */
    init(container) {
        if (!container) {
            console.error('HumanControls.init: Container is null or undefined');
            return;
        }
        
        this.container = container;
        console.log('HumanControls initializing with container:', container.id);
        
        // Keyboard controls
        window.addEventListener('keydown', this.boundKeyDown);
        window.addEventListener('keyup', this.boundKeyUp);
        
        // Mouse controls
        container.addEventListener('mousedown', this.boundMouseDown);
        window.addEventListener('mouseup', this.boundMouseUp);
        window.addEventListener('mousemove', this.boundMouseMove);
        window.addEventListener('wheel', this.boundWheel);
        
        // Pointer lock for camera control
        document.addEventListener('pointerlockchange', this.boundPointerLockChange);
        
        // Request pointer lock on container click
        if (this.lockPointer) {
            container.addEventListener('click', () => {
                console.log('Container clicked, requesting pointer lock');
                if (document.pointerLockElement !== container) {
                    try {
                        container.requestPointerLock();
                    } catch (error) {
                        console.error('Error requesting pointer lock:', error);
                    }
                }
            });
        }
    }

    /**
     * Handle pointer lock change
     */
    handlePointerLockChange() {
        this.isPointerLocked = document.pointerLockElement === this.container;
        console.log('Pointer lock changed:', this.isPointerLocked, 
                    'container:', this.container ? this.container.id : 'null');
    }

    /**
     * Handle mouse wheel for zoom in third-person mode
     * @param {WheelEvent} event - Mouse wheel event
     */
    handleWheel(event) {
        if (this.firstPersonMode) return;
        
        // Adjust camera distance based on scroll direction
        const scrollDirection = Math.sign(event.deltaY);
        // Pass to camera system in Player
        if (typeof this.onCameraZoom === 'function') {
            this.onCameraZoom(scrollDirection);
        }
    }

    /**
     * Handle mouse button down
     * @param {MouseEvent} event - Mouse down event
     */
    handleMouseDown(event) {
        super.handleMouseDown(event);
        
        // Request pointer lock on click in first-person mode
        if (this.firstPersonMode && this.container && document.pointerLockElement !== this.container) {
            try {
                this.container.requestPointerLock();
            } catch (error) {
                console.error('Error requesting pointer lock:', error);
            }
        }
    }

    /**
     * Handle key down for special controls
     * @param {KeyboardEvent} event - Key down event
     */
    handleKeyDown(event) {
        super.handleKeyDown(event);
        
        // Detect view toggle key (v)
        if (event.key.toLowerCase() === 'v' && this.canToggleView) {
            // Don't toggle here; just flag the toggle for the next getInput() call
            this.viewToggleRequested = true;
            console.log('View toggle requested via V key');
        }
    }

    /**
     * Handle mouse movement based on current view mode
     * @param {MouseEvent} event - Mouse move event
     */
    handleMouseMove(event) {
        super.handleMouseMove(event);
        
        if (!this.isPointerLocked) return;
        
        // Apply sensitivity to mouse movement
        const deltaX = event.movementX * this.sensitivity;
        const deltaY = event.movementY * this.sensitivity * (this.invertY ? -1 : 1);
        
        if (this.firstPersonMode) {
            // First person - direct camera control
            this.targetFpLookDirection.x += deltaX;
            this.targetFpLookDirection.y = Math.max(
                -Math.PI / 2 + 0.1, 
                Math.min(Math.PI / 2 - 0.1, this.targetFpLookDirection.y + deltaY)
            );
            
            // Smooth look movement
            this.fpLookDirection.x = THREE.MathUtils.lerp(
                this.fpLookDirection.x, 
                this.targetFpLookDirection.x, 
                this.mouseSmoothingFactor
            );
            
            this.fpLookDirection.y = THREE.MathUtils.lerp(
                this.fpLookDirection.y, 
                this.targetFpLookDirection.y, 
                this.mouseSmoothingFactor
            );
        } else {
            // Third person - orbit camera
            this.cameraOrbit.targetCameraAngle -= deltaX;
            this.cameraOrbit.targetCameraAngleY -= deltaY;
            
            // Clamp vertical orbit angle
            this.cameraOrbit.targetCameraAngleY = Math.max(
                -Math.PI / 3, 
                Math.min(Math.PI / 3, this.cameraOrbit.targetCameraAngleY)
            );
            
            // Smoothly interpolate camera angles
            this.cameraOrbit.cameraAngle = THREE.MathUtils.lerp(
                this.cameraOrbit.cameraAngle,
                this.cameraOrbit.targetCameraAngle,
                this.mouseSmoothingFactor
            );
            
            this.cameraOrbit.cameraAngleY = THREE.MathUtils.lerp(
                this.cameraOrbit.cameraAngleY,
                this.cameraOrbit.targetCameraAngleY,
                this.mouseSmoothingFactor
            );
        }
    }

    /**
     * Get current input state for human player
     * @returns {Object} Combined input state from keyboard, mouse, and gamepad
     */
    getInput() {
        // Create movement direction vector from WASD keys
        const moveDirection = new THREE.Vector3(0, 0, 0);
        
        if (this.keys['w'] || this.keys['arrowup']) moveDirection.z = -1;
        if (this.keys['s'] || this.keys['arrowdown']) moveDirection.z = 1;
        if (this.keys['a'] || this.keys['arrowleft']) moveDirection.x = -1;
        if (this.keys['d'] || this.keys['arrowright']) moveDirection.x = 1;
        
        // Normalize for diagonal movement
        if (moveDirection.length() > 1) {
            moveDirection.normalize();
        }
        
        // Actions - humans have more available actions
        const actions = {
            jump: this.keys[' '] || false,
            sprint: this.keys['shift'] || false,
            interact: this.keys['e'] || this.mouseState.buttons[0] || false,
            crouch: this.keys['control'] || false,
            reload: this.keys['r'] || false,
            toggleView: this.viewToggleRequested,
            use: this.mouseState.buttons[2] || false // Right click
        };
        
        // Handle view toggle - Note: we don't change the mode directly anymore
        // We set toggleView flag and let the player handle the toggling
        const shouldToggleView = this.viewToggleRequested;
        if (this.viewToggleRequested) {
            this.viewToggleRequested = false;
            console.log('View toggle requested from controls, letting player handle it');
        }
        
        // Debug current look direction
        if (this.firstPersonMode) {
            console.debug('First-person look direction:', 
                        this.fpLookDirection.x.toFixed(2), 
                        this.fpLookDirection.y.toFixed(2));
        }
        
        return {
            moveDirection,
            lookDirection: this.firstPersonMode ? 
                this.fpLookDirection.clone() : 
                new THREE.Vector2(this.mouseState.movement.x, this.mouseState.movement.y),
            actions,
            cameraOrbit: { ...this.cameraOrbit },
            firstPersonMode: this.firstPersonMode
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
        window.removeEventListener('wheel', this.boundWheel);
        document.removeEventListener('pointerlockchange', this.boundPointerLockChange);
        
        // Release pointer lock if active
        if (document.pointerLockElement && document.exitPointerLock) {
            document.exitPointerLock();
        }
    }
    
    /**
     * Set callback for camera zoom
     * @param {Function} callback - Function to call when zoom changes
     */
    setCameraZoomCallback(callback) {
        this.onCameraZoom = callback;
    }

    /**
     * Update firstPersonMode flag to match player state
     * @param {boolean} isFirstPerson - Whether player is in first-person mode 
     */
    updateViewMode(isFirstPerson) {
        if (this.firstPersonMode !== isFirstPerson) {
            console.log('Controls: updating view mode to:', isFirstPerson ? 'first-person' : 'third-person');
            this.firstPersonMode = isFirstPerson;
        }
    }
}

export { HumanControls }; 