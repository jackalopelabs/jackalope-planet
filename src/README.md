# Jackalope Planet Game Architecture

This document explains the modular architecture used in the Jackalope Planet game.

## Directory Structure

```
src/
├── js/
│   ├── core/                 # Core game functionality
│   │   ├── Game.js           # Main game controller
│   │   ├── InputManager.js   # Handles user input
│   │   └── AssetLoader.js    # Manages asset loading
│   ├── players/              # Player-related code
│   │   ├── Player.js         # Base player class
│   │   ├── BunnyPlayer.js    # Third-person bunny implementation
│   │   └── HumanPlayer.js    # First-person human implementation
│   ├── world/                # World and environment
│   │   ├── World.js          # World management
│   │   └── Entities.js       # Non-player objects
│   ├── utils/                # Utility functions
│   │   ├── Physics.js        # Physics calculations
│   │   └── Networking.js     # Multiplayer functionality
│   └── jackalope-planet.js   # Entry point
└── css/
    └── jackalope-planet.css  # Game styles
```

## Architecture Overview

The game uses a modular architecture based on the following principles:

1. **Clean separation of concerns**: Each component handles a specific aspect of the game.
2. **Inheritance for player types**: Common player functionality is in the base class, with specific implementations in derived classes.
3. **Centralized game management**: The Game class coordinates all other components.
4. **Extensibility**: The structure allows for easy addition of new features, player types, or gameplay mechanics.

## Components

### Core

- **Game**: The main controller that initializes and coordinates all other components.
- **InputManager**: Handles user input (keyboard, mouse) and maintains input state.
- **AssetLoader**: Manages loading and caching of textures, models, and other assets.

### Players

- **Player**: Base class with common functionality for all player types.
- **BunnyPlayer**: Third-person player implementation for bunny characters.
- **HumanPlayer**: First-person player implementation for human characters.

### World

- **World**: Manages the game environment, terrain, and physics.
- **Entities**: Handles non-player entities in the world (obstacles, collectibles, etc.).

### Utils

- **Physics**: Provides physics calculations and collision detection.
- **Networking**: Foundation for multiplayer functionality (to be implemented).

## Future Expansion

This architecture is designed to be easily expandable:

1. New player types can be added by creating new classes that extend the Player base class.
2. New game mechanics can be added to appropriate modules without affecting the rest of the system.
3. Multiplayer functionality can be implemented by expanding the Networking utility.
4. The game can be enhanced with more complex physics, AI, and world-building features.

## Asymmetrical Gameplay

The current structure supports asymmetrical gameplay where:

- Bunny players use third-person controls
- Human players use first-person controls

Both player types share the same world and can interact, but have different perspectives and capabilities. 