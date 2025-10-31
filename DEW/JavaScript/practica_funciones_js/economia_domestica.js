const apuntes = [
  {
    fecha: "2025-10-01 10:00:00",
    concepto: "salario",
    importe: 2000,
    tipo: "ingreso",
  },
  {
    fecha: "2025-10-02 11:30:00",
    concepto: "alquiler",
    importe: 800,
    tipo: "gasto",
  },
  {
    fecha: "2025-10-03 14:00:00",
    concepto: "supermercado",
    importe: 50,
    tipo: "gasto",
  },
  {
    fecha: "2025-10-05 15:00:00",
    concepto: "servicios",
    importe: 150,
    tipo: "gasto",
  },
  {
    fecha: "2025-10-07 09:00:00",
    concepto: "venta online",
    importe: 300,
    tipo: "ingreso",
  },
];

function saldo() {
  const totalIngresos = apuntes
    .filter((apunte) => apunte.tipo === "ingreso")
    .reduce((sum, apunte) => sum + apunte.importe, 0);
  const totalGastos = apuntes
    .filter((apunte) => apunte.tipo === "gasto")
    .reduce((sum, apunte) => sum + apunte.importe, 0);
  return totalIngresos - totalGastos;
}

function totalPorCategoria(tipo) {
  return apuntes
    .filter((apunte) => apunte.tipo === tipo)
    .reduce((acc, apunte) => {
      acc[apunte.concepto] = (acc[apunte.concepto] || 0) + apunte.importe;
      return acc;
    }, {});
}

function resumenMensual(yyyy_mm) {
  return apuntes
    .filter((apunte) => apunte.fecha.startsWith(yyyy_mm))
    .reduce(
      (acc, apunte) => {
        if (apunte.tipo === "ingreso") {
          acc.ingresos += apunte.importe;
        } else {
          acc.gastos += apunte.importe;
        }
        acc.saldo = acc.ingresos - acc.gastos;
        return acc;
      },
      { ingresos: 0, gastos: 0, saldo: 0 }
    );
}

function lineasFormateadas() {
  return apuntes.map((apunte) => {
    return `${apunte.fecha} | ${apunte.concepto} | ${apunte.tipo} | ${apunte.importe}€`;
  });
}

function agregarApunte(fecha, concepto, importe, tipo) {
  apuntes.push({ fecha, concepto, importe, tipo });
}

function editarApunte(fecha, nuevosDatos) {
  const apunte = apuntes.find((ap) => ap.fecha === fecha);
  if (apunte) {
    Object.assign(apunte, nuevosDatos);
  }
}

function borrarApunte(fecha) {
  const indice = apuntes.findIndex((ap) => ap.fecha === fecha);
  if (indice !== -1) {
    apuntes.splice(indice, 1);
  }
}

function mostrarMenu() {
  console.log("\n====== Economía Doméstica ======");
  console.log("1. Agregar nuevo ingreso o gasto");
  console.log("2. Editar un apunte (busca por fecha)");
  console.log("3. Borrar un apunte (busca por fecha)");
  console.log("4. Mostrar saldo");
  console.log("5. Mostrar total por categoría (ingreso o gasto)");
  console.log("6. Mostrar resumen mensual dada una fecha (yyyy-mm)");
  console.log("0. Salir");
  rl.question("Selecciona una opción: ", manejarOpcion);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  console.log("\n====== Economía Doméstica ======");
  console.log("1. Agregar nuevo ingreso o gasto");
  console.log("2. Editar un apunte (busca por fecha)");
  console.log("3. Borrar un apunte (busca por fecha)");
  console.log("4. Mostrar saldo");
  console.log("5. Mostrar total por categoría (ingreso o gasto)");
  console.log("6. Mostrar resumen mensual dada una fecha (yyyy-mm)");
  console.log("0. Salir");
  rl.question("Selecciona una opción: ", manejarOpcion);
}

function manejarOpcion(opcion) {
  switch (opcion) {
    case "1":
      rl.question(
        "Ingrese fecha (yyyy-mm-dd hh:mm:ss), concepto, importe y tipo (ingreso/gasto) separados por comas: ",
        (respuesta) => {
          const [fecha, concepto, importe, tipo] = respuesta
            .split(",")
            .map((item) => item.trim());
          agregarApunte(fecha, concepto, parseFloat(importe), tipo);
          mostrarMenu();
        }
      );
      break;
    case "2":
      rl.question("Ingrese la fecha del apunte a editar: ", (fecha) => {
        rl.question(
          "Ingrese nuevos datos (concepto, importe, tipo): ",
          (respuesta) => {
            const [concepto, importe, tipo] = respuesta
              .split(",")
              .map((item) => item.trim());
            editarApunte(fecha, {
              concepto,
              importe: parseFloat(importe),
              tipo,
            });
            mostrarMenu();
          }
        );
      });
      break;
    case "3":
      rl.question("Ingrese la fecha del apunte a borrar: ", (fecha) => {
        borrarApunte(fecha);
        mostrarMenu();
      });
      break;
    case "4":
      console.log("Saldo total:", saldo(), "€");
      mostrarMenu();
      break;
    case "5":
      rl.question("Ingrese el tipo (ingreso/gasto): ", (tipo) => {
        const totalCategoria = totalPorCategoria(tipo);
        console.log("Total por categoría:", totalCategoria);
        mostrarMenu();
      });
      break;
    case "6":
      rl.question("Ingrese el mes y año (yyyy-mm): ", (yyyy_mm) => {
        const resumen = resumenMensual(yyyy_mm);
        console.log("Resumen mensual:", resumen);
        mostrarMenu();
      });
      break;
    case "0":
      rl.close();
      break;
    default:
      console.log("Opción no válida. Intenta de nuevo.");
      mostrarMenu();
      break;
  }
}

mostrarMenu();
