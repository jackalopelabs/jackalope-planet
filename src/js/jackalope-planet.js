import { Game } from './core/Game';
import '../css/jackalope-planet.css';

const JACKALOPE_VERSION = 'multiplayer-v1-MASON';
console.log(`%c 🎮 JACKALOPE PLANET: ${JACKALOPE_VERSION} LOADED 🎮`, 'background: #222; color: #bada55; font-size: 16px; padding: 10px;');
console.log('%c 🚀 MULTIPLAYER EDITION ACTIVE - CONTROLS:', 'color: #ff6700; font-size: 14px;');
console.log('%c ⌨️  G: Toggle God Mode | 1: Spawn Jackalope | 2: Spawn Merc | T: Switch Players', 'color: #00a2ff; font-size: 12px;');

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
    if (this.version.includes('multiplayer')) {
      console.log('Testing multiplayer features...');
      // Check for multiplayer features
      const game = this.games[0];
      if (game) {
        console.log('God Mode active:', game.isGodMode);
        console.log('Player count:', game.players.length);
        console.log('Active player:', game.player?.id);
        console.log('Players:', game.players.map(p => `${p.id} (${p.team})`));
      }
    }
    
    console.groupEnd();
    return 'Tests complete - check console for results';
  },
  
  /**
   * Spawn a test player
   * @param {string} team - 'jackalope' or 'merc'
   */
  spawnPlayer: function(team) {
    if (!this.games || !this.games[0]) {
      console.error('No game instance found');
      return;
    }
    
    const game = this.games[0];
    
    // Create a player of the specified team
    if (game.createNewPlayer && game.isGodMode) {
      const teamCount = game.players.filter(p => p.team === team).length;
      
      // Create a random position offset
      const offset = {
        x: (Math.random() - 0.5) * 10,
        y: 0,
        z: (Math.random() - 0.5) * 10
      };
      
      const player = game.createNewPlayer({
        team: team,
        id: `${team}_${teamCount + 1}`,
        isLocal: false,
        isActive: false
      });
      
      if (player && player.model) {
        player.model.position.set(
          player.model.position.x + offset.x,
          player.model.position.y + offset.y,
          player.model.position.z + offset.z
        );
        player.position.copy(player.model.position);
      }
      
      // Update player info overlay
      game.addPlayerInfoOverlay();
      
      console.log(`Spawned ${team} player. Total players: ${game.players.length}`);
      return player;
    } else {
      console.error('Cannot spawn player - God Mode is disabled or createNewPlayer not available');
      return null;
    }
  },
  
  /**
   * Toggle God Mode
   */
  toggleGodMode: function() {
    if (!this.games || !this.games[0]) {
      console.error('No game instance found');
      return;
    }
    
    const game = this.games[0];
    if (game.toggleGodMode) {
      game.toggleGodMode();
      console.log('God Mode:', game.isGodMode ? 'ON' : 'OFF');
      return game.isGodMode;
    }
    
    return false;
  }
};

