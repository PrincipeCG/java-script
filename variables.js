// var es una forma antigua de declarar variables, let es la forma moderna de declarar variables 

var nombre = "Carlos";

var nombre = "Ricardo";

var nombre = "Jocelyn"; 

console.log(nombre);


// let no permite redeclarar variables, lo que significa que no puedes declarar la misma variable dos veces.

// let tiene un scope de bloque, lo que significa que solo vive en el bloque donde fue declarada. Un bloque es {}

let nombre_1 = "carlos";

let nombre_2 = "ricardo";

let nombre_3 = "joce";

console.log(nombre_1 + " y " + nombre_3);

nombre_2 = "Richie"
console.log(nombre_2);

//conts es una constante que no se puede reasignar el valor

const PI = 3.1416;

PI = 4;  // Esto no se puede hacer

console.log(PI);