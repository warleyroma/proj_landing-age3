async function loadComponent(id, file) {

const element = document.getElementById(id);

const response = await fetch(file);

const html = await response.text();

element.innerHTML = html;

}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");
loadComponent("cookie", "components/cookie.html");
loadComponent("whatsapp", "components/whatsapp.html");
loadComponent("preloader", "components/preloader.html");