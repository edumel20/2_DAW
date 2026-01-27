# Contenido Simulacro SSG 2

```php
<?php
/*
Plugin Name: ERP Clientes Editar
Description: Extensiones de clientes para WP ERP (Clientes)
Version: 1.0
Author: Eduardo
*/

if (!defined('ABSPATH')) {
    exit;
}

add_action('admin_menu', 'perp_crear_menu');

function perp_crear_menu() {
    add_menu_page(
        'Clientes ERP',
        'manage_options',
        'dashicons-groups',
        'perp-clientes',
        'perp_pagina',
        26
    );
}

function perp_pagina_clientes(){
   echo '<h1>Plugin Clientes ERP activo</h1>';

   global $wpdb;
   
   $tabla = $wpdb->prefix . 'erp_peoples';
   
   $clientes = $wpdb->get_results(" 
        SELECT id, first_name, last_name, email, phone, life_stage
        FROM {$tabla}
        WHERE life_stage != ''
    ");
   
   echo '<div class="wrap">';
   echo '<table class="widefat striped">';
   echo '<thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Estado</th>
            </tr>
          </thead>';
   echo '<tbody>';
   
   if (empty($clientes)) {
       echo '<tr><td colspan="6">No hay clientes.</td></tr>';
   } else {
       foreach ($clientes as $c) {
           echo '<tr>';
           echo '<td>' . esc_html($c->id) . '</td>';
           echo '<td>' . esc_html($c->first_name) . '</td>';
           echo '<td>' . esc_html($c->last_name) . '</td>';
           echo '<td>' . esc_html($c->email) . '</td>';
           echo '<td>' . esc_html($c->phone) . '</td>';
           echo '<td>' . esc_html($c->life_stage) . '</td>';
           echo '</tr>';
       }
   }
   
   echo '</tbody>';
   echo '</table>';
   echo '</div>';
}


function perp_total_empleados() {
    global $wpdb;
    
    $tabla = $wpdb->prefix . 'erp_peoples';
    
    $total = $wpdb->get_var("
        SELECT COUNT(*)
        FROM {$tabla}
        WHERE life_stage = 'employee'
    ");

    if ($total === null) {
        return 'No se pudieron obtener los empleados.';
    }
   
    return 'Total de empleados en WP ERP: ' . $total;
}

add_shortcode('perp_total_empleados', 'perp_total_empleados');


function perp_listar_personas() {
    global $wpdb;
    
    $tabla = $wpdb->prefix . 'erp_peoples';
    
    $personas = $wpdb->get_results("
        SELECT first_name, last_name, email
        FROM {$tabla}
    ");
    
    if (empty($personas)) {
        return '<ul><li>No hay personas registradas.</li></ul>';
    }
    
    $salida = '<ul>';
    foreach ($personas as $p) {
        $nombre_completo = trim(esc_html($p->first_name) . ' ' . esc_html($p->last_name));
        $email = esc_html($p->email);
        $salida .= '<li>' . $nombre_completo . ' - ' . $email . '</li>';
    }
    $salida .= '</ul>';
    
    return $salida;
}

add_shortcode('perp_listar_personas', 'perp_listar_personas');

```
