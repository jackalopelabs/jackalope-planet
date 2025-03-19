import * as THREE from 'three';
import { HumanWeapon } from './HumanWeapon';

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
        
        // Flamethrower specific properties
        this.particleCount = options.particleCount || 300; // Reduced for better performance
        this.flameLength = options.flameLength || 25; // Increased from 10 for longer flames
        this.flameWidth = options.flameWidth || 2;
        this.particleSystem = null;
        this.particles = [];
        this.particleGeometry = null;
        this.particleMaterial = null;
        
        // Store the current flame origin and direction for reference in update
        this.flameOrigin = new THREE.Vector3();
        this.flameDirection = new THREE.Vector3(0, 0, 1);
        
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
        // Create a brighter, more visible debug sphere at the nozzle tip
        const sphereGeometry = new THREE.SphereGeometry(0.05, 16, 16); // Larger sphere
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.8 });
        this.debugEmitter = new THREE.Mesh(sphereGeometry, sphereMaterial);
        
        // Position at the nozzle tip - use the stored nozzle tip position
        this.debugEmitter.position.copy(this.nozzleTipPosition);
        
        if (this.model) {
            this.model.add(this.debugEmitter);
        }
        
        // Add a second emitter in a different color to verify camera/model position
        const refSphereGeometry = new THREE.SphereGeometry(0.04, 8, 8);
        const refSphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.8 });
        this.refEmitter = new THREE.Mesh(refSphereGeometry, refSphereMaterial);
        this.refEmitter.position.set(0, 0, 0); // At the model origin
        
        if (this.model) {
            this.model.add(this.refEmitter);
        }
        
        // Add a direction line showing the fire direction - extended to show longer range
        const lineGeometry = new THREE.BufferGeometry();
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 2 });
        
        // Create a line showing the actual flame path (much longer)
        const points = [
            this.nozzleTipPosition.clone(),
            new THREE.Vector3(
                this.nozzleTipPosition.x, 
                this.nozzleTipPosition.y + 0.5, // Show the upward arc 
                this.nozzleTipPosition.z + 20.0  // Extended much further
            )
        ];
        
        lineGeometry.setFromPoints(points);
        this.debugLine = new THREE.Line(lineGeometry, lineMaterial);
        
        // Add more debug markers along the path to visualize range
        const markerPositions = [5, 10, 15];
        this.rangeMarkers = [];
        
        markerPositions.forEach((distance, index) => {
            const markerGeometry = new THREE.SphereGeometry(0.08, 8, 8);
            const markerMaterial = new THREE.MeshBasicMaterial({ 
                color: index === 0 ? 0x00ffff : index === 1 ? 0xffff00 : 0xff00ff,
                transparent: true,
                opacity: 0.5
            });
            
            const marker = new THREE.Mesh(markerGeometry, markerMaterial);
            marker.position.set(
                this.nozzleTipPosition.x, 
                this.nozzleTipPosition.y + (distance / 40) * 0.5, // Slight arc upward
                this.nozzleTipPosition.z + distance
            );
            
            if (this.model) {
                this.model.add(marker);
                this.rangeMarkers.push(marker);
            }
        });
        
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
        tank.position.set(0.15, -0.2, -0.1); // Repositioned to be more in front of player
        tank.castShadow = true;
        tank.receiveShadow = true;
        group.add(tank);
        
        // Nozzle (cone)
        const nozzleGeometry = new THREE.CylinderGeometry(0.03, 0.05, 0.25, 8); // Longer nozzle
        const nozzleMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x222222,
            metalness: 0.5,
            roughness: 0.5
        });
        const nozzle = new THREE.Mesh(nozzleGeometry, nozzleMaterial);
        nozzle.position.set(0.15, -0.2, 0.15); // Positioned in front of the tank
        nozzle.rotation.x = Math.PI / 2; // Point forward
        nozzle.castShadow = true;
        nozzle.receiveShadow = true;
        group.add(nozzle);
        
        // Store the nozzle tip position in local space of the weapon model
        // This is the actual position where flame particles should originate from
        // Calculate precisely at the end of the nozzle
        this.nozzleTipPosition = new THREE.Vector3(
            nozzle.position.x,           // Same x as nozzle
            nozzle.position.y,           // Same y as nozzle
            nozzle.position.z + 0.2      // At the very front tip of the nozzle
        );
        
        // Add a visual marker at the nozzle tip - make it much more visible
        if (this.debug) {
            const tipMarker = new THREE.Mesh(
                new THREE.SphereGeometry(0.03, 16, 16),
                new THREE.MeshBasicMaterial({ 
                    color: 0x00ff00,
                    transparent: true,
                    opacity: 0.8
                })
            );
            tipMarker.position.copy(this.nozzleTipPosition);
            group.add(tipMarker);
        }
        
        // Position for FPS view - moved forward so nozzle tip is clearly visible
        group.position.set(0.3, -0.3, -0.1); // Right side, below, much more forward
        
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
            
            // Create a better particle material with improved settings
            this.particleMaterial = new THREE.PointsMaterial({
                size: 3,                          // Larger base size
                sizeAttenuation: true,           // Size reduces with distance
                map: this.createFlameTexture(),  // Custom flame texture
                alphaTest: 0.05,                 // Lower value = less transparent pixels culled
                transparent: true,               // Enable transparency
                vertexColors: true,              // Use colors from vertices
                depthWrite: false,               // Don't write to depth buffer (better blending)
                blending: THREE.AdditiveBlending // Additive blending for glow effect
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
        canvas.width = 128; // Higher resolution
        canvas.height = 128;
        
        const context = canvas.getContext('2d');
        
        // Create radial gradient for a more vibrant fireball effect
        const gradient = context.createRadialGradient(
            64, 64, 0,    // Center and inner radius
            64, 64, 64    // Center and outer radius
        );
        
        // More vibrant color stops with smoother transition
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');   // White hot center (glowing core)
        gradient.addColorStop(0.2, 'rgba(255, 255, 0, 1)');    // Bright yellow
        gradient.addColorStop(0.4, 'rgba(255, 165, 0, 1)');    // Orange
        gradient.addColorStop(0.6, 'rgba(255, 69, 0, 0.9)');   // Red-orange
        gradient.addColorStop(0.8, 'rgba(255, 0, 0, 0.5)');    // Semi-transparent red
        gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');        // Fully transparent edge
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, 128, 128);
        
        // Add some noise/texture for more realistic fire particles
        context.globalCompositeOperation = 'overlay';
        
        // Add some sparks/specks for texture
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * 128;
            const y = Math.random() * 128;
            const radius = Math.random() * 3 + 1;
            
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.fillStyle = 'rgba(255, 255, 255, 0.5)';
            context.fill();
        }
        
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
        
        // Reset and update the world position for flame origin
        this.flameOrigin.set(0, 0, 0);
        this.flameDirection.set(0, 0, 1); // Forward direction
        
        try {
            // Ensure model exists and is properly set up
            if (!this.model) {
                console.warn('Weapon model not available');
                return;
            }
            
            // Always update matrices to ensure accurate positions
            this.model.updateMatrixWorld(true);
            
            // Get the exact world position of the nozzle tip
            const nozzleTipWorld = new THREE.Vector3();
            nozzleTipWorld.copy(this.nozzleTipPosition).applyMatrix4(this.model.matrixWorld);
            
            // Store the world position as our flame origin
            this.flameOrigin.copy(nozzleTipWorld);
            
            // Determine flame direction based on view mode
            if (this.player.isFirstPerson && this.player.fpCamera) {
                // In first-person, use camera direction
                this.player.fpCamera.getWorldDirection(this.flameDirection);
                
                if (this.debug) {
                    console.log('FP Nozzle world position:', this.flameOrigin.clone());
                    console.log('FP Flame direction:', this.flameDirection.clone());
                }
            } else if (this.player.model) {
                // In third-person, use model direction
                this.player.model.getWorldDirection(this.flameDirection);
                
                if (this.debug) {
                    console.log('TP Nozzle world position:', this.flameOrigin.clone());
                    console.log('TP Flame direction:', this.flameDirection.clone());
                }
            } else {
                console.warn('Cannot determine flame direction: player model or camera not ready');
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
                    // Reset particle position to flame origin
                    particle.position.copy(this.flameOrigin);
                    
                    // Calculate random spread - reduced spread for more focused flame
                    const spread = 0.08; // Reduced spread for a more focused beam
                    const spreadVec = new THREE.Vector3(
                        (Math.random() - 0.5) * spread,
                        (Math.random() - 0.5) * spread + 0.03, // Slight upward bias
                        (Math.random() - 0.5) * spread
                    );
                    
                    // Base velocity in flame direction - increased speed for longer distance
                    const speed = 25 + Math.random() * 10; // Much higher speed for greater distance
                    particle.velocity.copy(this.flameDirection).normalize().multiplyScalar(speed);
                    
                    // Add spread
                    particle.velocity.add(spreadVec);
                    
                    // Set particle properties - adjusted for better visual effect
                    const colorIndex = Math.floor(Math.random() * this.flameColors.length);
                    particle.color.copy(this.flameColors[colorIndex]);
                    
                    // Vary initial size more for visual interest
                    // Larger particles travel further (simulating better aerodynamics)
                    const initialSizeVariation = Math.random();
                    particle.size = 1.5 + initialSizeVariation * 4; 
                    
                    // Longer life for larger particles - helps with visual consistency
                    const lifeVariation = 0.8 + initialSizeVariation * 1.2;
                    particle.maxLife = 2.0 * lifeVariation;
                    particle.life = particle.maxLife;
                    
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
                // Dynamic upward force that increases as the particle moves farther
                const distanceFromStart = particle.position.distanceTo(this.flameOrigin);
                const upwardForce = 2 + distanceFromStart * 0.1; // More lift the further it travels
                particle.velocity.y += upwardForce * delta;
                
                // Slow down particles more gradually to maintain momentum
                particle.velocity.multiplyScalar(0.98); // Reduced slowdown factor
                
                // Fade out based on life
                const lifeRatio = particle.life / particle.maxLife;
                
                // Adjust size based on life (grow initially, then shrink)
                let sizeMultiplier;
                if (lifeRatio > 0.8) {
                    // Growing phase (0.8-1.0 life)
                    sizeMultiplier = 1 - (1 - lifeRatio) * 5; // Map 0.8-1.0 to 0-1
                } else if (lifeRatio > 0.4) {
                    // Maintain phase (0.4-0.8 life) - hold size longer for better visual at distance
                    sizeMultiplier = 1.0; 
                } else {
                    // Shrinking phase (0-0.4 life)
                    sizeMultiplier = lifeRatio * 2.5; // Map 0-0.4 to 0-1, faster falloff at the end
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
        
        // Clean up reference emitter
        if (this.refEmitter) {
            if (this.refEmitter.parent) {
                this.refEmitter.parent.remove(this.refEmitter);
            }
            this.refEmitter.geometry.dispose();
            this.refEmitter.material.dispose();
            this.refEmitter = null;
        }
        
        // Clean up range markers
        if (this.rangeMarkers && this.rangeMarkers.length) {
            this.rangeMarkers.forEach(marker => {
                if (marker.parent) {
                    marker.parent.remove(marker);
                }
                marker.geometry.dispose();
                marker.material.dispose();
            });
            this.rangeMarkers = [];
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