/* Solcitar número al usuario, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahi mostrar el resultado
 */

let num=parseInt(prompt('Ingresa un número'));
let suma=0;
let elementos=0;
let media=0;
while(num >= 0) {
    elementos++;
    suma=suma+num;
    document.write(num+", ");
    num=parseInt(prompt('Ingresa un número'));
}

media=suma/elementos;

document.write(`<p>La suma es ${suma} y la media es ${media}</p>`);
