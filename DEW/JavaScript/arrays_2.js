const jugadores = [
  { nombre: "Ana", puntos: 100 },
  { nombre: "Luis", puntos: 100 },
  { nombre: "Marta", puntos: 100 },
];

function mostrarPuntuaciones() {
  jugadores.forEach((jugador) => {
    console.log(jugador.nombre + ": " + jugador.puntos + " puntos");
  });
}
mostrarPuntuaciones();
