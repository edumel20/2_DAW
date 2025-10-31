const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function bienvenida(name, m) {
  console.log(`Bienvenido ${name}`);
  m();
}

function menu() {
  console.log("1.- Mensaje de bienvenida \n2.- Salir");
  rl.question("Elige una opción: ", (opc) => {
    switch (opc) {
      case "1":
        rl.question("Dime tu nombre: ", (name) => {
          bienvenida(name, menu);
        });
        break;
      case "2":
        console.log("Hasta luego...");
        rl.close();
        break;
    }
  });
}
menu();
