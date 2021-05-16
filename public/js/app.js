
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.nombre.toLowerCase().includes(searchString) 
            // || character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        // const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        const res = await fetch('https://apicambioclimatico.herokuapp.com/api/region_hidrografica');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (regiones) => {
    const htmlString = regiones
        .map((region) => {
            return `
            <li class="character" onClick="
                localStorage.setItem('id', '${region.id}');
                location.href='region_hidrografica.html'
            ">
                <h2>${region.nombre}</h2>
                <img src="${region.imagen}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

function aber(){
    localStorage.setItem('id', '${region.id}');
    // location.href='region_hidrografica/${region.id}'
    var cat = localStorage.getItem('id');
    console.log(cat);
}