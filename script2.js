function cambiarTexto(){
    let titulo = document.getElementById("titulo");

    titulo.textContent ="Hola, desde el DOM";
}

/*seleccion los elementos de la clase texto,
luego usamos un bucle para cambiar color de 
todos los parrafos seleccionados*/

function cambiarColor(){
    let parrafos = document.getElementsByClassName("texto");
    for (let i = 0; i <parrafos.length ; i++){
        parrafos[i].style.color= "blue"
    }
}

/*seleccionamos todos los elementos p y despues
indicamos mediante el indice cual tomaremos [] */

function ocultarParrafo(){
    let segundoParrafo= document.getElementsByTagName("p")[4];
    segundoParrafo.style.display="none";
}

/*selecciona el primer parrafo que se encuentra dentro del div */   
function cambiarTextoDiv(){
    let textoDiv = document.querySelector("div p");
    textoDiv.textContent= "Texto cambiado dentro del Div";  
}

/*selecciona todos los elementos de li en 
la pagina y cambia fondo de color*/

function marcarItems(){
    let items =document.querySelectorAll("li")
    items.forEach ( item =>{
        item.style.backgroundColor = "yellow";
    });
}

let formulario = document.getElementById("miFormulario");
let mensaje = document.getElementById("mensaje");

formulario.addEventListener('submit', function(event){
    event.preventDefault(); // previene que se recarge la pagina
    let nombre = document.getElementById("nombre").value;

    mensaje.innerHTML = "gracias por enviar " + nombre + "!";
});