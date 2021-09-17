

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


