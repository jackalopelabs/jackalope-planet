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
            
            // Add first-person cursor dot
            const fpCursor = document.createElement('div');
            fpCursor.className = 'first-person-cursor';
            fpCursor.id = `${containerId}-fp-cursor`;
            document.body.appendChild(fpCursor);
        } else {
            console.error('Container without ID found, skipping');
        }
    });
    
    // Flag to prevent double key presses
    let isProcessingKeyPress = false;
    
    // Track current mode across all games
    let currentMode = 'third_person';
    
    // Add info text about controls
    containers.forEach(container => {
        const infoText = document.createElement('div');
        infoText.className = 'jackalope-controls-info';
        infoText.innerHTML = 'Press <strong>T</strong> to toggle first/third person view';
        infoText.style.position = 'absolute';
        infoText.style.bottom = '10px';
        infoText.style.left = '10px';
        infoText.style.color = 'white';
        infoText.style.backgroundColor = 'rgba(0,0,0,0.5)';
        infoText.style.padding = '5px 10px';
        infoText.style.borderRadius = '4px';
        infoText.style.fontSize = '14px';
        infoText.style.zIndex = '10';
        container.appendChild(infoText);
    });
    
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
            
            // Toggle FP cursor visibility
            document.querySelectorAll('.first-person-cursor').forEach(cursor => {
                cursor.style.display = targetMode === 'first_person' ? 'block' : 'none';
            });
            
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
    
    // Toggle cursor visibility based on pointer lock state
    document.addEventListener('pointerlockchange', () => {
        const isLocked = !!document.pointerLockElement;
        const inFirstPerson = currentMode === 'first_person';
        
        // Only show cursor in first-person AND when pointer is locked
        document.querySelectorAll('.first-person-cursor').forEach(cursor => {
            cursor.style.display = (isLocked && inFirstPerson) ? 'block' : 'none';
        });
    });
}); 