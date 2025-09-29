const operacion = process.argv[2];
const num1 = parseInt(process.argv[3]);
const num2 = parseInt(process.argv[4]);
let historial = [];

switch (operacion) {
  case "+":
    console.log(`El resultado de la suma es:  ${num1 + num2}`);
    historial.push(`${num1} + ${num2} = ${num1 + num2}`);
    console.log(historial);
    break;
  case "-":
    console.log(`El resultado de la resta es:  ${num1 - num2}`);
    historial.push(`${num1} - ${num2} = ${num1 - num2}`);
    console.log(historial);
    break;
  case "x":
    console.log(`El resultado de la multiplicación es:  ${num1 * num2}`);
    historial.push(`${num1} x ${num2} = ${num1 * num2}`);
    console.log(historial);
    break;
  case "/":
    console.log(`El resultado de la división es:  ${num1 / num2}`);
    historial.push(`${num1} / ${num2} = ${num1 / num2}`);
    console.log(historial);
    break;
  case "%":
    console.log(`El resultado del módulo es: ${num1 % num2}`);
    historial.push(`${num1} % ${num2} = ${num1 % num2}`);
    console.log(historial);
    break;
  case "^":
    console.log(`El resultado de la potencia es: ${Math.pow(num1, num2)}`);
    historial.push(`${num1} ^ ${num2} = ${Math.pow(num1, num2)}`);
    console.log(historial);
    break;
  case "raíz":
    if (num1 < 0) {
      console.log(`El número debe ser positivo`);
      break;
    }
    if (num2 < 0) {
      console.log(`El número debe ser positivo`);
      break;
    } else {
      console.log(`El resultado de la raíz es: ${Math.pow(num1, 1 / num2)}`);
      historial.push(`${num1} ^ 1/${num2} = ${Math.pow(num1, 1 / num2)}`);
      console.log(historial);
      break;
    }
}
