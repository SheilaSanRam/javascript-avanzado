/* Fetch nos permite hacer peticiones http dsde javascript */
/* Trabaja de manera asíncrona, no carga los datos de inmediato y envia promesas. (Espera la respuesta) */

const peticion= fetch('https://jsonplaceholder.typicode.com/todos/1')
/* Cuando la promesa se cumpla Queremos la respuesta en JSON (JavaScript Object Notation) DEvuelve una promesa*/
.then(resp => resp.json()).then(data=>{
    console.log(data);
}).catch(e=>{
    console.log(e);
});
/*.then Cuando se cumpla la promesa anterior: */
/* .catch detecta cuando hay un error para obtener la promesa */

console.log(peticion);


