
const regionHidrografica = document.getElementById('regionHidrografica');
let cuenca = [];
var id = localStorage.getItem('id');
// var url = 'https://apicambioclimatico.herokuapp.com/api/region_hidrografica/';
var url = 'http://localhost:5000/api/region_hidrografica/';
var total = url.concat(id);







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

        const htmlTabla = cuenca_hidrografica
        .map((region) => {
            switch(id) {
                case '1':
                    return `
                    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/DouglasLino/proyectoCambioClimatico/raw/master/public/tables/text.xlsx' width='100%' height='565px' frameborder='0'> </iframe>
                    `;
                  break;
                case '2':
                    return `
                    <h1> Muestra la otra tabla </h1>
                    `;
                  break;
                default:
                    return `
                    <h1> Error, no se pudo cargar la tabla:( </h1>
                    `;
              }
            
        })
        .join('');
    regionHidrografica.innerHTML = htmlString;
    tabla.innerHTML = htmlTabla;
};

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

loadRegionHidrografica();

// Leer excel
// $('#input-excel').change(function(e){
//     var reader = new FileReader();
//     reader.readAsArrayBuffer(e.target.files[0]);
//     reader.onload = function(e) {
//             var data = new Uint8Array(reader.result);
//             var wb = XLSX.read(data,{type:'array'});
//             var htmlstr = XLSX.write(wb,{sheet:"sheet1", type:'string',bookType:'html'});
//             $('#wrapper')[0].innerHTML += htmlstr;
//     }
// });




