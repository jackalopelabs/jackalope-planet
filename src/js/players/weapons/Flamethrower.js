import * as THREE from 'three';
import { HumanWeapon } from './HumanWeapon';

// Add a global debugging helper
let flamethrowerInstance = null;

window.debugFlamethrower = function() {
    if (!flamethrowerInstance) {
        console.log('[DEBUG] No flamethrower instance found yet');
        return;
    }

    const ft = flamethrowerInstance;
    console.log('-------- FLAMETHROWER DEBUG --------');
    console.log('Is initialized:', ft ? 'yes' : 'no');
    console.log('Is firing:', ft.isFiring);
    console.log('Has particle system:', ft.particleSystem ? 'yes' : 'no');
    console.log('Particle count:', ft.particles.length);
    console.log('Active particles:', ft.particles.filter(p => p.life > 0).length);
    console.log('Scene:', ft.scene ? 'valid' : 'null');
    
    if (ft.particleSystem) {
        console.log('Particle system parent:', ft.particleSystem.parent ? ft.particleSystem.parent.type : 'none');
        console.log('Particle system visible:', ft.particleSystem.visible);
        console.log('Particle system frustumCulled:', ft.particleSystem.frustumCulled);
    }
    
    return 'Debug info printed';
};

class Flamethrower extends HumanWeapon {
    constructor(player, options = {}) {
        // Set up flamethrower-specific properties
        super(player, {
            name: 'Flamethrower',
            damage: 5,
            cooldown: 0.05, // Continuous spray effect
            range: 30, // Increased from 15 for longer flame reach
            ...options
        });
        
        // Store reference for debugging
        flamethrowerInstance = this;
        
        // Ensure player and scene are valid
        if (!player) {
            console.error('[DEBUG] Player is null in Flamethrower constructor');
        }
        
        if (!player.scene) {
            console.error('[DEBUG] Scene is null in Flamethrower constructor');
        }
        
        // Always initialize particles array
        this.particles = [];
        
        // Flamethrower specific properties
        this.particleCount = 200; // Reduced for better performance
        this.flameLength = 25;
        this.flameWidth = 2;
        this.particleSystem = null;
        
        // Debug mode
        this.debug = true;
        
        // Flag for automatic recreation of particle system if needed
        this.recreationAttempted = false;
        this.emergencyAttempted = false;
        this.useEmergencySystem = false;
        
        // Flag to track which particle system implementation is used
        this.useCustomShaders = false;
        
        // Store the current flame origin and direction
        this.flameOrigin = new THREE.Vector3();
        this.flameDirection = new THREE.Vector3(0, 0, 1);
        
        // Flame colors
        this.flameColors = [
            new THREE.Color(0xff5500), // Orange
            new THREE.Color(0xff9900), // Light orange
            new THREE.Color(0xff0000), // Red
            new THREE.Color(0xffff00)  // Yellow
        ];
    }
    
    init(options) {
        console.log('[DEBUG] Flamethrower init starting');
        
        // Create weapon model
        this.createWeaponModel();
        
        // Option to try alternative particle system implementation
        const useAlternativeParticles = true;
        this.useCustomShaders = useAlternativeParticles;
        
        // Create particle system for flames
        if (useAlternativeParticles) {
            console.log('[DEBUG] Using alternative particle system implementation');
            this.createParticleSystem2();
        } else {
            console.log('[DEBUG] Using standard particle system implementation');
            this.createParticleSystem();
        }
        
        // Create debug helpers if enabled
        if (this.debug) {
            this.createDebugHelpers();
        }
        
        // Make sure particles array exists before accessing .length
        if (!this.particles) {
            console.error('[DEBUG] Particles array is undefined, initializing empty array');
            this.particles = [];
        }
        
        console.log(`[DEBUG] Flamethrower initialized - particle system: ${this.particleSystem ? 'created' : 'failed'}, particles: ${this.particles.length}`);
    }
    
