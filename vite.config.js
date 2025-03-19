import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
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
    },
    css: {
        extract: 'jackalope-planet.css',
    },
}); 