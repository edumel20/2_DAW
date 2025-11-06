let numero = prompt("Introduzca un número: ");
do {
  console.log(`El número ${numero} no es un número positivo`);
  numero++;
} while (numero < 0);

console.log(`El número ${numero} es un número positivo`);
