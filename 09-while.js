/* Ciclo while
Nos permite repetir código mientras una condición sea verdadera */

/* let num1= parseInt(prompt('Ingresa un número'));

/* isNaN hace la validación para comprobar que num1 es un número */

/*while(isNaN(num1)){
    num1= parseInt(prompt('Ingresa un número'));
} */

/* let num=parseInt(prompt('Adivina el número'));
const num_secreto=20;
let intentos=1;

while(num!==num_secreto){
    console.log("No adivinaste el número secreto, intenta de nuevo");
    console.log(`Intento:${intentos}`);
    intentos++;
    num=parseInt(prompt('Adivina el número'));
}

console.log('Felicidades, encontraste el número secreto'); */

let num=parseInt(prompt('Ingresa un número'));

do {
    document.write(`<p>El número introducido es ${num}</p>`);
    num=parseInt(prompt('Ingresa un número'));
}
while(num > 5);
