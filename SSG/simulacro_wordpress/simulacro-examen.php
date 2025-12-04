<?php
/**
 * Plugin Name: Simulacro de Examen
 * Description: Muestrar un simulacro de examen.
 * Version: 1.0
 * Author: Eduardo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; 
}

function simulacro_menu() {
    add_menu_page(
        'Simulacro de examen', 
        'Simulacro',           
        'manage_options',      
        'simulacro',          
        'simulacro_page',      
        'dashicons-admin-tools', 
        1                       
    );
}

add_action( 'admin_menu', 'simulacro_menu' );


function simulacro_page() {
    echo '<h1>Bienvenido al Simulacro de Examen</h1>';
}

// Mostrar el aviso en el panel de administración
function simulacro_notice() {
    echo '<div class="notice notice-info"><p>El plugin está funcionando correctamente</p></div>';
}

add_action( 'admin_notices', 'simulacro_notice' );

?>
