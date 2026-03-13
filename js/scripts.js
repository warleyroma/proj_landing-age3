/* SCRIPT DOS COOKIES */

let cookiesAccepted = localStorage.getItem("cookiesAccepted") === "true";

function initCookieBanner() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");

    if (!cookieBanner || !acceptBtn) {
        return false;
    }

    if (cookiesAccepted) {
        cookieBanner.style.display = "none";
        return true;
    }

    if (localStorage.getItem("cookiesAccepted")) {
        cookiesAccepted = true;
        cookieBanner.style.display = "none";
        return true;
    }

    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookiesAccepted = true;
        cookieBanner.style.display = "none";
    });

    return true;
}

function waitForCookieBanner(retries = 30) {
    if (initCookieBanner()) {
        return;
    }
    if (retries <= 0) {
        console.warn("Cookie banner elements not found after retries.");
        return;
    }
    setTimeout(function () {
        waitForCookieBanner(retries - 1);
    }, 100);
}

window.addEventListener("load", function () {
    waitForCookieBanner();
});


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
