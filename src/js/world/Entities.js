import * as THREE from 'three';

class Entities {
    constructor(scene) {
        this.scene = scene;
        this.entities = [];
        
        // Will be used for future entities like power-ups, obstacles, etc.
    }
    
    addEntity(entity) {
        this.entities.push(entity);
        if (entity.mesh) {
            this.scene.add(entity.mesh);
        }
    }
    
    removeEntity(entity) {
        const index = this.entities.indexOf(entity);
        if (index !== -1) {
            this.entities.splice(index, 1);
            if (entity.mesh) {
                this.scene.remove(entity.mesh);
            }
        }
    }
    
    update(delta) {
        // Update all entities
        for (const entity of this.entities) {
            if (entity.update) {
                entity.update(delta);
            }
        }
        
        // Future: collision detection, AI behavior, etc.
    }
    
    // This would be expanded as the game grows with:
    // - Spawn systems
    // - Entity factories
    // - Collision detection
    // - AI behaviors
}

export { Entities }; 