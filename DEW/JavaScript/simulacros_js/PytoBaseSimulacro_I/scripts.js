"use strict";

/* =========================================================
   Examen práctico JavaScript — ESQUELETO
   Instrucciones:
   - Completa los TODO en cada sección.
   - Valida en consola que no haya errores.
   - Si te da tiempo muestralo en index.html.
   - No uses librerías externas.
   ========================================================= */

/* ===================== Sección A =========================
   Variables, tipos, ámbito y conversiones
   TODO: completar según enunciado.
=========================================================== */
function seccionA() {
  console.log("Sección A) Variables y tipos");

  // 1. Declaraciones iniciales
  // TODO: const centro = "…"; let grupo = "…"; let turno;

  const centro = "CIFP X";
  let grupo = "2º DAW";
  let turno = "mañana";

  // 2. Inicializar turno
  turno = "mañana";

  // 3. Convertir "plazas" string -> número seguro en plazasNum
  // TODO: let plazas = "25"; let plazasNum = Number(plazas); validar Number.isFinite(plazasNum)
  let plazas = "25";
  let plazasNum = Number(plazas);

  // 4. Usar tipoDe(x) con varios ejemplos y mostrar por consola
  // TODO: console.log(tipoDe(null)), tipoDe([]), etc.
  function tipoDe(x) {
    return typeof x;
  }
  console.log(tipoDe(null));
  console.log(tipoDe([]));
  console.log(tipoDe({}));
  console.log(tipoDe(null));
  console.log(tipoDe(NaN));

  // 5. Demostrar ámbito con let/const dentro y fuera de bloque
  // TODO: crear bloque, declarar, loguear, comprobar acceso fuera sin errores
  const bloqueConst = "Estoy dentro de un bloque";
  let bloqueLet = "Soy una variable let en un bloque";
  console.log(bloqueConst);
  console.log(bloqueLet);
  // Evidencias mínimas: typeof, Array.isArray, Number.isFinite
}

/* ===================== Sección B =========================
   Decisiones y bucles
   TODO: completar según enunciado.
=========================================================== */
function seccionB() {
  console.log("Sección B) Decisiones y bucles");

  // TODO:
  //  1. Implementa clasificarNota(n) que devuelva "SS" de (de 1 a 4 puntos), "AP" (de 5 a 6 puntos), "NT" (de 7 a 9 puntos), "SB" (10 puntos). Usa switch.
  function clasificarNota(n) {
    switch (true) {
      case n >= 1 && n < 5:
        return "SS";
      case n >= 5 && n < 7:
        return "AP";
      case n <= 7 && n < 10:
        return "NT";
      case n === 10:
        return "SB";
      default:
        return "Invalid";
    }
  }
  //  2. Recorre la constante notas = [3,5,6.5,8.2,9.7] y construye un array de objetos { nota, tramo: clasificarNota(nota) }.
  const notas = [3, 5, 6, 7, 8, 9.7];
  const resultado = notas.map((nota) => ({
    nota: nota,
    tramo: clasificarNota(nota),
  }));
  //  3. Con un for clásico calcula cuántas están en "SS".
  let amountSS = 0;
  for (let i = 0; i < notas.length; i++) {
    if (resultado[i].tramo === "SS") {
      countSS++;
    }
  }
  console.log(`La cantidad de 'SS' que hay es de: ${countSS}`);

  //  4. Con un while calcula cuántas están en "AP".
  let countAP = 0;
  let index = 0;
  while (index < notas.length) {
    if (resultado[index].tramo === "AP") {
      countAP++;
    }
    index++;
  }
  console.log(`La cantidad de 'AP' que hay es de: ${countAP}`);

  //  5. Con un for..of o for..in calcula cuántas están en "NT". Justifica tu elección.
  let countNT = 0;
  for (const { tramo } of resultado) {
    if (tramo === "NT") {
      countNT++;
    }
  }
  console.log(`La cantidad de 'NT' que hay es de: ${countNT}`);
}

/* ===================== Sección C =========================
   Arrays y agregación sobre 'coches'
   Requiere datos cargados: un array de objetos coche.
   TODO: completar según enunciado.
=========================================================== */

/* ===================== Configuración ===================== */
const DATA_URL = "http://10.103.255.0:3000/coches"; // cambia si procede

/* ===================== Carga de datos ==================== */
// TODO Tomar datis de coches
async function getCoches() {
  try {
  } catch (err) {}
}

function seccionC(coches) {
  console.log("Sección C) Arrays y agregados", coches?.length);

  if (!Array.isArray(coches)) {
    console.log("C) Datos de coches no disponibles o formato incorrecto");
    return;
  }

  // 1. Crea soloModelos con map → ["Corolla","Focus","Ceed","Golf",…….].
  // 2. Filtra year >= 2018 en recientes.
  // 3. Calcula con reduce:
  // 3.a.     ◦ sumaPrecios
  // 3.b.     ◦ maxPrecio (objeto completo)
  // 3.c. ◦ mediaPrecio redondeada a 2 decimales.
  // 4. Ordena por precio ascendente sin mutar el original.
}

/* ===================== Sección D =========================
   Funciones y modularidad ligera
   TODO: completar según enunciado.
=========================================================== */
// Documenta cada función con comentario de propósito, parámetros y retorno.

function clasificarNota(n) {
  // TODO: 1. Escribe function aplicarIVA(productos, tipoIVA=0.15) que devuelva nuevos objetos {...p, precioConIVA} sin mutar.
  return ""; // placeholder
}

function toEuro(n) {
  // TODO: 2. Escribe una función flecha llamada toEuro que reciba un número n y devuelva una cadena con el importe formateado
  // en euros usando el locale "es-ES" y las opciones { style: "currency", currency: "EUR" }.
  return ""; // placeholder
}

function aplicarIVA(base, tipo = 0.21) {
  // TODO: 3. Escribe el código que, partiendo del array coches y de la función aplicarIVA ya implementada, obtenga un nuevo
  // array llamado resumen con el siguiente formato por elemento: { etiqueta: "Marca Modelo (Año)", total: precioConIVA }
  return 0; // placeholder
}

// Función para comprobar las que realizas tú arriba.
function seccionD() {
  console.log("Sección D) Funciones y modularidad");

  // TODO: probar funciones con valores de ejemplo y mostrar resultados
  // console.log(clasificarNota(7.4));
  // console.log(aplicarIVA(100, 0.1));
  // console.log(toEuro(1234.56));
}

/* ===================== Arranque ========================= */
(async function main() {
  console.log("Inciando Examen...");
  try {
    seccionA();
    seccionB();
    seccionC();
    seccionD();
  } catch (e) {
    console.error("Error general:", e);
  }
})();
