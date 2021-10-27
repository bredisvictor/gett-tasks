<?php

function load_carousel_style()
{
    wp_enqueue_style('carousel-style', get_template_directory_uri() . '/assets/css/carousel.css”)', [], '1.0', 'all');
}

function load_carousel_script()
{
    wp_enqueue_script('carousel-script', get_template_directory_uri() . '/assets/js/carousel.js”)', [], '1.0', true);
}

add_action('wp_enqueue_scripts', 'load_carousel_style');
add_action('wp_enqueue_scripts', 'load_carousel_script');
