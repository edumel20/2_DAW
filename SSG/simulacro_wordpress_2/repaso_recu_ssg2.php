<?php
/*
Plugin Name: Plugin Incidencias Moda.
Description: Plugin para notificar las incidencias en el apartado de moda de la tienda.
Author: Eduardo.
Version: 1.0
*/

// Verifica si el archivo se está ejecutando dentro de WordPress para evitar acceso directo
if (!defined('ABSPATH')) {
    exit;
}

// Hook para añadir el menú al admin de WordPress
add_action('admin_menu', 'pim_crear_menu');

// Función para crear el menú en el admin
function pim_crear_menu() {
    // Añade una página de menú principal
    add_menu_page(
        'Gestión de incidencias', // Título de la página
        'Incidencias', // Título del menú
        'manage_options', // Capacidad requerida
        'incidencias-moda', // Slug del menú
        'pim_pagina_formulario', // Función callback
        'dashicons-edit', // Icono
        20 // Posición
    );
}

// Función principal que genera la página del formulario y listado de incidencias
function pim_pagina_formulario() {
    // Obtiene las incidencias almacenadas en las opciones de WordPress
    $incidencias = get_option('pim_incidencias', array());
    
    // Verifica si se ha enviado el formulario
    if (isset($_POST['pim_guardar'])){

        // Sanitiza y obtiene los datos del formulario
        $prenda = isset($_POST['prenda']) ? sanitize_text_field($_POST['prenda']) : '';
        $talla = isset($_POST['talla']) ? sanitize_text_field($_POST['talla']) : '';
        $tipo= isset($_POST['tipo']) ? sanitize_text_field($_POST['tipo']) : '';
        $observaciones = isset($_POST['observaciones']) ? sanitize_textarea_field($_POST['observaciones']) : '';

        // Crea un array con la nueva incidencia
        $nueva_incidencia = array(
            'prenda'        =>   $prenda,    
            'talla'         =>   $talla,
            'tipo'          =>   $tipo,
            'observaciones' =>   $observaciones,
            'fecha'         =>   current_time('Y-m-d H:i:s') // Fecha actual
        );

        // Añade la nueva incidencia al array existente
        $incidencias[] = $nueva_incidencia;

        // Actualiza la opción en la base de datos
        update_option('pim_incidencias', $incidencias);

        // Muestra un mensaje de éxito
        echo '<div class="notice notice-success"><p>Incidencia guardada correctamente</p></div>';
    }

    // Inicia el output HTML de la página
    ?>
    <div class="wrap"> <!-- Contenedor principal de la página -->
        <h1>Sistema de registro de incidencias - Tienda Eduardo</h1> <!-- Título de la página -->
        <form method="post"> <!-- Formulario para enviar incidencias -->
            <table class="form-table"> <!-- Tabla para organizar los campos del formulario -->
                <tr> <!-- Fila para el campo Prenda -->
                    <th><label for="prenda">Prenda</label></th> <!-- Etiqueta del campo -->
                    <td>
                        <input type="text" name="prenda" id="prenda"> <!-- Campo de texto para la prenda -->
                    </td>
                </tr>
                <tr> <!-- Fila para el campo Talla -->
                    <th><label for="talla">Talla</label></th> <!-- Etiqueta del campo -->
                    <td>
                        <select name="talla" id="talla"> <!-- Selector de talla -->
                            <option value="">Selecciona una talla</option> <!-- Opción por defecto -->
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </td>
                </tr>
                <tr> <!-- Fila para el campo Tipo de incidencia -->
                    <th><label for="tipo" id="tipo">Tipo de incidencia</label></th> <!-- Etiqueta del campo -->
                    <td>
                        <select name="tipo" id="tipo"> <!-- Selector de tipo de incidencia -->
                            <option value="">Selecciona una opción</option> <!-- Opción por defecto -->
                            <option>Sin stock</option>
                            <option>Defecto</option>
                            <option>Etiqueta incorrecta</option>
                        </select>
                    </td>
                </tr>
                <tr> <!-- Fila para el campo Observaciones -->
                    <th><label for="observaciones">Observaciones</label></th> <!-- Etiqueta del campo -->
                    <td>
                        <textarea name="observaciones" id="observaciones" rows="4" cols="40"></textarea> <!-- Área de texto para observaciones -->
                    </td>
                </tr>
            </table>
            <p>
                <input type="submit" class="button button-primary" value="Enviar incidencia"> <!-- Botón para enviar el formulario -->
            </p>
        </form>

        <h2>Listado de incidencias</h2> <!-- Título de la sección de listado -->
        <table class="widefat striped"> <!-- Tabla para mostrar las incidencias -->
            <thead> <!-- Cabecera de la tabla -->
                <tr>
                    <th>#</th> <!-- Columna de número -->
                    <th>Prenda</th> <!-- Columna de prenda -->
                    <th>Talla</th> <!-- Columna de talla -->
                    <th>Tipo</th> <!-- Columna de tipo -->
                    <th>Observaciones</th> <!-- Columna de observaciones -->
                    <th>Fecha</th> <!-- Columna de fecha -->
                </tr>
            </thead>
            <tbody> <!-- Cuerpo de la tabla -->
            <?php
            if (!empty($incidencias)) { // Si hay incidencias registradas
                foreach($incidencias as $index => $incidencia) { // Itera sobre cada incidencia
                    echo '<tr>'; // Inicia fila de la tabla
                    echo '<td>' . ($index + 1) . '</td>'; // Número de fila
                    echo '<td>' . esc_html($incidencia['prenda']) . '</td>'; // Prenda (escapada)
                    echo '<td>' . esc_html($incidencia['talla']) . '</td>'; // Talla (escapada)
                    echo '<td>' . esc_html($incidencia['tipo']) . '</td>'; // Tipo (escapado)
                    echo '<td>' . esc_html($incidencia['observaciones']) . '</td>'; // Observaciones (escapadas)
                    echo '<td>' . esc_html($incidencia['fecha']) . '</td>'; // Fecha (escapada)
                    echo '</tr>'; // Cierra fila

                }
            } else { // Si no hay incidencias
                echo '<tr><td colspan="6">No hay incidencias registradas</td></tr>'; // Fila con mensaje
            }
            ?>
            </tbody>
        </table>
    </div>
    <?php
}