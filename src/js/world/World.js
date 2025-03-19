import * as THREE from 'three';
import { Entities } from './Entities';

class World {
    constructor(scene) {
        this.scene = scene;
        this.entities = new Entities(scene);
        
        this.init();
    }
    
    init() {
        // Add lights
        this.addLights();
        
        // Create environment
        this.createGround();
        
        // Add decorative elements
        this.addStars();
    }
    
    addLights() {
        // Add ambient and directional light
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);
    }
    
    createGround() {
        // Create a grid helper for the ground
        const gridSize = 100;
        const gridDivisions = 100;
        const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0xffffff, 0x888888);
        gridHelper.position.y = 0.01; // Slightly above the ground to prevent z-fighting
        this.scene.add(gridHelper);
        
        // Simple flat ground plane
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0x8844aa,
            roughness: 0.7,
            metalness: 0.3,
            transparent: true,
            opacity: 0.7 // Make the ground semi-transparent to see the grid better
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2; // Lay flat on XZ plane
        ground.position.y = 0;
        this.scene.add(ground);
    }
    
    addStars() {
        // Add stars in the background
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.05,
        });
        
        const starPositions = [];
        for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 100;
            const y = Math.random() * 50 + 10; // Above ground
            const z = (Math.random() - 0.5) * 100;
            starPositions.push(x, y, z);
        }
        
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
        const stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(stars);
    }
    
    // Methods for terrain generation, physics updates, etc. would be added here
    update(delta) {
        // Update world entities, physics, etc.
        this.entities.update(delta);
    }
}

export { World }; 