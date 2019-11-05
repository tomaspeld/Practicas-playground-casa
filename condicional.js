let clima = "nublado";
let dia = "martes";

if(clima == "soleado" && dia == "domingo") {
    console.log("lindo dia para pasear");
}else if(clima == "soleado" && dia == "lunes") {
    console.log("podria salir igual");
}else{
    console.log("mejor me quedo en casa estudiando");
}


var edad = 19;
var acceso = "";

if(edad < 16) {
    acceso = "prohibido";
}else if(edad >= 16 && edad <= 18) {
    acceso = "permitido solo acompañado de un mayor";

}else{
    acceso = "permitido";
} console.log(acceso);