/* 
Arreglos
Estructura de datos
*/

/* Declración de arreglos */
const arreglo=[];
const arreglo2=new Array();

let lenguajes=['JavaScript','PHP','Java','Python','C#',
             'C++','Scala','Rust','Ruby','Cobol',];

/* forEach: permite recorrer cada elemento de un arreglo*/

document.write(`<ul>`);

lenguajes.forEach(function(lenguaje,index) {    
    document.write(`<li>${index} - ${lenguaje}</li>`);
});
document.write(`</ul>`);

/* .lenght da el tamaño del arreglo */
console.log(lenguajes.length);

/* Map, crea un arreglo con los resultados */

let numeros = Array(2,3,4,27,19,12);
let numeros2=numeros.map(function(numero){
    return numero*2;
});

console.log(numeros);
console.log(numeros2);

/* Includes: busca algo dentro del arreglo y devuelve verdadero */
console.log(lenguajes.includes('PHP'));
console.log(lenguajes.includes('Go'));

/* Filter: crea un nuevo arreglo con todos los elementos que cumplan una condición */
/* La función dentro de un método se conoce como función anónima */
let filtrados=numeros.filter(function(numero){
    if(numero>10){
        return numero;
    }
});

console.log(filtrados);

