// ejercicio de suma de 5 en 5 hasta llegar al 999

let numero= 999;

let contador=1;

while (contador <= numero){
    if(contador %5 === 0){
        console.log(contador);
    }
    contador++;
}

console.log("fin del programa");
//numeros impares

let numero2=35;

for(let indice = 0; indice <= numero2; indice++){
    if(indice %2 !==0){
        console.log(indice);
    }
}

//imprimir los numeros del 1 al 10

let inicio = 0; //inicializacion 
//bucle while se ocuopa cuando no sabemos cuantas veces se va a repetir el codigo
while(inicio <=10){ //condicon
    console.log(inicio); //codigo a iterar
    inicio++;
}

console.log("fin del programa");

// bucle for se ocupa cuando ya sabemos cuanras veces se va a repetir
//para arreglos

for (let i = 1; i <= 10; i++){
    console.log(i); //imprimiendo el valor actual de i
}