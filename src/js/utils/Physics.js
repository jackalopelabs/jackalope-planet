import * as THREE from 'three';

class Physics {
    constructor() {
        this.gravity = 9.8; // m/s²
        this.timestep = 1/60; // 60 fps physics update rate
        
        // Shadow parameters for enhanced visual contrast
        this.shadowDarkness = 0.85; // Controls shadow darkness (0-1)
        this.shadowSharpness = 0.92; // Controls shadow edge sharpness (0-1)
    }
    
    // Simple collision detection between two objects with bounding spheres
    checkCollision(obj1, obj2) {
        const position1 = obj1.position || obj1.mesh?.position;
        const position2 = obj2.position || obj2.mesh?.position;
        
        if (!position1 || !position2) return false;
        
        const radius1 = obj1.radius || 0.5; // Default radius if not specified
        const radius2 = obj2.radius || 0.5;
        
        const distance = position1.distanceTo(position2);
        return distance < (radius1 + radius2);
    }
    
    // Calculate trajectory with gravity
    calculateArcTrajectory(startPos, velocity, steps) {
        const trajectory = [];
        const pos = startPos.clone();
        const vel = velocity.clone();
        
        for (let i = 0; i < steps; i++) {
            // Apply gravity to velocity
            vel.y -= this.gravity * this.timestep;
            
            // Update position
            pos.add(vel.clone().multiplyScalar(this.timestep));
            
            // Store position
            trajectory.push(pos.clone());
            
            // Stop if we hit the ground
            if (pos.y <= 0) break;
        }
        
        return trajectory;
    }
    
    // Calculate bounce direction when hitting a surface
    calculateBounce(incomingDirection, surfaceNormal, restitution = 0.8) {
        if (!incomingDirection || !surfaceNormal) return null;
        
        // Normalize vectors
        const dir = incomingDirection.clone().normalize();
        const normal = surfaceNormal.clone().normalize();
        
        // Calculate reflection vector: r = d - 2(d·n)n
        const dot = dir.dot(normal);
        const reflection = dir.sub(normal.multiplyScalar(2 * dot));
        
        // Apply restitution (energy loss in bounce)
        return reflection.multiplyScalar(restitution);
    }
    
    // New methods to enhance shadow rendering for better contrast
    
    // Configure shadow properties for a light to enhance contrast
    configureShadowsForContrast(light) {
        if (!light || !light.castShadow) return;
        
        // Set high-resolution shadow map for crisp shadows
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        
        // Adjust bias to prevent shadow acne but keep shadows sharp
        light.shadow.bias = -0.0005;
        light.shadow.normalBias = 0.02;
        
        // Set darkness value if available (THREE.js r3f extension or custom prop)
        if (light.shadow.hasOwnProperty('darkness')) {
            light.shadow.darkness = this.shadowDarkness;
        }
        
        // Reduce blur for sharper shadow edges
        if (light.shadow.hasOwnProperty('radius')) {
            light.shadow.radius = 1.0 - this.shadowSharpness; // Lower values = sharper shadows
        }
        
        // Optimize shadow camera frustum
        if (light.isDirectionalLight) {
            // For directional lights
            const shadowCam = light.shadow.camera;
            shadowCam.near = 0.5;
            shadowCam.far = 100;
            
            // Tighten the frustum for better shadow resolution
            const size = 30;
            shadowCam.left = -size;
            shadowCam.right = size;
            shadowCam.top = size;
            shadowCam.bottom = -size;
            shadowCam.updateProjectionMatrix();
        } else if (light.isSpotLight) {
            // For spot lights
            light.shadow.camera.near = 0.5;
            light.shadow.camera.far = 100;
            light.shadow.camera.fov = 30;
            light.shadow.camera.updateProjectionMatrix();
        } else if (light.isPointLight) {
            // For point lights
            light.shadow.camera.near = 0.5;
            light.shadow.camera.far = 50;
            light.shadow.camera.updateProjectionMatrix();
        }
        
        return light;
    }
    
    // Enhance material to better receive shadows for contrast
    enhanceMaterialForShadows(material) {
        if (!material) return;
        
        material.needsUpdate = true;
        
        // Adjust material properties to better show shadows
        if (material.type === 'MeshStandardMaterial' || 
            material.type === 'MeshPhysicalMaterial') {
            
            // Increase contrast for shadow receiving by adjusting properties
            if (material.roughness < 0.7) material.roughness = Math.min(material.roughness * 1.2, 0.95);
            if (material.metalness > 0.2) material.metalness = Math.max(material.metalness * 0.8, 0.05);
            
            // Additional shadow properties (if using custom extensions)
            if (material.hasOwnProperty('shadowSide')) {
                material.shadowSide = THREE.FrontSide;
            }
        } 
        else if (material.type === 'MeshLambertMaterial' || 
                 material.type === 'MeshPhongMaterial') {
            
            // For these material types, adjust shininess
            if (material.shininess) {
                material.shininess = Math.max(material.shininess * 0.8, 5); 
            }
        }
        
        // Make sure the material receives shadows
        material.receiveShadow = true;
        
        return material;
    }
    
    // Apply enhanced shadow settings to an entire scene
    applyContrastEnhancedShadows(scene) {
        if (!scene) return;
        
        // Process all lights
        scene.traverse(object => {
            if (object.isLight && object.castShadow) {
                this.configureShadowsForContrast(object);
            }
            
            // Process all materials
            if (object.isMesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(mat => this.enhanceMaterialForShadows(mat));
                    } else {
                        this.enhanceMaterialForShadows(object.material);
                    }
                }
            }
        });
    }
}

export { Physics }; 