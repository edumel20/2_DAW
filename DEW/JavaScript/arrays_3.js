let peliculas = [];
let seleccionada = null;

function agregarPelicula(pelicula) {
  let clean_pelicula = pelicula.trim();
  if (
    typeof clean_pelicula !== "string" ||
    clean_pelicula == "" ||
    clean_pelicula == null ||
    clean_pelicula == undefined
  ) {
    return;
  }
  peliculas.push(clean_pelicula);
}

agregarPelicula("007");
agregarPelicula("Aliens el 8º pasajero");
agregarPelicula("Forrest Gump");

function borrarPelicula(pelicula) {
  const indx = peliculas.indexOf(pelicula);
  peliculas.splice(indx, 1);
}

borrarPelicula("007");

function mostrarPeliculas(peliculas) {
  peliculas.forEach((p) => console.log(p));
}

// Salida a la consola:
console.log(peliculas);
mostrarPeliculas(peliculas);
