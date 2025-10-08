const prompt = require("prompt-sync")();
const numero = parseInt(prompt("¿Qué numero desea convertir?: "));

const juliosAmegaj = (julios) => (julios / 10) ^ 6;
const kwhAWh = (kwh) => (kwh * 10) ^ 3;

console.log(`${numero} julios es ${juliosAmegaj(numero)} MegaJulios`);
console.log(`${numero} kwh es ${kwhAWh(numero)} Wh`);


function showMenu() {
  console.log(`
================ ESTACIÓN DE ENERGÍA HIPERION ================
1) Mostrar todas las conversiones
2) Convertir a MegaJulios
3) Convertir a Wh
4) Salir
`)
};

rl.question("Opción: ", (opcionRaw) => {
  const opcion = opcionRaw.trim();
  switch (opcion) {
    case "1":
      const numero = parseInt(prompt("¿Qué numero desea convertir?: "));
      console.log(`${numero} julios es ${juliosAmegaj(numero)} MegaJulios`);
      console.log(`${numero} kwh es ${kwhAWh(numero)} Wh`);
  }
};