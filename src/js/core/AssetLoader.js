import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class AssetLoader {
    constructor() {
        this.textureLoader = new THREE.TextureLoader();
        this.modelCache = new Map();
        this.textureCache = new Map();
        this.materialCache = new Map();
        this.loader = new GLTFLoader();
        this.models = {};
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
    
    /**
     * Create a human model
     * @returns {THREE.Group} The human model group
     */
    createHumanModel() {
        console.log('AssetLoader: Starting human model creation');
        const group = new THREE.Group();
        
        // Create body
        console.log('AssetLoader: Creating body');
        const bodyGeometry = new THREE.CapsuleGeometry(0.3, 1.2, 4, 8);
        const bodyMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x808080,
            metalness: 0.5,
            roughness: 0.5
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 0.6; // Center the body vertically
        group.add(body);
        console.log('AssetLoader: Body added to group');
        
        // Create head
        console.log('AssetLoader: Creating head');
        const headGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const headMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x808080,
            metalness: 0.5,
            roughness: 0.5
        });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.y = 1.4; // Position head on top of body
        group.add(head);
        console.log('AssetLoader: Head added to group');
        
        // Create arms
        console.log('AssetLoader: Creating arms');
        const armGeometry = new THREE.CapsuleGeometry(0.1, 0.6, 4, 8);
        const armMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x808080,
            metalness: 0.5,
            roughness: 0.5
        });
        
        // Left arm
        const leftArm = new THREE.Mesh(armGeometry, armMaterial);
        leftArm.position.set(-0.4, 1.1, 0);
        leftArm.rotation.z = Math.PI / 4; // Angle the arm slightly
        group.add(leftArm);
        
        // Right arm
        const rightArm = new THREE.Mesh(armGeometry, armMaterial);
        rightArm.position.set(0.4, 1.1, 0);
        rightArm.rotation.z = -Math.PI / 4; // Angle the arm slightly
        group.add(rightArm);
        console.log('AssetLoader: Arms added to group');
        
        // Create legs
        console.log('AssetLoader: Creating legs');
        const legGeometry = new THREE.CapsuleGeometry(0.15, 0.8, 4, 8);
        const legMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x808080,
            metalness: 0.5,
            roughness: 0.5
        });
        
        // Left leg
        const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
        leftLeg.position.set(-0.2, 0.2, 0);
        group.add(leftLeg);
        
        // Right leg
        const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
        rightLeg.position.set(0.2, 0.2, 0);
        group.add(rightLeg);
        console.log('AssetLoader: Legs added to group');
        
        console.log('AssetLoader: Human model creation complete. Group children:', group.children.length);
        return group;
    }
    
    // In the future, you would expand this class with methods for loading:
    // - Complex 3D models (GLTF/FBX)
    // - Sound effects
    // - Animation data
    // - Level data
}

export { AssetLoader }; 