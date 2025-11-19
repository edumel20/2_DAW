"use strict";

const $j = jQuery.noConflict();

function inicializaComponentes() {
  initAcordion();
  initTabs();
  initButton();
  initDialog();
}

function initDialog() {
  $j("#dialog").dialog({ autoOpen: false });
}

function initButton() {
  $j("button").button();
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
