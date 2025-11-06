let numero = 0;
let intentos = 0;

while (numero !== 9) {
  numero = Math.floor(Math.random() * 10) + 1;
  intentos++;
  console.log(`intento nº ${intentos}`);
}

console.log(`Se han necesitado ${intentos} para obtener el número 9`);
