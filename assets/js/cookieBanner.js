document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("cookiesAceitos_GuiaJanu")) {
        return;
    }

    const currentPath = window.location.pathname;
    const isIndex = currentPath.endsWith('index.html') || currentPath === '/' || !currentPath.includes('/pages/');
    const linkPrivacidade = isIndex ? './pages/privacidade.html' : '../pages/privacidade.html';

    const banner = document.createElement('div');
    banner.id = "cookie-banner";
    banner.className = "cookie-banner";

    banner.innerHTML = `
        <div class="cookie-content">
            <p>Usamos cookies para garantir que você tenha a melhor experiência no <strong>GuiaJanu</strong>. Ao continuar navegando, você concorda com a nossa <a href="${linkPrivacidade}" class="cookie-link">Política de Privacidade</a>.</p>
            <button id="aceitar-cookies" class="cookie-btn">Entendi</button>
        </div>
    `;

    document.body.appendChild(banner);

    banner.style.display = "block";

    const botaoAceitar = document.getElementById("aceitar-cookies");
    botaoAceitar.addEventListener("click", function() {
        localStorage.setItem("cookiesAceitos_GuiaJanu", "true");
        banner.remove(); 
    });
});