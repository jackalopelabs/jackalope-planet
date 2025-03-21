import * as THREE from 'three';
import { HumanWeapon } from './HumanWeapon';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { getAssetPath, checkAssetExists, getModelPath } from '../../utils/AssetLoader';

// Add a global debugging helper
let flamethrowerInstance = null;

// Helper function for logging
const jpLog = (message, level = 'debug', data = null) => {
    if (window.jpLog) {
        window.jpLog(message, level, data);
    } else {
        // Fallback to console methods if jpLog isn't available
        if (level === 'error') {
            console.error(message, data);
        } else if (level === 'warning') {
            console.warn(message, data);
        } else {
            console.log(message, data);
        }
    }
};

window.debugFlamethrower = function() {
    if (!flamethrowerInstance) {
        jpLog('No flamethrower instance found yet', 'warning');
        return;
    }

    const ft = flamethrowerInstance;
    jpLog('-------- FLAMETHROWER DEBUG --------', 'debug');
    jpLog('Is initialized: ' + (ft ? 'yes' : 'no'), 'debug');
    jpLog('Is firing: ' + ft.isFiring, 'debug');
    jpLog('Has particle system: ' + (ft.particleSystem ? 'yes' : 'no'), 'debug');
    jpLog('Particle count: ' + ft.particles.length, 'debug');
    jpLog('Active particles: ' + ft.particles.filter(p => p.life > 0).length, 'debug');
    jpLog('Scene: ' + (ft.scene ? 'valid' : 'null'), 'debug');
    
    if (ft.particleSystem) {
        jpLog('Particle system parent: ' + (ft.particleSystem.parent ? ft.particleSystem.parent.type : 'none'), 'debug');
        jpLog('Particle system visible: ' + ft.particleSystem.visible, 'debug');
        jpLog('Particle system frustumCulled: ' + ft.particleSystem.frustumCulled, 'debug');
    }
    
    // Add lighting debug info
    if (ft.flameLight) {
        jpLog('------ FLAME LIGHT DEBUG ------', 'debug');
        jpLog('Flame light intensity: ' + ft.flameLight.intensity, 'debug');
        jpLog('Flame light distance: ' + ft.flameLight.distance, 'debug');
        jpLog('Flame light position: ' + 
              ft.flameLight.position.x.toFixed(2) + ', ' +
              ft.flameLight.position.y.toFixed(2) + ', ' +
              ft.flameLight.position.z.toFixed(2), 'debug');
        jpLog('Flame light casts shadow: ' + ft.flameLight.castShadow, 'debug');
        jpLog('Flame light visible: ' + ft.flameLight.visible, 'debug');
        jpLog('Flame light parent: ' + (ft.flameLight.parent ? ft.flameLight.parent.type : 'none'), 'debug');
    } else {
        jpLog('Flame light: NOT CREATED', 'debug');
    }
    
    if (ft.ambientGlowLight) {
        jpLog('------ AMBIENT GLOW LIGHT DEBUG ------', 'debug');
        jpLog('Ambient glow light intensity: ' + ft.ambientGlowLight.intensity, 'debug');
        jpLog('Ambient glow light distance: ' + ft.ambientGlowLight.distance, 'debug');
        jpLog('Ambient glow light position: ' + 
              ft.ambientGlowLight.position.x.toFixed(2) + ', ' +
              ft.ambientGlowLight.position.y.toFixed(2) + ', ' +
              ft.ambientGlowLight.position.z.toFixed(2), 'debug');
        jpLog('Ambient glow light visible: ' + ft.ambientGlowLight.visible, 'debug');
    } else {
        jpLog('Ambient glow light: NOT CREATED', 'debug');
    }
    
    // Debug helpers
    jpLog('------ DEBUG VISUALIZERS ------', 'debug');
    jpLog('Light debug sphere: ' + (ft.lightDebugSphere ? 'created' : 'none'), 'debug');
    jpLog('Glow debug sphere: ' + (ft.glowDebugSphere ? 'created' : 'none'), 'debug');
    
    return 'Debug info printed';
};

