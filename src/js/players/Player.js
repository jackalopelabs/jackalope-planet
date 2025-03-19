import * as THREE from 'three';

class Player {
    constructor(game, options = {}) {
        this.game = game;
        this.scene = game.scene;
        this.camera = game.camera;
        this.model = null;
        this.position = new THREE.Vector3(0, 0, 0);
        this.direction = new THREE.Vector3(0, 0, -1);
        this.targetDirection = new THREE.Vector3(0, 0, -1);
        
        // Component references - to be set by child classes
        this.physics = null;
        this.movement = null;
        this.controls = null;
        
        // Common player properties
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.isGrounded = true;
        this.eyeHeight = options.eyeHeight || 1.6;
        
        console.log('Player base class initialized');
    }
    
    init() {
        // This should be implemented by child classes
        console.warn('Player.init() should be implemented by child classes');
    }
    
    update(delta) {
        // Get input from controls
        const input = this.controls ? this.controls.getInput() : null;
        
        // Update movement based on input
        if (this.movement && input) {
            this.movement.update(input, delta, this);
        }
        
        // Apply physics
        if (this.physics) {
            this.physics.apply(this, delta);
        }
    }
    
    handleMouseDown(event) {
        // Forward to controls if available
        if (this.controls) {
            this.controls.handleMouseDown(event);
        }
    }
    
    handleMouseMove(event, mouseState) {
        // Forward to controls if available
        if (this.controls) {
            this.controls.handleMouseMove(event, mouseState);
        }
    }
    
    onInstructionsDismissed() {
        console.log('Instructions dismissed, initializing controls');
        
        // Initialize controls if not already done
        if (this.controls && typeof this.controls.init === 'function') {
            try {
                // Make sure we have a valid container
                if (!this.game || !this.game.container) {
                    console.error('Cannot initialize controls: game.container is null or undefined');
                    return;
                }
                
                this.controls.init(this.game.container);
                console.log('Controls initialized successfully');
            } catch (error) {
                console.error('Error initializing player controls:', error);
            }
        } else {
            console.warn('No controls to initialize or init method not available');
        }
    }
    
    // Legacy method for backward compatibility
    movePlayer(movementVector) {
        if (this.model) {
            this.model.position.add(movementVector);
            this.position.copy(this.model.position);
        }
    }
    
    // Legacy method for backward compatibility
    rotateToDirection(targetDirection, delta) {
        if (this.movement) {
            this.movement.rotate(this, targetDirection, delta);
        } else if (this.model) {
            // Original implementation for backward compatibility
            const targetQuaternion = new THREE.Quaternion();
            const lookMatrix = new THREE.Matrix4();
            const lookDirection = targetDirection.clone().negate();
            const upVector = new THREE.Vector3(0, 1, 0);
            lookMatrix.lookAt(new THREE.Vector3(0, 0, 0), lookDirection, upVector);
            targetQuaternion.setFromRotationMatrix(lookMatrix);
            
            const rotationSpeed = this.movement ? this.movement.rotationSpeed : 5.0;
            const step = Math.min(1.0, rotationSpeed * delta);
            
            this.model.quaternion.slerp(targetQuaternion, step);
            this.direction.lerp(targetDirection, step).normalize();
        }
    }
    
    cleanup() {
        console.log('Cleaning up player');
        
        // Clean up components
        if (this.controls && typeof this.controls.cleanup === 'function') {
            this.controls.cleanup();
        }
        
        // Clean up model
        if (this.model) {
            this.scene.remove(this.model);
            this.model = null;
        }
    }
    
    setPhysics(physicsComponent) {
        this.physics = physicsComponent;
    }
    
    setMovement(movementComponent) {
        this.movement = movementComponent;
    }
    
    setControls(controlsComponent) {
        if (!controlsComponent) {
            console.warn('Attempting to set null controls component');
            return;
        }
        
        this.controls = controlsComponent;
        console.log('Controls component set');
        
        // Ensure controls has all required methods
        const requiredMethods = ['getInput', 'init', 'cleanup'];
        for (const method of requiredMethods) {
            if (typeof this.controls[method] !== 'function') {
                console.warn(`Controls component missing required method: ${method}`);
            }
        }
    }
}

export { Player }; 