let fechaActual = new Date(1990,9,10);
let disDeLaSemana = fechaActual.getDay();
let dia = fechaActual.getDate();
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Dicimebre"] ;

console.log("es el " + dia + " de " + (meses[mes]) + " de " + anio);
