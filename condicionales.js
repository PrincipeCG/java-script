//tipo de mascotas "pajaro" "perro" "Avestrus"

//condicionales "jaulaS" "jaulaM" "jaulaG"

let tipoDeMascota = "perrucho";

if (tipoDeMascota === "pajaro"){
    console.log("Necesitas una Jaula S")
} else if (tipoDeMascota === "perro"){
    console.log("Necesitas una Jaula M")
} else if (tipoDeMascota === "Avestrus"){
    console.log("Necesitas una Jaula G")
} else{
    console.log("no hay de ese tamaño")
}

//// Semaforo color = Rojo, Amarillo, Verde 
// Rojo = Alto, Amarillo = Detente, Verde = Siga


let Semaforo = "Verde";

if (Semaforo === "Verde"){
    console.log("Adelante")
} else if (Semaforo === "Amarillo"){
    console.log("Detengase")
} else if (Semaforo === "Rojo"){
    console.log("Alto")
} 

console.log("");
//permiso de conducir

let Edad = 17 ;
let Licencia = false ;

if( Edad >= 18 && Licencia){
    console.log("Puede conducir");
}  else if (Edad < 18 && Licencia) {
    console.log("Espera hasta los 18");
}   else if (Edad >= 18 && !Licencia) {
    console.log("Saca tu permiso de conducir");
}   else {
    console.log("espera hasta los 18 y saca tu permiso");
}

console.log("")

// Para poder obtener una beca
// Agregar el mensaje de - Te hacen falta creditos 
// Agregar el mensaje de - Tu promedio debe subir

let creditos = 0; // Minimo 10 creditos
let promedio = 7.5; // Minimo 8.5

if(creditos >= 10 && promedio >= 8.5){
    console.log("Tienes derecho a una beca");
}else if( creditos <10 && promedio >= 8.5){
    console.log("Te hacen falta creditos");
} else if( creditos >=10 && promedio < 8.5){
    console.log("Tu promedio debe subir");
} else {
    console.log("no tienes derecho a una beca");
}


console.log("");

let nota = 30.0; // Puedes cambiar este valor para probar diferentes casos

if (nota === "") {
    console.log("No pusiste la nota");
} else if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 75) {
    console.log("Bien");
} else if (nota >= 60) {
    console.log("Suficiente");
} else {
    console.log("No apruebas");
}