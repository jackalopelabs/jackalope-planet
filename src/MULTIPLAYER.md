# Jackalope Planet Multiplayer Implementation Plan

## Overview
This document outlines the implementation plan for adding multiplayer functionality to the Jackalope Planet game. The plan focuses on creating a system that allows:
1. Multiple players to join the same game world
2. Team-based gameplay (Jackalopes vs Mercs)
3. Testing via God Mode (admin toggle between character types)
4. Minimal infrastructure requirements for initial testing

## Implementation Tasklist

### Phase 1: Local Player Management & God Mode
- [x] **Enhance Game Class for Multiple Players**
  - [x] Refactor Game class to maintain a collection of player instances
  - [x] Modify player creation logic to support multiple player types
  - [x] Add player identification system (usernames/IDs)
  - [x] Create team assignment functionality (Jackalope/Merc)

- [x] **Implement God Mode for Testing**
  - [x] Enhance the existing "T" key toggle to cycle between all spawned players
  - [x] Update camera management to follow the active player
  - [x] Add visual indicator of which player is currently active
  - [x] Implement admin-only controls for spawning test players

- [x] **Update Rendering and Physics**
  - [x] Modify the render loop to handle multiple player models
  - [x] Adjust collision detection for multiple entities
  - [x] Ensure inactive players still update positions/animations
  - [x] Optimize performance for multiple character models

### Phase 2: Network Infrastructure
- [ ] **Complete Networking.js Implementation**
  - [ ] Implement WebSocket connection handling
  - [ ] Create data serialization/deserialization for player states
  - [ ] Setup room/session management
  - [ ] Add reconnection and error handling

- [ ] **Create Simple WebSocket Server**
  - [ ] Build lightweight Node.js WebSocket server
  - [ ] Implement player session tracking
  - [ ] Add broadcast functionality for game state updates
  - [ ] Create room management for multiple game instances

- [ ] **Player Synchronization**
  - [ ] Implement position/rotation synchronization
  - [ ] Add interpolation for smooth movement
  - [ ] Synchronize player actions (shooting, jumping)
  - [ ] Handle connection latency and packet loss

### Phase 3: Multiplayer UI and Game Logic
- [x] **Enhance User Interface**
  - [x] Create player join/leave notifications
  - [x] Add team selection UI
  - [x] Implement player list/scoreboard
  - [x] Display team affiliations and status

- [ ] **Team Mechanics**
  - [x] Implement team-specific spawn points
  - [ ] Add team scoring system
  - [ ] Create team-based victory conditions
  - [ ] Balance team abilities (Jackalope mobility vs Merc firepower)

- [ ] **Game State Management**
  - [ ] Synchronize world state across clients
  - [ ] Handle late-joining players
  - [ ] Implement match start/end logic
  - [ ] Add admin controls for match management

### Phase 4: Testing & Optimization
- [x] **Testing Infrastructure**
  - [x] Create automated tests for network synchronization
  - [ ] Build network condition simulators (latency, packet loss)
  - [ ] Implement replay system for debugging
  - [x] Add performance metrics collection

- [ ] **Optimization**
  - [ ] Implement network message compression
  - [ ] Add level-of-detail for distant players
  - [ ] Optimize update frequency based on distance/importance
  - [ ] Create bandwidth usage monitoring

- [ ] **Browser Testing**
  - [ ] Test multiple simultaneous connections
  - [ ] Verify cross-browser compatibility
  - [ ] Test on various network conditions
  - [ ] Ensure mobile device compatibility if applicable

## Immediate Implementation Steps

For immediate testing with minimal infrastructure:

1. **First, modify Game.js to support multiple player instances:**
   - [x] Refactor Game class to store player instances in an array
   - [x] Add player ID and team assignment properties
   - [x] Update the render loop to handle multiple players
   - [x] Implement player switching via God Mode

2. **Add local multiplayer with keyboard controls:**
   - [x] Create a second set of keyboard controls (IJKL instead of WASD)
   - [x] Allow simultaneous control of two players on one keyboard
   - [x] Test interaction between player types

3. **Setup simplest possible network test:**
   - [ ] Implement basic WebSocket connection in Networking.js
   - [ ] Create a minimal Node.js WebSocket server
   - [ ] Broadcast player positions between clients
   - [ ] Test with two browser windows

This plan enables rapid development of a testable multiplayer prototype while laying the foundation for more robust multiplayer functionality in later phases.

## Known Issues and Fixes

### Merc Players Not Responding to Input

**Issue Description:**
After spawning a Merc player using God Mode (press G to enable, then 2 to spawn), the player may not respond to input controls. This happens because the `isLocal` and `isActive` flags are incorrectly set to `false` when creating the player.

**Debug Steps:**
1. Press Shift+D during gameplay to open the diagnostic overlay
2. Look for player state mismatches in the overlay or console

**Visible Symptoms:**
- Newly spawned Merc player doesn't move with WASD keys
- Console shows: `Game: Creating new player with options: {team: 'merc', id: 'merc_2', isLocal: false, isActive: false}`
- Switching to the player with T key may work, but direct spawning doesn't activate the player

**Fix Implemented:**
We've implemented a comprehensive set of fixes to address this issue:

1. Modified `Player.js` constructor to:
   - Add explicit type checking for boolean/string conversion of options
   - Force `isLocal=true` and `isActive=true` for any player with ID starting with 'merc_'
   - Add detailed logging of player initialization

2. Enhanced `InputManager.spawnPlayerForTeam` to:
   - Create a clean copy of options with explicit boolean values
   - Use `Object.defineProperty` to prevent options from being changed
   - Force-set the active player after creation
   - Added delayed verification of player state

3. Fixed `Game.createNewPlayer` to:
   - Preserve option values during object spread/merge
   - Use direct property access instead of destructuring
   - Add explicit overrides for Merc team players

4. Added enhanced diagnostics:
   - Debug overlay toggle with Shift+D
   - Comprehensive `diagnosePlayerState` function to identify and fix state mismatches
   - Game loop verification to ensure proper player state

**How to Force-Fix During Development:**
If you still encounter this issue:
1. Press Shift+D to run comprehensive diagnostics with auto-fix
2. This will show a diagnostic overlay and attempt to fix any player state issues
3. The overlay shows active/local status of all players and their current input state

For developers: When adding new features that affect player creation or activation, ensure proper handling of the `isLocal` and `isActive` flags, especially for team-specific players.
