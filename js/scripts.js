/* SCRIPT DOS COOKIES */

let cookiesAccepted = false;

const cookieBanner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");

if (localStorage.getItem("cookiesAccepted")) {

    if (cookieBanner) {
        cookieBanner.style.display = "none";
    }

    cookiesAccepted = true;
}

if (acceptBtn) {

    acceptBtn.addEventListener("click", function () {

        localStorage.setItem("cookiesAccepted", "true");

        if (cookieBanner) {
            cookieBanner.style.display = "none";
        }

        cookiesAccepted = true;

    });

}




/*SCRIPT DO BOTÃO WHATSAPP */


let whatsappShown = false;

window.addEventListener('scroll', function () {

    if (!cookiesAccepted) return;

    var btn = document.getElementById('whatsapp-btn');

    if (!whatsappShown && window.scrollY > window.innerHeight * 0.6) {
        btn.classList.add('show');
        whatsappShown = true;
    }

});



window.addEventListener("load", function () {

    setTimeout(function () {

        const preloader = document.getElementById("preloader");

        if (preloader) {
            preloader.classList.add("hidden");
        }

    }, 1200);

});



// Desativa restauração automática de scroll do navegador
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Sempre iniciar no topo ao carregar
window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});
