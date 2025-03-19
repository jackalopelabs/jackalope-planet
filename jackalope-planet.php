<?php
/**
 * Plugin Name: Jackalope Planet
 * Plugin URI: https://bonsai.so
 * Description: A 3D interactive Jackalope Planet experience built with Three.js, usable via shortcode [jackalope-planet].
 * Version: 1.0.0
 * Author: Bonsai
 * Author URI: https://bonsai.so
 * Text Domain: jackalope-planet
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('JACKALOPE_PLANET_VERSION', '1.0.0');
define('JACKALOPE_PLANET_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('JACKALOPE_PLANET_PLUGIN_URL', plugin_dir_url(__FILE__));

/**
 * Main plugin class
 */
class Jackalope_Planet {
    /**
     * Constructor
     */
    public function __construct() {
        // Register shortcode
        add_shortcode('jackalope-planet', [$this, 'render_shortcode']);
        
        // Register activation hook
        register_activation_hook(__FILE__, [$this, 'activate']);
        
        // Register scripts and styles
        add_action('wp_enqueue_scripts', [$this, 'register_assets']);
    }
    
    /**
     * Plugin activation
     */
    public function activate() {
        // Nothing needed for activation
    }
    
    /**
     * Register scripts and styles
     */
    public function register_assets() {
        // Only register assets, they will be enqueued when shortcode is used
        wp_register_style(
            'jackalope-planet-style',
            JACKALOPE_PLANET_PLUGIN_URL . 'dist/style.css',
            [],
            JACKALOPE_PLANET_VERSION
        );
        
        wp_register_script(
            'jackalope-planet-script',
            JACKALOPE_PLANET_PLUGIN_URL . 'dist/jackalope-planet.js',
            [],
            JACKALOPE_PLANET_VERSION,
            true
        );
    }
    
    /**
     * Render the shortcode
     */
    public function render_shortcode($atts) {
        // Enqueue the required styles and scripts
        wp_enqueue_style('jackalope-planet-style');
        wp_enqueue_script('jackalope-planet-script');
        
        // Parse shortcode attributes
        $atts = shortcode_atts([
            'height' => '600px',
            'width' => '100%',
            'class' => '',
        ], $atts);
        
        // Generate a unique ID for this instance
        $container_id = 'jackalope-planet-' . wp_rand(1000, 9999);
        
        // Start output buffering
        ob_start();
        ?>
        <div class="jackalope-planet-container <?php echo esc_attr($atts['class']); ?>" style="height: <?php echo esc_attr($atts['height']); ?>; width: <?php echo esc_attr($atts['width']); ?>">
            <div id="<?php echo esc_attr($container_id); ?>" class="jackalope-planet-canvas-container" data-container-id="<?php echo esc_attr($container_id); ?>"></div>
            
            <!-- Controls hint -->
            <div class="jackalope-planet-controls-hint">
                <p>The scene rotates automatically to showcase the 3D Jackalope Planet</p>
            </div>
        </div>
        <?php
        // Return the buffered output
        return ob_get_clean();
    }
}

// Initialize the plugin
$jackalope_planet = new Jackalope_Planet(); 