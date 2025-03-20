import * as THREE from 'three';
import { Entities } from './Entities';
import { Physics } from '../utils/Physics'; // Import Physics class

class World {
    constructor(scene) {
        this.scene = scene;
        this.entities = new Entities(scene);
        this.physics = new Physics(); // Create physics instance
        
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
        
        // Apply shadow enhancements to the entire scene for better contrast
        this.physics.applyContrastEnhancedShadows(this.scene);
    }
    
    addLights() {
        // Use an extremely dim ambient light for the night scene - drastically reduced intensity
        const ambientLight = new THREE.AmbientLight(0x040408, 0.03); // Further darkened color and reduced from 0.07 to 0.03
        this.scene.add(ambientLight);
        
        // Create moonlight (directional light with blue tint) - increase contrast
        this.moonLight = new THREE.DirectionalLight(0xaabbff, 1.6); // Increased intensity from 1.4 to 1.6
        this.moonLight.position.set(15, 30, 20);
        this.moonLight.castShadow = true;
        
        // Configure shadow properties - enhance shadows for more contrast
        this.moonLight.shadow.mapSize.width = 2048;
        this.moonLight.shadow.mapSize.height = 2048;
        this.moonLight.shadow.camera.near = 0.5;
        this.moonLight.shadow.camera.far = 100;
        this.moonLight.shadow.camera.left = -30;
        this.moonLight.shadow.camera.right = 30;
        this.moonLight.shadow.camera.top = 30;
        this.moonLight.shadow.camera.bottom = -30;
        this.moonLight.shadow.bias = -0.0005; // Reduced bias for sharper shadows
        this.moonLight.shadow.normalBias = 0.02; // Added normal bias for better contact shadows
        
        // Increase darkness of shadows
        this.moonLight.shadow.darkness = 0.95; // Higher darkness value for more contrast
        
        this.scene.add(this.moonLight);
        
        // Reduce the intensity of the fill light for darker environment
        const fillLight = new THREE.PointLight(0x3344aa, 0.1, 50); // Reduced from 0.2 to 0.1
        fillLight.position.set(-10, 5, -10);
        this.scene.add(fillLight);
        
        // Create the moon - brighter to stand out more
        this.createMoon();
    }
    
    createMoon() {
        // Create a moon sphere - brighter to contrast with dark sky
        const moonGeometry = new THREE.SphereGeometry(3, 16, 16);
        const moonMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            emissive: 0xaaaaff,
            emissiveIntensity: 0.4 // Increased from 0.2 to 0.4
        });
        
        this.moon = new THREE.Mesh(moonGeometry, moonMaterial);
        
        // Position the moon in the direction of the moonlight
        const moonDistance = 80;
        this.moon.position.set(
            this.moonLight.position.x * (moonDistance / this.moonLight.position.length()),
            this.moonLight.position.y * (moonDistance / this.moonLight.position.length()),
            this.moonLight.position.z * (moonDistance / this.moonLight.position.length())
        );
        
        // Add a subtle glow effect - enhanced
        const moonGlowGeometry = new THREE.SphereGeometry(4, 16, 16); // Increased from 3.5 to 4
        const moonGlowMaterial = new THREE.MeshBasicMaterial({
            color: 0xaabbff,
            transparent: true,
            opacity: 0.25, // Increased from 0.2 to 0.25
            side: THREE.BackSide
        });
        
        const moonGlow = new THREE.Mesh(moonGlowGeometry, moonGlowMaterial);
        this.moon.add(moonGlow);
        
        this.scene.add(this.moon);
    }
    
    createGround() {
        // Create a grid helper for the ground - almost black
        const gridSize = 100;
        const gridDivisions = 100;
        const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x080808, 0x020202); // Near-black colors for almost invisible grid
        gridHelper.position.y = 0.01; // Slightly above the ground to prevent z-fighting
        this.scene.add(gridHelper);
        
        // Simple flat ground plane with darker materials for night scene
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0x0a0e12, // Further darkened from 0x151a22 to 0x0a0e12
            roughness: 0.95, // Increased from 0.9 to 0.95
            metalness: 0.15, // Reduced from 0.2 to 0.15
            transparent: true,
            opacity: 0.9, // Increased from 0.8 to 0.9
            receiveShadow: true // Enable shadow receiving
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2; // Lay flat on XZ plane
        ground.position.y = 0;
        ground.receiveShadow = true;
        this.scene.add(ground);
    }
    
    createHills() {
        // Add some low poly hills to the terrain - darker colors
        const hillColors = [0x112233, 0x223344, 0x334455]; // Darker colors compared to original
        
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
                roughness: 0.9, // Increased from 0.8 to 0.9
                metalness: 0.05 // Reduced from 0.1 to 0.05
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
        // Create a star-filled sky with brighter stars to contrast with darker sky
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.15, // Increased from 0.1 to 0.15
            sizeAttenuation: true
        });
        
        const starPositions = [];
        const starColors = [];
        
        // Add more stars with varying brightness
        for (let i = 0; i < 4000; i++) { // Increased from 3000 to 4000
            const x = (Math.random() - 0.5) * 200;
            const y = Math.random() * 100 + 10; // Above ground
            const z = (Math.random() - 0.5) * 200;
            starPositions.push(x, y, z);
            
            // Add some color variation to stars - creates better contrast
            if (Math.random() > 0.8) {
                // Bluish star
                starColors.push(0.8, 0.9, 1.0);
            } else if (Math.random() > 0.7) {
                // Reddish star
                starColors.push(1.0, 0.8, 0.8);
            } else {
                // White star
                starColors.push(1.0, 1.0, 1.0);
            }
        }
        
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
        starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
        
        starMaterial.vertexColors = true; // Enable vertex colors
        
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
                color: 0x442200, // Darker from 0x553311 to 0x442200
                roughness: 0.95, // Increased from 0.9 to 0.95
                metalness: 0.05 // Reduced from 0.1 to 0.05
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
                color: 0x113311, // Darker from 0x224422 to 0x113311
                roughness: 0.9, // Increased from 0.8 to 0.9
                metalness: 0.05 // Reduced from 0.1 to 0.05
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
                color: 0x666677, // Darker from 0x888899 to 0x666677
                roughness: 0.75, // Increased from 0.7 to 0.75
                metalness: 0.25 // Reduced from 0.3 to 0.25
            });
            
            const monolith = new THREE.Mesh(monolithGeometry, monolithMaterial);
            monolith.position.set(x, height / 2, z);
            monolith.rotation.y = Math.random() * Math.PI;
            monolith.castShadow = true;
            monolith.receiveShadow = true;
            this.scene.add(monolith);
        }
        
        // Add some dark rocks for additional contrast
        for (let i = 0; i < 8; i++) {
            const x = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;
            
            // Random rock size
            const rockSize = 0.5 + Math.random() * 1.5;
            
            // Create a random low-poly rock using a dodecahedron
            const rockGeometry = new THREE.DodecahedronGeometry(rockSize, 0); // Low detail for low-poly look
            const rockMaterial = new THREE.MeshStandardMaterial({
                color: 0x222222, // Very dark
                flatShading: true,
                roughness: 0.95,
                metalness: 0.05
            });
            
            const rock = new THREE.Mesh(rockGeometry, rockMaterial);
            
            // Random position and rotation
            rock.position.set(x, rockSize * 0.5, z);
            rock.rotation.set(
                Math.random() * Math.PI, 
                Math.random() * Math.PI, 
                Math.random() * Math.PI
            );
            
            rock.castShadow = true;
            rock.receiveShadow = true;
            this.scene.add(rock);
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