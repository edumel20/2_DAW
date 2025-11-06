const numeros = [3, 7, 2, 9, 5];
const pares = [];

for (numero of numeros) {
  if (numero % 2 == 0) {
    pares.push(numero);
  }
}

console.log(`los números pares de la lista son los siguientes: ${pares}`);
