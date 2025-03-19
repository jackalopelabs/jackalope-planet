import * as THREE from 'three';

class Player {
    constructor(game) {
        this.game = game;
        this.scene = game.scene;
        this.camera = game.camera;
        this.model = null;
        this.movementSpeed = 5;
        this.position = new THREE.Vector3(0, 0, 0);
        this.direction = new THREE.Vector3(0, 0, -1);
        this.targetDirection = new THREE.Vector3(0, 0, -1);
        this.rotationSpeed = 5.0;
    }
    
    init() {
        // This should be implemented by child classes
        console.warn('Player.init() should be implemented by child classes');
    }
    
    update(delta) {
        // This should be implemented by child classes
        console.warn('Player.update() should be implemented by child classes');
    }
    
    handleMouseDown(event) {
        // To be implemented by child classes if needed
    }
    
    handleMouseMove(event, mouseState) {
        // To be implemented by child classes if needed
    }
    
    onInstructionsDismissed() {
        // To be implemented by child classes if needed
    }
    
    movePlayer(movementVector) {
        if (this.model) {
            this.model.position.add(movementVector);
            this.position.copy(this.model.position);
        }
    }
    
    rotateToDirection(targetDirection, delta) {
        if (!this.model) return;
        
        // Create a quaternion for the target rotation
        const targetQuaternion = new THREE.Quaternion();
        
        // Calculate the target rotation using a look matrix
        const lookMatrix = new THREE.Matrix4();
        const lookDirection = targetDirection.clone().negate();
        const upVector = new THREE.Vector3(0, 1, 0);
        lookMatrix.lookAt(new THREE.Vector3(0, 0, 0), lookDirection, upVector);
        targetQuaternion.setFromRotationMatrix(lookMatrix);
        
        // Calculate the step size for rotation
        const step = Math.min(1.0, this.rotationSpeed * delta);
        
        // Interpolate current rotation towards target rotation
        this.model.quaternion.slerp(targetQuaternion, step);
        
        // Update stored direction
        this.direction.lerp(targetDirection, step).normalize();
    }
    
    cleanup() {
        if (this.model) {
            this.scene.remove(this.model);
            this.model = null;
        }
    }
}

export { Player }; 