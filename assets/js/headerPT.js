const headerElement = document.querySelector('.site-header');

const headerHTML = `
        <img src="../../assets/img/Logo/TauriLogo2.png" alt="Logo GuiaJanu" class="logo-header">
        
        <input type="checkbox" id="menu-mobile-check" class="menu-checkbox" hidden>

        <nav class="main-nav">
            <label for="menu-mobile-check" class="menu-close" aria-label="Fechar menu">×</label>
        
            <ul class="nav-links">
                <li>
                    <input type="checkbox" id="drop-1" class="drop-checkbox" hidden>
                    
                    <div class="link-wrapper">
                        <a href="../../pages/DescubraJanuaria.html">Descubra Januária</a>
                        <label for="drop-1" class="drop-icon">▾</label>
                    </div>

                    <ul class="dropdown">
                        <li><a href="#">A cidade</a></li>
                        <li><a href="#">Como chegar</a></li>
                    </ul>
                </li>
                
                <li><a href="#">O que fazer</a></li>
                <li><a href="#">Onde ficar</a></li>
                
                <li>
                    <input type="checkbox" id="drop-2" class="drop-checkbox" hidden>
                    
                    <div class="link-wrapper">
                        <a href="#">Mais</a>
                        <label for="drop-2" class="drop-icon">▾</label>
                    </div>

                    <ul class="dropdown">
                        <li><a href="#">CAT</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="header-right">
            <a href="https://www.instagram.com/guia.janu" class="social-icon" target="_blank">
                <img src="../../assets/img/Social Icons/insta_logo.png" alt="Instagram">
            </a>
            <label for="menu-mobile-check" class="menu-toggle" aria-label="Abrir menu">☰</label>
        </div>
`;

if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }