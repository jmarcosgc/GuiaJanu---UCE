const headerElement = document.querySelector('.site-header');

const headerHTML = `
        <img src="../assets/img/Logo/TauriLogo2.webp" alt="Logo GuiaJanu" class="logo-header">
        
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
                
                <li><a href="./ListagemPontosTuristicos.html">O Que Fazer</a></li>
                <li><a href="./emconstrucao.html">Onde Comer</a></li>
                <li><a href="./emconstrucao.html">Onde Ficar</a></li>
                
                <li>
                    <input type="checkbox" id="drop-2" class="drop-checkbox" hidden>
                    
                    <div class="link-wrapper">
                        <a href="">Mais</a>
                        <label for="drop-2" class="drop-icon">▾</label>
                    </div>

                    <ul class="dropdown">
                        <li><a href="../pages/cat.html">CAT</a></li>
                        <li><a href="../pages/aboutUs.html">Sobre Nós</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="header-right">
            <a href="https://www.instagram.com/guia.janu" class="social-icon" target="_blank">
                <img src="../assets/img/Social Icons/insta_logo.webp" alt="Instagram">
            </a>
            <label for="menu-mobile-check" class="menu-toggle" aria-label="Abrir menu">☰</label>
        </div>
`;

if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }