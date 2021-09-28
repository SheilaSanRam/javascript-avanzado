/* Funciones de flecha 
 se le llama flecha por => 
 Solo se puede acceder a la función flecha después de que se creó. */


/* Forma tradicional */
function suma(num1,num2){
    return num1+num2;
}

/* Forma flecha */

const suma1 = (num1,num2) => {
    return num1+num2;
}

document.write(`<p>${suma1(5,3)}</p>`)