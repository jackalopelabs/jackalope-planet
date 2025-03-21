class BasePhysics {
    constructor(options = {}) {
        this.gravity = options.gravity || 9.8;
        this.frictionCoefficient = options.frictionCoefficient || 0.1;
        this.airResistance = options.airResistance || 0.01;
        this.maxVelocity = options.maxVelocity || 10;
    }

    /**
     * Apply physics to a player entity
     * @param {Player} player - The player to apply physics to
     * @param {number} delta - Time since last frame in seconds
     */
    apply(player, delta) {
        // Base implementation - override in subclasses
        const logWarn = window.jpLog ? 
            (msg) => window.jpLog(msg, 'warning') : 
            console.warn;
            
        logWarn('BasePhysics.apply() should be implemented by subclasses');
    }

    /**
     * Apply gravity force to an entity
     * @param {Object} entity - The entity to apply gravity to
     * @param {number} delta - Time since last frame in seconds
     */
    applyGravity(entity, delta) {
        if (!entity.velocity) return;
        entity.velocity.y -= this.gravity * delta;
    }

    /**
     * Apply friction to an entity on ground
     * @param {Object} entity - The entity to apply friction to
     * @param {number} delta - Time since last frame in seconds
     */
    applyFriction(entity, delta) {
        if (!entity.velocity || !entity.isGrounded) return;
        
        const frictionForce = entity.velocity.clone()
            .setY(0)
            .normalize()
            .multiplyScalar(-this.frictionCoefficient);
            
        entity.velocity.add(frictionForce);
    }

    /**
     * Limit entity velocity to maximum value
     * @param {Object} entity - The entity to limit velocity for
     */
    limitVelocity(entity) {
        if (!entity.velocity) return;
        
        if (entity.velocity.length() > this.maxVelocity) {
            entity.velocity.normalize().multiplyScalar(this.maxVelocity);
        }
    }
}

export { BasePhysics }; 