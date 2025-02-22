// abstraccion: Definir una clase (plantilla) de una figura geometrica

class Figura{
    constructor(color){ /* el metodo constructor se asegura de que los objetos
        tengan las propiedades necesarias para funcionar*/
        this.color = color;
    }
    // metodos son las acciones que puede realizar un objeto
    calcularArea(){
        throw new Error("el metodo no ha sido implementado.")
    }
    obtenerColor(){
        return this.color;
    }
    miNombre(){
        return"hola soy una figura";
    }
}


//2. Herencia. Creamos subclases especificas apartir de la clase padre

class Circulo extends Figura{
    constructor(color, radio ){
        super(color);
        this.radio = radio 
    }
        calcularArea(){
            return  Math.PI * this.radio * this.radio;
    }
}

class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base
        this.altura = altura
    }
        calcularArea(){
            return this.base * this.altura;
            
    }
}


// crear los objetos (instanciar)
const miCirculo = new Circulo("red",8);
const miRectangulo = new Rectangulo("verde",8, 9);

console.log("color del circulo: ", miCirculo.obtenerColor());
console.log("color del rectangulo : ", miRectangulo.obtenerColor());
console.log("Area del Circulo: ", miCirculo.calcularArea());
console.log("Area del Rectangulo: ", miRectangulo.calcularArea());
console.log(miRectangulo.miNombre());


//4. polimorfismo. un objeto puede hacer el mismo trabajo de forma diferente
function MostrarArea(figura){
    console.log(figura.calcularArea());
}

MostrarArea(miCirculo);
MostrarArea(miRectangulo);