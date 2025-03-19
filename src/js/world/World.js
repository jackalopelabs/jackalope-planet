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
        
        // Add trees and tall objects for better shadow demonstration
        this.createTallObjects();
    }
    
    addLights() {
        // Use a very dim ambient light for the night scene
        const ambientLight = new THREE.AmbientLight(0x222233, 0.3);
        this.scene.add(ambientLight);
        
        // Create moonlight (directional light with blue tint)
        this.moonLight = new THREE.DirectionalLight(0xaabbff, 1.0);
        this.moonLight.position.set(15, 30, 20);
        this.moonLight.castShadow = true;
        
        // Configure shadow properties
        this.moonLight.shadow.mapSize.width = 2048;
        this.moonLight.shadow.mapSize.height = 2048;
        this.moonLight.shadow.camera.near = 0.5;
        this.moonLight.shadow.camera.far = 100;
        this.moonLight.shadow.camera.left = -30;
        this.moonLight.shadow.camera.right = 30;
        this.moonLight.shadow.camera.top = 30;
        this.moonLight.shadow.camera.bottom = -30;
        
        this.scene.add(this.moonLight);
        
        // Add a subtle point light for some additional fill
        const fillLight = new THREE.PointLight(0x3344aa, 0.2, 50);
        fillLight.position.set(-10, 5, -10);
        this.scene.add(fillLight);
        
        // Create the moon
        this.createMoon();
    }
    
    createMoon() {
        // Create a moon sphere
        const moonGeometry = new THREE.SphereGeometry(3, 16, 16);
        const moonMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            emissive: 0xaaaaff,
            emissiveIntensity: 0.2
        });
        
        this.moon = new THREE.Mesh(moonGeometry, moonMaterial);
        
        // Position the moon in the direction of the moonlight
        const moonDistance = 80;
        this.moon.position.set(
            this.moonLight.position.x * (moonDistance / this.moonLight.position.length()),
            this.moonLight.position.y * (moonDistance / this.moonLight.position.length()),
            this.moonLight.position.z * (moonDistance / this.moonLight.position.length())
        );
        
        // Add a subtle glow effect
        const moonGlowGeometry = new THREE.SphereGeometry(3.5, 16, 16);
        const moonGlowMaterial = new THREE.MeshBasicMaterial({
            color: 0xaabbff,
            transparent: true,
            opacity: 0.2,
            side: THREE.BackSide
        });
        
        const moonGlow = new THREE.Mesh(moonGlowGeometry, moonGlowMaterial);
        this.moon.add(moonGlow);
        
        this.scene.add(this.moon);
    }
    
    createGround() {
        // Create a grid helper for the ground
        const gridSize = 100;
        const gridDivisions = 100;
        const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x444455, 0x222233);
        gridHelper.position.y = 0.01; // Slightly above the ground to prevent z-fighting
        this.scene.add(gridHelper);
        
        // Simple flat ground plane with darker materials for night scene
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0x334455,
            roughness: 0.8,
            metalness: 0.2,
            transparent: true,
            opacity: 0.8,
            receiveShadow: true // Enable shadow receiving
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2; // Lay flat on XZ plane
        ground.position.y = 0;
        ground.receiveShadow = true;
        this.scene.add(ground);
    }
    
    createHills() {
        // Add some low poly hills to the terrain
        const hillColors = [0x223344, 0x334455, 0x445566]; // Darker colors for night scene
        
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
            
            // Enable shadow casting and receiving
            hill.castShadow = true;
            hill.receiveShadow = true;
            
            // Add to scene
            this.scene.add(hill);
        }
    }
    
    addStars() {
        // Create a star-filled sky with more stars for night scene
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1,
        });
        
        const starPositions = [];
        for (let i = 0; i < 3000; i++) { // Increased number of stars
            const x = (Math.random() - 0.5) * 200;
            const y = Math.random() * 100 + 10; // Above ground
            const z = (Math.random() - 0.5) * 200;
            starPositions.push(x, y, z);
        }
        
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
        const stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(stars);
    }
    
    createTallObjects() {
        // Create several trees and tall objects that will cast dramatic shadows
        
        // Create a few taller trees
        for (let i = 0; i < 6; i++) {
            // Random position
            const x = (Math.random() - 0.5) * 60;
            const z = (Math.random() - 0.5) * 60;
            
            // Tree trunk (tall cylinder)
            const trunkHeight = 5 + Math.random() * 3;
            const trunkRadius = 0.3 + Math.random() * 0.2;
            
            const trunkGeometry = new THREE.CylinderGeometry(trunkRadius, trunkRadius * 1.2, trunkHeight, 8);
            const trunkMaterial = new THREE.MeshStandardMaterial({
                color: 0x553311,
                roughness: 0.9,
                metalness: 0.1
            });
            
            const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
            trunk.position.set(x, trunkHeight / 2, z);
            trunk.castShadow = true;
            trunk.receiveShadow = true;
            this.scene.add(trunk);
            
            // Tree top (cone)
            const topHeight = trunkHeight * 1.5;
            const topRadius = trunkHeight * 0.7;
            
            const topGeometry = new THREE.ConeGeometry(topRadius, topHeight, 8);
            const topMaterial = new THREE.MeshStandardMaterial({
                color: 0x224422,
                roughness: 0.8,
                metalness: 0.1
            });
            
            const top = new THREE.Mesh(topGeometry, topMaterial);
            top.position.set(x, trunkHeight + topHeight / 2, z);
            top.castShadow = true;
            top.receiveShadow = true;
            this.scene.add(top);
        }
        
        // Create a couple of large monolith-like structures
        for (let i = 0; i < 3; i++) {
            // Random position
            const x = (Math.random() - 0.5) * 40;
            const z = (Math.random() - 0.5) * 40;
            
            // Monolith dimensions
            const width = 1 + Math.random() * 2;
            const height = 8 + Math.random() * 7;
            const depth = 1 + Math.random() * 2;
            
            const monolithGeometry = new THREE.BoxGeometry(width, height, depth);
            const monolithMaterial = new THREE.MeshStandardMaterial({
                color: 0x888899,
                roughness: 0.7,
                metalness: 0.3
            });
            
            const monolith = new THREE.Mesh(monolithGeometry, monolithMaterial);
            monolith.position.set(x, height / 2, z);
            monolith.rotation.y = Math.random() * Math.PI;
            monolith.castShadow = true;
            monolith.receiveShadow = true;
            this.scene.add(monolith);
        }
    }
    
    // Methods for terrain generation, physics updates, etc. would be added here
    update(delta) {
        // Update world entities, physics, etc.
        this.entities.update(delta);
        
        // Optional: Slowly move the moon to create dynamic lighting
        if (this.moon && this.moonLight) {
            const rotationSpeed = 0.05 * delta;
            this.moon.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), rotationSpeed);
            
            // Update moonlight position to match moon
            const moonDirection = new THREE.Vector3().copy(this.moon.position).normalize();
            this.moonLight.position.copy(moonDirection.multiplyScalar(40));
        }
    }
}

export { World }; 