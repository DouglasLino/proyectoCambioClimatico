
const regionHidrografica = document.getElementById('regionHidrografica');
let cuenca = [];
var id = localStorage.getItem('id');
var url = 'https://apicambioclimatico.herokuapp.com/api/region_hidrografica/';
// var url = 'http://localhost:5000/api/region_hidrografica/';
var total = url.concat(id);







const displayCuenca = (cuenca_hidrografica) => {
    
    const htmlString = cuenca_hidrografica
        .map((region) => {
            return `
                <p>${region.descripcion}</p>

                <h2 class="section-heading">Calidad de agua del ${region.nombre}</h2>
                <p>${region.descripcion_tabla}</p>
                <div id="tabla"></div>

                <h2 class="section-heading">${region.agua_cruda_titulo}</h2>
                <p>${region.agua_cruda_descripcion}</p>

                <h2 class="section-heading">${region.agua_riego_titulo}</h2>
                <p>${region.agua_riego_descripcion}</p>

                <h2 class="section-heading">${region.agua_consumo_titulo}</h2>
                <p>${region.agua_consumo_descripcion}</p>

                <h2 class="section-heading">${region.agua_recreativas_titulo}</h2>
                <p>${region.agua_recreativas_descripcion}</p>

                <h2 class="section-heading">${region.agua_CCME_titulo}</h2>
                <p>${region.agua_CCME_descripcion}</p>

                <div><img class="img-fluid p-2" src="${region.imagen_1}"></img></div>

        `;
        })
        .join('');

    const htmlheader = cuenca_hidrografica
        .map((region) => {
            return `

           
            <header class="masthead" style="background-image: url('${region.imagen_card}')">
               <div class="container position-relative px-4 px-lg-5">
                   <div class="row gx-4 gx-lg-5 justify-content-center">
                       <div class="col-md-9 col-lg-9 col-xl-9">
                           <div class="post-heading col-auto text-center">
                               <h1>${region.nombre}</h1>
                           </div>
                       </div>
                   </div>
               </div>
           </header>

                
        `;
        })
        .join('');

        const htmlTabla = cuenca_hidrografica
        .map((region) => {
            switch(id) {
                case '1':
                    return `
                    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/DouglasLino/proyectoCambioClimatico/raw/master/public/tables/rio_lempa.xlsx' width='100%' height='565px' frameborder='0'> </iframe>

                    <h2 class="section-heading">Ubicación</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.4067791325783!2d-89.37579022277534!3d13.510609995644835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMwJzM4LjIiTiA4OcKwMjInMjcuNSJX!5e0!3m2!1ses-419!2ssv!4v1622349849399!5m2!1ses-419!2ssv" width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
    header.innerHTML = htmlheader;
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




