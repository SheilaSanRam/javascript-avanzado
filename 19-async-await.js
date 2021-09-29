const $btnC = document.querySelector('#btnC');
const $divCats = document.querySelector('#cats');

$btnC.addEventListener('click', async() => {
    const resp= await fetch('https://api.thecatapi.com/v1/images/search');
    const data= await resp.json();

            const imgCat = document.createElement('img');
            imgCat.src = data[0].url;
            imgCat.width=250;
            $divCats.appendChild(imgCat);
});
