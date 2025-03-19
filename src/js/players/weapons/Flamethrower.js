import * as THREE from 'three';
import { HumanWeapon } from './HumanWeapon';

class Flamethrower extends HumanWeapon {
    constructor(player, options = {}) {
        // Set up flamethrower-specific properties
        super(player, {
            name: 'Flamethrower',
            damage: 5,
            cooldown: 0.05, // Continuous spray effect
            range: 15,
            ...options
        });
        
        // Flamethrower specific properties
        this.particleCount = options.particleCount || 300; // Reduced for better performance
        this.flameLength = options.flameLength || 10;
        this.flameWidth = options.flameWidth || 2;
        this.particleSystem = null;
        this.particles = [];
        this.particleGeometry = null;
        this.particleMaterial = null;
        
        // Flame colors
        this.flameColors = [
            new THREE.Color(0xff5500), // Orange
            new THREE.Color(0xff9900), // Light orange
            new THREE.Color(0xff0000), // Red
            new THREE.Color(0xffff00)  // Yellow
        ];
        
        // Sound effect
        this.flameSound = null;
        
        // Flag to track if particles are initialized
        this.particlesInitialized = false;
        
        // Debugging
        this.debug = true;
    }
    
    init(options) {
        // Create weapon model (simple tank and nozzle)
        this.createWeaponModel();
        
        // Create particle system for flames
        this.createParticleSystem();
        
        // Create simple spheres for debugging if enabled
        if (this.debug) {
            this.debugSphere();
        }
        
        console.log('Flamethrower initialized');
    }
    
