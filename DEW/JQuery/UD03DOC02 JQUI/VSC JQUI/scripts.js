"use strict";

const $j = jQuery.noConflict();

function inicializaComponentes() {
  initAcordion();
  initTabs();
  initButton();
  initDialog();
}

function initDialog() {
  $j("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: [
      {
        text: "Cerrar",
        click: function () {
          $j(this).dialog("close");
        },
      },
    ],
  });
}

function initButton() {
  $j("button")
    .button()
    .on("click", function () {
      $j("#dialog").dialog("open");
    });
}

function initTabs() {
  $j("#tabs").tabs();
}

function initAcordion() {
  $j("#accordion").accordion();
}

$j(function () {
  inicializaComponentes();
});
