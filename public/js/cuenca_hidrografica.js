
const regionHidrografica = document.getElementById('regionHidrografica');
let cuenca = [];
var id = localStorage.getItem('id');
// var url = 'https://apicambioclimatico.herokuapp.com/api/region_hidrografica/';
var url = 'api/region_hidrografica/';
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

                <div container><img class="img-fluid p-2 mx-auto d-block" style="width:80%" src="${region.imagen_1}"></img></div>
                
                <h2 class="section-heading"></h2>
                <p class="text-center" >Puedes ver el informe completo haciendo clic <a href="https://cidoc.marn.gob.sv/documentos/informe-de-calidad-de-agua-de-los-rios-de-el-salvador-ano-2020/" target="_blank">aquí</a>.</p>

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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.3079275446944!2d-88.95065204954116!3d13.940261990177737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU2JzI0LjkiTiA4OMKwNTYnNTQuNSJX!5e0!3m2!1ses-419!2ssv!4v1622584707897!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>                    `;
                  break;
                case '2':
                    return `
                    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/DouglasLino/proyectoCambioClimatico/raw/master/public/tables/rio_paz.xlsx' width='100%' height='565px' frameborder='0'> </iframe>

                    <h2 class="section-heading">Ubicación</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.0150378852259!2d-90.00082885052704!3d13.955024098933015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU3JzE4LjQiTiA5MMKwMDAnMDEuNiJX!5e0!3m2!1ses-419!2ssv!4v1622584141999!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    `;
                  break;
                case '3':
                    return `
                    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/DouglasLino/proyectoCambioClimatico/raw/master/public/tables/rio_cara_sucia.xlsx' width='100%' height='565px' frameborder='0'> </iframe>
                    
                    <h2 class="section-heading">Ubicación</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.6214179808618!2d-89.98590951192016!3d13.809849999391405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ4JzM1LjUiTiA4OcKwNTknMDcuMyJX!5e0!3m2!1ses-419!2ssv!4v1622644900386!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>                    
                    `;
                  break;
                case '4':
                    return `
                    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/DouglasLino/proyectoCambioClimatico/raw/master/public/tables/rio_grande_sonsonate.xlsx' width='100%' height='565px' frameborder='0'> </iframe>
                    
                    <h2 class="section-heading">Ubicación</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.4067791325783!2d-89.37579022277534!3d13.510609995644835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMwJzM4LjIiTiA4OcKwMjInMjcuNSJX!5e0!3m2!1ses-419!2ssv!4v1622349849399!5m2!1ses-419!2ssv" width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

                    `;
                  break;
                case '5':
                    return `
                    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/DouglasLino/proyectoCambioClimatico/raw/master/public/tables/rio_mandinga.xlsx' width='100%' height='565px' frameborder='0'> </iframe>
                    
                    <h2 class="section-heading">Ubicación</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.0617493712716!2d-89.70609168376012!3d13.531801990490141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMxJzU0LjUiTiA4OcKwNDInMTQuMSJX!5e0!3m2!1ses-419!2ssv!4v1622646052699!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

                    `;
                  break;
                case '6':
                    return `
                    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/DouglasLino/proyectoCambioClimatico/raw/master/public/tables/rio_jiboa_estero_jaltepeque.xlsx' width='100%' height='565px' frameborder='0'> </iframe>

                    <h2 class="section-heading">Ubicación</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1940.3504963571545!2d-89.02617860386871!3d13.430825998030066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI1JzUxLjAiTiA4OcKwMDEnMzAuNiJX!5e0!3m2!1ses-419!2ssv!4v1622584772879!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    `;
                  break;
                case '7':
                    return `
                    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/DouglasLino/proyectoCambioClimatico/raw/master/public/tables/bahia_de_jiquilisco.xlsx' width='100%' height='565px' frameborder='0'> </iframe>

                    <h2 class="section-heading">Ubicación</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.3006340659763!2d-88.6142370495485!3d13.26914399061534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE2JzA4LjkiTiA4OMKwMzYnNDMuNCJX!5e0!3m2!1ses-419!2ssv!4v1622646564419!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    `;
                  break;
                case '8':
                    return `
                    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/DouglasLino/proyectoCambioClimatico/raw/master/public/tables/rio_grande_san_miguel.xlsx' width='100%' height='565px' frameborder='0'> </iframe>
                    
                    <h2 class="section-heading">Ubicación</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1941.3658981600788!2d-88.25024717311436!3d13.304687143714606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE4JzE1LjEiTiA4OMKwMTQnNTYuNyJX!5e0!3m2!1ses-419!2ssv!4v1622584866529!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    `;
                  break;
                case '9':
                    return `
                    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/DouglasLino/proyectoCambioClimatico/raw/master/public/tables/rio_sirima.xlsx' width='100%' height='565px' frameborder='0'> </iframe>
                    
                    <h2 class="section-heading">Ubicación</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.23171609071!2d-87.81072712733616!3d13.459808994417031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI3JzM1LjMiTiA4N8KwNDgnMzIuNiJX!5e0!3m2!1ses-419!2ssv!4v1622646785427!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    `;
                  break;
                case '10':
                    return `
                    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/DouglasLino/proyectoCambioClimatico/raw/master/public/tables/rio_goascoran.xlsx' width='100%' height='565px' frameborder='0'> </iframe>

                    <h2 class="section-heading">Ubicación</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.413499667698!2d-87.75102490208542!3d13.693387995021745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQxJzM2LjIiTiA4N8KwNDQnNTguMCJX!5e0!3m2!1ses-419!2ssv!4v1622584975040!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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




