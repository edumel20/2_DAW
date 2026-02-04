<?php
/*
Plugin Name: Shortcodes Usuarios WP
Description: Plugin base para crear shortcodes relacionados con la tabla de usuarios de Wordpress.
Author: Eduardo
Version: 1.0
*/

// Verifica si el archivo se está ejecutando dentro de WordPress para evitar acceso directo
if (!defined('ABSPATH')){
    exit;
}

// Función para obtener el total de usuarios registrados en WordPress
function ere_sc_total_usuarios() {
    global $wpdb; // Accede al objeto de base de datos global de WordPress

    // Consulta para contar el número total de usuarios en la tabla wp_users
    $total = $wpdb->get_var(
        "SELECT COUNT(*)
         FROM {$wpdb->users}"
    );

    // Si la consulta falla, devuelve un mensaje de error
    if ($total == null){
        return 'No se pudo obtener el total de usuarios.';
    }

    // Devuelve el mensaje con el total de usuarios
    return 'Total de usuarios en Wordpress: ' . intval($total);
}

// Función para listar usuarios en una tabla HTML
function ere_sc_listar_usuarios_tabla() {
    global $wpdb; // Accede al objeto de base de datos global de WordPress

    // Consulta para obtener usuarios ordenados por login
    $usuarios = $wpdb->get_results(
        "SELECT user_login, user_email, display_name
         FROM {$wpdb->users}
         ORDER BY user_login ASC"
    );

    // Si no hay usuarios, devuelve mensaje de error
    if (empty($usuarios)) {
        return 'No hay usuarios registrados.';
    }

    // Construye la tabla HTML con clases de WordPress
    $out = '<table class="widefat striped">';
    $out .= '<thead><tr>';
    $out .= '<th>Login</th>';
    $out .= '<th>Email</th>';
    $out .= '<th>Nombre</th>';
    $out .= '</tr></thead>';

    $out .= '<tbody>';

    // Itera sobre cada usuario y añade fila a la tabla
    foreach ($usuarios as $u) {
        $out .= '<tr>';
        $out .= '<td>' . esc_html($u->user_login) . '</td>';
        $out .= '<td>' . esc_html($u->user_email) . '</td>';
        $out .= '<td>' . esc_html($u->display_name) . '</td>';
        $out .= '</tr>';
    }

    $out .= '</tbody></table>';
    return $out; // Devuelve la tabla completa
}

// Función para obtener el total de entradas (posts) y páginas en WordPress
function ere_sc_total_posts_pages() {
    global $wpdb; // Accede al objeto de base de datos global de WordPress

    // Consulta para contar posts donde el tipo es 'post' o 'page'
    $total = $wpdb->get_var (
        "SELECT COUNT(*)
         FROM {$wpdb->posts}
         WHERE post_type = 'post' OR post_type = 'page'"
    );

    // Si la consulta falla, devuelve un mensaje de error
    if ($total === null) {
        return 'No hay ninguna entrada ni ninguna página creada.';
    }

    // Devuelve el mensaje con el total de entradas y páginas
    return 'Total de entradas y páginas: ' . intval($total);
}

// Función para obtener el último usuario registrado en WordPress
function ere_sc_ultimo_usuario() {
    global $wpdb; // Accede al objeto de base de datos global de WordPress

    // Consulta para obtener el usuario más reciente por fecha de registro
    $u = $wpdb->get_row(
        "SELECT user_login, user_email
         FROM {$wpdb->users}
         ORDER BY user_registered DESC
         LIMIT 1"
    );

    // Si no hay usuarios, devuelve mensaje de error
    if (!$u) {
        return 'No hay usuarios registrados.';
    }

    // Devuelve el mensaje con el último usuario
    return 'Último usuario: ' . esc_html($u->user_login) . ' (' . esc_html($u->user_email) . ')';
}

add_shortcode('wp_total_usuarios', 'ere_sc_total_usuarios');
add_shortcode('wp_tabla_usuarios', 'ere_sc_total_listar_usuarios_tabla');
add_shortcode('wp_total_usuarios', 'ere_sc_total_posts_pages');
add_shortcode('wp_ultimo_usuario', 'ere_sc_ultimo_usuario');