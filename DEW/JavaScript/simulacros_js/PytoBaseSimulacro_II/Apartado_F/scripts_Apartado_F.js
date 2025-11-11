"use strict";

/* =========================
   APARTADO (F)
========================= */
const URL_PRODUCTOS = "http://10.103.255.0:3000/productos";
async function cargarProductos(URL_PRODUCTOS) {
  try {
  } catch (err) {}
}

// Render lista productos (F)
function renderProductos(productos, $destino) {}

function abrirDetalleProducto(p) {}

/* =========================
   Init
========================= */
document.addEventListener("DOMContentLoaded", async () => {
  // *********  APARTADO (F) ********
  // 1.- Carga productos desde el endpoint y renderízalos.
  // 2.- Llama a cargarProductos(URL); al cargar la página.
  //     3. Renderiza en #productos una lista <ul> con title – price usando toLocaleString("es-ES",{style:"currency",currency:"EUR"}).
  //  4. Añade un buscador #txtFiltro. En input, filtra por title y re-renderiza sin hacer otro fetch.
  //  5. Añade botón "Abrir detalles" por producto que abra window.open una ventana secundaria simple con
  //  el detalle del producto (id, título y precio) generado vía win.document; usa DOM en la
  //  ventana hija (win.document.body.append(...)). Controla si el popup está bloqueado: si win==null, muestra aviso.
  //  6. Actualiza document.title con el número de productos y añade una clase al <body> cuando haya error de red
});
