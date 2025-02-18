let personas=[];// arreglo vacio


let verduras = ["cebolla", "jitomate", "lechuga", "aguacate","pimiento","calabaza"] //arreglo con datos

console.log(verduras[2]);

console.log(verduras.length);

console.log("imprimiendo verduras con el ciclo for")

for(let indice = 0; indice < verduras.length; indice++ ){
    console.log(verduras[indice])
}

console.log("metodos de arreglos");

let seres =[]; // arreglo vacio

seres.push('Carlos') //agrega un elemento al final del arreglo
seres.push('Gaby')
seres.push('Ric')
seres.push('Chayo')
seres.push('itzel')

console.log(seres);

seres.pop(); //elimina el ultimo elemento del arreglo

console.log(seres);

seres.unshift('charles'); //agrega un elemento al principio de mi arreglo
seres.unshift('carles');

console.log(seres);

seres.shift(); // elimina el primer elemento del arreglo
console.log(seres);

seres[1] = 'Monica' // modificando un elemento del arreglo
console.log(seres);


