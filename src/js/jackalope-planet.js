import { Game } from './core/Game';
import '../css/jackalope-planet.css';

// Initialize Jackalope Planet when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Find all jackalope planet containers
    const containers = document.querySelectorAll('.jackalope-planet-canvas-container');
    
    // Initialize each container with a new Game instance
    containers.forEach(container => {
        const containerId = container.getAttribute('id');
        if (containerId) {
            new Game(containerId);
        }
    });
}); 