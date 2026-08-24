const headerElement = document.querySelector('.site-header');

const headerHTML = `
        <a href="../../index.html"><img src="../../assets/img/Logo/TauriLogo2.webp" alt="Logo GuiaJanu" class="logo-header"></a>
        
        <input type="checkbox" id="menu-mobile-check" class="menu-checkbox">

        <nav class="main-nav">
            <ul class="nav-links">
                
                <li><a href="../../index.html">Início</a></li>
                
                <li>
                    <input type="checkbox" id="drop-1" class="drop-checkbox" hidden>
                    
                    <label for="drop-1" class="link-wrapper">
                        <span class="drop-text">Descubra Januária</span>
                        <span class="drop-icon">▾</span>
                    </label>

                    <ul class="dropdown">
                        <li><a href="../acidade.html">A cidade</a></li>
                        <li><a href="../comochegar.html">Como chegar</a></li>
                    </ul>
                </li>
                
                <li><a href="../../pages/ListagemPontosTuristicos.html">O que fazer</a></li>
                <li><a href="../../pages/emconstrucao.html">Onde comer</a></li>
                <li><a href="../../pages/emconstrucao.html">Onde ficar</a></li>
                
                <li>
                    <input type="checkbox" id="drop-2" class="drop-checkbox" hidden>
                    
                    <label for="drop-2" class="link-wrapper">
                        <span class="drop-text">Mais</span>
                        <span class="drop-icon">▾</span>
                    </label>

                    <ul class="dropdown">
                        <li><a href="../cat.html">Atendimento</a></li>
                        <li><a href="../guiaoficial.html">Guia Oficial</a></li>
                        <li><a href="../aboutUs.html">Sobre nós</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="header-right">
            <a href="https://www.instagram.com/guia.janu" class="social-icon" target="_blank">
                <img src="../../assets/img/Social_Icons/insta_logo.webp" alt="Instagram">
            </a>
            <label for="menu-mobile-check" class="menu-toggle" aria-label="Abrir e Fechar menu"></label>
        </div>
`;

if (headerElement) {
    headerElement.innerHTML = headerHTML;
}