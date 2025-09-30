let estudiantes = [];

let estudiante = new Object();
estudiante.nombre = "Pepe";
estudiante.casa = "Howarts";

function Estudiante(nombre, casa, edad) {
  this.nombre = nombre;
  this.casa = casa;
  this.presentarse = () => {
    console.log(`Hola, me llamo ${this.nombre}`);
  };
}

const nuevoEstudiante = new Estudiante("Eduado", "Howarts", "25");
console.log(nuevoEstudiante);

function añadirEstudiante(estudiante) {
  estudiantes.push(estudiante);
}

añadirEstudiante(nuevoEstudiante);
console.log(estudiantes);
