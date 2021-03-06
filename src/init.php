<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since 	1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function call_to_action_chicago_cgb_block_assets() {
	// Styles.
	wp_enqueue_style(
		'call_to_action_chicago-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function call_to_action_chicago_cgb_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'call_to_action_chicago_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function call_to_action_chicago_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'call_to_action_chicago-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ) // Dependencies, defined above.
		// filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ) // Version: filemtime — Gets file modification time.
	);

	// Styles.
	wp_enqueue_style(
		'call_to_action_chicago-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function call_to_action_chicago_cgb_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'call_to_action_chicago_cgb_editor_assets' );


function mytheme_setup_theme_supported_features() {

	add_theme_support( 'editor-color-palette',
		array(
			'name' => 'Lime Green',
			'color' => '#76D13A',
			),
		array(
			'name' => 'Off Black',
			'color' => '#1E1F1D',
		),
		array(
			'name' => 'Dark Gray',
			'color' => '#999999',
		),
		array(
			'name' => 'Light Gray',
			'color' => '#D9D9D9',
		),
		array(
			'name' => 'Charcoal',
			'color' => '#313131',
		)
	);
}


add_action( 'after_setup_theme', 'mytheme_setup_theme_supported_features' );
