import * as THREE from 'three';

/**
 * Base class for human weapons
 */
class HumanWeapon {
    constructor(player, options = {}) {
        this.player = player;
        this.scene = player.scene;
        this.game = player.game;
        
        // Weapon stats
        this.name = options.name || 'Unknown Weapon';
        this.damage = options.damage || 10;
        this.cooldown = options.cooldown || 0.1; // seconds
        this.range = options.range || 20;
        this.lastFireTime = 0;
        
        // Weapon state
        this.isFiring = false;
        this.isReloading = false;
        
        // Visual elements
        this.model = null;
        this.effects = [];
        
        // Initialize the weapon
        this.init(options);
    }
    
    /**
     * Initialize the weapon
     */
    init(options) {
        // Base initialization - override in subclasses
        console.log(`Initializing weapon: ${this.name}`);
    }
    
    /**
     * Start firing the weapon
     */
    startFire() {
        this.isFiring = true;
    }
    
    /**
     * Stop firing the weapon
     */
    stopFire() {
        this.isFiring = false;
    }
    
    /**
     * Fire a single shot - override in subclasses
     */
    fire() {
        const now = performance.now() / 1000;
        
        // Check cooldown
        if (now - this.lastFireTime < this.cooldown) {
            return false;
        }
        
        // Mark the fire time
        this.lastFireTime = now;
        
        console.log(`${this.name} fired!`);
        return true;
    }
    
    /**
     * Update the weapon - called each frame
     */
    update(delta) {
        // Update weapon state and effects
        if (this.isFiring) {
            this.fire();
        }
        
        // Update visual effects
        this.updateEffects(delta);
    }
    
    /**
     * Update weapon effects
     */
    updateEffects(delta) {
        // Base effect updates - override in subclasses
    }
    
    /**
     * Attach the weapon to the player model
     */
    attachToPlayer() {
        // Default implementation - override in subclasses
        if (this.model && this.player.model) {
            this.player.model.add(this.model);
        }
    }
    
    /**
     * Detach the weapon from the player model
     */
    detachFromPlayer() {
        if (this.model && this.model.parent) {
            this.model.parent.remove(this.model);
        }
    }
    
    /**
     * Clean up the weapon resources
     */
    cleanup() {
        this.stopFire();
        this.detachFromPlayer();
        
        // Clean up effects
        this.effects.forEach(effect => {
            if (effect.parent) {
                effect.parent.remove(effect);
            }
            if (effect.geometry) {
                effect.geometry.dispose();
            }
            if (effect.material) {
                effect.material.dispose();
            }
        });
        
        this.effects = [];
    }
}

export { HumanWeapon }; 