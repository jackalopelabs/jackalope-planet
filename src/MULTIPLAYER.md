# Jackalope Planet Multiplayer Implementation Plan

## Overview
This document outlines the implementation plan for adding multiplayer functionality to the Jackalope Planet game. The plan focuses on creating a system that allows:
1. Multiple players to join the same game world
2. Team-based gameplay (Jackalopes vs Mercs)
3. Testing via God Mode (admin toggle between character types)
4. Minimal infrastructure requirements for initial testing

## Implementation Tasklist

### Phase 1: Local Player Management & God Mode
- [ ] **Enhance Game Class for Multiple Players**
  - [ ] Refactor Game class to maintain a collection of player instances
  - [ ] Modify player creation logic to support multiple player types
  - [ ] Add player identification system (usernames/IDs)
  - [ ] Create team assignment functionality (Jackalope/Merc)

- [ ] **Implement God Mode for Testing**
  - [ ] Enhance the existing "T" key toggle to cycle between all spawned players
  - [ ] Update camera management to follow the active player
  - [ ] Add visual indicator of which player is currently active
  - [ ] Implement admin-only controls for spawning test players

- [ ] **Update Rendering and Physics**
  - [ ] Modify the render loop to handle multiple player models
  - [ ] Adjust collision detection for multiple entities
  - [ ] Ensure inactive players still update positions/animations
  - [ ] Optimize performance for multiple character models

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
- [ ] **Enhance User Interface**
  - [ ] Create player join/leave notifications
  - [ ] Add team selection UI
  - [ ] Implement player list/scoreboard
  - [ ] Display team affiliations and status

- [ ] **Team Mechanics**
  - [ ] Implement team-specific spawn points
  - [ ] Add team scoring system
  - [ ] Create team-based victory conditions
  - [ ] Balance team abilities (Jackalope mobility vs Merc firepower)

- [ ] **Game State Management**
  - [ ] Synchronize world state across clients
  - [ ] Handle late-joining players
  - [ ] Implement match start/end logic
  - [ ] Add admin controls for match management

### Phase 4: Testing & Optimization
- [ ] **Testing Infrastructure**
  - [ ] Create automated tests for network synchronization
  - [ ] Build network condition simulators (latency, packet loss)
  - [ ] Implement replay system for debugging
  - [ ] Add performance metrics collection

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
   - [ ] Refactor Game class to store player instances in an array
   - [ ] Add player ID and team assignment properties
   - [ ] Update the render loop to handle multiple players
   - [ ] Implement player switching via God Mode

2. **Add local multiplayer with keyboard controls:**
   - [ ] Create a second set of keyboard controls (IJKL instead of WASD)
   - [ ] Allow simultaneous control of two players on one keyboard
   - [ ] Test interaction between player types

3. **Setup simplest possible network test:**
   - [ ] Implement basic WebSocket connection in Networking.js
   - [ ] Create a minimal Node.js WebSocket server
   - [ ] Broadcast player positions between clients
   - [ ] Test with two browser windows

This plan enables rapid development of a testable multiplayer prototype while laying the foundation for more robust multiplayer functionality in later phases.
