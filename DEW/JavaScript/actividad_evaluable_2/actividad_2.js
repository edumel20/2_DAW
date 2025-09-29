const readline = require("readline");

// Ranking de cazadores
let cazadores = [
  { nombre: "Geralt", puntos: 95 },
  { nombre: "Lambert", puntos: 70 },
  { nombre: "Eskel", puntos: 80 },
  { nombre: "Vesemir", puntos: 85 },
  { nombre: "Ciri", puntos: 100 },
];

// Crear la interfaz de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Preguntar al usuario
const preguntarOpcion = () => {
  rl.question(
    "Ordenar por:\n1. Nombre\n2. Puntos\n3. Agregar\n4. Eliminar\n",
    (opcion) => {
      procesarOpcion(opcion);
    }
  );
};

const procesarOpcion = (opcion) => {
  switch (opcion) {
    case "1":
      cazadores.sort((a, b) => a.nombre.localeCompare(b.nombre));
      console.log("Cazadores ordenados por nombre.");
      break;
    case "2":
      cazadores.sort((a, b) => b.puntos - a.puntos);
      console.log("Cazadores ordenados por puntos.");
      break;
    case "3":
      agregarCazador();
      return;
    case "4":
      eliminarCazador();
      return;
    default:
      console.log("Opción no válida");
      preguntarOpcion();
      return; // Salimos si la opción no es válida
  }
  console.table(cazadores);
  rl.close(); // cerrar readline si se completó la opción
};

// Función para agregar un cazador
const agregarCazador = () => {
  rl.question("Ingrese el nombre del cazador a agregar: ", (nombre) => {
    rl.question("Ingrese los puntos del cazador a agregar: ", (puntos) => {
      cazadores.push({ nombre, puntos: parseInt(puntos) });
      console.log(`Cazador ${nombre} agregado.`);
      console.table(cazadores);
      rl.close();
      egar;
    });
  });
};

const eliminarCazador = () => {
  rl.question("Ingrese el nombre del cazador a eliminar: ", (nombre) => {
    cazadores = cazadores.filter(
      (cazador) => cazador.nombre.toLowerCase() !== nombre.toLowerCase()
    );
    console.log(`Cazador ${nombre} eliminado (si existía).`);
    console.table(cazadores);
    rl.close();
  });
};

preguntarOpcion();
