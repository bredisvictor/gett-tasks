<?php

$include_menu_for_blogs_ids = [7];
$main_blog_id = get_main_site_id();
$current_blog_id = get_current_blog_id();

if (in_array($current_blog_id, $include_menu_for_blogs_ids)
    && $main_blog_id != $current_blog_id) {
    switch_to_blog($main_blog_id);
    wp_nav_menu();
    switch_to_blog($current_blog_id);
} else {
    wp_nav_menu();
}