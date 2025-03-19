# Jackalope Planet

A 3D interactive Jackalope Planet WordPress plugin built with Three.js.

## Description

The Jackalope Planet plugin adds a beautiful, interactive 3D planet with a jackalope character to your WordPress site. Using modern web technologies including Three.js, it creates an engaging 3D experience that works directly in the browser without any additional plugins.

## Features

- Interactive 3D planet with mountains and stars
- Animated jackalope character that circles the planet
- Camera rotation for a dynamic viewing experience
- Responsive design that adapts to different screen sizes
- Easy integration via shortcode

## Installation

### Via Composer

```bash
composer require jackalopelabs/jackalope-planet
```

Or add to your composer.json:

```json
"require": {
    "jackalopelabs/jackalope-planet": "dev-main"
}
```

### Manual Installation

1. Download the latest release from the [GitHub repository](https://github.com/jackalopelabs/jackalope-planet)
2. Upload the entire plugin folder to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress

## Usage

Use the shortcode `[jackalope-planet]` in any post or page to display the 3D Jackalope Planet.

### Shortcode Options

```
[jackalope-planet height="500px" width="100%" class="my-custom-class"]
```

- `height`: Set the height of the container (default: "600px")
- `width`: Set the width of the container (default: "100%")
- `class`: Add custom CSS classes to the container

## Development

### Prerequisites

- Node.js and npm

### Setup

1. Clone the repository
2. Navigate to the plugin directory
3. Run `npm install` to install dependencies
4. Run `npm run build` to build the assets

### Scripts

- `npm run dev`: Start development server with hot reloading
- `npm run build`: Build production assets

## Credits

- Three.js for 3D rendering
- Vite for build tooling

## License

MIT 