    // Add a debug sphere to visualize emitter position
    debugSphere() {
        const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.debugEmitter = new THREE.Mesh(sphereGeometry, sphereMaterial);
        
        // Position at the nozzle tip - use the stored nozzle tip position
        this.debugEmitter.position.copy(this.nozzleTipPosition);
        
        if (this.model) {
            this.model.add(this.debugEmitter);
        }
        
        // Add a simple line showing the direction - extended to show longer range
        const lineGeometry = new THREE.BufferGeometry();
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
        
        const points = [
            this.nozzleTipPosition.clone(),
            new THREE.Vector3(this.nozzleTipPosition.x, this.nozzleTipPosition.y, this.nozzleTipPosition.z + 5.0)  // Extended forward
        ];
        
        lineGeometry.setFromPoints(points);
        this.debugLine = new THREE.Line(lineGeometry, lineMaterial);
        
        if (this.model) {
            this.model.add(this.debugLine);
        }
        
        console.log('Debug visualizers added to flamethrower');
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
        tank.position.set(0.3, -0.15, 0.4);
        tank.castShadow = true;
        tank.receiveShadow = true;
        group.add(tank);
        
        // Nozzle (cone)
        const nozzleGeometry = new THREE.CylinderGeometry(0.03, 0.05, 0.2, 8);
        const nozzleMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x222222,
            metalness: 0.5,
            roughness: 0.5
        });
        const nozzle = new THREE.Mesh(nozzleGeometry, nozzleMaterial);
        nozzle.position.set(0.3, -0.15, 0.7); // In front of the tank
        nozzle.rotation.x = Math.PI / 2; // Point forward
        nozzle.castShadow = true;
        nozzle.receiveShadow = true;
        group.add(nozzle);
        
        // Store the nozzle tip position - this is the most important change
        // Calculate the tip position from the nozzle position and dimensions
        this.nozzleTipPosition = new THREE.Vector3(0.3, -0.15, 0.8); // Offset from nozzle position to get to the tip
        
        // Position for FPS view
        group.position.set(0.3, -0.4, -0.5); // Right side, below center, forward
        
        this.model = group;
        
        // Add to scene or player model depending on view mode
        if (this.player.isFirstPerson && this.player.fpCamera) {
            this.player.fpCamera.add(this.model);
        } else if (this.player.model) {
            // Add to player's hand in third-person view
            this.player.model.add(this.model);
        }
    }
    
    createParticleSystem() {
        try {
            // Create particle geometry
            this.particleGeometry = new THREE.BufferGeometry();
            
            // Create positions, colors, and sizes for particles
            const positions = new Float32Array(this.particleCount * 3);
            const particleColors = new Float32Array(this.particleCount * 3);
            const sizes = new Float32Array(this.particleCount);
            
            // Initialize particles
            this.particles = [];
            for (let i = 0; i < this.particleCount; i++) {
                // Create particle with initial state
                const particle = {
                    position: new THREE.Vector3(0, 0, 0),
                    velocity: new THREE.Vector3(0, 0, 0),
                    color: new THREE.Color(),
                    size: 0,
                    life: 0,
                    maxLife: 0
                };
                
                // Initialize particles off-screen
                positions[i * 3] = 0;
                positions[i * 3 + 1] = 0;
                positions[i * 3 + 2] = 0;
                
                particleColors[i * 3] = 1;  // Default to bright colors for visibility
                particleColors[i * 3 + 1] = 0.5;
                particleColors[i * 3 + 2] = 0;
                
                sizes[i] = 0;
                
                this.particles.push(particle);
            }
            
            // Set geometry attributes - use a different name for the color attribute to avoid conflicts
            this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            this.particleGeometry.setAttribute('particleColor', new THREE.BufferAttribute(particleColors, 3));
            this.particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
            
            // Create a simpler particle material to ensure visibility
            this.particleMaterial = new THREE.PointsMaterial({
                size: 2,
                sizeAttenuation: true,
                map: this.createFlameTexture(),
                alphaTest: 0.1,
                transparent: true,
                vertexColors: true
            });
            
            // Create particle system
            this.particleSystem = new THREE.Points(this.particleGeometry, this.particleMaterial);
            this.particleSystem.frustumCulled = false; // Prevent disappearing when out of camera view
            
            // Add to scene
            if (this.scene) {
                this.scene.add(this.particleSystem);
                this.effects.push(this.particleSystem);
                this.particlesInitialized = true;
                console.log('Particle system created successfully');
            } else {
                console.error('Cannot add particle system: scene is null');
            }
        } catch (error) {
            console.error('Error creating particle system:', error);
            this.particlesInitialized = false;
        }
    }
    
    createFlameTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        
        const context = canvas.getContext('2d');
        
        // Create radial gradient for flame particle
        const gradient = context.createRadialGradient(
            32, 32, 0,
            32, 32, 32
        );
        
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 200, 50, 1)'); // Made more opaque
        gradient.addColorStop(0.7, 'rgba(255, 50, 0, 0.8)'); // Made more opaque
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, 64, 64);
        
        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
    }
    
    fire() {
        // Use base class cooldown check
        if (!super.fire()) {
            return false;
        }
        
        // Check if particles system is ready
        if (!this.particlesInitialized) {
            console.warn('Particle system not initialized, reinitializing');
            this.createParticleSystem();
            
            // Skip this frame if we just reinitialized
            return true;
        }
        
        // Emit particles from flamethrower nozzle
        this.emitParticles();
        
        return true;
    }
    
    emitParticles() {
        // Safety checks
        if (!this.particles || !this.particleSystem || !this.particlesInitialized) {
            console.warn('Cannot emit particles: particle system not ready');
            return;
        }
        
        if (this.particles.length === 0) {
            console.warn('No particles to emit');
            return;
        }
        
        // Number of particles to emit per shot
        const emitCount = 20; // Fewer particles, better performance
        
        // Get world position for flame origin
        const flameOrigin = new THREE.Vector3();
        const flameDirection = new THREE.Vector3(0, 0, 1); // Forward direction
        
        try {
            if (this.player.isFirstPerson && this.player.fpCamera) {
                // Get the camera's position and direction
                this.player.fpCamera.getWorldPosition(flameOrigin);
                this.player.fpCamera.getWorldDirection(flameDirection);
                
                // Use the nozzle tip position as the offset
                const nozzleOffset = this.nozzleTipPosition.clone();
                
                // Calculate world space offset by using camera's local-to-world transformation
                const localToWorld = new THREE.Matrix4();
                this.player.fpCamera.updateMatrixWorld(true);
                localToWorld.makeRotationFromQuaternion(this.player.fpCamera.quaternion);
                
                // Apply the rotation to the offset
                const worldOffset = nozzleOffset.clone().applyMatrix4(localToWorld);
                
                // Add the rotated offset to the camera position
                flameOrigin.add(worldOffset);
                
                // Log position for debugging
                if (this.debug) {
                    console.log('Nozzle world position:', flameOrigin.clone());
                    console.log('Flame direction:', flameDirection.clone());
                }
            } else if (this.player.model) {
                // Same process for third-person
                if (this.model) {
                    const worldMatrix = new THREE.Matrix4();
                    this.model.updateMatrixWorld(true);
                    worldMatrix.copy(this.model.matrixWorld);
                    
                    // Use the actual nozzle tip position instead of a magic number
                    const worldPos = this.nozzleTipPosition.clone().applyMatrix4(worldMatrix);
                    flameOrigin.copy(worldPos);
                }
                
                // Get forward direction from model
                this.player.model.getWorldDirection(flameDirection);
            } else {
                console.warn('Cannot determine flame origin: player model or camera not ready');
                return;
            }
            
            // Find available particles to reuse
            let particlesEmitted = 0;
            for (let i = 0; i < this.particleCount && particlesEmitted < emitCount; i++) {
                if (i >= this.particles.length) {
                    console.warn(`Particle index out of bounds: ${i} >= ${this.particles.length}`);
                    continue;
                }
                
                const particle = this.particles[i];
                
                // Safety check for particle existence
                if (!particle) {
                    console.warn(`Particle at index ${i} is undefined`);
                    continue;
                }
                
                // Reuse dead particles
                if (particle.life <= 0) {
                    // Reset particle
                    particle.position.copy(flameOrigin);
                    
                    // Calculate random spread - reduced spread for more focused flame
                    const spread = 0.08; // Reduced spread for a more focused beam
                    const spreadVec = new THREE.Vector3(
                        (Math.random() - 0.5) * spread,
                        (Math.random() - 0.5) * spread,
                        (Math.random() - 0.5) * spread
                    );
                    
                    // Base velocity in flame direction - increased speed for longer distance
                    const speed = 12 + Math.random() * 5; // Increased speed for more forward momentum
                    particle.velocity.copy(flameDirection).normalize().multiplyScalar(speed);
                    
                    // Add spread
                    particle.velocity.add(spreadVec);
                    
                    // Set particle properties - adjusted for better visual effect
                    particle.size = 2 + Math.random() * 4; // Smaller starting particles
                    particle.maxLife = 1.0 + Math.random() * 0.5; // Shorter lifetime for better performance
                    particle.life = particle.maxLife;
                    
                    // Assign random flame color
                    const colorIndex = Math.floor(Math.random() * this.flameColors.length);
                    particle.color.copy(this.flameColors[colorIndex]);
                    
                    particlesEmitted++;
                    
                    // Log first few particles for debugging
                    if (this.debug && particlesEmitted < 3) {
                        console.log(`Particle ${i} emitted at:`, particle.position.clone());
                    }
                }
            }
            
            if (this.debug) {
                console.log(`Emitted ${particlesEmitted} particles`);
            }
        } catch (error) {
            console.error('Error emitting particles:', error);
        }
    }
    
    updateEffects(delta) {
        // Check if the particle system is ready
        if (!this.particleSystem || !this.particles || this.particles.length === 0 || !this.particlesInitialized) {
            return;
        }
        
        try {
            // Get position and size buffer attributes
            const positions = this.particleGeometry.attributes.position.array;
            const colors = this.particleGeometry.attributes.particleColor.array;
            const sizes = this.particleGeometry.attributes.size.array;
            
            // Update each particle
            let activeParticles = 0;
            for (let i = 0; i < this.particleCount; i++) {
                // Prevent index out of bounds
                if (i >= this.particles.length) {
                    continue;
                }
                
                const particle = this.particles[i];
                
                // Safety check for particle existence
                if (!particle) {
                    continue;
                }
                
                // Skip inactive particles
                if (particle.life <= 0) continue;
                
                activeParticles++;
                
                // Update life
                particle.life -= delta;
                
                // Update position based on velocity
                particle.position.addScaledVector(particle.velocity, delta);
                
                // Add some upward velocity for realistic fire effect
                particle.velocity.y += 2 * delta;
                
                // Slow down particles gradually
                particle.velocity.multiplyScalar(0.95);
                
                // Fade out based on life
                const lifeRatio = particle.life / particle.maxLife;
                
                // Adjust size based on life (grow initially, then shrink)
                let sizeMultiplier;
                if (lifeRatio > 0.8) {
                    // Growing phase (0.8-1.0 life)
                    sizeMultiplier = 1 - (1 - lifeRatio) * 5; // Map 0.8-1.0 to 0-1
                } else {
                    // Shrinking phase (0-0.8 life)
                    sizeMultiplier = lifeRatio * 1.25; // Map 0-0.8 to 0-1, but slightly larger
                }
                
                // Fade between colors based on life
                let currentColor;
                if (lifeRatio > 0.7) {
                    // Hot inner flame: yellow to light orange
                    const t = (lifeRatio - 0.7) / 0.3;
                    currentColor = this.flameColors[3].clone().lerp(this.flameColors[1], 1 - t);
                } else if (lifeRatio > 0.3) {
                    // Middle flame: light orange to orange
                    const t = (lifeRatio - 0.3) / 0.4;
                    currentColor = this.flameColors[0].clone().lerp(this.flameColors[1], t);
                } else {
                    // Outer flame: orange to red
                    const t = lifeRatio / 0.3;
                    currentColor = this.flameColors[2].clone().lerp(this.flameColors[0], t);
                }
                
                // Ensure index bounds for buffer arrays
                const idx = i * 3;
                if (idx + 2 < positions.length && idx + 2 < colors.length && i < sizes.length) {
                    // Update particle position
                    positions[idx] = particle.position.x;
                    positions[idx + 1] = particle.position.y;
                    positions[idx + 2] = particle.position.z;
                    
                    // Update particle color
                    colors[idx] = currentColor.r;
                    colors[idx + 1] = currentColor.g;
                    colors[idx + 2] = currentColor.b;
                    
                    // Update particle size
                    sizes[i] = particle.size * sizeMultiplier;
                }
            }
            
            // Log active particles count for debugging
            if (this.debug && this.isFiring) {
                console.log(`Active particles: ${activeParticles}`);
            }
            
            // Mark attributes for update
            this.particleGeometry.attributes.position.needsUpdate = true;
            this.particleGeometry.attributes.particleColor.needsUpdate = true;
            this.particleGeometry.attributes.size.needsUpdate = true;
        } catch (error) {
            console.error('Error updating particle effects:', error);
            // Reset the particle system if there's an error
            this.particlesInitialized = false;
        }
    }
    
    attachToPlayer() {
        // Check view mode to determine where to attach
        if (this.player.isFirstPerson && this.player.fpCamera) {
            if (this.model && this.model.parent) {
                this.model.parent.remove(this.model);
            }
            if (this.model && this.player.fpCamera) {
                this.player.fpCamera.add(this.model);
            }
        } else if (this.player.model) {
            if (this.model && this.model.parent) {
                this.model.parent.remove(this.model);
            }
            if (this.model) {
                this.player.model.add(this.model);
            }
        }
    }
    
    startFire() {
        this.isFiring = true;
        if (this.debug) {
            console.log('Started firing flamethrower');
        }
    }
    
    stopFire() {
        this.isFiring = false;
        if (this.debug) {
            console.log('Stopped firing flamethrower');
        }
    }
    
    cleanup() {
        super.cleanup();
        
        this.particlesInitialized = false;
        
        // Additional cleanup specific to flamethrower
        if (this.particleGeometry) {
            this.particleGeometry.dispose();
            this.particleGeometry = null;
        }
        
        if (this.particleMaterial) {
            if (this.particleMaterial.map) {
                this.particleMaterial.map.dispose();
            }
            this.particleMaterial.dispose();
            this.particleMaterial = null;
        }
        
        // Clean up debug objects
        if (this.debugEmitter) {
            if (this.debugEmitter.parent) {
                this.debugEmitter.parent.remove(this.debugEmitter);
            }
            this.debugEmitter.geometry.dispose();
            this.debugEmitter.material.dispose();
            this.debugEmitter = null;
        }
        
        if (this.debugLine) {
            if (this.debugLine.parent) {
                this.debugLine.parent.remove(this.debugLine);
            }
            this.debugLine.geometry.dispose();
            this.debugLine.material.dispose();
            this.debugLine = null;
        }
        
        this.particles = [];
    }
}

export { Flamethrower }; 