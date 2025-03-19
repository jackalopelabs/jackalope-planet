import * as THREE from 'three';

class BaseControls {
    constructor(options = {}) {
        this.sensitivity = options.sensitivity || 0.002;
        this.invertY = options.invertY || false;
        this.lockPointer = options.lockPointer || false;
        this.enableGamepad = options.enableGamepad || true;
        
        this.keys = {};
        this.mouseState = {
            buttons: {},
            position: new THREE.Vector2(),
            movement: new THREE.Vector2()
        };
        this.gamepadState = null;
        
        this.cameraOrbit = {
            cameraAngle: 0,
            targetCameraAngle: 0,
            cameraAngleY: 0,
            targetCameraAngleY: 0
        };
        
        // Camera zoom callback
        this.onCameraZoom = null;
    }

    /**
     * Initialize control event listeners
     * @param {Game} game - Game instance
     */
    init(game) {
        // Base implementation - override in subclasses
        console.warn('BaseControls.init() should be implemented by subclasses');
    }

    /**
     * Get current input state
     * @returns {Object} Combined input state from keyboard, mouse, and gamepad
     */
    getInput() {
        // Base implementation - override in subclasses
        console.warn('BaseControls.getInput() should be implemented by subclasses');
        return {
            moveDirection: new THREE.Vector3(),
            lookDirection: new THREE.Vector2(),
            actions: {},
            cameraOrbit: { ...this.cameraOrbit }
        };
    }

    /**
     * Handle keyboard key down
     * @param {KeyboardEvent} event - Key down event
     */
    handleKeyDown(event) {
        this.keys[event.key.toLowerCase()] = true;
    }

    /**
     * Handle keyboard key up
     * @param {KeyboardEvent} event - Key up event
     */
    handleKeyUp(event) {
        this.keys[event.key.toLowerCase()] = false;
    }

    /**
     * Handle mouse button down
     * @param {MouseEvent} event - Mouse down event
     */
    handleMouseDown(event) {
        this.mouseState.buttons[event.button] = true;
    }

    /**
     * Handle mouse button up
     * @param {MouseEvent} event - Mouse up event
     */
    handleMouseUp(event) {
        this.mouseState.buttons[event.button] = false;
    }

    /**
     * Handle mouse movement
     * @param {MouseEvent} event - Mouse move event
     */
    handleMouseMove(event) {
        this.mouseState.position.set(event.clientX, event.clientY);
        
        if (event.movementX !== undefined && event.movementY !== undefined) {
            this.mouseState.movement.set(event.movementX, event.movementY);
        }
    }

    /**
     * Update camera orbit based on input
     * @param {Object} orbitData - New camera orbit data
     */
    updateCameraOrbit(orbitData) {
        Object.assign(this.cameraOrbit, orbitData);
    }

    /**
     * Clean up event listeners
     */
    cleanup() {
        // Base implementation - override in subclasses
        console.warn('BaseControls.cleanup() should be implemented by subclasses');
    }

    /**
     * Set callback for camera zoom
     * @param {Function} callback - Function to call when zoom changes
     */
    setCameraZoomCallback(callback) {
        this.onCameraZoom = callback;
    }
}

export { BaseControls }; 