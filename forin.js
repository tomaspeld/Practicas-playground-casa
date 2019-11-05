// For in

let persona = {
nomnre: "Tomas",
apellido: "Peld",
edad:30
};

for(const llave in persona){
  console.log("en el atributo " + llave + "se encuentra el valor " + persona[llave]);
 
}

// For of

let notas = [6,5,4,3,6,7,8,4];

for(vueltas of notas){
    console.log(vueltas);
}

