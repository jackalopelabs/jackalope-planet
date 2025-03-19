import { Game } from './core/Game';
import '../css/jackalope-planet.css';

// Initialize Jackalope Planet when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Jackalope Planet');
    
    // Find all jackalope planet containers
    const containers = document.querySelectorAll('.jackalope-planet-canvas-container');
    console.log(`Found ${containers.length} jackalope-planet containers`);
    
    // Initialize each container with a new Game instance
    const games = [];
    containers.forEach(container => {
        const containerId = container.getAttribute('id');
        if (containerId) {
            console.log(`Initializing game in container: ${containerId}`);
            const game = new Game(containerId);
            games.push(game);
        } else {
            console.error('Container without ID found, skipping');
        }
    });
    
    // Flag to prevent double key presses
    let isProcessingKeyPress = false;
    
    // Track current mode to prevent redundant switches
    let currentMode = 'third_person';
    
    // Global key handler for view toggle (T key)
    window.addEventListener('keydown', (event) => {
        if ((event.key === 't' || event.key === 'T') && !isProcessingKeyPress) {
            // Determine target mode (opposite of current)
            const targetMode = currentMode === 'third_person' ? 'first_person' : 'third_person';
            console.log(`Global T key pressed, switching player mode to ${targetMode}`);
            
            // Set the flag to prevent multiple rapid keypresses
            isProcessingKeyPress = true;
            
            // First exit pointer lock if active
            if (document.pointerLockElement && document.exitPointerLock) {
                document.exitPointerLock();
            }
            
            // Update tracked mode
            currentMode = targetMode;
            
            // Wait a brief moment to ensure pointer lock is released
            setTimeout(() => {
                games.forEach(game => {
                    if (typeof game.switchPlayerMode === 'function') {
                        // Get mode before switch
                        const currentGameMode = game.gameMode;
                        
                        // Only switch if needed
                        if (currentGameMode !== targetMode) {
                            const newMode = game.switchPlayerMode();
                            console.log(`Game switched to ${newMode} mode`);
                        } else {
                            console.log(`Game already in ${currentGameMode} mode, no switch needed`);
                        }
                    }
                });
                
                // Reset the key press flag after a reasonable time
                setTimeout(() => {
                    isProcessingKeyPress = false;
                }, 1000);
            }, 100);
        }
    });
}); 