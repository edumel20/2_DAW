"use strict";

/** ESTE ES EL SCRIPT BUENO */

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

  // Inicialización de controles
  inicializarControlesNavegacion();
  inicializarControlesProfundidad();
  inicializarSilencioso();
  inicializarControlesSonar();
  inicializarControlesArmas();
  inicializarEventos();
});

/* -----------------------------
 * INICIALIZACIÓN BÁSICA
 * ---------------------------*/

function inicializarTabs() {
  $("#tabs-mandos").tabs();
}

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
      const $profundidad = $("#profundidad-slider").slider("value");
      const $silencio = $("#silencio-check").prop("checked");
      const $sonar = $("#modo-sonar option:selected").text();

      if (
        $velocidad >= 8 &&
        $velocidad <= 15 &&
        $profundidad >= 200 &&
        $profundidad <= 300 &&
        $silencio &&
        $sonar === "pasivo"
      ) {
        mostrarMensaje("Misión", "SUPERADA");
      } else {
        mostrarMensaje("Misión", "NO SUPERADA");
      }
    });
}

function mostrarMensaje(titulo, mensaje) {
  $("#dialog-mensaje").dialog("option", "title", titulo);
  $("#dialog-texto").text(mensaje);
  $("#dialog-mensaje").dialog("open");
}

/* -----------------------------
 * INICIALIZACIÓN DE CONTROLES
 * ---------------------------*/

function inicializarControlesNavegacion() {
  $("#velocidad-slider").slider({
    min: 0,
    max: 50,
    slide: function (event, ui) {
      $("#velocidad-valor").text(ui.value);
    },
  });

  $("#rumbo-spinner").spinner({
    min: 0,
    max: 360,
    spin: function (event, ui) {
      $(this).val(ui.value);
    },
  });

  $("input[name='piloto']").checkboxradio();
}

function inicializarControlesProfundidad() {
  $("#profundidad-slider").slider({
    min: 0,
    max: 1000,
    slide: function (event, ui) {
      $("#profundidad-valor").text(ui.value);
    },
  });
}

function inicializarControlesSonar() {
  $("#modo-sonar").selectmenu();

  $("#alcance-sonar-slider").slider({
    min: 0,
    max: 1000,
    slide: function (event, ui) {
      $("#alcance-sonar-valor").text(ui.value);
    },
  });

  $("#btn-escanear")
    .button()
    .on("click", function () {
      const modoSonar = $("#modo-sonar option:selected").text();
      const alcance = $("#alcance-sonar-slider").slider("value");
      mostrarMensaje("Escaneo", `Modo: ${modoSonar}, Alcance: ${alcance} m`);
    });
}

function inicializarControlesArmas() {
  $("#torpedos-spinner").spinner({
    min: 0,
    max: 20,
    spin: function (event, ui) {
      $(this).val(ui.value);
    },
  });

  $("#btn-fijar-objetivo")
    .button()
    .on("click", function () {
      const barcoSeleccionado = $("#sonar .barco-seleccionado").data("id");
      if (barcoSeleccionado) {
        mostrarMensaje(
          "Objetivo seleccionado",
          `Objetivo: ${barcoSeleccionado}`
        );
      } else {
        mostrarMensaje("Error", "No se ha seleccionado ningún objetivo.");
      }
    });

  $("#btn-disparar")
    .button()
    .on("click", function () {
      const torpedosListos = $("#torpedos-spinner").val();
      if (torpedosListos > 0) {
        mostrarMensaje("Disparo", "¡Torpedo disparado!");
        $("#torpedos-spinner").val(torpedosListos - 1);
      } else {
        mostrarMensaje("Error", "No hay torpedos disponibles.");
      }
    });
}

/* -----------------------------
 * INICIALIZAR EVENTOS
 * ---------------------------*/

function inicializarEventos() {
  $("#sonar").on("click", ".barco", function () {
    // Limpiar barcos seleccionados anteriormente
    $("#sonar .barco").removeClass("barco-seleccionado");

    const barco = $(this);
    barco.addClass("barco-seleccionado");
    const barcoID = barco.data("id");
    const position = barco.position();
    const x = position.left;
    const y = position.top;

    console.log(`Barco ID: ${barcoID}, X=${x}, Y=${y}`);
    mostrarMensaje(
      "Objetivo Seleccionado",
      `Barco ID: ${barcoID} seleccionado.`
    );
  });

  $("#btn-reiniciar")
    .button()
    .on("click", function () {
      $("#velocidad-slider").slider("value", 0);
      $("#profundidad-slider").slider("value", 0);
      $("#silencio-check").prop("checked", false).checkboxradio("refresh");
      $("#modo-sonar").val("off").selectmenu("refresh");
      $("#alcance-sonar-slider").slider("value", 0);
      $("#torpedos-spinner").spinner("value", 0);
      mostrarMensaje(
        "Reiniciar",
        "Todas las configuraciones han sido reiniciadas."
      );
    });
}

function inicializarSilencioso() {
  $("#silencio-check").checkboxradio({
    classes: {
      "ui-checkboxradio": "highlight",
    },
    change: function () {
      const activado = $(this).is(":checked");
      const estado = activado ? "activado" : "desactivado";
      mostrarMensaje("Modo Silencio", `Modo silencio ${estado}.`);
    },
  });
}
