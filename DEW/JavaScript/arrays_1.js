// EJEMPLO_1

let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros);
numeros.forEach((num) => console.log(num));

// EJEMPLO_2

const miCadena = ["Hola ", "me", " llamo", " Eduardo"];
miCadena[3] = "Pepe";
console.log(miCadena);

// EJEMPLO_3: mostrar el índice:

const indice_pos = miCadena.indexOf("me");
console.log(indice_pos);
