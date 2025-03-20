import { Game } from './core/Game';
import '../css/jackalope-planet.css';

const JACKALOPE_VERSION = 'modular-202503191854';
console.log(`Jackalope Planet ${JACKALOPE_VERSION} loaded`);
console.log('🚀 THIS IS A TEST UPDATE TO VERIFY CHANGES - MULTIPLE PLAYER SUPPORT');

// Test helper - accessible via browser console
window.testJackalope = {
  version: JACKALOPE_VERSION,
  games: [],
  runTests: function() {
    console.group('Jackalope Planet Tests');
    console.log('Testing version:', this.version);
    
    // Test game instances
    const containers = document.querySelectorAll('.jackalope-planet-canvas-container');
    console.log('Game instances found:', containers.length);
    
    // Test current mode
    const currentMode = window.currentMode || 'unknown';
    console.log('Current mode:', currentMode);
    
    // Test rendering
    containers.forEach(container => {
      const renderer = container.querySelector('canvas');
      if (renderer) {
        console.log('Renderer active:', container.id);
      } else {
        console.warn('No renderer found in:', container.id);
      }
    });
    
    // Test game features based on branch
    if (this.version.includes('modular')) {
      console.log('Testing modular branch features...');
      // Check for modular branch features
      console.log('Player physics system available:', typeof this.games[0]?.player?.physics !== 'undefined');
      console.log('Modular control system available:', typeof this.games[0]?.player?.controls !== 'undefined');
    }
    
    console.groupEnd();
    return 'Tests complete - check console for results';
  }
};

// Initialize Jackalope Planet when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('MODULAR BRANCH: Jackalope Planet initializing');
    console.log('This is the modular branch version');
    
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
            
            // Add to test helper
            window.testJackalope.games.push(game);
            
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
        infoText.innerHTML = `
            <div>Press <strong>M</strong> to toggle first/third person view</div>
            <div>Press <strong>T</strong> to create a new character</div>
            <div>Press <strong>1-9</strong> to switch between characters</div>
        `;
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
    
    // Global key handler for mode switching (M key), player creation (T key), and player switching (1-9 keys)
    window.addEventListener('keydown', (event) => {
        console.log('Key pressed:', event.key);
        
        // Handle player switching (1-9 keys)
        if (/^[1-9]$/.test(event.key)) {
            const playerIndex = parseInt(event.key) - 1;
            games.forEach(game => {
                if (game.players && game.players[playerIndex]) {
                    // Switch active player
                    game.activePlayer = game.players[playerIndex];
                    console.log(`Switched to player ${playerIndex + 1}`);
                    
                    // Update camera if needed
                    if (game.activePlayer.fpCamera) {
                        game.setActiveCamera(game.activePlayer.fpCamera);
                    }
                }
            });
            return;
        }
        
        // Handle mode switching (M key)
        if ((event.key === 'm' || event.key === 'M') && !isProcessingKeyPress) {
            console.log('M key pressed, switching game mode');
            
            // Set the flag to prevent multiple rapid keypresses
            isProcessingKeyPress = true;
            
            // First exit pointer lock if active
            if (document.pointerLockElement && document.exitPointerLock) {
                document.exitPointerLock();
            }
            
            // Update tracked mode
            currentMode = currentMode === 'first_person' ? 'third_person' : 'first_person';
            
            // Toggle FP cursor visibility
            document.querySelectorAll('.first-person-cursor').forEach(cursor => {
                cursor.style.display = currentMode === 'first_person' ? 'block' : 'none';
            });
            
            // Switch mode in each game instance
            games.forEach(game => {
                if (typeof game.switchPlayerMode === 'function') {
                    game.switchPlayerMode();
                }
            });
            
            // Reset the key press flag after a reasonable time
            setTimeout(() => {
                isProcessingKeyPress = false;
            }, 1000);
            return;
        }
        
        // Handle creating additional player (T key)
        if ((event.key === 't' || event.key === 'T') && !isProcessingKeyPress) {
            console.log('T key pressed, creating additional player');
            
            // Set the flag to prevent multiple rapid keypresses
            isProcessingKeyPress = true;
            
            // First exit pointer lock if active
            if (document.pointerLockElement && document.exitPointerLock) {
                document.exitPointerLock();
            }
            
            // Create additional player in each game instance
            games.forEach(game => {
                console.log('Creating additional player in game instance');
                if (typeof game.createAdditionalPlayer === 'function') {
                    const newPlayer = game.createAdditionalPlayer();
                    if (newPlayer) {
                        console.log('Additional player created successfully');
                        
                        // Position the new player slightly offset from existing players
                        const offset = (game.players.length - 1) * 2; // 2 units between each player
                        newPlayer.position.set(offset, 5, offset);
                        console.log('Positioned new player at:', offset, 5, offset);
                        
                        // Set this as the active player
                        game.activePlayer = newPlayer;
                        console.log('Set new player as active');
                        
                        // Update camera if needed
                        if (newPlayer.fpCamera) {
                            game.setActiveCamera(newPlayer.fpCamera);
                            console.log('Updated camera to new player');
                        }
                    } else {
                        console.error('Failed to create additional player');
                    }
                } else {
                    console.error('createAdditionalPlayer function not found on game instance');
                }
            });
            
            // Reset the key press flag after a reasonable time
            setTimeout(() => {
                isProcessingKeyPress = false;
            }, 1000);
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