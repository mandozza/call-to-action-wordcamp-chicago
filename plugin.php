<?php
/**
 * Plugin Name: Wordcamp Chicago Call to Action Plugin
 * Plugin URI: http://www.jeremyjosey.com
 * Description: A call to action block for Gutenburg Project.
 * Author: jeremy josey
 * Author URI: https://jeremyjosey.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package NCC-CTA
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
