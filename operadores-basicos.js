// Declaro 2 valores

let valor_1 = 27; 
let valor_2 = 4;

// Operaciones basicas

let suma = valor_1 + valor_2;
console.log(suma);

let resta = valor_1 - valor_2;
console.log(resta);

let multiplicacion = valor_1 * valor_2;
console.log(multiplicacion);

let division = valor_1 / valor_2;
console.log(division);

let modulo = valor_1 % valor_2; 
console.log(modulo); 

let exponencial = valor_1 ** valor_2;
console.log(exponencial);
console.log("");
// Operadores de comparación

let numero1 = 3; // Number
let numero2 = "3"; // String 

console.log(numero1 == numero2); // comparacion debil

console.log(numero1 === numero2); // comparacion estricta

console.log("");

//! diferencia debil 
let x = 5;

let y = "5";

console.log(x != y); // false, porque convierte "5" a número y los considera iguales

//!diferencia estricta

console.log(x !== y); // true, porque uno es número y el otro string
console.log("");

console.log("Operadores logicos y de comparacion:");

console.log(10 > 4); // Mayor que
console.log(2 < 1); // Menor que
console.log(10 >= 10); // Mayor o igual que
console.log(10 <= 10); // Menor o igual que
console.log("");

//la respuesta sera un valor boleano

console.log(15 != 15); // false por que es el mismo 
console.log("");


console.log("AND: && ");
console.log("");
// Para poder entrar a un antro 

let edad = 17;
let identificacion = true;

console.log(edad >= 18 && identificacion );

// OR ||   
// Devuelve true si al menos una de las condiciones es verdadera. Solo devuelve false si todas son falsas.
let esMayorDeEdad = false;
let esEstudiante  = true;

console.log(esMayorDeEdad || esEstudiante);

//NOT (!)
//Este operador invierte el valor de una condición. Si es true, la convierte en false, y viceversa.

let esFinDeSemana = true;

console.log(!esFinDeSemana); // false, porque invierte el valor

console.log("Combinando Operadores")

let edad1 = 16;

let tieneMembresia = false;

let estaAcompañadoPorAdulto = true;

console.log((edad1 >= 18 && tieneMembresia) || estaAcompañadoPorAdulto); 

// true, porque aunque no cumple las primeras dos condiciones, está acompañado por un adulto


// suma acumulativa
let calificacion = 9; 
let calificacion1 = 10; 
let calificacion2 = 3; 
let calificacion3 = 7;
let calificacion4 = 8; 

calificacion += 10; 
console.log(calificacion);