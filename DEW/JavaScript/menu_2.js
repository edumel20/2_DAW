function showMenu() {
  console.log(`
================ MENÚ INVENTARIO INCOM T-70 ================
1) Mostrar inventario (ambas vistas)
2) Calcular total
3) Agregar producto
4) Eliminar producto por nombre exacto
0) Salir
`);
}
rl.question("Opción: ", (opcionRaw) => {
  const opcion = opcionRaw.trim();
  switch (opcion) {
    case "1":
      // mostrarInventario();
      return showMenu();
    case "2":
      /*
        console.log(
          `Total del inventario: ${calcularTotal().toFixed(2)} créditos`
        );
        */
      return showMenu();
    case "3":
    // return agregarProducto(showMenu);
    case "4":
    // return eliminarProducto(showMenu);
    case "0":
      console.log("Fin.");
      rl.close();
      return;
    default:
      console.log("Opción no válida. Introduce 0, 1, 2, 3 o 4.");
      return showMenu();
  }
});

showMenu();