// Add a function to analyze scene materials
window.analyzeSceneMaterials = function() {
    if (!flamethrowerInstance || !flamethrowerInstance.scene) {
        jpLog('No flamethrower instance or scene found', 'warning');
        return;
    }
    
    const scene = flamethrowerInstance.scene;
    const materialTypes = {};
    let objectCount = 0;
    let shadowReceivingCount = 0;
    
    scene.traverse(object => {
        if (object.isMesh) {
            objectCount++;
            
            if (object.receiveShadow) {
                shadowReceivingCount++;
            }
            
            if (object.material) {
                const matType = object.material.type;
                materialTypes[matType] = (materialTypes[matType] || 0) + 1;
                
                console.log(`Object: ${object.name || 'unnamed'} - Material: ${matType} - Receives Shadows: ${object.receiveShadow}`);
                
                // Log detailed material properties
                if (matType === 'MeshStandardMaterial') {
                    console.log(`  Roughness: ${object.material.roughness}, Metalness: ${object.material.metalness}`);
                } else if (matType === 'MeshPhongMaterial') {
                    console.log(`  Shininess: ${object.material.shininess}, Specular: ${object.material.specular ? object.material.specular.getHexString() : 'none'}`);
                }
            }
        }
    });
    
    console.log('------ SCENE MATERIAL ANALYSIS ------');
    console.log(`Total objects: ${objectCount}`);
    console.log(`Shadow receiving objects: ${shadowReceivingCount}`);
    console.log('Material types:', materialTypes);
    
    return 'Scene material analysis complete';
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
            jpLog('Player is null in Flamethrower constructor', 'error');
        }
        
        if (!player.scene) {
            jpLog('Scene is null in Flamethrower constructor', 'error');
        }
        
        // Initialize effects array
        this.effects = this.effects || [];
        
        // Always initialize particles array
        this.particles = [];
        
        // Flamethrower specific properties
        this.particleCount = 200; // Reduced for better performance
        this.flameLength = 25;
        this.flameWidth = 2;
        this.particleSystem = null;
        
        // Dynamic lighting for flames
        this.flameLight = null;
        this.flameLightIntensity = 5.0; // Increased from 2.0 to 5.0 for stronger effect
        this.flameLightDistance = 30;   // Increased from 15 to 30 for wider radius
        this.flameLightColor = 0xff5500; // Orange color for light
        
        // Ambient glow light (softer, wider radius)
        this.ambientGlowLight = null;
        this.ambientGlowIntensity = 2.0; // Increased from 0.7 to 2.0 for stronger ambient effect
        this.ambientGlowDistance = 40;   // Increased from 25 to 40 for much wider radius
        this.ambientGlowColor = 0xff8844; // Softer orange color
        
        this.useDynamicLighting = true; // Toggle for dynamic lighting feature
        
        // Debug mode
        this.debug = false; // Set to false to reduce console spam
        
        // Flag for automatic recreation of particle system if needed
        this.recreationAttempted = false;
        this.emergencyAttempted = false;
        this.useEmergencySystem = false;
        
        // Flag to track which particle system implementation is used
        this.useCustomShaders = false;
        
        // Store the current flame origin and direction
        this.flameOrigin = new THREE.Vector3(0, 0, 0);
        this.flameDirection = new THREE.Vector3(0, 0, 1);
        
        // Flame colors
        this.flameColors = [
            new THREE.Color(0xff5500).multiplyScalar(1.5), // Bright orange with intensity
            new THREE.Color(0xff9900).multiplyScalar(1.5), // Bright light orange with intensity
            new THREE.Color(0xff0000).multiplyScalar(1.3), // Bright red with intensity
            new THREE.Color(0xffff00).multiplyScalar(1.8)  // Bright yellow with intensity
        ];
    }
    
    init(options) {
        jpLog('Flamethrower init starting', 'debug');
        
        // Initialize weapon components
        this.scene = options.scene || this.player.scene;
        
        if (!this.scene) {
            jpLog('Scene is null in Flamethrower init', 'error');
            if (this.player && this.player.scene) {
                jpLog('Using player.scene as fallback', 'debug');
                this.scene = this.player.scene;
            } else if (this.player && this.player.game && this.player.game.scene) {
                jpLog('Using player.game.scene as fallback', 'debug');
                this.scene = this.player.game.scene;
            } else {
                jpLog('No scene available, dynamic lighting disabled', 'error');
                this.useDynamicLighting = false;
            }
        } else {
            jpLog('Scene is valid in Flamethrower init', 'debug');
        }
        
        // Create the weapon model (3D object)
        this.createWeaponModel();
        
        // Create particle system for flames
        if (options.useAlternativeParticleSystem) {
            jpLog('Using alternative particle system implementation', 'debug');
            this.createParticleSystem2();
        } else {
            jpLog('Using standard particle system implementation', 'debug');
            this.createParticleSystem();
        }
        
        // Output debug status
        jpLog('Lighting setup stats:', 'debug');
        jpLog('- useDynamicLighting: ' + this.useDynamicLighting, 'debug');
        jpLog('- scene available: ' + (this.scene ? 'yes' : 'no'), 'debug');
        
        // Create dynamic lights if enabled
        // Only add lighting if we have a valid scene and dynamic lighting is enabled
        if (this.useDynamicLighting && this.scene) {
            jpLog('Creating flame lights now', 'debug');
            this.createFlameLight();
            jpLog('After createFlameLight - flameLight created: ' + (this.flameLight ? 'yes' : 'no') + 
                 ', added to scene: ' + (this.flameLight && this.flameLight.parent ? 'yes' : 'no'), 'debug');
        } else {
            jpLog('Dynamic lighting is disabled, skipping light creation', 'debug');
        }
        
        // Create debug helpers if debugging is enabled
        if (options.debug) {
            this.createDebugHelpers();
        }
        
        // Create particles array if it doesn't exist
        if (!this.particles) {
            jpLog('Particles array is undefined, initializing empty array', 'error');
            this.particles = [];
        }
        
        // Call parent init
        super.init(options);
        
        jpLog('Flamethrower initialized - particle system: ' + (this.particleSystem ? 'created' : 'failed') + 
              ', particles: ' + this.particles.length, 'debug');
    }
    
    createWeaponModel() {
        const group = new THREE.Group();
        this.modelGroup = group;
        
        // If there's no player or scene, create a simple placeholder
        if (!this.player || !this.scene) {
            this.createSimpleGeometricModel(group);
            return;
        }
        
        // Get the model path dynamically
        const directModelPath = getModelPath('flamethrower');
        
        try {
            console.log('[DEBUG] Attempting to load flamethrower directly from:', directModelPath);
            
            // Load from model registry first
            if (directModelPath) {
                this.loadModel(directModelPath, group);
            } else {
                // If not in registry, try series of potential paths
                const potentialPaths = [
                    'assets/models/weapons/flamethrower.glb',               // Assets directory (preferred)
                    'src/assets/models/weapons/flamethrower.glb',           // Source assets directory
                    'src/js/assets/models/weapons/flamethrower.glb',        // JS assets directory
                    'models/weapons/flamethrower.glb',                     // Simplified path
                    'flamethrower.glb'                                     // Direct in plugin root
                ];
                
                console.log('[DEBUG] Will try these paths for the flamethrower model:');
                potentialPaths.forEach(path => console.log('- ' + path));
                
                // Try loading from each path until success
                this.tryLoadingFromPaths(potentialPaths, group, 0);
            }
        } catch(error) {
            console.error('[DEBUG] Error checking direct model path:', error);
            this.createSimpleGeometricModel(group);
        }
        
        // Reset position - we'll set it properly when attaching to camera
        group.position.set(0, 0, 0);
        
        // Reset rotation
        group.rotation.set(0, 0, 0);
        
        this.model = group;
        
        // Add to camera or player model
        if (this.player.isFirstPerson && this.player.fpCamera) {
            // Create a proper parent for the model
            this.weaponContainer = new THREE.Group();
            // Lower the weapon's vertical position even further
            this.weaponContainer.position.set(0.3, -0.9, -1.2); // Adjusted Y from -0.7 to -0.9
            this.weaponContainer.add(this.model);
            
            // Add to the camera
            this.player.fpCamera.add(this.weaponContainer);
            
            console.log('[DEBUG] Added weapon container to first-person camera');
            
            // Log camera and model relationship
            const camPos = new THREE.Vector3();
            this.player.fpCamera.getWorldPosition(camPos);
            console.log('[DEBUG] Camera world position:', 
                camPos.x.toFixed(2), 
                camPos.y.toFixed(2), 
                camPos.z.toFixed(2));
            
            const modelPos = new THREE.Vector3();
            this.model.getWorldPosition(modelPos);
            console.log('[DEBUG] Model world position:', 
                modelPos.x.toFixed(2), 
                modelPos.y.toFixed(2), 
                modelPos.z.toFixed(2));
        } else if (this.player.model) {
            this.player.model.add(this.model);
            console.log('[DEBUG] Added weapon model to player model');
        }
    }
    
    // Try loading from multiple paths recursively
    tryLoadingFromPaths(paths, group, index) {
        if (index >= paths.length) {
            console.log('[DEBUG] Tried all paths, falling back to geometric model');
            this.createSimpleGeometricModel(group);
            return;
        }
        
        const currentPath = paths[index];
        const resolvedPath = getAssetPath ? getAssetPath(currentPath) : currentPath;
        
        console.log(`[DEBUG] Trying path ${index + 1}/${paths.length}: ${resolvedPath}`);
        
        // Try to load from this path
        const loader = new GLTFLoader();
        loader.load(
            resolvedPath,
            (gltf) => {
                // Success!
                console.log('[DEBUG] Successfully loaded model from:', resolvedPath);
                this.loadedModel = gltf.scene;
                
                // Ensure model and children aren't frustum culled
                gltf.scene.frustumCulled = false;
                gltf.scene.traverse(child => {
                    child.frustumCulled = false;
                });
                
                // Add to group
                group.add(gltf.scene);
                
                // Adjust model scale to half the previous size
                gltf.scene.scale.set(1.7, 1.7, 1.7); // Reduced from 3.5 to 1.7 (approximately half)
                gltf.scene.rotation.set(0, Math.PI/2, 0); // Rotate to face forward
            },
            undefined,
            (error) => {
                // Failed, try next path
                console.log(`[DEBUG] Failed to load from ${resolvedPath}:`, error);
                this.tryLoadingFromPaths(paths, group, index + 1);
            }
        );
    }
    
    // Load the model using a known valid path
    loadModel(modelPath, group) {
        const loader = new GLTFLoader();
        
        loader.load(
            modelPath,
            (gltf) => {
                // Success callback
                console.log('[DEBUG] Flamethrower model loaded successfully from:', modelPath);
                
                // Clear any existing children (like placeholder geometry) from the group
                while (group.children.length > 0) {
                    const child = group.children[0];
                    group.remove(child);
                    // Dispose of geometry and material to free memory
                    if (child.geometry) child.geometry.dispose();
                    if (child.material) {
                        if (Array.isArray(child.material)) {
                            child.material.forEach(mat => mat.dispose());
                        } else {
                            child.material.dispose();
                        }
                    }
                }
                
                // Add the loaded model to our group
                this.loadedModel = gltf.scene;
                
                // Ensure model and children aren't frustum culled (ensures visibility regardless of position)
                gltf.scene.frustumCulled = false;
                gltf.scene.traverse(child => {
                    child.frustumCulled = false;
                });
                
                // Add to group
                group.add(gltf.scene);
                
                // Adjust model scale to half its previous size
                gltf.scene.scale.set(1.7, 1.7, 1.7); // Reduced from 3.5 to 1.7 (approximately half)
                
                // Get model size info for debugging only
                const box = new THREE.Box3().setFromObject(gltf.scene);
                const size = box.getSize(new THREE.Vector3());
                
                console.log('[DEBUG] Model size:', 
                    size.x.toFixed(2), 
                    size.y.toFixed(2), 
                    size.z.toFixed(2));
                
                // Adjust rotation to point forward
                gltf.scene.rotation.set(0, 0, 0); // Reset rotation
                
                // Add rotation logs to help debug orientation
                console.log('[DEBUG] Attempting to correct model orientation');
                
                // Try to find the main parts we can use for orientation
                const mainFlamethrowerPart = this.findObjectByName(gltf.scene, "FlamethrowerElonMusk_2");
                if (mainFlamethrowerPart) {
                    console.log('[DEBUG] Found main flamethrower part');
                    
                    // Get the bounding box to understand orientation
                    const flameThrowerBox = new THREE.Box3().setFromObject(mainFlamethrowerPart);
                    const flameSize = flameThrowerBox.getSize(new THREE.Vector3());
                    const flameCenter = flameThrowerBox.getCenter(new THREE.Vector3());
                    
                    console.log('[DEBUG] Flamethrower part size:',
                                flameSize.x.toFixed(2), 
                                flameSize.y.toFixed(2), 
                                flameSize.z.toFixed(2));
                    console.log('[DEBUG] Flamethrower part center:',
                                flameCenter.x.toFixed(2), 
                                flameCenter.y.toFixed(2), 
                                flameCenter.z.toFixed(2));
                    
                    // Adjust model orientation based on dimensions
                    // Correct rotation to point the model forward (toward -Z in camera space)
                    // Need to rotate 90° + 180° to point forward instead of backward
                    gltf.scene.rotation.set(0, Math.PI/2, 0); // Rotate 90 degrees + 180 degrees to face forward
                }
                
                // Store the nozzle tip position - may need adjustment based on model
                // Update based on model analysis
                this.nozzleTipPosition = new THREE.Vector3(0, 0, 1.0);
                
                // Try to find a better nozzle position based on the model's structure
                const flamethrowerPart = this.findObjectByName(gltf.scene, "FlamethrowerElonMusk_2");
                if (flamethrowerPart) {
                    console.log('[DEBUG] Found main flamethrower part');
                    
                    // Get the bounding box of this specific part
                    const flameThrowerBox = new THREE.Box3().setFromObject(flamethrowerPart);
                    const flameSize = flameThrowerBox.getSize(new THREE.Vector3());
                    const flameCenter = flameThrowerBox.getCenter(new THREE.Vector3());
                    
                    console.log('[DEBUG] Flamethrower part size:', 
                        flameSize.x.toFixed(2), 
                        flameSize.y.toFixed(2), 
                        flameSize.z.toFixed(2));
                    
                    console.log('[DEBUG] Flamethrower part center:', 
                        flameCenter.x.toFixed(2), 
                        flameCenter.y.toFixed(2), 
                        flameCenter.z.toFixed(2));
                    
                    // Estimate the nozzle position based on the flamethrower part's bounds
                    this.nozzleTipPosition = new THREE.Vector3(
                        flameCenter.x,
                        flameCenter.y,
                        flameCenter.z + flameSize.z/2 // Add half the z-size to get to the front
                    );
                }
                
                // Try to find the nozzle tip in the model by name
                let nozzleFound = false;
                gltf.scene.traverse((object) => {
                    // Log all object names to help identify the nozzle
                    if (object.name) {
                        console.log(`[DEBUG] Found named object in model: "${object.name}" (${object.type})`);
                    }
                    
                    // Look for an object named "nozzle" or "tip" or similar
                    if (object.name && (object.name.toLowerCase().includes('nozzle') || 
                                       object.name.toLowerCase().includes('tip') ||
                                       object.name.toLowerCase().includes('barrel') ||
                                       object.name.toLowerCase().includes('flame'))) {
                        console.log('[DEBUG] Found potential nozzle object in model:', object.name);
                        
                        // Get world position of nozzle
                        object.updateWorldMatrix(true, false);
                        const worldPos = new THREE.Vector3();
                        object.getWorldPosition(worldPos);
                        
                        // Convert to local position within our group
                        group.updateWorldMatrix(true, false);
                        const localPos = worldPos.clone();
                        group.worldToLocal(localPos);
                        
                        this.nozzleTipPosition.copy(localPos);
                        nozzleFound = true;
                        
                        // Log position for verification
                        console.log('[DEBUG] Nozzle position set to:', 
                                   this.nozzleTipPosition.x.toFixed(2),
                                   this.nozzleTipPosition.y.toFixed(2),
                                   this.nozzleTipPosition.z.toFixed(2));
                    }
                    
                    // Set shadows for all meshes
                    if (object.isMesh) {
                        object.castShadow = true;
                        object.visible = true; // Ensure visibility is turned on
                        
                        // Enhance materials for better lighting effects
                        if (object.material) {
                            this.enhanceMaterial(object.material);
                            
                            // Make sure materials are visible
                            object.material.transparent = false;
                            object.material.opacity = 1.0;
                            object.material.visible = true;
                            
                            // Debug - log material properties
                            console.log(`[DEBUG] Material for ${object.name}:`, 
                                       object.material.type, 
                                       'visible:', object.material.visible,
                                       'transparent:', object.material.transparent);
                        }
                    }
                });
                
                if (!nozzleFound) {
                    console.log('[DEBUG] No nozzle found in model, using default position');
                }
                
                // Update debug helpers if enabled
                if (this.debug && this.debugSphere) {
                    this.debugSphere.position.copy(this.nozzleTipPosition);
                    if (this.debugLine) {
                        // Update debug line
                        const positions = this.debugLine.geometry.attributes.position.array;
                        positions[0] = this.nozzleTipPosition.x;
                        positions[1] = this.nozzleTipPosition.y;
                        positions[2] = this.nozzleTipPosition.z;
                        positions[3] = this.nozzleTipPosition.x;
                        positions[4] = this.nozzleTipPosition.y;
                        positions[5] = this.nozzleTipPosition.z - 0.5;
                        this.debugLine.geometry.attributes.position.needsUpdate = true;
                    }
                }
            },
            (progress) => {
                // Progress callback
                const percentComplete = (progress.loaded / progress.total) * 100;
                console.log(`[DEBUG] Loading flamethrower model: ${percentComplete.toFixed(2)}%`);
            },
            (error) => {
                // Error callback - enhanced with more details
                console.error('[DEBUG] Error loading flamethrower model:', error);
                console.error('[DEBUG] Error message:', error.message);
                console.error('[DEBUG] Attempted to load from path:', modelPath);
                
                // Log plugin and path information again
                console.log('[DEBUG] Plugin settings available:', window.jackalopePlanetSettings ? 'YES' : 'NO');
                if (window.jackalopePlanetSettings) {
                    console.log('[DEBUG] Plugin URL:', window.jackalopePlanetSettings.pluginUrl);
                }
                
                // Fall back to simple geometric model on error
                console.log('[DEBUG] Falling back to simple geometric model');
                this.createSimpleGeometricModel(group);
            }
        );
    }
    
    // Helper method to find an object by name
    findObjectByName(object, name) {
        if (object.name === name) {
            return object;
        }
        
        for (let i = 0; i < object.children.length; i++) {
            const found = this.findObjectByName(object.children[i], name);
            if (found) {
                return found;
            }
        }
        
        return null;
    }
    
    // Fallback method to create a simple geometric model if GLB loading fails
    createSimpleGeometricModel(group) {
        // Tank (cylinder)
        const tankGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.4, 16);
        const tankMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x444444,
            metalness: 0.8,
            roughness: 0.2
        });
        const tank = new THREE.Mesh(tankGeometry, tankMaterial);
        tank.rotation.x = Math.PI / 2; // Lay horizontally
        tank.position.set(0.15, -0.1, -0.1); // Moved up from -0.2 to -0.1
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
        nozzle.position.set(0.15, -0.1, 0.15); // Moved up from -0.15 to -0.1
        nozzle.rotation.x = Math.PI / 2;
        nozzle.castShadow = true;
        group.add(nozzle);
        
        // Store the nozzle tip position
        this.nozzleTipPosition = new THREE.Vector3(
            nozzle.position.x,
            nozzle.position.y,
            nozzle.position.z + 0.2
        );
    }
    
    // Additional method to update model position and rotation
    updateModelPosition() {
        if (!this.model) return;
        
        // Update position based on player state, camera position, etc.
        if (this.player.isFirstPerson && this.player.fpCamera) {
            // If weapon container doesn't exist yet, create it
            if (!this.weaponContainer) {
                console.log('[DEBUG] Creating missing weapon container');
                this.weaponContainer = new THREE.Group();
                this.weaponContainer.position.set(0.3, -0.9, -1.2); // Adjusted Y from -0.7 to -0.9
                
                // Re-parent the model
                if (this.model.parent) {
                    this.model.parent.remove(this.model);
                }
                this.weaponContainer.add(this.model);
                this.player.fpCamera.add(this.weaponContainer);
            }
            
            // Add subtle weapon bobbing for more realism
            if (this.player.velocity && this.modelGroup) {
                const time = Date.now() * 0.001; // Use seconds for smoother movement
                const moveX = Math.sin(time * 2.0) * 0.01;
                const moveY = Math.sin(time * 4.0) * 0.008;
                
                this.modelGroup.position.x = moveX;
                this.modelGroup.position.y = moveY;
            }
            
            // Now we only need to update the model's rotation, position is handled by the container
            // Don't update rotation here as it's set properly when the model is loaded
            
            // Periodically check model visibility
            if (Math.random() < 0.01) { // Log only occasionally to avoid spam
                console.log('[DEBUG] Model visibility check:');
                if (this.weaponContainer) {
                    console.log('- Weapon container positioned at:', 
                              this.weaponContainer.position.x.toFixed(2),
                              this.weaponContainer.position.y.toFixed(2), 
                              this.weaponContainer.position.z.toFixed(2));
                } else {
                    console.log('- NO weapon container!');
                }
                
                if (this.loadedModel) {
                    // Check if model is in view
                    const camera = this.player.fpCamera;
                    const cameraDirection = new THREE.Vector3();
                    camera.getWorldDirection(cameraDirection);
                    
                    const modelPosition = new THREE.Vector3();
                    this.model.getWorldPosition(modelPosition);
                    
                    const cameraPosition = new THREE.Vector3();
                    camera.getWorldPosition(cameraPosition);
                    
                    const toModel = new THREE.Vector3().subVectors(modelPosition, cameraPosition);
                    const distance = toModel.length();
                    toModel.normalize();
                    
                    const angle = cameraDirection.angleTo(toModel) * (180 / Math.PI);
                    
                    console.log('- Model is', distance.toFixed(2), 'units away at angle', angle.toFixed(2), 'degrees');
                    console.log('- Model visible:', this.loadedModel.visible);
                    console.log('- Model frustumCulled:', this.loadedModel.frustumCulled);
                    
                    if (this.loadedModel) {
                        const modelEuler = new THREE.Euler();
                        modelEuler.setFromQuaternion(this.loadedModel.quaternion);
                        console.log('- Model rotation (radians):', 
                                  modelEuler.x.toFixed(2), 
                                  modelEuler.y.toFixed(2), 
                                  modelEuler.z.toFixed(2));
                        console.log('- Model rotation (degrees):', 
                                  (modelEuler.x * 180 / Math.PI).toFixed(2), 
                                  (modelEuler.y * 180 / Math.PI).toFixed(2), 
                                  (modelEuler.z * 180 / Math.PI).toFixed(2));
                    }
                }
            }
        }
        
        // Update debug emitter position if it exists
        if (this.emitterDebugSphere && this.flameOrigin) {
            this.emitterDebugSphere.position.copy(this.flameOrigin);
            
            // Make sure it's added to the scene
            if (!this.emitterDebugSphere.parent && this.scene) {
                this.scene.add(this.emitterDebugSphere);
            }
        }
    }
    
    // Override update method to include model position updates
    update(delta) {
        // Use base update
        super.update(delta);
        
        // Update model position
        this.updateModelPosition();
        
        // Debug nozzle tip position occasionally
        if (this.debug && Math.random() < 0.01) {
            if (this.weaponContainer && this.nozzleTipPosition) {
                console.log('[DEBUG] Nozzle tip position (local):', 
                    this.nozzleTipPosition.x.toFixed(2), 
                    this.nozzleTipPosition.y.toFixed(2), 
                    this.nozzleTipPosition.z.toFixed(2));
                    
                if (this.flameOrigin) {
                    console.log('[DEBUG] Flame origin (world):', 
                        this.flameOrigin.x.toFixed(2), 
                        this.flameOrigin.y.toFixed(2), 
                        this.flameOrigin.z.toFixed(2));
                }
            }
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
        
        // Add color stops with enhanced glow
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');   // center: white
        gradient.addColorStop(0.2, 'rgba(255, 240, 120, 1)');  // bright yellow
        gradient.addColorStop(0.4, 'rgba(255, 160, 50, 0.9)'); // bright orange
        gradient.addColorStop(0.7, 'rgba(255, 80, 10, 0.6)');  // red-orange with transparency
        gradient.addColorStop(1, 'rgba(255, 50, 0, 0)');      // edge: transparent red
        
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
        
        // Add a second debug sphere for visualizing the actual flame emission point
        const emitterGeometry = new THREE.SphereGeometry(0.03, 8, 8);
        const emitterMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.emitterDebugSphere = new THREE.Mesh(emitterGeometry, emitterMaterial);
        
        // Add debug helpers to the scene if we have one
        if (this.scene) {
            this.scene.add(this.debugSphere);
            this.scene.add(this.emitterDebugSphere);
            console.log('[DEBUG] Added debug helpers to scene');
        } else if (this.model) {
            // If no scene yet, add to model as fallback
            this.model.add(this.debugSphere);
            console.log('[DEBUG] Added debug helpers to model (scene not available)');
        }
        
        // Add a line showing the flame direction
        const lineGeometry = new THREE.BufferGeometry();
        const lineVertices = new Float32Array([
            this.nozzleTipPosition.x, this.nozzleTipPosition.y, this.nozzleTipPosition.z,
            this.nozzleTipPosition.x, this.nozzleTipPosition.y, this.nozzleTipPosition.z - 0.5
        ]);
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(lineVertices, 3));
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
        this.debugLine = new THREE.Line(lineGeometry, lineMaterial);
        
        // Create visible light spheres to show light positions
        if (this.useDynamicLighting) {
            // Helper for main flame light
            const lightSphereGeometry = new THREE.SphereGeometry(0.2, 8, 8);
            const lightSphereMaterial = new THREE.MeshBasicMaterial({ 
                color: this.flameLightColor,
                transparent: true,
                opacity: 0.6
            });
            this.lightDebugSphere = new THREE.Mesh(lightSphereGeometry, lightSphereMaterial);
            
            // Helper for ambient glow light
            const glowSphereGeometry = new THREE.SphereGeometry(0.3, 8, 8);
            const glowSphereMaterial = new THREE.MeshBasicMaterial({ 
                color: this.ambientGlowColor,
                transparent: true,
                opacity: 0.4
            });
            this.glowDebugSphere = new THREE.Mesh(glowSphereGeometry, glowSphereMaterial);
            
            // Add to scene
            if (this.scene) {
                this.scene.add(this.lightDebugSphere);
                this.scene.add(this.glowDebugSphere);
                this.effects.push(this.lightDebugSphere);
                this.effects.push(this.glowDebugSphere);
                console.log('[DEBUG] Added light visualization helpers to scene');
            }
        }
        
        if (this.model) {
            this.model.add(this.debugSphere);
            this.model.add(this.debugLine);
        }
        
        console.log('[DEBUG] Debug helpers created at position:', 
            this.nozzleTipPosition.x.toFixed(2),
            this.nozzleTipPosition.y.toFixed(2),
            this.nozzleTipPosition.z.toFixed(2)
        );
    }
    
    fire() {
        // Use base class for cooldown check
        if (!super.fire()) {
            return false;
        }
        
        // Debug scene status
        if (this.debug) {
            console.log('[DEBUG] Flamethrower fired! Scene has', this.scene ? 'valid scene' : 'NO SCENE');
            if (this.scene) {
                console.log('[DEBUG] Scene children:', this.scene.children.length, 'Effects:', this.effects.length);
            }
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
                    
                    // Also recreate flame lights if they don't exist but should
                    if (this.useDynamicLighting && (!this.flameLight || !this.ambientGlowLight)) {
                        console.log('[DEBUG] Attempting to recreate flame lights...');
                        this.createFlameLight();
                    }
                    
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
        
        // DIRECT CAMERA-BASED APPROACH - Position particles directly in front of the camera
        // regardless of weapon model position
        let emissionPosition = new THREE.Vector3(0, 0, 0);
        let emissionDirection = new THREE.Vector3(0, 0, -1);
        
        if (this.player && this.player.isFirstPerson && this.player.fpCamera) {
            // Use camera as the source
            const camera = this.player.fpCamera;
            
            // Log camera position and direction for debugging
            if (Math.random() < 0.05) { // Only occasionally to avoid spam
                const camPos = new THREE.Vector3();
                camera.getWorldPosition(camPos);
                console.log('[DEBUG] Camera position:', 
                    camPos.x.toFixed(2), 
                    camPos.y.toFixed(2), 
                    camPos.z.toFixed(2));
                
                // Log weapon model position relative to camera
                if (this.model) {
                    console.log('[DEBUG] Weapon model position relative to camera:', 
                        this.model.position.x.toFixed(2), 
                        this.model.position.y.toFixed(2), 
                        this.model.position.z.toFixed(2));
                }
            }
            
            // Instead of using the camera position directly, use the nozzle tip position
            if (this.weaponContainer && this.nozzleTipPosition) {
                // Get camera position as starting point
                camera.getWorldPosition(emissionPosition);
                
                // Get camera direction
                camera.getWorldDirection(emissionDirection);
                
                // Calculate the world position of the nozzle tip
                // The nozzle tip is at 0.15, -0.1, 0.35 in local model space
                // For the simple geometric model the nozzle tip is at this.nozzleTipPosition
                const nozzleWorldPos = new THREE.Vector3();
                
                // Create a vector for the nozzle tip in model-local space
                const nozzleOffsetFromCamera = new THREE.Vector3();
                
                if (this.weaponContainer) {
                    // Start with the container's position
                    nozzleOffsetFromCamera.copy(this.weaponContainer.position);
                    
                    // Add the nozzle tip position offset
                    // Adjust these values to match where particles should come from
                    nozzleOffsetFromCamera.x += 0.15;  // Right side of model
                    nozzleOffsetFromCamera.y += -0.1;  // Slightly down
                    nozzleOffsetFromCamera.z += 0.35;  // Forward from the model (this is the key value)
                    
                    // Get the world position
                    camera.localToWorld(nozzleWorldPos.copy(nozzleOffsetFromCamera));
                    
                    // Use this position instead of the camera position
                    emissionPosition.copy(nozzleWorldPos);
                }
            } else {
                // Fallback to the old method if we don't have weapon container
                camera.getWorldPosition(emissionPosition);
                
                // Move the emission point slightly in front of the camera (0.5 units forward, 0.3 down, 0.2 right)
                emissionPosition.add(
                    new THREE.Vector3(
                        emissionDirection.x * 0.5 + 0.2, 
                        emissionDirection.y * 0.5 - 0.3, 
                        emissionDirection.z * 0.5
                    )
                );
            }
            
            // Store for reference
            this.flameOrigin.copy(emissionPosition);
            this.flameDirection.copy(emissionDirection);
            
            // Create lights if they don't exist but should
            if (this.useDynamicLighting && (!this.flameLight || !this.ambientGlowLight)) {
                console.log('[DEBUG] Lights missing but dynamic lighting enabled, creating now');
                this.createFlameLight();
            }
            
            // Update flame light position - USE THE SAME EMISSION POSITION
            if (this.flameLight && this.useDynamicLighting) {
                // Position the light at the emission point
                this.flameLight.position.copy(emissionPosition);
                
                // Add a bit of offset in the direction of firing for better lighting effect
                const lightOffset = emissionDirection.clone().multiplyScalar(1.0); // Reduced from 2.0 to 1.0 to keep light closer to nozzle
                this.flameLight.position.add(lightOffset);
                
                // Force the light to update
                this.flameLight.updateMatrix();
                this.flameLight.updateMatrixWorld();
                
                // Also update ambient light if it exists
                if (this.ambientGlowLight) {
                    this.ambientGlowLight.position.copy(emissionPosition);
                    this.ambientGlowLight.updateMatrix();
                    this.ambientGlowLight.updateMatrixWorld();
                }
                
                if (this.debug) {
                    console.log('[DEBUG] Updated flame light position:', 
                        this.flameLight.position.x.toFixed(2), 
                        this.flameLight.position.y.toFixed(2), 
                        this.flameLight.position.z.toFixed(2));
                }
            }
            
            if (this.debug) {
                console.log('[DEBUG] First-person flame direction:', 
                    this.flameDirection.x.toFixed(2), 
                    this.flameDirection.y.toFixed(2), 
                    this.flameDirection.z.toFixed(2)
                );
            }
        } else if (this.player && this.player.model) {
            // Third-person handling remains the same
            // Get world position of nozzle tip
            this.model.updateMatrixWorld(true);
            const nozzleTipWorld = new THREE.Vector3();
            nozzleTipWorld.copy(this.nozzleTipPosition);
            nozzleTipWorld.applyMatrix4(this.model.matrixWorld);
            
            // Store for reference
            this.flameOrigin.copy(nozzleTipWorld);
            
            // Get direction from player model
            this.player.model.getWorldDirection(this.flameDirection);
            
            // Update flame light position
            if (this.flameLight && this.useDynamicLighting) {
                // Position the light at the nozzle tip
                this.flameLight.position.copy(nozzleTipWorld);
                
                // Add a bit of offset in the direction of firing for better lighting effect
                const lightOffset = this.flameDirection.clone().multiplyScalar(2);
                this.flameLight.position.add(lightOffset);
                
                // Force the light to update
                this.flameLight.updateMatrix();
                this.flameLight.updateMatrixWorld();
                
                // Also update ambient light if it exists
                if (this.ambientGlowLight) {
                    this.ambientGlowLight.position.copy(nozzleTipWorld);
                    this.ambientGlowLight.updateMatrix();
                    this.ambientGlowLight.updateMatrixWorld();
                }
            }
            
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
            const speed = 20 + Math.random() * 10; // Increased from 10+5 to 20+10 for more forward momentum
            particle.velocity.copy(this.flameDirection).normalize().multiplyScalar(speed);
            particle.velocity.add(spreadVec);
            
            // Set color (random from flame colors)
            const colorIndex = Math.floor(Math.random() * this.flameColors.length);
            particle.color.copy(this.flameColors[colorIndex]);
            
            // Set size and life
            particle.size = 1 + Math.random() * 2;
            particle.maxLife = 1.5 + Math.random() * 1.0; // Increased from 1.0+0.5 to 1.5+1.0 for longer flame
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
        let averageParticleDistance = 0;
        
        // Track the center point of particle cloud for lighting
        let particleCenterX = 0;
        let particleCenterY = 0;
        let particleCenterZ = 0;
        let particleMaxDistance = 0;
        
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
            particle.velocity.y += 1 * delta; // Reduced from 5 to 1 to prevent immediate drop
            
            // Slow down
            particle.velocity.multiplyScalar(0.97); // Changed from 0.95 to 0.97 for less drag
            
            // Track the average particle distance for light position
            const particleDistance = particle.position.distanceTo(this.flameOrigin);
            averageParticleDistance += particleDistance;
            
            // Track the furthest particle for light radius calculation
            if (particleDistance > particleMaxDistance) {
                particleMaxDistance = particleDistance;
            }
            
            // Sum positions for center calculation
            particleCenterX += particle.position.x;
            particleCenterY += particle.position.y;
            particleCenterZ += particle.position.z;
            
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
        
        // Update flame light based on active particles
        if (this.flameLight && this.useDynamicLighting && activeParticles > 0) {
            // Calculate light intensity based on number of active particles
            const intensityFactor = Math.min(1.0, activeParticles / 50); // 50 particles = 100% intensity
            this.flameLight.intensity = this.isFiring ? 
                this.flameLightIntensity * intensityFactor : 
                Math.max(0, this.flameLight.intensity - delta * 2); // Fade out when not firing
            
            // Make the light flicker slightly for more realistic fire effect
            if (this.isFiring) {
                const flickerAmount = (Math.random() - 0.5) * 0.3; // Random flicker +/- 15%
                this.flameLight.intensity *= (1 + flickerAmount);
                
                // Slightly adjust light color for flicker effect
                const hue = (Math.random() > 0.7) ? 0.05 : 0; // Occasionally shift hue
                const colorFactor = 1.0 + (Math.random() - 0.5) * 0.1; // +/- 5% color variation
                this.flameLight.color.setHSL(hue, 1.0, 0.5 * colorFactor);
                
                if (Math.random() < 0.05) {  // Log occasionally to avoid console spam
                    console.log('[DEBUG] Flame light updated - intensity:', this.flameLight.intensity.toFixed(2), 
                                'color:', this.flameLight.color.getHexString());
                }
            }
            
            // If we have active particles, calculate their center point
            if (activeParticles > 10) {
                // Calculate center of particle cloud
                const particleCenter = new THREE.Vector3(
                    particleCenterX / activeParticles,
                    particleCenterY / activeParticles,
                    particleCenterZ / activeParticles
                );
                
                // Position the main flame light at the center of the particle cloud
                this.flameLight.position.copy(particleCenter);
                
                // Update the light's distance based on the furthest particle
                // This makes the light radius adapt to the flame size
                this.flameLight.distance = Math.max(this.flameLightDistance, particleMaxDistance * 1.5);
                
                if (Math.random() < 0.05) {  // Log occasionally to avoid console spam
                    console.log('[DEBUG] Flame light position (particle center):', 
                                this.flameLight.position.x.toFixed(2),
                                this.flameLight.position.y.toFixed(2),
                                this.flameLight.position.z.toFixed(2));
                }
                
                // Update debug sphere position if it exists
                if (this.lightDebugSphere) {
                    this.lightDebugSphere.position.copy(this.flameLight.position);
                    this.lightDebugSphere.visible = this.isFiring;
                }
                
                // Create multiple ambient lights at different particle positions
                if (this.ambientGlowLight) {
                    // Position the ambient glow light closer to the player for better illumination
                    // but still within the particle cloud
                    const ambientPos = new THREE.Vector3().copy(this.flameOrigin).lerp(particleCenter, 0.3);
                    this.ambientGlowLight.position.copy(ambientPos);
                    
                    // Update debug sphere for glow light
                    if (this.glowDebugSphere) {
                        this.glowDebugSphere.position.copy(this.ambientGlowLight.position);
                        this.glowDebugSphere.visible = this.isFiring;
                    }
                    
                    // Update ambient glow intensity too, but with smoother transitions
                    this.ambientGlowLight.intensity = this.isFiring ? 
                        this.ambientGlowIntensity * intensityFactor * 0.8 : // Slightly dimmer than main light
                        Math.max(0, this.ambientGlowLight.intensity - delta); // Slower fade out
                    
                    // Also update the ambient light's distance dynamically
                    this.ambientGlowLight.distance = Math.max(this.ambientGlowDistance, particleMaxDistance * 2.5);
                        
                    if (Math.random() < 0.05) {  // Log occasionally to avoid console spam
                        console.log('[DEBUG] Ambient glow intensity:', this.ambientGlowLight.intensity.toFixed(2),
                                   'distance:', this.ambientGlowLight.distance.toFixed(2));
                    }
                }
                
                // Create secondary lights at particle positions for more distributed lighting
                if (this.isFiring && !this.secondaryLights) {
                    this.createSecondaryLights();
                }
                
                // Update secondary particle lights if they exist
                if (this.secondaryLights && this.secondaryLights.length > 0) {
                    this.updateSecondaryLights(activeParticles, intensityFactor);
                }
            }
        } else if (this.flameLight) {
            console.log('[DEBUG] Flame light conditions not met:', 
                        this.useDynamicLighting ? 'Dynamic lighting on' : 'Dynamic lighting off',
                        'Active particles:', activeParticles);
        }
        
        if (this.debug && this.isFiring) {
            console.log(`Active particles: ${activeParticles}`);
        }
    }
    
    startFire() {
        this.isFiring = true;
        
        // Create lights if they don't exist but should
        if (this.useDynamicLighting && (!this.flameLight || !this.ambientGlowLight)) {
            console.log('[DEBUG] Creating missing flame lights in startFire');
            this.createFlameLight();
        }
        
        // Enable flame light when firing
        if (this.flameLight && this.useDynamicLighting) {
            this.flameLight.intensity = this.flameLightIntensity;
            console.log('[DEBUG] Flame light enabled with intensity:', this.flameLightIntensity);
        } else {
            console.log('[DEBUG] Flame light not available:', this.flameLight ? 'Light exists' : 'No light', 
                         this.useDynamicLighting ? 'Dynamic lighting on' : 'Dynamic lighting off');
        }
        
        // Enable ambient glow light
        if (this.ambientGlowLight && this.useDynamicLighting) {
            this.ambientGlowLight.intensity = this.ambientGlowIntensity;
            console.log('[DEBUG] Ambient glow light enabled with intensity:', this.ambientGlowIntensity);
        } else {
            console.log('[DEBUG] Ambient glow light not available:', this.ambientGlowLight ? 'Light exists' : 'No light');
        }
        
        if (this.debug) {
            console.log('Flamethrower: Started firing');
        }
    }
    
    stopFire() {
        this.isFiring = false;
        
        // Disable flame light when not firing
        if (this.flameLight && this.useDynamicLighting) {
            this.flameLight.intensity = 0;
        }
        
        // Disable ambient glow light
        if (this.ambientGlowLight && this.useDynamicLighting) {
            this.ambientGlowLight.intensity = 0;
        }
        
        if (this.debug) {
            console.log('Flamethrower: Stopped firing');
        }
    }
    
    cleanup() {
        super.cleanup();
        
        // Clean up weapon container
        if (this.weaponContainer) {
            if (this.weaponContainer.parent) {
                this.weaponContainer.parent.remove(this.weaponContainer);
            }
            this.weaponContainer = null;
        }
        
        // Clean up secondary lights
        if (this.secondaryLights) {
            for (let i = 0; i < this.secondaryLights.length; i++) {
                const lightInfo = this.secondaryLights[i];
                if (lightInfo.light) {
                    if (lightInfo.light.parent) {
                        lightInfo.light.parent.remove(lightInfo.light);
                    }
                    lightInfo.light = null;
                }
            }
            this.secondaryLights = null;
        }
        
        // Clean up loaded GLB model
        if (this.loadedModel) {
            // Traverse the model to dispose of all geometries and materials
            this.loadedModel.traverse((object) => {
                if (object.isMesh) {
                    if (object.geometry) {
                        object.geometry.dispose();
                    }
                    
                    // Handle material disposal
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach(material => this.disposeMaterial(material));
                        } else {
                            this.disposeMaterial(object.material);
                        }
                    }
                }
            });
            
            // Remove from parent
            if (this.loadedModel.parent) {
                this.loadedModel.parent.remove(this.loadedModel);
            }
            
            this.loadedModel = null;
        }
        
        // Clean up debug objects
        if (this.debugSphere) {
            if (this.debugSphere.parent) {
                this.debugSphere.parent.remove(this.debugSphere);
            }
            this.debugSphere.geometry.dispose();
            this.debugSphere.material.dispose();
            this.debugSphere = null;
        }
        
        if (this.debugLine) {
            if (this.debugLine.geometry) {
                this.debugLine.geometry.dispose();
            }
            if (this.debugLine.material) {
                this.debugLine.material.dispose();
            }
            this.debugLine = null;
        }
        
        // Clean up light debug spheres
        if (this.lightDebugSphere) {
            if (this.lightDebugSphere.parent) {
                this.lightDebugSphere.parent.remove(this.lightDebugSphere);
            }
            this.lightDebugSphere.geometry.dispose();
            this.lightDebugSphere.material.dispose();
            this.lightDebugSphere = null;
        }
        
        if (this.glowDebugSphere) {
            if (this.glowDebugSphere.parent) {
                this.glowDebugSphere.parent.remove(this.glowDebugSphere);
            }
            this.glowDebugSphere.geometry.dispose();
            this.glowDebugSphere.material.dispose();
            this.glowDebugSphere = null;
        }
        
        // Clean up flame light
        if (this.flameLight) {
            if (this.flameLight.parent) {
                this.flameLight.parent.remove(this.flameLight);
            }
            this.flameLight = null;
        }
        
        // Clean up ambient glow light
        if (this.ambientGlowLight) {
            if (this.ambientGlowLight.parent) {
                this.ambientGlowLight.parent.remove(this.ambientGlowLight);
            }
            this.ambientGlowLight = null;
        }
        
        // Reset particles
        this.particles = [];
    }
    
    // Helper method to dispose of material and its textures
    disposeMaterial(material) {
        if (!material) return;
        
        // Dispose of textures
        for (const propertyName in material) {
            const property = material[propertyName];
            if (property && property.isTexture) {
                property.dispose();
            }
        }
        
        // Dispose of the material itself
        material.dispose();
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
        
        // Enhanced vertex shader with glow effect
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
                gl_PointSize = size * (350.0 / -mvPosition.z); // Increased from 300 to 350 for larger particles
                gl_Position = projectionMatrix * mvPosition;
            }
        `;
        
        // Enhanced fragment shader with higher intensity glow
        const fragmentShader = `
            uniform sampler2D diffuseTexture;
            
            varying float vLifetime;
            varying vec3 vColor;
            
            void main() {
                if (vLifetime <= 0.0) discard;
                
                vec4 texColor = texture2D(diffuseTexture, gl_PointCoord);
                
                // Boost brightness for emissive glow effect
                vec3 glowColor = vColor * 1.5; // Increased brightness by 50%
                
                // Apply additional glow effect based on lifetime
                glowColor += vec3(0.2, 0.05, 0.0) * vLifetime; // Add orange-ish highlight
                
                // Final color with alpha
                gl_FragColor = vec4(glowColor, texColor.a * min(vLifetime * 2.0, 1.0));
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
        let averageParticleDistance = 0;
        
        // Track the center point of particle cloud for lighting
        let particleCenterX = 0;
        let particleCenterY = 0;
        let particleCenterZ = 0;
        let particleMaxDistance = 0;
        
        for (let i = 0; i < this.particleCount; i++) {
            const particle = this.particles[i];
            
            if (particle.life <= 0) continue;
            
            activeParticles++;
            
            // Update life
            particle.life -= delta;
            
            // Update position based on velocity
            particle.position.addScaledVector(particle.velocity, delta);
            
            // Add upward force
            particle.velocity.y += 1 * delta; // Reduced from 5 to 1
            
            // Slow down
            particle.velocity.multiplyScalar(0.97); // Changed from 0.95 to 0.97
            
            // Track particles for lighting calculations
            const particleDistance = particle.position.distanceTo(this.flameOrigin);
            averageParticleDistance += particleDistance;
            
            // Track the furthest particle for light radius calculation
            if (particleDistance > particleMaxDistance) {
                particleMaxDistance = particleDistance;
            }
            
            // Sum positions for center calculation
            particleCenterX += particle.position.x;
            particleCenterY += particle.position.y;
            particleCenterZ += particle.position.z;
            
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
        
        // Update flame light based on active particles
        if (this.flameLight && this.useDynamicLighting && activeParticles > 0) {
            // Calculate light intensity based on number of active particles
            const intensityFactor = Math.min(1.0, activeParticles / 50); // 50 particles = 100% intensity
            this.flameLight.intensity = this.isFiring ? 
                this.flameLightIntensity * intensityFactor : 
                Math.max(0, this.flameLight.intensity - delta * 2); // Fade out when not firing
            
            // Make the light flicker slightly for more realistic fire effect
            if (this.isFiring) {
                const flickerAmount = (Math.random() - 0.5) * 0.3; // Random flicker +/- 15%
                this.flameLight.intensity *= (1 + flickerAmount);
                
                // Slightly adjust light color for flicker effect
                const hue = (Math.random() > 0.7) ? 0.05 : 0; // Occasionally shift hue
                const colorFactor = 1.0 + (Math.random() - 0.5) * 0.1; // +/- 5% color variation
                this.flameLight.color.setHSL(hue, 1.0, 0.5 * colorFactor);
                
                if (Math.random() < 0.05) {  // Log occasionally to avoid console spam
                    console.log('[DEBUG] Flame light updated - intensity:', this.flameLight.intensity.toFixed(2), 
                                'color:', this.flameLight.color.getHexString());
                }
            }
            
            // If we have active particles, calculate their center point
            if (activeParticles > 10) {
                // Calculate center of particle cloud
                const particleCenter = new THREE.Vector3(
                    particleCenterX / activeParticles,
                    particleCenterY / activeParticles,
                    particleCenterZ / activeParticles
                );
                
                // Position the main flame light at the center of the particle cloud
                this.flameLight.position.copy(particleCenter);
                
                // Update the light's distance based on the furthest particle
                // This makes the light radius adapt to the flame size
                this.flameLight.distance = Math.max(this.flameLightDistance, particleMaxDistance * 1.5);
                
                if (Math.random() < 0.05) {  // Log occasionally to avoid console spam
                    console.log('[DEBUG] Flame light position (particle center):', 
                                this.flameLight.position.x.toFixed(2),
                                this.flameLight.position.y.toFixed(2),
                                this.flameLight.position.z.toFixed(2));
                }
                
                // Update debug sphere position if it exists
                if (this.lightDebugSphere) {
                    this.lightDebugSphere.position.copy(this.flameLight.position);
                    this.lightDebugSphere.visible = this.isFiring;
                }
                
                // Create multiple ambient lights at different particle positions
                if (this.ambientGlowLight) {
                    // Position the ambient glow light closer to the player for better illumination
                    // but still within the particle cloud
                    const ambientPos = new THREE.Vector3().copy(this.flameOrigin).lerp(particleCenter, 0.3);
                    this.ambientGlowLight.position.copy(ambientPos);
                    
                    // Update debug sphere for glow light
                    if (this.glowDebugSphere) {
                        this.glowDebugSphere.position.copy(this.ambientGlowLight.position);
                        this.glowDebugSphere.visible = this.isFiring;
                    }
                    
                    // Update ambient glow intensity too, but with smoother transitions
                    this.ambientGlowLight.intensity = this.isFiring ? 
                        this.ambientGlowIntensity * intensityFactor * 0.8 : // Slightly dimmer than main light
                        Math.max(0, this.ambientGlowLight.intensity - delta); // Slower fade out
                    
                    // Also update the ambient light's distance dynamically
                    this.ambientGlowLight.distance = Math.max(this.ambientGlowDistance, particleMaxDistance * 2.5);
                        
                    if (Math.random() < 0.05) {  // Log occasionally to avoid console spam
                        console.log('[DEBUG] Ambient glow intensity:', this.ambientGlowLight.intensity.toFixed(2),
                                   'distance:', this.ambientGlowLight.distance.toFixed(2));
                    }
                }
                
                // Create secondary lights at particle positions for more distributed lighting
                if (this.isFiring && !this.secondaryLights) {
                    this.createSecondaryLights();
                }
                
                // Update secondary particle lights if they exist
                if (this.secondaryLights && this.secondaryLights.length > 0) {
                    this.updateSecondaryLights(activeParticles, intensityFactor);
                }
            }
        } else if (this.flameLight) {
            console.log('[DEBUG] Flame light conditions not met:', 
                        this.useDynamicLighting ? 'Dynamic lighting on' : 'Dynamic lighting off',
                        'Active particles:', activeParticles);
        }
        
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
            
            // Create enhanced texture for glow effect
            const texture = this.createFlameTexture();
            
            // Create a solid orange material with enhanced glow
            const material = new THREE.PointsMaterial({
                size: 7.0,          // Increased from 5.0 to 7.0 for larger particles
                color: 0xff7700,    // Brighter orange color
                transparent: true,
                opacity: 0.9,       // Increased from 0.8 to 0.9 for better visibility
                sizeAttenuation: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
                map: texture        // Use our enhanced texture
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
                    color: new THREE.Color(1, 0.7, 0.3), // Brighter orange-yellow color
                    size: 7.0,
                    life: 0,
                    maxLife: 0
                });
            }
            
            // If we're using lighting, add an emergency light
            if (this.useDynamicLighting && !this.flameLight) {
                // Create a point light for the flame with higher intensity for emergency mode
                this.flameLight = new THREE.PointLight(
                    0xff5500,
                    0, // Start with zero intensity when not firing
                    this.flameLightDistance || 15
                );
                
                // Set light properties
                this.flameLight.castShadow = true;
                
                // Add to scene
                if (this.scene) {
                    this.scene.add(this.flameLight);
                    this.effects.push(this.flameLight);
                    console.log('[DEBUG] Emergency flame light added to scene');
                }
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
        
        // DIRECT CAMERA-BASED APPROACH - consistent with emitParticles method
        let emissionPosition = new THREE.Vector3(0, 0, 0);
        let direction = new THREE.Vector3(0, 0, -1);
        
        if (this.player && this.player.isFirstPerson && this.player.fpCamera) {
            // Use camera as the source
            const camera = this.player.fpCamera;
            
            // Get camera position
            camera.getWorldPosition(emissionPosition);
            
            // Get camera direction
            camera.getWorldDirection(direction);
            
            // Move the emission point slightly in front of the camera (0.5 units forward, 0.3 down, 0.2 right)
            emissionPosition.add(
                new THREE.Vector3(
                    direction.x * 0.5 + 0.2, 
                    direction.y * 0.5 - 0.3, 
                    direction.z * 0.5
                )
            );
        } else if (this.player && this.player.model) {
            // Third-person handling
            this.model.updateMatrixWorld(true);
            const nozzleTipWorld = new THREE.Vector3();
            nozzleTipWorld.copy(this.nozzleTipPosition);
            nozzleTipWorld.applyMatrix4(this.model.matrixWorld);
            emissionPosition.copy(nozzleTipWorld);
            
            this.player.model.getWorldDirection(direction);
        }
        
        // Update each particle
        let activeParticles = 0;
        let averageParticleDistance = 0;
        
        for (let i = 0; i < this.particles.length; i++) {
            const particle = this.particles[i];
            
            // Update life
            if (particle.life > 0) {
                particle.life -= delta;
                particle.position.addScaledVector(particle.velocity, delta);
                particle.velocity.y += 1 * delta; // Reduced from 5 to 1
                
                // Update position in buffer
                const idx = i * 3;
                positions[idx] = particle.position.x;
                positions[idx + 1] = particle.position.y;
                positions[idx + 2] = particle.position.z;
                
                activeParticles++;
                
                // Track average distance for light position
                averageParticleDistance += particle.position.distanceTo(emissionPosition);
            }
            
            // Emit new particles if firing
            if (this.isFiring && particle.life <= 0 && activeParticles < 30) {
                // Reset particle at emission position
                particle.position.copy(emissionPosition);
                
                // Set velocity in flame direction with some randomness
                const speed = 20 + Math.random() * 10; // Increased from 10+5 to 20+10
                particle.velocity.copy(direction).multiplyScalar(speed);
                particle.velocity.x += (Math.random() - 0.5) * 2;
                particle.velocity.y += (Math.random() - 0.5) * 2 + 0.5; // Slight upward bias
                particle.velocity.z += (Math.random() - 0.5) * 2;
                
                // Set lifetime
                particle.maxLife = 1.0 + Math.random() * 1.0; // Increased from 0.5+0.5 to 1.0+1.0
                particle.life = particle.maxLife;
                
                activeParticles++;
            }
        }
        
        // Update the geometry
        this.particleSystem.geometry.attributes.position.needsUpdate = true;
        
        // Update flame light
        if (this.flameLight && this.useDynamicLighting) {
            // Base intensity on active particles
            const intensityFactor = Math.min(1.0, activeParticles / 20); // 20 particles = full intensity for emergency
            this.flameLight.intensity = this.isFiring ? 
                this.flameLightIntensity * 1.5 * intensityFactor : // Higher intensity for emergency
                Math.max(0, this.flameLight.intensity - delta * 2);
            
            // Update light position
            if (activeParticles > 0) {
                // Position the light in front of the emission point
                const lightPosition = direction.clone().multiplyScalar(3);
                this.flameLight.position.copy(emissionPosition).add(lightPosition);
                
                // Add flicker
                const flickerAmount = (Math.random() - 0.5) * 0.4; // More intense flicker
                this.flameLight.intensity *= (1 + flickerAmount);
                
                // Occasionally change color for "emergency" effect
                if (Math.random() > 0.9) {
                    const emergencyColor = Math.random() > 0.5 ? 0xff3300 : 0xff7700;
                    this.flameLight.color.set(emergencyColor);
                }
            }
        }
        
        if (this.debug && this.isFiring) {
            console.log(`[DEBUG] Active emergency particles: ${activeParticles}`);
        }
    }
    
    createFlameLight() {
        console.log('[DEBUG] Creating flame light with color:', this.flameLightColor, 'and distance:', this.flameLightDistance);
        
        // Double-check scene is available
        if (!this.scene) {
            console.error('[DEBUG] Cannot create flame light: scene is still null');
            if (this.player && this.player.scene) {
                console.log('[DEBUG] Using player.scene fallback for light creation');
                this.scene = this.player.scene;
            } else if (this.player && this.player.game && this.player.game.scene) {
                console.log('[DEBUG] Using player.game.scene fallback for light creation');
                this.scene = this.player.game.scene;
            } else {
                console.error('[DEBUG] No scene available for light creation, aborting');
                return;
            }
        }
        
        try {
            // Create a point light for the flame
            this.flameLight = new THREE.PointLight(
                this.flameLightColor,
                0, // Start with zero intensity when not firing
                this.flameLightDistance,
                1.0 // Add quadratic decay for more realistic falloff
            );
            
            // Set light properties
            this.flameLight.castShadow = true;
            this.flameLight.decay = 1.5; // Add light decay for more realistic falloff
            
            // Configure shadow properties (higher resolution for better quality)
            this.flameLight.shadow.mapSize.width = 1024;  // Increased from 512
            this.flameLight.shadow.mapSize.height = 1024; // Increased from 512
            this.flameLight.shadow.camera.near = 0.1;
            this.flameLight.shadow.camera.far = this.flameLightDistance;
            this.flameLight.shadow.bias = -0.005; // Adjust bias to prevent shadow acne
            
            // Position the light at the origin initially (will be updated during firing)
            this.flameLight.position.copy(this.flameOrigin);
            
            console.log('[DEBUG] Flame light created successfully:', this.flameLight.uuid);
            
            // Add to scene
            if (this.scene) {
                this.scene.add(this.flameLight);
                if (!this.effects) {
                    console.error('[DEBUG] Effects array is undefined, initializing');
                    this.effects = [];
                }
                this.effects.push(this.flameLight);
                
                // Debug scene materials to see if they can receive shadows
                console.log('[DEBUG] Checking scene materials for light interaction:');
                let shadingObjects = 0;
                let receivingShadowObjects = 0;
                let castingShadowObjects = 0;
                
                this.scene.traverse(object => {
                    if (object.isMesh) {
                        shadingObjects++;
                        
                        if (object.receiveShadow) {
                            receivingShadowObjects++;
                        }
                        
                        if (object.castShadow) {
                            castingShadowObjects++;
                        }
                        
                        // Log material properties for the first few objects
                        if (shadingObjects <= 5 && object.material) {
                            console.log(`[DEBUG] Object material [${object.name || 'unnamed'}]:`, 
                                'type:', object.material.type,
                                'receiveShadow:', object.receiveShadow,
                                'castShadow:', object.castShadow);
                        }
                    }
                });
                
                console.log(`[DEBUG] Scene contains ${shadingObjects} meshes, ${receivingShadowObjects} receive shadows, ${castingShadowObjects} cast shadows`);
                console.log('[DEBUG] Flame light added to scene. Scene children:', this.scene.children.length);
            } else {
                console.error('[DEBUG] Cannot add flame light: scene is null');
            }
            
            // Create the ambient glow light (softer, wider radius)
            try {
                console.log('[DEBUG] Creating ambient glow light with color:', this.ambientGlowColor, 'and distance:', this.ambientGlowDistance);
                this.ambientGlowLight = new THREE.PointLight(
                    this.ambientGlowColor,
                    0, // Start with zero intensity when not firing
                    this.ambientGlowDistance,
                    1.0 // Add quadratic decay for more realistic falloff
                );
                
                // Don't cast shadows from ambient glow (better performance)
                this.ambientGlowLight.castShadow = false;
                this.ambientGlowLight.decay = 1.0; // Less decay than main flame light
                
                // Position at same point initially
                this.ambientGlowLight.position.copy(this.flameOrigin);
                
                // Add to scene
                if (this.scene) {
                    this.scene.add(this.ambientGlowLight);
                    if (!this.effects) {
                        console.error('[DEBUG] Effects array is undefined, initializing');
                        this.effects = [];
                    }
                    this.effects.push(this.ambientGlowLight);
                    console.log('[DEBUG] Ambient glow light added to scene. Total effects:', this.effects.length);
                } else {
                    console.error('[DEBUG] Cannot add ambient glow light: scene is null');
                }
            } catch (error) {
                console.error('[DEBUG] Error creating ambient glow light:', error);
            }
        } catch (error) {
            console.error('[DEBUG] Error creating flame light:', error);
        }
        
        // Final confirmation of light creation
        console.log('[DEBUG] Light creation complete -', 
                   'Flame light:', this.flameLight ? 'created' : 'failed',
                   'Ambient glow:', this.ambientGlowLight ? 'created' : 'failed');
    }
    
    // New method to enhance scene objects for better lighting
    enhanceSceneObjects() {
        console.log('[DEBUG] Enhancing scene objects for better light reception');
        let enhancedCount = 0;
        
        // Traverse the scene to find all objects that should receive light
        this.scene.traverse(object => {
            if (object.isMesh) {
                // Enable shadow receiving on all meshes
                object.receiveShadow = true;
                
                // For any object with a material, enhance it to work better with dynamic lighting
                if (object.material) {
                    // If it's an array of materials, enhance each one
                    if (Array.isArray(object.material)) {
                        object.material.forEach(mat => this.enhanceMaterial(mat));
                    } else {
                        this.enhanceMaterial(object.material);
                    }
                    enhancedCount++;
                }
            }
        });
        
        console.log(`[DEBUG] Enhanced ${enhancedCount} objects to receive lighting properly`);
    }
    
    // Helper method to enhance individual materials
    enhanceMaterial(material) {
        if (!material) return;
        
        // Skip materials that don't respond to light
        if (material.type === 'MeshBasicMaterial') return;
        
        // Adjust material properties for better light reception
        material.needsUpdate = true;
        
        // For standard materials, ensure they have reflective properties
        if (material.type === 'MeshStandardMaterial' || material.type === 'MeshPhysicalMaterial') {
            // Only adjust if values are at extremes that would prevent light interaction
            if (material.roughness > 0.95) material.roughness = 0.9;
            if (material.metalness < 0.05) material.metalness = 0.1; // Small amount of metalness helps with highlights
        }
        
        // For phong/lambert materials
        if (material.type === 'MeshPhongMaterial' || material.type === 'MeshLambertMaterial') {
            material.shininess = Math.max(material.shininess || 0, 10);
            material.specular = material.specular || new THREE.Color(0x111111);
        }
    }
    
    // New method to create secondary lights that follow particles
    createSecondaryLights() {
        if (!this.scene || !this.useDynamicLighting) return;
        
        console.log('[DEBUG] Creating secondary particle lights');
        
        this.secondaryLights = [];
        
        // Create a few smaller lights that will follow particles
        const numLights = 3;
        
        for (let i = 0; i < numLights; i++) {
            // Create a point light for particles
            const light = new THREE.PointLight(
                this.flameLightColor,
                this.flameLightIntensity * 0.3, // Lower intensity than main light
                this.flameLightDistance * 0.6,  // Smaller radius
                1.5 // Faster decay
            );
            
            // Don't cast shadows from secondary lights (performance)
            light.castShadow = false;
            
            // Start at origin
            light.position.copy(this.flameOrigin);
            
            // Add to scene
            this.scene.add(light);
            this.effects.push(light);
            this.secondaryLights.push({
                light: light,
                targetParticleIdx: Math.floor(Math.random() * this.particleCount), // Random target
                lifespan: 0 // Will be updated
            });
        }
        
        console.log(`[DEBUG] Created ${numLights} secondary particle lights`);
    }
    
    // Update secondary lights to follow specific particles
    updateSecondaryLights(activeParticles, intensityFactor) {
        if (!this.secondaryLights || !this.isFiring) return;
        
        // Update each secondary light
        for (let i = 0; i < this.secondaryLights.length; i++) {
            const lightInfo = this.secondaryLights[i];
            
            // Decrease lifespan
            lightInfo.lifespan -= 0.05;
            
            // If expired, assign a new target particle
            if (lightInfo.lifespan <= 0) {
                // Find a new active particle to follow
                let attempts = 0;
                let foundActive = false;
                
                while (!foundActive && attempts < 20) {
                    const idx = Math.floor(Math.random() * this.particleCount);
                    const particle = this.particles[idx];
                    
                    if (particle && particle.life > 0.5) { // Only pick particles with decent life left
                        lightInfo.targetParticleIdx = idx;
                        lightInfo.lifespan = 0.5 + Math.random() * 0.5; // Random lifespan 0.5-1.0 seconds
                        foundActive = true;
                    }
                    
                    attempts++;
                }
                
                // If we couldn't find an active particle, use main flame light position
                if (!foundActive && this.flameLight) {
                    lightInfo.light.position.copy(this.flameLight.position);
                    lightInfo.light.position.x += (Math.random() - 0.5) * 2;
                    lightInfo.light.position.y += (Math.random() - 0.5) * 2;
                    lightInfo.light.position.z += (Math.random() - 0.5) * 2;
                }
            }
            
            // If we have a valid target, make the light follow it
            const targetIdx = lightInfo.targetParticleIdx;
            if (targetIdx >= 0 && targetIdx < this.particleCount) {
                const particle = this.particles[targetIdx];
                
                if (particle && particle.life > 0) {
                    // Move light to particle position
                    lightInfo.light.position.copy(particle.position);
                    
                    // Update intensity based on particle life
                    const lifeRatio = particle.life / particle.maxLife;
                    lightInfo.light.intensity = this.flameLightIntensity * 0.3 * intensityFactor * lifeRatio;
                    
                    // Add some flickering
                    const flicker = 0.8 + Math.random() * 0.4; // 0.8-1.2
                    lightInfo.light.intensity *= flicker;
                    
                    // Change light color based on particle life
                    if (lifeRatio > 0.6) {
                        // Yellow-orange for fresh particles
                        lightInfo.light.color.set(0xff9500);
                    } else {
                        // Reddish for older particles
                        lightInfo.light.color.set(0xff3800);
                    }
                }
            }
        }
    }
}

export { Flamethrower };