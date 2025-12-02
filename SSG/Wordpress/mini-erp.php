<?php
/*
Plugin Name: Mini ERP Formativo
Description: Plugin para actividades de un mini ERP usando shortcodes.
*/

if (!defined('ABSPATH')) exit;

// TODO: AÑADE EL SHORTCODE LLÁMALO mini_erp
add_shortcode('mini_erp', 'mini_erp_render');


function mini_erp_render()
{
    //TODO: ACTIVA EL BUFFER DE SALIDA
    ob_start();
?>

    <h1>Mini ERP (Actividades)</h1>


    <!-- ACTIVIDAD 1  -->
    <!----------------->
    <div style="background:#fff; padding:20px; border:1px solid #ddd;">
    <h2>Actividad 1 - Registro de Clientes</h2>

    <form method="post">
        <label>Nombre del cliente</label>
        <input type="text" name="nombre" required>

        <label>Email</label>
        <input type="email" name="email" required>
        <br>
        <input type="submit" name="guardar" value="Guardar">
    </form>

    <?php
    if (isset($_POST['guardar'])) {
        
        $nombre = sanitize_text_field($_POST['nombre']);
        $email = sanitize_email($_POST['email']);

        echo "<p>Cliente registrado: $nombre ($email)</p>";
    }
    ?>
    </div>

    <!-- ACTIVIDAD 2  -->
    <!----------------->
    <div style="background:#fff; padding:20px; border:1px solid #ddd; margin-top:20px;">
    <h2>Actividad 2 - Guardar Cliente</h2>

    <form method="post">
        <label>Nombre del cliente</label>
        <input type="text" name="nombre">

        <label>Email</label>
        <input type="email" name="email">
        <br>
        <input type="submit" name="guardar2" value="Guardar">
    </form>

    <?php
    // COMPLETA DE MANERA QUE SE EJECUTE SOLO 
    // SI SE HA PULSADO EL BOTÓN Guardar
    if (isset($_POST['guardar2'])) {
        
         // COMPLETA CON NOMBRE DE LA FUNCIÓN QUE 
         // RECUPERA CONTENIDO DE LA TABLA wp_options
        $clientes = get_option('erp_clientes', array());

        // Añade el nuevo cliente a la lista
        $clientes[] = array(
            'nombre' => sanitize_text_field($_POST['nombre']),
            'email'  => sanitize_email($_POST['email']),
            'fecha'  => current_time('mysql')
        );

         // COMPLETA CON NOMBRE DE LA FUNCIÓN 
         // QUE ACTUALIZA LA TABLA wp_options
        update_option('erp_clientes', $clientes);

        echo "<p>Cliente guardado correctamente.</p>";
    }
    ?>
    </div>


    <!-- ACTIVIDAD 3  -->
    <!----------------->
    <div style="background:#fff; padding:20px; border:1px solid #ddd; margin-top:20px;">
        <h2>Actividad 3</h2>
        <?php
        $productos = array(
            array('codigo' => 'A01', 'nombre' => 'Camiseta',   'precio' => 12.99),
            array('codigo' => 'A02', 'nombre' => 'Pantalón',   'precio' => 19.99),
            array('codigo' => 'A03', 'nombre' => 'Chaqueta',   'precio' => 39.99)
        );
        
        echo "<table border='1'>";
        echo "<tr><th>Código</th><th>Nombre</th><th>Precio</th></tr>";
        
        // Extrae solo el valor, no la clave y hazlo en una variable llamada $p
        foreach ($productos as $index => $p) {
    
            // No te olvides de escapar la salida
            echo "<tr>
                    <td>" . $p['codigo'] . "</td>
                    <td>" . $p['nombre'] . "</td>
                    <td>" . $p['precio'] . " €</td>
                  </tr>";
        }
        
        echo "</table>";
        ?>
    </div>



    <!-- ACTIVIDAD 4  -->
    <!----------------->
    <div style="background:#fff; padding:20px; border:1px solid #ddd; margin-top:20px;">
        <h2>Actividad 4</h2>
        <?php
        if (isset($_POST['enviar'])) {

    // COMPLETA EL CONDICIONAL
        if (empty($_POST['producto'])) {

        echo "<p style='color:red'>El nombre del producto es obligatorio</p>";

        } else {

        echo "<p>Producto registrado: " . sanitize_text_field($_POST['producto']) . "</p>";

        }
    }
    ?>

    <form method="post">
        <label>Producto</label>
        <input type="text" name="producto">

        <input type="submit" name="enviar" value="Enviar">
    </form>
    </div>


    
    <!-- ACTIVIDAD 5  -->
    <!----------------->
    <div style="background:#fff; padding:20px; border:1px solid #ddd; margin-top:20px;">
        <h2>Actividad 5</h2>
        <form method="post">

        <label>Precio</label>
        <input type="number" step="0.01" name="precio">
    
        <label>Cantidad</label>
        <input type="number" name="cantidad">
    
        <input type="submit" name="calcular" value="Calcular total">
    
        </form>

        <?php
        if (isset($_POST['calcular'])) {
    
        // COMPLETA AQUÍ CON LAS FUNCIONES DE CONVERSIÓN
        $precio  = floatval($_POST['precio']);
        $cantidad = intval($_POST['cantidad']);
    
        // COMPLETA AQUÍ LA OPERACIÓN
        $total = $precio * $cantidad;
    
        echo "<p>Total: $total €</p>";
    }
    
    ?>
    </div>


    <!-- ACTIVIDAD 6  -->
    <!----------------->
    <div style="background:#fff; padding:20px; border:1px solid #ddd; margin-top:20px;">
        <h2>Actividad 6</h2>
        <form method="post">

        <label>Precio sin IGIC</label>
        <input type="number" name="precio" step="0.1">

        <input type="submit" name="calcular_igic" value="Calcular IGIC">

        </form>

    <?php
    if (isset($_POST['calcular_igic'])) {

    // CONVIERTE A DECIMAL
    $precio = floatval($_POST['precio']);

    // CALCULA EL PRECIO FINAL
    $precio_final = $precio + ($precio * $igic);

    echo "<p>Precio final con IVA: $precio_final €</p>";
}
?>
    </div>


    <!-- ACTIVIDAD 7  -->
    <!----------------->
    <div style="background:#fff; padding:20px; border:1px solid #ddd; margin-top:20px;">
        <h2>Actividad 7</h2>
        <form method="post">

            <label>Producto</label>
            <input type="text" name="nombre">

            <label>Precio</label>
            <input type="number" name="precio" step="0.01">

            <input type="submit" name="guardar_producto" value="Guardar">

            </form>

        <?php
        // Aquí va la actividad 2
        ?>
    

    </div>



    <!-- ACTIVIDAD 8  -->
    <!----------------->
    <div style="background:#fff; padding:20px; border:1px solid #ddd; margin-top:20px;">
        <h2>Actividad 8</h2>
        <?php
        // Aquí va la actividad 2
        ?>
    </div>



    <!-- ACTIVIDAD 9  -->
    <!----------------->
    <div style="background:#fff; padding:20px; border:1px solid #ddd; margin-top:20px;">
        <h2>Actividad 9</h2>
        <?php
        // Aquí va la actividad 2
        ?>
    </div>



    <!-- ACTIVIDAD   -->
    <!----------------->
    <div style="background:#fff; padding:20px; border:1px solid #ddd; margin-top:20px;">
        <h2>Actividad 10</h2>
        <?php
        // Aquí va la actividad 2
        ?>
    </div>
<?php
    return ob_get_clean();
}
