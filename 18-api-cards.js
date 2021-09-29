/* Selecciona el espacio info para añadir la carta */
const $info = document.querySelector('#info');

fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then(response => response.json()).then(datos =>{
        //La información viene en un arreglo de 50 elementos
        for(var i=0;i<datos.length;i++){
            /* Se crea un nuevo elemento div para ingresar la carta */
            let nuevoElemento=document.createElement('div');
            /* el elemento carta será a 3 columnas */
            nuevoElemento.className='col-3';
            /* Aquí se define la información de la carta  */
            let mensaje=
            `<div class="card" style="width: 100%;">
                <img src="${datos[i].url}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${datos[i].title}</h5>
                </div>
             </div>`;
            /* Se añade la carta en el elemento contenedor  */
            nuevoElemento.innerHTML=mensaje;
            /* Se apilan las cartas dento del contenedor principal */
            $info.appendChild(nuevoElemento);
        } 
}).catch(err => console.log(err));
