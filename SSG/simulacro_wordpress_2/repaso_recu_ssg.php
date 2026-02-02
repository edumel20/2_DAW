<?php
/*
Plugin Name: Shortcodes Usuarios WP
Description: Plugin base para crear shortcodes relacionados con la tabla de usuarios de Wordpress.
Author: Eduardo
Version: 1.0
*/

if (!defined('ABSPATH')){
    exit;
}

function ere_sc_total_usuarios() {
    global $wpdb;

    $total = $wpdb->get_var(
        "SELECT COUNT(*)
         FROM {$wpdb->users}"
    );

    if ($total == null){
        return 'No se pudo obtener el total de usuarios.';
    }

    return 'Total de usuarios en Wordpress: ' . intval($total);
}

function ere_sc_listar_usuarios_tabla() {
    global $wpdb;

    $usuarios = $wpdb->get_results(
        "SELECT user_login, user_email, display_name
         FROM {$wpdb->users}
         ORDER BY user_login ASC"
    );

    if (empty($usuarios)) {
        return 'No hay usuarios registrados.';
    }

    $out = '<table class="widefat striped">';
    $out = '<thead><tr>';
    $out = '<th>Login<th>';
    $out = '<th>Email<th>';
    $out = '<th>Nombre<th>';
    $out = '</tr></thead>';

    $out = '<tbody>';

    foreach ($usuarios as $u) {
        $out .= '<tr>';
        $out .= '<td>' . esc_html($u->user_login) . '</td>';
        $out .= '<td>' . esc_html($u->user_email) . '</td>';
        $out .= '<td>' . esc_html($u->display_name) . '</td>';
        $out .= '</tr>';
    }

    $out .= '</tbody></table>';
    return $out;
}

function ere_sc_total_posts_pages() {
    global $wpdb;

    $total = $wpdb->get_var (
        "SELECT COUNT(*)
         FROM {$wpdb->posts}
         WHERE post_type = 'post' OR 'post_type = 'page'"
    );

    if ($total === null) {
        return 'No hay ninguna entrada ni ninguna página creada.';
    }

    return 'Total de entradas y páginas: ' . intval($total);
}

function ere_sc_ultimo_usuario() {
    global $wpdb;

    $u = $wpdb->get_row(
        "SELECT user_login, user_email
         FROM {$wpdb->users}
         ORDER BY user_registered DESC
         LIMIT 1"
    );

    if (!$u) {
        return 'No hay usuarios registrados.';
    }

    return 'Último usuario: ' . esc_html($u->user_login) . ' (' . esc_html($u->user_email) . ')';
}

add_shortcode('wp_total_usuarios', 'ere_sc_total_usuarios');
add_shortcode('wp_tabla_usuarios', 'ere_sc_total_listar_usuarios_tabla');
add_shortcode('wp_total_usuarios', 'ere_sc_total_posts_pages');
add_shortcode('wp_ultimo_usuario', 'ere_sc_ultimo_usuario');