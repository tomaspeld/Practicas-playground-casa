let amigos = [ "Alan", "Pablo", "Dani", "Ivo"];

let amigosJSON = JSON.stringify(amigos);
console.log(amigosJSON);
let amigosOriginal = JSON.parse(amigosJSON);
console.log(amigosOriginal);

let persona = {
    nombre: "Alan",
    apellido: "Rios",
    edad: 28,
    ciudad: "Barcelona"
};

let personaJSON = JSON.stringify(persona);
console.log(personaJSON);
let personaOriginal = JSON.parse(personaJSON);
console.log(personaOriginal);