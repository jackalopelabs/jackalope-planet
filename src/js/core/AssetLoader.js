import * as THREE from 'three';

class AssetLoader {
    constructor() {
        this.textureLoader = new THREE.TextureLoader();
        this.modelCache = new Map();
        this.textureCache = new Map();
        this.materialCache = new Map();
    }
    
    loadTexture(path, callback) {
        if (this.textureCache.has(path)) {
            const texture = this.textureCache.get(path);
            if (callback) callback(texture);
            return texture;
        }
        
        const texture = this.textureLoader.load(path, (loadedTexture) => {
            if (callback) callback(loadedTexture);
        });
        
        this.textureCache.set(path, texture);
        return texture;
    }
    
    createMaterial(options) {
        const key = JSON.stringify(options);
        
        if (this.materialCache.has(key)) {
            return this.materialCache.get(key);
        }
        
        const material = new THREE.MeshStandardMaterial(options);
        this.materialCache.set(key, material);
        
        return material;
    }
    
    // This is a placeholder for future model loading functionality
    // You would typically use GLTFLoader or another model loader here
    createBunnyModel() {
        // Create a simple bunny model (placeholder using basic geometry)
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            this.createMaterial({ color: 0x3366bb })
        );
        
        // Add a small cone to indicate forward direction
        const directionIndicator = new THREE.Mesh(
            new THREE.ConeGeometry(0.2, 0.5, 4),
            this.createMaterial({ color: 0xff3333 })
        );
        directionIndicator.position.set(0, 0, 0.75);
        directionIndicator.rotation.x = -Math.PI / 2;
        body.add(directionIndicator);
        
        return body;
    }
    
    createHumanModel() {
        // Create a simple human model (placeholder using basic geometry)
        // In the future, this would be replaced with a proper model
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(0.8, 1.8, 0.6),
            this.createMaterial({ color: 0x66bb33 })
        );
        
        return body;
    }
    
    // In the future, you would expand this class with methods for loading:
    // - Complex 3D models (GLTF/FBX)
    // - Sound effects
    // - Animation data
    // - Level data
}

export { AssetLoader }; 