<?php
function comandat_enqueue_scripts() {
    // Tailwind CSS
    wp_enqueue_script('tailwindcss', 'https://cdn.tailwindcss.com?plugins=forms,container-queries', array(), null, false);

    // Material Icons
    wp_enqueue_style('material-icons', 'https://fonts.googleapis.com/css2?family=Material+Icons', array(), null);

    // Inter Font
    wp_enqueue_style('inter-font', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', array(), null);

    // Anime.js
    wp_enqueue_script('animejs', 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js', array(), null, false);

    // Splitting.js
    wp_enqueue_script('splittingjs', 'https://unpkg.com/splitting@1.0.6/dist/splitting.js', array(), null, false);
    wp_enqueue_style('splittingcss', 'https://unpkg.com/splitting@1.0.6/dist/splitting.css', array(), null);

    // Theme Styles
    wp_enqueue_style('main-style', get_stylesheet_uri());

    // Main JS (we might need to adapt this)
    // wp_enqueue_script('main-js', get_template_directory_uri() . '/js/main.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'comandat_enqueue_scripts');

function comandat_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'comandat_setup');
?>
