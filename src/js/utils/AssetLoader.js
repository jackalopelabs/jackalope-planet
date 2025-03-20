/**
 * AssetLoader.js - Utility for loading and managing assets
 */

/**
 * Get the absolute path to an asset in the plugin
 * @param {string} relativePath - The relative path within the plugin
 * @returns {string} Full URL to the asset
 */
export function getAssetPath(relativePath) {
    // Base plugin URL - this gets the WordPress plugin URL dynamically
    const pluginUrl = window.jackalopePlanetSettings?.pluginUrl || '/wp-content/plugins/jackalope-planet';
    
    // Remove leading slash if present to avoid double slashes
    const cleanPath = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;
    
    // Debug info
    console.log('[ASSET] Settings object available:', window.jackalopePlanetSettings ? 'YES' : 'NO');
    console.log('[ASSET] Plugin URL from settings:', window.jackalopePlanetSettings?.pluginUrl || 'FALLBACK URL USED');
    console.log('[ASSET] Original relativePath:', relativePath);
    console.log('[ASSET] Cleaned path:', cleanPath);

    // Build the final path
    const finalPath = `${pluginUrl}/${cleanPath}`;
    console.log('[ASSET] Final resolved path:', finalPath);
    
    return finalPath;
}

/**
 * Get a model path directly from the settings
 * @param {string} modelName - The name of the model (e.g., 'flamethrower')
 * @returns {string} The direct URL to the model
 */
export function getModelPath(modelName) {
    // Check if we have explicit model paths
    if (window.jackalopePlanetSettings?.modelPaths && 
        window.jackalopePlanetSettings.modelPaths[modelName]) {
        const path = window.jackalopePlanetSettings.modelPaths[modelName];
        console.log(`[ASSET] Using explicit model path for "${modelName}":`, path);
        return path;
    }
    
    // Fallback to assets directory
    if (window.jackalopePlanetSettings?.assetsUrl) {
        const path = `${window.jackalopePlanetSettings.assetsUrl}models/weapons/${modelName}.glb`;
        console.log(`[ASSET] Using assets URL for "${modelName}":`, path);
        return path;
    }
    
    // Final fallback
    const fallbackPath = getAssetPath(`assets/models/weapons/${modelName}.glb`);
    console.log(`[ASSET] Using fallback path for "${modelName}":`, fallbackPath);
    return fallbackPath;
}

/**
 * Check if an asset file exists at the given path
 * @param {string} path - The path to check
 * @returns {Promise<boolean>} - Promise resolving to true if file exists
 */
export function checkAssetExists(path) {
    return fetch(path, { method: 'HEAD' })
        .then(response => {
            const exists = response.ok;
            console.log(`[ASSET] File ${exists ? 'EXISTS' : 'NOT FOUND'} at path:`, path);
            return exists;
        })
        .catch(error => {
            console.error('[ASSET] Error checking if file exists:', error);
            return false;
        });
}

/**
 * Preload a list of assets (models, textures, etc.)
 * @param {Array} assetList - List of assets to preload
 * @param {Function} progressCallback - Optional callback for loading progress
 * @returns {Promise} Promise that resolves when all assets are loaded
 */
export function preloadAssets(assetList, progressCallback = null) {
    // Implementation would depend on asset types
    // For now, just return a resolved promise
    return Promise.resolve();
} 