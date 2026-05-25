const headerElement = document.querySelector('.site-header');

const headerHTML = `
        <a href="../index.html"><img src="../assets/img/Logo/TauriLogo2.webp" alt="Logo GuiaJanu" class="logo-header"></a>
        
        <input type="checkbox" id="menu-mobile-check" class="menu-checkbox" hidden>

        <nav class="main-nav">
            <label for="menu-mobile-check" class="menu-close" aria-label="Fechar menu">×</label>
        
            <ul class="nav-links">
                

                <li><a href="../index.html">Inicio</a></li>
                <li>
                    <input type="checkbox" id="drop-1" class="drop-checkbox" hidden>
            
                    <div class="link-wrapper">
                        <a href="../pages/DescubraJanuaria.html">Descubra Januária</a>
                        <label for="drop-1" class="drop-icon">▾</label>
                    </div>

                    <ul class="dropdown">
                        <li><a href="../pages/acidade.html">A cidade</a></li>
                        <li><a href="../pages/comochegar.html">Como chegar</a></li>
                    </ul>
                </li>
                
                <li><a href="./ListagemPontosTuristicos.html">O que fazer</a></li>
                <li><a href="./emconstrucao.html">Onde comer</a></li>
                <li><a href="./emconstrucao.html">Onde ficar</a></li>
                
                <li>
                    <input type="checkbox" id="drop-2" class="drop-checkbox" hidden>
                    
                    <div class="link-wrapper">
                        <a href="">Mais</a>
                        <label for="drop-2" class="drop-icon">▾</label>
                    </div>

                    <ul class="dropdown">
                        <li><a href="../pages/cat.html">CAT</a></li>
                        <li><a href="https://q.me-qr.com/f/guia-turistico-januaria">Guia Oficial</a></li>
                        <li><a href="../pages/aboutUs.html">Sobre nós</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="header-right">
            <a href="https://www.instagram.com/guia.janu" class="social-icon" target="_blank">
                <img src="../assets/img/Social_Icons/insta_logo.webp" alt="Instagram">
            </a>
            <label for="menu-mobile-check" class="menu-toggle" aria-label="Abrir menu">☰</label>
        </div>
`;

if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }