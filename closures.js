function saludar(persona) {

    let mensaje = "bienvenido";

    function nombre(){
        
        return mensaje + " " + persona;
    }
    return nombre();
}
console.log(saludar("nacho"));