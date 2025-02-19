//declaro mi arreglo vacio
let librosLeidos=[];

//Declaro mi funcion agregarLibro

function agregarLibro(tituloLibro){//parametro
    librosLeidos.push(tituloLibro); //arreglamos un elemento al arreglo
}   
//for(i =0 ;i <librosLeidos.length;i ++);

agregarLibro("El hombre en busca del sentido");
agregarLibro("Inquebrantables");
agregarLibro("Habitos atomicos");

console.log(librosLeidos);

//mosntrar los libros leidos 

function mostrarLibrosLeidos(){
    for(i=0; i<librosLeidos.length; i ++){
        console.log(librosLeidos[i])
    }
}

mostrarLibrosLeidos();

console.log("------------");

agregarLibro("La vaca");
agregarLibro("El arte de la seduccion");

mostrarLibrosLeidos();