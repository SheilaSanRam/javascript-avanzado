const $btnC = document.querySelector('#btnC');
const $divCats = document.querySelector('#cats');

$btnC.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json()).then(data => {
            console.log(data);

            const imgCat = document.createElement('img');
            imgCat.src = data[0].url;
            imgCat.width=250;
            $divCats.appendChild(imgCat);
            /* document.body.append(imgCat); */
        })
});



/* Desestructuración
    Se usa para extraer elementos de un arreglo u objeto
    arreglo[]--- objeto{}
    const [cat] = data;
    const cat = data[0];
    console.log(cat);
    const { url } = cat;
*/