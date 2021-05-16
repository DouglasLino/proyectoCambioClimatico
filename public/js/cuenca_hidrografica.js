
const regionHidrografica = document.getElementById('regionHidrografica');
let cuenca = [];
var id = localStorage.getItem('id');
var url = 'https://apicambioclimatico.herokuapp.com/api/region_hidrografica/';
var total = url.concat(id);




const loadRegionHidrografica = async () => {
    try {
        // const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        const res = await fetch(total);
        hpCharacters = await res.json();
        displayCuenca(hpCharacters);
        console.log(res);
    } catch (err) {
        console.error(err);
    }
};


const displayCuenca = (cuenca_hidrografica) => {
    const htmlString = cuenca_hidrografica
        .map((region) => {
            return `
            <li class="character"" >
                <h2>${region.nombre}</h2></br>
                <p>${region.agua_cruda_titulo}</p>
                <img src="${region.imagen}"></img>
            </li>
        `;
        })
        .join('');
    regionHidrografica.innerHTML = htmlString;
};

loadRegionHidrografica();