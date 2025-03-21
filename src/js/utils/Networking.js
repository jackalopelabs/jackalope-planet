class Networking {
    constructor() {
        this.socket = null;
        this.isConnected = false;
        this.players = new Map();
        this.roomId = null;
        this.clientId = null;
        this.serverUrl = null;
        
        // Callbacks
        this.onConnect = () => {};
        this.onDisconnect = () => {};
        this.onPlayerJoin = () => {};
        this.onPlayerLeave = () => {};
        this.onPlayerUpdate = () => {};
        this.onGameStateUpdate = () => {};
        
        // Mock local server for testing
        this.isMockMode = true;
        this.mockPlayers = new Map();
        this.isReconnecting = false;
        this.reconnectAttempts = 0;
        this.reconnectMaxAttempts = 5;
        this.reconnectDelay = 2000;
    }
    
    /**
     * Initialize the networking connection
     * @param {string} serverUrl - WebSocket server URL
     * @param {string} roomId - Room identifier
     * @param {Object} callbacks - Callback functions
     */
    connect(serverUrl, roomId, callbacks = {}) {
        this.serverUrl = serverUrl;
        this.roomId = roomId;
        
        // Setup callbacks
        this.onConnect = callbacks.onConnect || (() => {});
        this.onDisconnect = callbacks.onDisconnect || (() => {});
        this.onPlayerJoin = callbacks.onPlayerJoin || (() => {});
        this.onPlayerLeave = callbacks.onPlayerLeave || (() => {});
        this.onPlayerUpdate = callbacks.onPlayerUpdate || (() => {});
        this.onGameStateUpdate = callbacks.onGameStateUpdate || (() => {});
        
        if (this.isMockMode) {
            // Mock a successful connection
            this.isConnected = true;
            this.clientId = `client_${Math.floor(Math.random() * 10000)}`;
            console.log(`[Networking] Mock connection successful. Client ID: ${this.clientId}`);
            this.onConnect();
            return;
        }
        
        // Real WebSocket connection
        try {
            this.socket = new WebSocket(serverUrl);
            this.setupSocketEvents();
            console.log(`[Networking] Connecting to ${serverUrl} (room: ${roomId})`);
        } catch (error) {
            console.error(`[Networking] Connection error: ${error.message}`);
            this.scheduleReconnect();
        }
    }
    
    setupSocketEvents() {
        if (this.isMockMode || !this.socket) return;
        
        this.socket.onopen = () => {
            this.isConnected = true;
            this.reconnectAttempts = 0;
            this.joinRoom(this.roomId);
            this.onConnect();
            console.log('[Networking] WebSocket connection established');
        };
        
        this.socket.onclose = (event) => {
            this.isConnected = false;
            console.log(`[Networking] WebSocket connection closed: ${event.code} ${event.reason}`);
            this.onDisconnect();
            
            // Attempt to reconnect if this wasn't a clean close
            if (event.code !== 1000 && event.code !== 1001) {
                this.scheduleReconnect();
            }
        };
        
        this.socket.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                this.handleMessage(message);
            } catch (error) {
                console.error('[Networking] Error handling message:', error);
            }
        };
        
        this.socket.onerror = (error) => {
            console.error('[Networking] WebSocket error:', error);
        };
    }
    
    /**
     * Schedule a reconnection attempt
     */
    scheduleReconnect() {
        if (this.isReconnecting || this.reconnectAttempts >= this.reconnectMaxAttempts) return;
        
        this.isReconnecting = true;
        this.reconnectAttempts++;
        
        console.log(`[Networking] Reconnecting in ${this.reconnectDelay}ms (attempt ${this.reconnectAttempts}/${this.reconnectMaxAttempts})`);
        
        setTimeout(() => {
            this.isReconnecting = false;
            this.connect(this.serverUrl, this.roomId, {
                onConnect: this.onConnect,
                onDisconnect: this.onDisconnect,
                onPlayerJoin: this.onPlayerJoin,
                onPlayerLeave: this.onPlayerLeave,
                onPlayerUpdate: this.onPlayerUpdate,
                onGameStateUpdate: this.onGameStateUpdate
            });
        }, this.reconnectDelay);
    }
    
    joinRoom(roomId) {
        if (!this.isConnected) return;
        
        if (this.isMockMode) {
            console.log(`[Networking] Mock joining room: ${roomId}`);
            return;
        }
        
        this.send({
            type: 'join_room',
            roomId: roomId,
            clientId: this.clientId
        });
    }
    
    handleMessage(message) {
        switch (message.type) {
            case 'client_id':
                this.clientId = message.clientId;
                console.log(`[Networking] Received client ID: ${this.clientId}`);
                break;
                
            case 'player_join':
                this.players.set(message.playerId, message.playerData);
                this.onPlayerJoin(message.playerId, message.playerData);
                console.log(`[Networking] Player joined: ${message.playerId}`);
                break;
                
            case 'player_leave':
                this.players.delete(message.playerId);
                this.onPlayerLeave(message.playerId);
                console.log(`[Networking] Player left: ${message.playerId}`);
                break;
                
            case 'player_update':
                this.players.set(message.playerId, message.playerData);
                this.onPlayerUpdate(message.playerId, message.playerData);
                // Don't log every update to avoid console spam
                break;
                
            case 'game_state':
                this.onGameStateUpdate(message.state);
                console.log('[Networking] Game state updated');
                break;
                
            default:
                console.warn('[Networking] Unknown message type:', message.type);
        }
    }
    
    /**
     * Send data to the server
     * @param {Object} data - Data to send
     */
    send(data) {
        if (this.isMockMode) {
            this.handleMockSend(data);
            return;
        }
        
        if (!this.isConnected || !this.socket) return;
        
        try {
            this.socket.send(JSON.stringify(data));
        } catch (error) {
            console.error('[Networking] Error sending data:', error);
        }
    }
    
    /**
     * Handle mock send for local testing
     * @param {Object} data - Data to send
     */
    handleMockSend(data) {
        if (data.type === 'player_update') {
            // Store the player data for mock synchronization
            const playerData = {
                ...data.playerState,
                lastUpdate: Date.now()
            };
            
            this.mockPlayers.set(data.playerState.id, playerData);
            
            // For mock mode, simulate the server broadcasting to other clients
            // by directly calling onPlayerUpdate for this player
            this.onPlayerUpdate(data.playerState.id, playerData);
        }
    }
    
    /**
     * Update player state
     * @param {Object} playerState - Player state data
     */
    updatePlayerState(playerState) {
        this.send({
            type: 'player_update',
            roomId: this.roomId,
            clientId: this.clientId,
            playerState: playerState
        });
    }
    
    /**
     * Disconnect from the server
     */
    disconnect() {
        if (this.isMockMode) {
            this.isConnected = false;
            this.players.clear();
            this.mockPlayers.clear();
            this.onDisconnect();
            console.log('[Networking] Mock disconnect');
            return;
        }
        
        if (this.socket) {
            try {
                this.socket.close(1000, 'Client disconnected');
            } catch (error) {
                console.error('[Networking] Error during disconnect:', error);
            }
            this.socket = null;
        }
        
        this.isConnected = false;
        this.players.clear();
    }
    
    /**
     * Create a player join message for local testing
     * @param {string} playerId - Player ID
     * @param {Object} playerData - Player data
     */
    mockPlayerJoin(playerId, playerData) {
        if (!this.isMockMode) return;
        
        const message = {
            type: 'player_join',
            playerId: playerId,
            playerData: playerData
        };
        
        this.handleMessage(message);
    }
    
    /**
     * Create a player leave message for local testing
     * @param {string} playerId - Player ID
     */
    mockPlayerLeave(playerId) {
        if (!this.isMockMode) return;
        
        const message = {
            type: 'player_leave',
            playerId: playerId
        };
        
        this.handleMessage(message);
    }
}

export { Networking }; 