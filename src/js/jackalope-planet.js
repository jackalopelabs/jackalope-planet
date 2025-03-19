import * as THREE from 'three';
import '../css/jackalope-planet.css';

class JackalopeScene {
    constructor(containerId) {
        this.containerId = containerId;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.planet = null;
        this.jackalope = null;
        this.angle = 0;
        
        // Initialize the scene
        this.init();
    }
    
    init() {
        // Find the container
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with ID '${this.containerId}' not found`);
            return;
        }
        
        // Set background color on container to match Three.js scene
        container.style.backgroundColor = '#050520';
        
        // Initialize scene, camera, and renderer
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x050520);
        
        this.camera = new THREE.PerspectiveCamera(
            75, 
            container.clientWidth / container.clientHeight, 
            0.1, 
            1000
        );
        this.camera.position.z = 5;
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
        
        // Add lights to the scene
        this.addLights();
        
        // Create planet and jackalope
        this.createPlanet();
        this.createJackalope();
        this.addStars();
        
        // Handle window resize
        window.addEventListener('resize', () => this.handleResize(container));
        
        // Start animation loop
        this.animate();
    }
    
    handleResize(container) {
        if (!this.camera || !this.renderer) return;
        
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
    }
    
    addLights() {
        // Add ambient and directional light
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);
    }
    
    createPlanet() {
        // Create a planet (sphere)
        const planetGeometry = new THREE.SphereGeometry(2, 32, 32);
        const planetMaterial = new THREE.MeshStandardMaterial({
            color: 0x8844aa,
            metalness: 0.3,
            roughness: 0.7,
        });
        this.planet = new THREE.Mesh(planetGeometry, planetMaterial);
        this.scene.add(this.planet);
        
        // Create mountains on the planet (cones)
        for (let i = 0; i < 12; i++) {
            const phi = Math.acos(-1 + (2 * i) / 12);
            const theta = Math.sqrt(12 * Math.PI) * phi;
            
            const mountainGeometry = new THREE.ConeGeometry(0.3, 0.6, 4);
            const mountainMaterial = new THREE.MeshStandardMaterial({
                color: 0x228866,
                roughness: 0.8
            });
            
            const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial);
            mountain.position.setFromSphericalCoords(2, phi, theta);
            mountain.lookAt(0, 0, 0);
            this.planet.add(mountain);
        }
    }
    
    createJackalope() {
        // Create a mini jackalope (just a simple shape for now)
        this.jackalope = new THREE.Group();
        
        // Body
        const bodyGeometry = new THREE.SphereGeometry(0.3, 16, 16);
        const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xbb8855 });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        this.jackalope.add(body);
        
        // Head
        const headGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const headMaterial = new THREE.MeshStandardMaterial({ color: 0xbb8855 });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.set(0, 0.3, 0.2);
        this.jackalope.add(head);
        
        // Antlers
        const antlerMaterial = new THREE.MeshStandardMaterial({ color: 0x664422 });
        
        const leftAntlerGeometry = new THREE.CylinderGeometry(0.02, 0.01, 0.4);
        const leftAntler = new THREE.Mesh(leftAntlerGeometry, antlerMaterial);
        leftAntler.position.set(-0.1, 0.5, 0.2);
        leftAntler.rotation.z = -Math.PI / 6;
        this.jackalope.add(leftAntler);
        
        const rightAntlerGeometry = new THREE.CylinderGeometry(0.02, 0.01, 0.4);
        const rightAntler = new THREE.Mesh(rightAntlerGeometry, antlerMaterial);
        rightAntler.position.set(0.1, 0.5, 0.2);
        rightAntler.rotation.z = Math.PI / 6;
        this.jackalope.add(rightAntler);
        
        this.jackalope.position.set(0, 2.3, 0);
        this.scene.add(this.jackalope);
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
            const y = (Math.random() - 0.5) * 100;
            const z = (Math.random() - 0.5) * 100;
            starPositions.push(x, y, z);
        }
        
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
        const stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(stars);
    }
    
    animate() {
        if (!this.scene || !this.camera || !this.renderer || !this.planet || !this.jackalope) return;
        
        requestAnimationFrame(() => this.animate());
        
        // Rotate the planet
        this.planet.rotation.y += 0.002;
        
        // Move the jackalope around the planet
        this.angle += 0.005;
        this.jackalope.position.x = 2.5 * Math.sin(this.angle);
        this.jackalope.position.z = 2.5 * Math.cos(this.angle);
        this.jackalope.rotation.y = -this.angle + Math.PI;
        
        // Slowly rotate camera around the scene
        this.camera.position.x = 7 * Math.sin(this.angle * 0.2);
        this.camera.position.z = 7 * Math.cos(this.angle * 0.2);
        this.camera.lookAt(0, 0, 0);
        
        // Render the scene
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize Jackalope Planet when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Find all jackalope planet containers
    const containers = document.querySelectorAll('.jackalope-planet-canvas-container');
    
    // Initialize each container with a new JackalopeScene instance
    containers.forEach(container => {
        const containerId = container.getAttribute('id');
        if (containerId) {
            new JackalopeScene(containerId);
        }
    });
}); 