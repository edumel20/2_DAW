// Cómo crear un objeto en JavaScript:

let persona = new Object();
persona.nombre = "Ana";
persona.edad = 25;
persona.saludar = function () {
  console.log(
    `Hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`
  );
};
