const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lengthCounter = rangeContainer.querySelector('h1');
const genereteBtn = document.querySelector('.generator button');
const passwordHeading = document.querySelector('.password-container h1');

const handleChange = () =>{
    lengthCounter.textContent =inputRange.value;

}

const generatePassword = (passwordLength) => {
    let result='';
    let characters ='';

    //obtener las opciones seleccionadas
    const useUppercase = document.querySelector('#uppercase').checked;
    //dentro de la cadena characters se agregan los caracteres Mayusculas
    const useLowecase = document.querySelector('#lowercase').checked;
    //dentro de la cadena characters se agregan los caracteres minusculas
    const useNumbers = document.querySelector('#numbers').checked;
    //dentro de la cadena characters se agregan los caracteres de numeros
    const useSymbols = document.querySelector('#symbols').checked;
    //dentro de la cadena characters se agregan los caracteres de symbols   

    //Creamos un conjubto de caracteres a usar en la contraseña

    if(useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(useLowecase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if(useNumbers) characters += '0123456789';
    if(useSymbols) characters += '!@#$%&*';

    if(characters === ''){
        passwordHeading.textContent = 'selecciona al menos una opcion :)';
        return '';

    }

    //Generador de contraseña aleatorio
    for( let i = 0; i<passwordLength; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    /*multiplicamos por el largo de la cadena de caracteres para obtener un
    numero aleatorio ya que en Math.random() nos da un numero entre 0 y 1*/
    
    }
    console.log(result)
    return result;
    
};
    //Function que imprima la contraseña
    const PrintPassword = (event) =>{
        event.preventDefault(); //previene que el formulario se envie por defecto
        const password = generatePassword(inputRange.value); //genera la contraseña
        if(password){
            passwordHeading.textContent = password; //muestra la contraseña generada
        }
    };

// configurar los eventos
inputRange.addEventListener('input', handleChange);
genereteBtn.addEventListener('click', PrintPassword);
