import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { dirname } from 'path';

// Create asset copy function
const copyAssets = () => {
    return {
        name: 'copy-assets',
        closeBundle: () => {
            console.log('Copying model files to dist folder...');
            
            // Source and destination paths
            const modelSrc = './src/js/assets/models/weapons/flamethrower.glb';
            const modelDest = './dist/models/weapons/flamethrower.glb';
            
            // Create the destination directory if it doesn't exist
            const destDir = dirname(modelDest);
            if (!existsSync(destDir)) {
                mkdirSync(destDir, { recursive: true });
            }
            
            // Copy the file
            try {
                copyFileSync(modelSrc, modelDest);
                console.log(`Successfully copied ${modelSrc} to ${modelDest}`);
            } catch (error) {
                console.error(`Error copying file: ${error.message}`);
            }
        }
    };
};

export default defineConfig({
    plugins: [
        tailwindcss(),
        copyAssets()
    ],
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                'jackalope-planet': resolve(__dirname, 'src/js/jackalope-planet.js'),
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].[hash].js',
                assetFileNames: '[name].[ext]',
            },
        },
        cssCodeSplit: false,
        // Don't inline any assets as base64
        assetsInlineLimit: 0,
    },
    css: {
        extract: 'jackalope-planet.css',
    },
    // Ensure .glb files are processed correctly
    assetsInclude: ['**/*.glb'],
}); 