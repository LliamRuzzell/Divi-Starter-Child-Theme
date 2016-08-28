<?php
/**
 * Functions and definitions for divi-child-theme
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package divi-child-theme
 */

/**
 * Enqueue Scripts and Styles
 */
function dct_enqueue() {
	wp_enqueue_style( 'divi-css', get_template_directory_uri() . '/style.css' );
}

add_action( 'wp_enqueue_scripts', 'dct_enqueue' );
