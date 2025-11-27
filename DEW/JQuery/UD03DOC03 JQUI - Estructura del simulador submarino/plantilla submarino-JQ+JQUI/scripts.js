"use strict";

/**
 * Punto de entrada principal.
 * Aquí solo se inicializan cosas básicas.
 * El resto se irá completando sesión a sesión.
 */
$(function () {
  inicializarTabs();
  inicializarDialogo();

  // Gancho para texto inicial de misión
  inicializarMision();

  // Aquí iréis añadiendo, por sesiones:
  inicializarControlesNavegacion();
  inicializarControlesProfundidad();
  inicializarSilencioso();
  inicializarControlesSonar();
  inicializarMision();
  // inicializarControlesArmas();
  // inicializarEventos();
});

/* -----------------------------
 * INICIALIZACIÓN BÁSICA
 * ---------------------------*/

/**
 * Convierte el panel de mandos en pestañas de jQuery UI.
 * (Sesión 3)
 */
function inicializarTabs() {
  $("#tabs-mandos").tabs();
}

/**
 * Diálogo genérico para mostrar mensajes.
 * (Se usa desde cualquier parte del juego).
 */
function inicializarDialogo() {
  $("#dialog-mensaje").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Cerrar: function () {
        $(this).dialog("close");
      },
    },
  });
}

/**
 * Texto inicial de la misión.
 * Aquí podréis cambiar el contenido según la misión activa.
 */
function inicializarMision() {
  const textoMision = `
Misión 1: Configura el submarino en modo patrulla silenciosa.
- Velocidad moderada.
- Profundidad segura.
- Modo silencio activado.
- Sonar en modo pasivo.
`;
  $("#texto-mision").text(textoMision.trim());
  $("#btn-verificar-mision")
    .button()
    .on("click", function () {
      const $velocidad = $("#velocidad-slider").slider("value");
      const $profundidad = $("#profundidad").slider("value");
      const $silencio = $("#silencio-check").prop("checked");
      const $sonar = $("#modo-sonar option:selected").text();

      if (
        $velocidad >= 8 &&
        $velocidad <= 15 &&
        $profundidad >= 200 &&
        $profundidad <= 300
      ) {
        mostrarMensaje("Mision", "SUPERADA");
      } else {
        mostrarMensaje("Mision", "NO SUPERADA");
      }
    }); /**boton iniciar mision */
}

/**
 * Función auxiliar para mostrar mensajes en el diálogo.
 * La usaréis en:
 * - Verificar misión 1
 * - Verificar misión 2
 * - Errores (sin objetivo seleccionado, etc.)
 */
function mostrarMensaje(titulo, mensaje) {
  $("#dialog-mensaje").dialog("option", "title", titulo);
  $("#dialog-texto").text(mensaje);
  $("#dialog-mensaje").dialog("open");
}

/* -----------------------------
 * PUNTOS DE EXTENSIÓN (TODO)
 * ---------------------------*/

/**
 * Ejemplo de funciones que irán rellenando los alumnos
 * en sesiones posteriores. De momento están vacías,
 * solo como guía visual para estructurar el código.
 */

function inicializarControlesNavegacion() {
  // TODO: slider de velocidad, spinner de rumbo, piloto automático...
  $("#velocidad-slider").slider({
    min: 0,
    max: 50,
    slide: function (event, ui) {
      $("#velocidad-valor").text(ui.value);
    },
  });
}

function inicializarControlesProfundidad() {
  // TODO: slider de profundidad, modo silencio...
  $("#profundidad-slider").slider({
    min: 0,
    max: 100,
    slide: function (event, ui) {
      $("#profundidad-valor").text(ui.value);
    },
  });
}

function inicializarControlesSonar() {
  // TODO: modo sonar, alcance del sonar, botón Escanear...
  $("#modo-sonar").selectmenu({
    open: function (event, ui) {},
  });
}

function inicializarControlesArmas() {
  // TODO: torpedos, tipo de torpedo, botones fijar objetivo / disparar...
}

function inicializarEventos() {
  // TODO:
  // - Click en "Verificar misión"
  // - Click en "Reiniciar"
  // - Click en "Escanear"
  // - Click en barcos del sonar (seleccionar objetivo)
  // - Click en "Fijar objetivo" y "Disparar"
}

function inicializarSilencioso() {
  $("#silencio-check").checkboxradio({
    classes: {
      "ui-checkboxradio": "highlight",
    },
  });
}
