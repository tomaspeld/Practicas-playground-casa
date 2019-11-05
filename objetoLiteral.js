let curso = {

cantidadDeAlumnos : 32,
docentes : 'nacho, javi',
horario : '8.30 a 12.30 hs.',
notificaciones : function(){

    return " el horario de tu comision es: " + this.horario;
}

}

//console.log(curso);

//console.log("la cantidad de alumnos de este curso es " + curso.cantidadDeAlumnos);

//console.log(curso.notificaciones());
 
function Curso(cantidadDeAlumnos, docentes, horario){
this.cantidadDeAlumnos = cantidadDeAlumnos,
this.docentes = docentes,
this.horario = horario

}

let curso1 = new Curso( 40, "javi y lando", " 18.30 a 22 hs");
let curso2 = new Curso(13, "ale y sergi", " 14 a 18 hs ");
console.log(curso1);
console.log(curso2);