    createWeaponModel() {
        // Create a simple flamethrower model
        const group = new THREE.Group();
        
        // Tank (cylinder)
        const tankGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.4, 16);
        const tankMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x444444,
            metalness: 0.8,
            roughness: 0.2
        });
        const tank = new THREE.Mesh(tankGeometry, tankMaterial);
        tank.rotation.x = Math.PI / 2; // Lay horizontally
        tank.position.set(0.15, -0.2, -0.1);
        tank.castShadow = true;
        group.add(tank);
        
        // Nozzle (cone)
        const nozzleGeometry = new THREE.CylinderGeometry(0.03, 0.05, 0.25, 8);
        const nozzleMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x222222,
            metalness: 0.5,
            roughness: 0.5
        });
        const nozzle = new THREE.Mesh(nozzleGeometry, nozzleMaterial);
        nozzle.position.set(0.15, -0.2, 0.15);
        nozzle.rotation.x = Math.PI / 2;
        nozzle.castShadow = true;
        group.add(nozzle);
        
        // Store the nozzle tip position
        this.nozzleTipPosition = new THREE.Vector3(
            nozzle.position.x,
            nozzle.position.y,
            nozzle.position.z + 0.2
        );
        
        // Position for FPS view
        group.position.set(0.3, -0.3, -0.1);
        
        this.model = group;
        
        // Add to camera or player model
        if (this.player.isFirstPerson && this.player.fpCamera) {
            this.player.fpCamera.add(this.model);
        } else if (this.player.model) {
            this.player.model.add(this.model);
        }
    }
    
    createParticleSystem() {
        // Create a simple particle system using Points
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);
        const sizes = new Float32Array(this.particleCount);
        
        console.log('[DEBUG] Creating particle system with', this.particleCount, 'particles');
        
        // Initialize all particles
        for (let i = 0; i < this.particleCount; i++) {
            // Set initial positions off-screen
            positions[i * 3] = 0;
            positions[i * 3 + 1] = 0;
            positions[i * 3 + 2] = 0;
            
            // Set initial colors (will be updated during emission)
            colors[i * 3] = 1.0;      // R
            colors[i * 3 + 1] = 0.5;  // G
            colors[i * 3 + 2] = 0.0;  // B
            
            // Set initial sizes
            sizes[i] = 0;
            
            // Create particle object for tracking
            this.particles.push({
                position: new THREE.Vector3(),
                velocity: new THREE.Vector3(),
                color: new THREE.Color(1, 0.5, 0),
                size: 0,
                life: 0,
                maxLife: 0
            });
        }
        
        // Set geometry attributes
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        // Create texture for particles
        const texture = this.createFlameTexture();
        console.log('[DEBUG] Flame texture created:', texture ? 'success' : 'failed');
        
        // Create shader material - Using built-in PointsMaterial for simplicity
        const material = new THREE.PointsMaterial({
            size: 2.0,
            map: texture,
            transparent: true,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            sizeAttenuation: true
        });
        
        // Create points system
        this.particleSystem = new THREE.Points(particles, material);
        this.particleSystem.frustumCulled = false; // Don't cull particles
        
        // Add to scene explicitly - important!
        if (this.scene) {
            this.scene.add(this.particleSystem);
            this.effects.push(this.particleSystem);
            console.log('[DEBUG] Particle system added to scene (effects array size:', this.effects.length, ')');
        } else {
            console.error('[DEBUG] Cannot add particle system: scene is null');
        }
    }
    
    createFlameTexture() {
        // Create a canvas for the flame texture
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        
        const context = canvas.getContext('2d');
        
        // Create a radial gradient for the flame
        const gradient = context.createRadialGradient(
            32, 32, 0,   // inner circle
            32, 32, 32   // outer circle
        );
        
        // Add color stops
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');   // center: white
        gradient.addColorStop(0.3, 'rgba(255, 255, 0, 1)');   // yellow
        gradient.addColorStop(0.6, 'rgba(255, 120, 0, 0.9)'); // orange
        gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');       // edge: transparent red
        
        // Fill with gradient
        context.fillStyle = gradient;
        context.fillRect(0, 0, 64, 64);
        
        // Create texture
        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        
        return texture;
    }
    
    createDebugHelpers() {
        // Create a debug sphere at the nozzle tip
        const sphereGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.debugSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        this.debugSphere.position.copy(this.nozzleTipPosition);
        
        if (this.model) {
            this.model.add(this.debugSphere);
        }
    }
    
    fire() {
        // Use base class for cooldown check
        if (!super.fire()) {
            return false;
        }
        
        // Emit particles
        this.emitParticles();
        
        return true;
    }
    
    emitParticles() {
        // Ensure particles array exists
        if (!this.particles) {
            console.error('[DEBUG] Particles array is undefined, initializing empty array');
            this.particles = [];
        }
        
        // Skip if no particle system
        if (!this.particleSystem || !this.particles.length) {
            console.log('[DEBUG] Particle diagnostic:');
            console.log(`[DEBUG] - this.particleSystem exists: ${this.particleSystem ? 'yes' : 'no'}`);
            console.log(`[DEBUG] - this.particles.length: ${this.particles ? this.particles.length : 'undefined'}`);
            console.log(`[DEBUG] - this.scene exists: ${this.scene ? 'yes' : 'no'}`);
            
            // If using the custom shader implementation
            if (this.useCustomShaders) {
                console.log('[DEBUG] Using custom shader implementation');
            }
            
            // Try to recreate the particle system
            console.log('[DEBUG] Attempting to recreate particle system...');
            
            // Try the alternative particle system if the main one failed
            if (!this.particleSystem) {
                if (!this.recreationAttempted) {
                    this.recreationAttempted = true;
                    if (this.useCustomShaders) {
                        this.createParticleSystem();
                    } else {
                        this.createParticleSystem2();
                    }
                    console.log('[DEBUG] Particle system recreation attempt complete');
                    
                    // If still not ready, log a final warning
                    if (!this.particleSystem || !this.particles.length) {
                        console.warn('[DEBUG] Cannot emit particles: system not ready after recreation attempt');
                        return;
                    }
                } else {
                    console.warn('[DEBUG] Cannot emit particles: system not ready after previous recreation attempt');
                    return;
                }
            } else {
                console.warn('[DEBUG] Cannot emit particles: system not ready');
                return;
            }
        }
        
        // Get world position of nozzle tip
        this.model.updateMatrixWorld(true);
        const nozzleTipWorld = new THREE.Vector3();
        nozzleTipWorld.copy(this.nozzleTipPosition);
        nozzleTipWorld.applyMatrix4(this.model.matrixWorld);
        
        // Store for reference
        this.flameOrigin.copy(nozzleTipWorld);
        
        // Get flame direction - use camera or model direction
        if (this.player.isFirstPerson && this.player.fpCamera) {
            this.player.fpCamera.getWorldDirection(this.flameDirection);
            if (this.debug) {
                console.log('[DEBUG] First-person flame direction:', 
                    this.flameDirection.x.toFixed(2), 
                    this.flameDirection.y.toFixed(2), 
                    this.flameDirection.z.toFixed(2)
                );
            }
        } else if (this.player.model) {
            this.player.model.getWorldDirection(this.flameDirection);
            if (this.debug) {
                console.log('[DEBUG] Third-person flame direction:', 
                    this.flameDirection.x.toFixed(2), 
                    this.flameDirection.y.toFixed(2), 
                    this.flameDirection.z.toFixed(2)
                );
            }
        }
        
        // Number of particles to emit per call
        const emitCount = 15;
        
        // Find inactive particles to activate
        let particlesEmitted = 0;
        for (let i = 0; i < this.particleCount && particlesEmitted < emitCount; i++) {
            const particle = this.particles[i];
            
            // Skip active particles
            if (particle.life > 0) continue;
            
            // Activate this particle
            particlesEmitted++;
            
            // Set position at flame origin
            particle.position.copy(this.flameOrigin);
            
            // Calculate random spread
            const spread = 0.1;
            const spreadVec = new THREE.Vector3(
                (Math.random() - 0.5) * spread,
                (Math.random() - 0.5) * spread + 0.05, // slight upward bias
                (Math.random() - 0.5) * spread
            );
            
            // Set velocity in flame direction with random spread
            const speed = 10 + Math.random() * 5;
            particle.velocity.copy(this.flameDirection).normalize().multiplyScalar(speed);
            particle.velocity.add(spreadVec);
            
            // Set color (random from flame colors)
            const colorIndex = Math.floor(Math.random() * this.flameColors.length);
            particle.color.copy(this.flameColors[colorIndex]);
            
            // Set size and life
            particle.size = 1 + Math.random() * 2;
            particle.maxLife = 1.0 + Math.random() * 0.5;
            particle.life = particle.maxLife;
            
            // First particle debug
            if (particlesEmitted === 1 && this.debug) {
                console.log('[DEBUG] First particle position:', 
                    particle.position.x.toFixed(2), 
                    particle.position.y.toFixed(2), 
                    particle.position.z.toFixed(2)
                );
            }
        }
        
        if (this.debug) {
            console.log('[DEBUG] Emitted', particlesEmitted, 'particles');
        }
    }
    
    updateEffects(delta) {
        // Ensure particles array exists
        if (!this.particles) {
            console.error('[DEBUG] Particles array is undefined, initializing empty array');
            this.particles = [];
        }
        
        // Skip if no particles
        if (!this.particleSystem || !this.particles.length) {
            // If trying to fire, attempt emergency system creation
            if (this.isFiring && !this.emergencyAttempted) {
                this.emergencyAttempted = true;
                console.log('[DEBUG] No particle system available - trying emergency fallback');
                if (this.createEmergencyParticleSystem()) {
                    this.useEmergencySystem = true;
                }
            }
            return;
        }
        
        // Use emergency system if that's what we're using
        if (this.useEmergencySystem) {
            this.updateEmergencyParticles(delta);
            return;
        }
        
        // Check if we're using the custom shader implementation
        if (this.particleSystem.geometry.attributes.lifetime) {
            this.updateCustomShaderEffects(delta);
            return;
        }
        
        // Standard particle system update (original code below)
        const positions = this.particleSystem.geometry.attributes.position.array;
        const colors = this.particleSystem.geometry.attributes.color.array;
        const sizes = this.particleSystem.geometry.attributes.size.array;
        
        // Update each particle
        let activeParticles = 0;
        
        for (let i = 0; i < this.particleCount; i++) {
            const particle = this.particles[i];
            
            // Skip dead particles
            if (particle.life <= 0) continue;
            
            activeParticles++;
            
            // Update life
            particle.life -= delta;
            
            // Update position based on velocity
            particle.position.addScaledVector(particle.velocity, delta);
            
            // Add upward force for realism
            particle.velocity.y += 5 * delta;
            
            // Slow down
            particle.velocity.multiplyScalar(0.95);
            
            // Calculate life ratio for fading
            const lifeRatio = particle.life / particle.maxLife;
            
            // Update color based on life
            const idx = i * 3;
            if (lifeRatio > 0.6) {
                // Yellow to orange
                colors[idx] = 1.0;  // R
                colors[idx + 1] = 0.5 + lifeRatio * 0.5;  // G
                colors[idx + 2] = 0;  // B
            } else {
                // Orange to red
                colors[idx] = 1.0;  // R
                colors[idx + 1] = 0.5 * (lifeRatio / 0.6);  // G
                colors[idx + 2] = 0;  // B
            }
            
            // Update position
            positions[idx] = particle.position.x;
            positions[idx + 1] = particle.position.y;
            positions[idx + 2] = particle.position.z;
            
            // Update size (grow then shrink)
            sizes[i] = particle.size * (lifeRatio < 0.3 ? lifeRatio / 0.3 : 1.0);
        }
        
        // Mark attributes for update
        this.particleSystem.geometry.attributes.position.needsUpdate = true;
        this.particleSystem.geometry.attributes.color.needsUpdate = true;
        this.particleSystem.geometry.attributes.size.needsUpdate = true;
        
        if (this.debug && this.isFiring) {
            console.log(`Active particles: ${activeParticles}`);
        }
    }
    
    startFire() {
        this.isFiring = true;
        
        if (this.debug) {
            console.log('Flamethrower: Started firing');
        }
    }
    
    stopFire() {
        this.isFiring = false;
        
        if (this.debug) {
            console.log('Flamethrower: Stopped firing');
        }
    }
    
    cleanup() {
        super.cleanup();
        
        // Clean up debug objects
        if (this.debugSphere) {
            if (this.debugSphere.parent) {
                this.debugSphere.parent.remove(this.debugSphere);
            }
            this.debugSphere.geometry.dispose();
            this.debugSphere.material.dispose();
            this.debugSphere = null;
        }
        
        // Reset particles
        this.particles = [];
    }
    
    // Alternative implementation using custom shaders for particles
    createParticleSystem2() {
        console.log('[DEBUG] Creating particle system with custom shaders');
        
        // Create a simple particle system using Points
        const geometry = new THREE.BufferGeometry();
        
        // Create arrays for particle attributes
        const positions = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);
        const sizes = new Float32Array(this.particleCount);
        const lifeTimes = new Float32Array(this.particleCount);
        
        // Initialize all particles to be hidden initially
        for (let i = 0; i < this.particleCount; i++) {
            positions[i * 3] = 0;
            positions[i * 3 + 1] = -1000; // Hide far below
            positions[i * 3 + 2] = 0;
            
            colors[i * 3] = 1.0;     // R
            colors[i * 3 + 1] = 0.5;  // G
            colors[i * 3 + 2] = 0.0;  // B
            
            sizes[i] = 0;
            lifeTimes[i] = 0;
            
            // Create particle object for tracking
            this.particles.push({
                position: new THREE.Vector3(0, -1000, 0),
                velocity: new THREE.Vector3(),
                color: new THREE.Color(1, 0.5, 0),
                size: 0,
                life: 0,
                maxLife: 0
            });
        }
        
        // Set geometry attributes
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute('lifetime', new THREE.BufferAttribute(lifeTimes, 1));
        
        // Create texture for particles
        const texture = this.createFlameTexture();
        
        // Vertex shader
        const vertexShader = `
            attribute float size;
            attribute float lifetime;
            attribute vec3 color;
            
            varying float vLifetime;
            varying vec3 vColor;
            
            void main() {
                vLifetime = lifetime;
                vColor = color;
                
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `;
        
        // Fragment shader
        const fragmentShader = `
            uniform sampler2D diffuseTexture;
            
            varying float vLifetime;
            varying vec3 vColor;
            
            void main() {
                if (vLifetime <= 0.0) discard;
                
                vec4 texColor = texture2D(diffuseTexture, gl_PointCoord);
                gl_FragColor = vec4(vColor * texColor.rgb, texColor.a * min(vLifetime * 2.0, 1.0));
            }
        `;
        
        // Create custom shader material
        const material = new THREE.ShaderMaterial({
            uniforms: {
                diffuseTexture: { value: texture }
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        
        // Create points system
        this.particleSystem = new THREE.Points(geometry, material);
        this.particleSystem.frustumCulled = false;
        
        if (this.scene) {
            this.scene.add(this.particleSystem);
            this.effects.push(this.particleSystem);
            console.log('[DEBUG] Custom shader particle system added to scene (effects array size:', this.effects.length, ')');
        } else {
            console.error('[DEBUG] Cannot add particle system: scene is null');
        }
    }
    
    // Update method for the custom shader particles
    updateCustomShaderEffects(delta) {
        // Ensure particles array exists
        if (!this.particles) {
            console.error('[DEBUG] Particles array is undefined in updateCustomShaderEffects, initializing empty array');
            this.particles = [];
        }
        
        if (!this.particleSystem || !this.particles.length) {
            return;
        }
        
        const positions = this.particleSystem.geometry.attributes.position.array;
        const colors = this.particleSystem.geometry.attributes.color.array;
        const sizes = this.particleSystem.geometry.attributes.size.array;
        const lifeTimes = this.particleSystem.geometry.attributes.lifetime.array;
        
        let activeParticles = 0;
        
        for (let i = 0; i < this.particleCount; i++) {
            const particle = this.particles[i];
            
            if (particle.life <= 0) continue;
            
            activeParticles++;
            
            // Update life
            particle.life -= delta;
            
            // Update position based on velocity
            particle.position.addScaledVector(particle.velocity, delta);
            
            // Add upward force
            particle.velocity.y += 5 * delta;
            
            // Slow down
            particle.velocity.multiplyScalar(0.95);
            
            // Calculate life ratio
            const lifeRatio = particle.life / particle.maxLife;
            
            // Update buffer attributes
            const idx = i * 3;
            
            // Position
            positions[idx] = particle.position.x;
            positions[idx + 1] = particle.position.y;
            positions[idx + 2] = particle.position.z;
            
            // Color - fade from yellow to red
            if (lifeRatio > 0.5) {
                colors[idx] = 1.0;                   // R
                colors[idx + 1] = 0.3 + lifeRatio * 0.7; // G
                colors[idx + 2] = 0.0;               // B
            } else {
                colors[idx] = 1.0;                   // R
                colors[idx + 1] = 0.3 * lifeRatio * 2.0; // G
                colors[idx + 2] = 0.0;               // B
            }
            
            // Size
            sizes[i] = particle.size * (lifeRatio < 0.3 ? lifeRatio / 0.3 : 1.0);
            
            // Lifetime
            lifeTimes[i] = lifeRatio;
        }
        
        // Mark attributes for update
        this.particleSystem.geometry.attributes.position.needsUpdate = true;
        this.particleSystem.geometry.attributes.color.needsUpdate = true;
        this.particleSystem.geometry.attributes.size.needsUpdate = true;
        this.particleSystem.geometry.attributes.lifetime.needsUpdate = true;
        
        if (this.debug && this.isFiring) {
            console.log('[DEBUG] Active custom shader particles:', activeParticles);
        }
    }
    
    // Add a simplified emergency fallback particle system
    createEmergencyParticleSystem() {
        console.log('[DEBUG] Creating emergency fallback particle system');
        
        try {
            // Create an absolutely minimal particle system with no frills
            const geometry = new THREE.BufferGeometry();
            const vertices = [];
            
            // Create simple particle positions
            for (let i = 0; i < 100; i++) {
                vertices.push(0, 0, 0); // All at origin initially
            }
            
            const positionAttribute = new THREE.Float32BufferAttribute(vertices, 3);
            geometry.setAttribute('position', positionAttribute);
            
            // Create a solid orange material
            const material = new THREE.PointsMaterial({
                size: 5.0,
                color: 0xff5500,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            });
            
            // Create points system
            this.particleSystem = new THREE.Points(geometry, material);
            this.particleSystem.frustumCulled = false;
            
            // Create basic particle data
            this.particles = [];
            for (let i = 0; i < 100; i++) {
                this.particles.push({
                    position: new THREE.Vector3(),
                    velocity: new THREE.Vector3(),
                    color: new THREE.Color(1, 0.5, 0),
                    size: 5.0,
                    life: 0,
                    maxLife: 0
                });
            }
            
            // Add to scene
            if (this.scene) {
                this.scene.add(this.particleSystem);
                this.effects.push(this.particleSystem);
                console.log('[DEBUG] Emergency particle system added to scene');
                return true;
            } else {
                console.error('[DEBUG] Cannot add emergency particle system: scene is null');
                return false;
            }
        } catch (error) {
            console.error('[DEBUG] Failed to create emergency particle system:', error);
            return false;
        }
    }
    
    // Override the emitParticles method for the emergency system
    updateEmergencyParticles(delta) {
        // Ensure particles array exists
        if (!this.particles) {
            console.error('[DEBUG] Particles array is undefined in updateEmergencyParticles, initializing empty array');
            this.particles = [];
        }
        
        if (!this.particleSystem || !this.particles.length) {
            return;
        }
        
        const positions = this.particleSystem.geometry.attributes.position.array;
        
        // Get nozzle world position
        this.model.updateMatrixWorld(true);
        const nozzleTipWorld = new THREE.Vector3();
        nozzleTipWorld.copy(this.nozzleTipPosition);
        nozzleTipWorld.applyMatrix4(this.model.matrixWorld);
        
        // Get direction
        let direction = new THREE.Vector3(0, 0, 1);
        if (this.player.isFirstPerson && this.player.fpCamera) {
            this.player.fpCamera.getWorldDirection(direction);
        } else if (this.player.model) {
            this.player.model.getWorldDirection(direction);
        }
        
        // Update each particle
        let activeParticles = 0;
        
        for (let i = 0; i < this.particles.length; i++) {
            const particle = this.particles[i];
            
            // Update life
            if (particle.life > 0) {
                particle.life -= delta;
                particle.position.addScaledVector(particle.velocity, delta);
                particle.velocity.y += 5 * delta; // Rising effect
                
                // Update position in buffer
                const idx = i * 3;
                positions[idx] = particle.position.x;
                positions[idx + 1] = particle.position.y;
                positions[idx + 2] = particle.position.z;
                
                activeParticles++;
            }
            
            // Emit new particles if firing
            if (this.isFiring && particle.life <= 0 && activeParticles < 30) {
                // Reset particle at nozzle position
                particle.position.copy(nozzleTipWorld);
                
                // Set velocity in flame direction with some randomness
                const speed = 10 + Math.random() * 5;
                particle.velocity.copy(direction).multiplyScalar(speed);
                particle.velocity.x += (Math.random() - 0.5) * 2;
                particle.velocity.y += (Math.random() - 0.5) * 2 + 0.5; // Slight upward bias
                particle.velocity.z += (Math.random() - 0.5) * 2;
                
                // Set lifetime
                particle.maxLife = 0.5 + Math.random() * 0.5;
                particle.life = particle.maxLife;
                
                activeParticles++;
            }
        }
        
        // Update the geometry
        this.particleSystem.geometry.attributes.position.needsUpdate = true;
        
        if (this.debug && this.isFiring) {
            console.log(`[DEBUG] Active emergency particles: ${activeParticles}`);
        }
    }
}

export { Flamethrower }; 