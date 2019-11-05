let laMitad = numero => numero / 2;


console.log(laMitad(8));


let dividir = (numeroA, numeroB) => numeroA / numeroB;

console.log(dividir(20, 4));


let trabajar = dia => {
    if(dia == "sabado" ||  dia == "domingo" ){
        return "no tengo que trabajar";
    }else{
        return "si tengo que trabajar";
    }
}
console.log(trabajar("sabado"));