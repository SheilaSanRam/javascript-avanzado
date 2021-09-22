/* Mostrar todos los numero divisores de un número introducido. */

let num=parseInt(prompt('Ingresa un número'));
let divisores=[];

for(var i=1;i<=num;i++){
    if(num%i===0){
        divisores.push(i);
    }
}

document.write(`<h4>Los divisores de ${num} son: ${divisores}</h4>`);
