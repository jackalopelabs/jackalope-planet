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
        this.createHills();
        
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
    
    createHills() {
        // Add some low poly hills to the terrain
        const hillColors = [0x66aa77, 0x77bb88, 0x88cc99];
        
        // Create several hills with different positions and sizes
        for (let i = 0; i < 12; i++) {
            // Random position within the ground area
            const x = (Math.random() - 0.5) * 80;
            const z = (Math.random() - 0.5) * 80;
            
            // Random size
            const width = Math.random() * 10 + 5;
            const height = Math.random() * 4 + 1;
            const depth = Math.random() * 10 + 5;
            
            // Create a low-poly hill using a cone geometry
            const segmentsRadial = Math.floor(Math.random() * 3) + 3; // 3-5 segments for low poly look
            const segmentsHeight = 1;
            const hillGeometry = new THREE.ConeGeometry(
                width,
                height,
                segmentsRadial,
                segmentsHeight,
                true
            );
            
            // Randomly select a color
            const colorIndex = Math.floor(Math.random() * hillColors.length);
            const hillMaterial = new THREE.MeshStandardMaterial({
                color: hillColors[colorIndex],
                flatShading: true, // Important for low poly look
                roughness: 0.8,
                metalness: 0.1
            });
            
            const hill = new THREE.Mesh(hillGeometry, hillMaterial);
            
            // Position and rotate
            hill.position.set(x, height / 2, z);
            hill.rotation.y = Math.random() * Math.PI; // Random rotation
            
            // Add to scene
            this.scene.add(hill);
        }
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