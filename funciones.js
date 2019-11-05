// funcion expresada 

let sumar = function( numeroA, numeroB){

return numeroA + numeroB;
}

console.log(sumar(7, 9));




// funcion declarada 

function restar(numeroC, numeroD){

return numeroC - numeroD;
}

console.log(restar(10, 5));


// ejemplo de scope 

let mensaje = "hola";

function saludar(){

    let mensaje = "chau";
return mensaje;

}


console.log(saludar());



































