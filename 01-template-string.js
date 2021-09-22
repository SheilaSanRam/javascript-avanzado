const nombre=prompt('¿Cuál es tu nombre?');
const edad=prompt('¿Cuál es tu edad?');

console.log('Hola '+ nombre+', ¡saludos! Tu edad es '+edad);

/* Los acentos invertidos se usan para poder imprimir texto y variables juntos */
const saludo= `<h1>Hola ${nombre} ¡saludos!. Tu edad es ${edad} años.</h1>`

document.write(saludo);