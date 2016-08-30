<?php
/**
 * Functions and definitions for Divi Child Theme
 *
 * @link    https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package divi-child-theme
 */

/**
 * Enqueue Scripts and Styles
 */
function dct_enqueue() {
	wp_enqueue_style( 'divi-css', get_template_directory_uri() . '/style.css' );

	$dct_scripts = ( file_exists( get_stylesheet_directory_uri() . '/main.min.js' )
		? get_stylesheet_directory_uri() . '/main.min.js'
		: ( file_exists( get_stylesheet_directory_uri() . '/main.js' ) )
			? get_stylesheet_directory_uri() . '/main.js' : null );

	if ( ! is_null( $dct_scripts ) ) {
		wp_enqueue_script( 'dct_scripts',
		                   $dct_scripts,
		                   array( 'jquery' ),
		                   '1.0.0',
		                   true );
	}
}

add_action( 'wp_enqueue_scripts', 'dct_enqueue' );

// Add Editor Style.
add_editor_style();
