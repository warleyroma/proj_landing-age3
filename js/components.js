function getComponentBasePath() {
    // Se a página estiver dentro da pasta pages, sobe um nível
    if (window.location.pathname.startsWith('/pages/') || window.location.pathname.includes('/pages/')) {
        return '../components/';
    }
    return 'components/';
}

async function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn('Elemento para componente não encontrado:', id);
        return;
    }

    const basePath = getComponentBasePath();
    const filePath = basePath + file;

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
        const html = await response.text();
        element.innerHTML = html;
    } catch (error) {
        console.error('Erro ao carregar componente', id, filePath, error);
    }
}

const componentFiles = {
    navbar: 'navbar.html',
    footer: 'footer.html',
    cookie: 'cookie.html',
    whatsapp: 'whatsapp.html',
    preloader: 'preloader.html'
};

for (const [id, file] of Object.entries(componentFiles)) {
    loadComponent(id, file);
}
