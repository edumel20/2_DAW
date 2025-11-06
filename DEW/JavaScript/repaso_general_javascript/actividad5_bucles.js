let n = 40;
let factorial = 1;

if (n <= 0) {
  console.log(`No se puede hacer un factorial de ${n}.`);
} else {
  let contador = n;

  console.log(`Calculando el factorial de ${n}: `);

  while (contador > 1) {
    console.log(`${factorial} * ${contador} = ${factorial * contador}`); // aquí se muestra el proceso
    factorial *= contador;
    contador--;
  }
  console.log(`El factorial de ${n} es ${factorial}.`);
}
