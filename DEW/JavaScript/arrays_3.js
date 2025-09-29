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
  peliculas.push(pelicula);
}

agregarPelicula("007");
console.log(peliculas);
