

//Cerrar automaticamente el menu(mobile) al hacer click en algun item

function myFunction(x) {
    if (x.matches) { // If media query matches
        const navLinks = [].slice.call(document.querySelectorAll('.nav-link'))
        const menuToggle = document.getElementById('navbarNavAltMarkup')

        var bsCollapse = new bootstrap.Collapse(menuToggle, {
            toggle: false
        })

        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() })
        })
    } else {
    }
}

var x = window.matchMedia("(max-width: 990px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Este campo no puede estar vacío.");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})

//Internationalization
var aLangKeys=new Array();

aLangKeys['en']=new Array();
aLangKeys['es']=new Array();

aLangKeys['en']['home']='Home';
aLangKeys['en']['news']='News ';
aLangKeys['en']['plans']='Plans';
aLangKeys['en']['about']='About us';
aLangKeys['en']['more']='More infromation';
aLangKeys['en']['gamer']='LETS MAKE THE WORLD MORE GAMER';
aLangKeys['en']['join']='Join and connect to the competitive video game scene and help us grow this community';
aLangKeys['en']['button']='Join our community';
aLangKeys['en']['amateur']='Amateur Gamer';
aLangKeys['en']['large-text']='You can register and share your achievements and video games that you play so that you have a better chance of belonging to professional gaming teams.';
aLangKeys['en']['streamer']='Amateur Streamer';
aLangKeys['en']['large-text-2']='Improve your skills as a streamer to provide the best quality in your direct, or as a gamer to polish your skills and give your best in each tournament.';
aLangKeys['en']['tips']='Tips, Tasks and Torunaments';
aLangKeys['en']['large-text-3']='Improve your skills by following tasks and attending tournaments organized by the same community.';
aLangKeys['en']['video']='Video About The Product';
aLangKeys['en']['choose']='Choose your plan';
aLangKeys['en']['things']='Features: Gamer Amateur - Streamer Amateur - Tips and tasks';
aLangKeys['en']['amount']='USD/month';
aLangKeys['en']['selected']='SELECT';
aLangKeys['en']['select-2']='SELECT';
aLangKeys['en']['things-2']='Features: All features from Free Plan - Matchmaking';
aLangKeys['en']['about-us']='ABOUT US';
aLangKeys['en']['request']='Request Information';
aLangKeys['en']['name']='Name';
aLangKeys['en']['last-name']='Last Name';
aLangKeys['en']['city']='City';
aLangKeys['en']['email']='Email';
aLangKeys['en']['send']='Send';
aLangKeys['en']['social-media']='SOCIAL NETWORKS';

aLangKeys['es']['home']='Principal';
aLangKeys['es']['news']='Noticias';
aLangKeys['es']['plans']='Planes';
aLangKeys['es']['about']='Sobre Nosotros';
aLangKeys['es']['more']='Mas Informacion';
aLangKeys['es']['gamer']='HAGAMOS EL MUNDO MAS GAMER';
aLangKeys['es']['join']='Unete y conéctate a la escena competitiva de los videojuegos y ayúdenos a hacer crecer esta comunidad';
aLangKeys['es']['button']='Unete a nuestra comunidad';
aLangKeys['es']['amateur']='Gamer Amateur';
aLangKeys['es']['large-text']='Puedes registrarte y compartir tus logros y videojuegos a los que juegas para que tengas una mejor oportunidad de conocer a mas gamers que compartan tu gustos.';
aLangKeys['es']['streamer']='Streamer Amateur';
aLangKeys['es']['large-text-2']='Mejora tus habilidades como streamer para brindar la mejor calidad en tu directo, o como jugador para pulir tus habilidades y dar lo mejor de ti en cada torneo.';
aLangKeys['es']['tips']='Tips, Tareas y Torneos';
aLangKeys['es']['large-text-3']='Mejora tus habilidades siguiendo tareas y asistiendo a torneos organizados por la misma comunidad.';
aLangKeys['es']['video']='Video Sobre El Producto';
aLangKeys['es']['choose']='Selecciona un plan';
aLangKeys['es']['things']='Beneficios: Gamer Amateur - Streamer Amateur - Tips, Tareas y Torneos';
aLangKeys['es']['amount']='USD/por mes';
aLangKeys['es']['selected']='SELECCIONAR';
aLangKeys['es']['select-2']='SELECCIONAR';
aLangKeys['es']['things-2']='Beneficios: Todo lo mencionado en el plan Free - Matchmaking';
aLangKeys['es']['about-us']='SOBRE NOSOTROS';
aLangKeys['es']['request']='Solicitar Información';
aLangKeys['es']['name']='Nombre';
aLangKeys['es']['last-name']='Apellido';
aLangKeys['es']['city']='Ciudad';
aLangKeys['es']['email']='Correo';
aLangKeys['es']['send']='Enviar';
aLangKeys['es']['social-media']='REDES SOCIALES';

$(document).ready(function() {

    // onclick behavior
    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id

        // tranlate all translatable elements
        $('.tr').each(function(i){
          $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
        });
    } );
});
