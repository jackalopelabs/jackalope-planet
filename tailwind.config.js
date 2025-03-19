/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.js",
        "./*.php",
    ],
    theme: {
        extend: {
            colors: {
                'planet-purple': '#8844aa',
                'planet-green': '#228866',
                'jackalope-brown': '#bb8855',
                'antler-brown': '#664422',
                'space-black': '#050520',
            },
        },
    },
    plugins: [],
    // This prevents Tailwind from conflicting with other styles on the site
    corePlugins: {
        preflight: false,
    },
    // Add a prefix to all Tailwind classes to avoid conflicts
    prefix: 'jp-',
}; 