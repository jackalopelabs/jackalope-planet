import * as THREE from 'three';

class Physics {
    constructor() {
        this.gravity = 9.8; // m/s²
        this.timestep = 1/60; // 60 fps physics update rate
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
}

export { Physics }; 