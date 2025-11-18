function resolverEjercicios() {
  // 1.- Usa jQuery para seleccionar todos los elementos del documento y aplicarles un borde punteado gris claro.
  //$("*").css("border", "2px dashed black");

  // 2.- Cambia el color del texto del párrafo con ID intro a verde.
  $("#intro").css("color", "green");

  // 3. Subraya todos los elementos que tengan la clase misterio.
  $(".misterio").css("text-decoration", "underline");

  // 4. Resalta todos los elementos que tengan el atributo data-personaje.
  $("[data-personaje]").addClass("resaltar");

  // 5. Modifica el texto del personaje con data-personaje="Dipper" para indicar que está en la biblioteca.
  $("[data-personaje='Dipper']").text("No te metas en DAW Dipper 😨");

  // 6. Cambia la fuente de todos los elementos <p> a Georgia.
  $("p").css("font-family", "Geneva");

  // 7. Cambia el color del texto a rojo de los elementos con el atributo data-enemigo.

  // 8. Resalta los elementos cuyo atributo data-enemigo tenga el valor "true".
  // 9. Aplica cursiva a los elementos con data-personaje distinto de "Mabel".
  // 10. Cambia el fondo de los elementos cuyo atributo data-lugar comience con "caba".
  // 11. Muestra (fadeIn) los elementos cuyo atributo data-rol termine en "final".
  // 12. Aplica un borde rojo grueso a los elementos cuyo atributo title contenga la palabra "villano".
}

function init() {
  // Cuando se pulse el boton con id="btn-ejecutar" se ejecutaran las siguientes acciones
  $("#btn-ejecutar").on("click", resolverEjercicios);
}

$(function () {
  init();
});
