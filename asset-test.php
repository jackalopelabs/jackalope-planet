<?php
// Simple test file to check asset paths

// Exit if accessed directly
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__) . '/');
}

// Define plugin constants
define('JACKALOPE_PLANET_VERSION', '1.0.0');
define('JACKALOPE_PLANET_PLUGIN_DIR', dirname(__FILE__) . '/');
define('JACKALOPE_PLANET_PLUGIN_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/wp-content/plugins/jackalope-planet/');

// Check if model file exists
$model_path = JACKALOPE_PLANET_PLUGIN_DIR . 'dist/models/weapons/flamethrower.glb';
$model_url = JACKALOPE_PLANET_PLUGIN_URL . 'dist/models/weapons/flamethrower.glb';

echo "<h1>Asset Path Testing</h1>";
echo "<p>Plugin directory: " . JACKALOPE_PLANET_PLUGIN_DIR . "</p>";
echo "<p>Plugin URL: " . JACKALOPE_PLANET_PLUGIN_URL . "</p>";
echo "<p>Model physical path: " . $model_path . "</p>";
echo "<p>Model URL: " . $model_url . "</p>";
echo "<p>Model file exists: " . (file_exists($model_path) ? 'YES' : 'NO') . "</p>";

// Test for other possible locations
$potential_paths = [
    'dist/models/weapons/flamethrower.glb',
    'dist/assets/models/weapons/flamethrower.glb',
    'src/js/assets/models/weapons/flamethrower.glb',
    'src/assets/models/weapons/flamethrower.glb',
    'flamethrower.glb'
];

echo "<h2>Checking Potential Paths</h2>";
echo "<ul>";
foreach ($potential_paths as $path) {
    $full_path = JACKALOPE_PLANET_PLUGIN_DIR . $path;
    echo "<li>$path: " . (file_exists($full_path) ? 'EXISTS' : 'NOT FOUND') . "</li>";
}
echo "</ul>";

// Display all GLB files in the plugin directory
echo "<h2>All GLB Files in Plugin</h2>";
$result = shell_exec('find ' . escapeshellarg(JACKALOPE_PLANET_PLUGIN_DIR) . ' -name "*.glb" -type f');
echo "<pre>";
echo $result;
echo "</pre>"; 