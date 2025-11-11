"use strict";

/* =========================
   APARTADO (E) 2.- Validaciones
========================= */
function validaNombre($nombre) {
  const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ ]{2,}$/;
  return regex.test($nombre);
}

function validaEmail($email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test($email);
}

function validaEdad($edad) {
  const edadNum = parseInt($edad, 10);
  return Number.isInteger(edadNum) && edadNum >= 16 && edadNum <= 99;
}

// Leer LocalStorage
function leerAlumnos() {
  const alumnos = localStorage.getItem("alumnos");
  return alumnos ? JSON.parse(alumnos) : [];
}

// Guardar LocalStorage
function guardarAlumnos(arr) {
  localStorage.setItem("alumnos", JSON.stringify(arr));
}

/* =========================
   Render lista alumnos (E)
========================= */
function renderAlumnos(lista, $destino) {
  $destino.innerHTML = "";
  lista.forEach((alumno) => {
    const li = document.createElement("li");
    li.textContent = `${alumno.nombre} / ${alumno.email} / ${alumno.edad}`;
    $destino.appendChild(li);
  });
}

// Render lista productos (F)
function renderProductos(productos, $destino) {}

function abrirDetalleProducto(p) {}

/* =========================
   Init
========================= */
document.addEventListener("DOMContentLoaded", async () => {
  const $form = document.querySelector("#formulario");
  const $listaAlumnos = document.querySelector("#listaAlumnos");
  const $btnLimpiar = document.querySelector("#btnLimpiar");
  // *********   APARTADO (E)    ********
  // 1.- Captura submit del formulario. Prevén envío por defecto.
  $form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar envío por defecto

    const $nombre = $form.querySelector("#nombre");
    const $email = $form.querySelector("#email");
    const $edad = $form.querySelector("#edad");

    let errores = false;
    // 2.- Validaciones de los campos del formulario.
    if (!validaNombre($nombre.value)) {
      $nombre.classList.add("is-invalid");
      $nombre.nextElementSibling.innerHTML =
        "<small class='error'>Nombre inválido.</small>";
      errores = true;
    } else {
      $nombre.classList.remove("is-invalid");
      $nombre.nextElementSibling.innerHTML = "";
    }

    if (!validaEmail($email.value)) {
      $email.classList.add("is-invalid");
      $email.nextElementSibling.innerHTML =
        "<small class='error'>Email inválido.</small>";
      errores = true;
    } else {
      $email.classList.remove("is-invalid");
      $email.nextElementSibling.innerHTML = "";
    }

    if (!validaEdad($edad.value)) {
      $edad.classList.add("is-invalid");
      $edad.nextElementSibling.innerHTML =
        "<small class='error'>Edad debe ser un número entre 16 y 99.</small>";
      errores = true;
    } else {
      $edad.classList.remove("is-invalid");
      $edad.nextElementSibling.innerHTML = "";
    }
    // 3.- Limpiar y renderizar lista de alumnos.
    if (!errores) {
      const nuevoAlumno = {
        nombre: $nombre.value,
        email: $email.value,
        edad: $edad.value,
      };
      alumnos.push(nuevoAlumno);
      guardarAlumnos(alumnos);
      renderAlumnos(alumnos, $listaAlumnos);
      $form.reset(); // Limpiar formulario
    }
  });
  // 4.- Cargar alumnos de LocalStorage.
  const alumnos = leerAlumnos();
  renderAlumnos(alumnos, $listaAlumnos);
  // 5.- Captura botón #btnLimpiar borrar lista y limpiar LocalStorage.
  $btnLimpiar.addEventListener("click", () => {
    localStorage.removeItem("alumnos");
    renderAlumnos([], $listaAlumnos);
  });

  // 6.- Cambia aspecto del formulario al hacer foco en los campos.
  const inputs = $form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.classList.add("focus");
    });
    input.addEventListener("blur", () => {
      input.classList.remove("focus");
    });
  });
});