// Initialize Jackalope Planet when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('MULTIPLAYER: Jackalope Planet initializing');
    
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
            
            // Initialize networking for this game
            initializeNetworking(game);
            
            // Add first-person cursor dot
            const fpCursor = document.createElement('div');
            fpCursor.className = 'first-person-cursor';
            fpCursor.id = `${containerId}-fp-cursor`;
            fpCursor.style.position = 'fixed';
            fpCursor.style.top = '50%';
            fpCursor.style.left = '50%';
            fpCursor.style.width = '4px';
            fpCursor.style.height = '4px';
            fpCursor.style.backgroundColor = 'rgba(255,255,255,0.8)';
            fpCursor.style.borderRadius = '50%';
            fpCursor.style.transform = 'translate(-50%, -50%)';
            fpCursor.style.zIndex = '9999';
            fpCursor.style.pointerEvents = 'none';
            fpCursor.style.display = 'none';
            document.body.appendChild(fpCursor);
            
            // Add player info overlay
            game.addPlayerInfoOverlay();
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
            <div>Press <strong>T</strong> to toggle players</div>
            <div>Press <strong>G</strong> to toggle God Mode</div>
            <div>Press <strong>1</strong> to spawn Jackalope (in God Mode)</div>
            <div>Press <strong>2</strong> to spawn Merc (in God Mode)</div>
            <div>Press <strong>P</strong> to show player info</div>
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
    
    // Global key handler for view toggle (T key)
    window.addEventListener('keydown', (event) => {
        if ((event.key === 't' || event.key === 'T') && !isProcessingKeyPress) {
            console.log('Global T key pressed, switching player mode');
            
            // Set the flag to prevent multiple rapid keypresses
            isProcessingKeyPress = true;
            
            // First exit pointer lock if active
            if (document.pointerLockElement && document.exitPointerLock) {
                document.exitPointerLock();
            }
            
            // Wait a brief moment to ensure pointer lock is released
            setTimeout(() => {
                games.forEach(game => {
                    if (typeof game.switchPlayerMode === 'function') {
                        const newMode = game.switchPlayerMode();
                        console.log(`Game switched to ${newMode} mode`);
                        
                        // Update current tracked mode if this is the active game
                        currentMode = game.gameMode;
                    }
                });
                
                // Toggle FP cursor visibility (based on new current mode)
                document.querySelectorAll('.first-person-cursor').forEach(cursor => {
                    cursor.style.display = currentMode === 'first_person' ? 'block' : 'none';
                });
                
                // Reset the key press flag after a reasonable time
                setTimeout(() => {
                    isProcessingKeyPress = false;
                }, 1000);
            }, 100);
        }
        // G key to toggle God Mode
        else if ((event.key === 'g' || event.key === 'G') && !isProcessingKeyPress) {
            isProcessingKeyPress = true;
            games.forEach(game => {
                if (typeof game.toggleGodMode === 'function') {
                    game.toggleGodMode();
                }
            });
            setTimeout(() => { isProcessingKeyPress = false; }, 500);
        }
        // 1 key to spawn a Jackalope (in God Mode)
        else if (event.key === '1' && !isProcessingKeyPress) {
            isProcessingKeyPress = true;
            games.forEach(game => {
                if (game.isGodMode && game.inputManager) {
                    game.inputManager.spawnPlayerForTeam('jackalope');
                }
            });
            setTimeout(() => { isProcessingKeyPress = false; }, 500);
        }
        // 2 key to spawn a Merc (in God Mode)
        else if (event.key === '2' && !isProcessingKeyPress) {
            isProcessingKeyPress = true;
            games.forEach(game => {
                if (game.isGodMode && game.inputManager) {
                    game.inputManager.spawnPlayerForTeam('merc');
                }
            });
            setTimeout(() => { isProcessingKeyPress = false; }, 500);
        }
        // P key to show player info
        else if ((event.key === 'p' || event.key === 'P') && !isProcessingKeyPress) {
            isProcessingKeyPress = true;
            games.forEach(game => {
                game.addPlayerInfoOverlay();
            });
            setTimeout(() => { isProcessingKeyPress = false; }, 500);
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

/**
 * Initialize networking for a game instance
 * @param {Game} game - Game instance
 */
function initializeNetworking(game) {
    if (!game || !game.networking) {
        console.error('Cannot initialize networking: game or networking component not available');
        return;
    }
    
    // For now, we'll use a mock mode for local testing
    const serverUrl = 'wss://localhost:8080'; // This won't actually be used in mock mode
    const roomId = 'jackalope-game-1';
    
    // Set up callbacks for network events
    const callbacks = {
        onConnect: () => {
            console.log('Connected to game server');
            game.isMultiplayerEnabled = true;
        },
        
        onDisconnect: () => {
            console.log('Disconnected from game server');
            game.isMultiplayerEnabled = false;
        },
        
        onPlayerJoin: (playerId, playerData) => {
            console.log(`Player ${playerId} joined (team: ${playerData.team})`);
            
            // Check if player already exists
            if (game.getPlayerById(playerId)) {
                console.log(`Player ${playerId} already exists, skipping creation`);
                return;
            }
            
            // Create a new player instance for the remote player
            game.createNewPlayer({
                id: playerId,
                team: playerData.team,
                isLocal: false,
                isActive: false
            });
            
            // Update player info overlay
            game.addPlayerInfoOverlay();
        },
        
        onPlayerLeave: (playerId) => {
            console.log(`Player ${playerId} left`);
            
            // Remove the player if they exist
            game.removePlayer(playerId);
            
            // Update player info overlay
            game.addPlayerInfoOverlay();
        },
        
        onPlayerUpdate: (playerId, playerData) => {
            // Find the player
            const player = game.getPlayerById(playerId);
            
            // If we have the player, update their state
            if (player && player.setNetworkState) {
                player.setNetworkState(playerData);
            }
        }
    };
    
    // Connect to the server (mock server in this case)
    game.networking.connect(serverUrl, roomId, callbacks);
    
    // In real implementation, we'd set up WebSocket server connection here
    console.log('Networking initialized in mock mode');
} 