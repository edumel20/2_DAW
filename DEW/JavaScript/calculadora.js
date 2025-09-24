const operacion = process.argv[2];
const num1 = parseInt(process.argv[3]);
const num2 = parseInt(process.argv[4]);

switch (operacion) {
  case "+":
    console.log(`El resultado de la suma es:  ${num1 + num2}`);
    break;
  case "-":
    console.log(`El resultado de la resta es:  ${num1 - num2}`);
    break;
  case "x":
    console.log(`El resultado de la multiplicación es:  ${num1 * num2}`);
    break;
  case "/":
    console.log(`El resultado de la división es:  ${num1 / num2}`);
    break;
}
