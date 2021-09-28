const $btnD = document.querySelector('#btnD');
const $divDogs = document.querySelector('#dogs');

$btnD.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breed/dachshund/images/random')
        .then(resp => resp.json()).then(data => {
            /* Acá se muestra la respuesta de la API */
            console.log(data);
            /* Aquí crea el elemento imagen */
            const imgDog = document.createElement('img');
            /* Se extrae la información de la URL para la imagen */
            imgDog.src=data.message;
            /* Modifica el ancho de la imagen */
            imgDog.width=400;
            /* Introduce la imagen en el html */
            $divDogs.appendChild(imgDog);
            
        })
});
