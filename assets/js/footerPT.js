const footerElement = document.querySelector('.site-footer');

const footerHTML = `
  <div class="footer-main">

      <div class="footer-left-column">

        <div class="footer-col links-col">
          <h4>Email para contato</h4>
          <ul>
            <p>guiajanuifnmg@gmail.com</p>
            </ul>
        </div>

        <div class="footer-col links-col">
          <h4>Conheça nosso app</h4>
          <ul>
            <li><a href="../pages/emconstrucao.html">JanuTour</a></li>

            </ul>
        </div>

        <div class="footer-col links-col">
          <h4>Descubra Januária</h4>
          <ul>
            <li><a href="../../pages/acidade.html">A cidade</a></li>
            <li><a href="../../pages/comochegar.html">Como chegar</a></li>
            </ul>
        </div>

      </div>

      <div class="footer-right-column">
        <div class="footer-col links-col">
          <h4>O que fazer</h4>
          <ul>
            <li><a href="../pages/ListagemPontosTuristicos.html">Pontos Turísticos</a></li>
          </ul>
        </div>
        <div class="footer-col links-col">
          <h4>Onde comer</h4>
          <ul>
            <li><a href="../pages/emconstrucao.html">Em construção</a></li>
          </ul>
        </div>
        <div class="footer-col links-col">
          <h4>Onde ficar</h4>
          <ul>
            <li><a href="../pages/emconstrucao.html">Em construção</a></li>
          </ul>
        </div>
        <div class="footer-col links-col">
          <h4>Mais</h4>
          <ul>
            <li><a href="../../pages/cat.html">Centro deAtendimento<br>ao Turista</a></li>
            <li><a href="../../pages/guiaoficial.html">Guia Oficial</a></li>
            <li><a href="../../pages/aboutUs.html">Sobre nós</a></li>
          </ul>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 GuiaJanu - Todos os direitos reservados.</p>
      
      <p>Desenvolvido por:
        <a href="https://www.instagram.com/eric_lopes01" target="_blank">Eric L. Guimarães</a>,
        <a href="https://www.instagram.com/c.daniel7" target="_blank">Carlos D. Araujo</a>,
        <a href="https://www.instagram.com/felipemeireles.1" target="_blank">Felipe Gonçalves</a>,
        <a href="https://www.instagram.com/_jmarcos.gc" target="_blank">João M. Guimarães</a>,
        <a href="https://www.instagram.com/pfmella" target="_blank">Pâmella Ferreira</a>,
        <a href="https://www.instagram.com/tkmaia" target="_blank">Thalles K. Maia</a>
      </p>

      <div class="footer-extra-info">

        <div class="developed-by-section">
          <h4>Desenvolvido por</h4>
          <div class="developed-logos">
            
            <div class="logo-item">
              <a href="https://www.ifnmg.edu.br/januaria" target="_blank" class="logo-link">
                <p>IFNMG</p>
                <img src="../../assets/img/Logo/IFNMG3.webp" alt="Logo IFNMG Campus Januária" class="partner-logo">
                <p class="ifnmg">
                  <span class="linha1">INSTITUTO FEDERAL</span>
                  <span class="linha2">Norte de Minas Gerais</span>
                  <span class="linha3">Campus Januária</span>
                </p>
              </a>
            </div>
            
            <div class="logo-item">
              <a href="https://www.instagram.com/guia.janu" target="_blank" class="logo-link">
                <p>UCE-BSI</p>
                <img src="../../assets/img/Social_Icons/insta_logo.webp" alt="Logo UCE-BSI" class="partner-logo logo-insta">
              </a>
            </div>
            
            <div class="logo-item">
              <a href="https://www.instagram.com/petadmifnmg" target="_blank" class="logo-link">
                <p>PET-ADM</p>
                <img src="../../assets/img/Parcerias/PETADM.webp" alt="Logo PET-ADM" class="partner-logo">
              </a>
            </div>
            
          </div>
        </div>

        <div class="footer-partners">
          <h4>Nossos Parceiros</h4>
          <div class="partners-logos">
            
            <div class="logo-item">
              <a href="https://www.januaria.mg.gov.br/portal/secretarias/26/setur--secretaria-municipal-de-turismo-cultura-meio-ambiente-e-desenvolvimento-economico" target="_blank" class="logo-link">
                <p>SETUR</p>
                <img src="../../assets/img/Parcerias/SETUR.webp" alt="Setur" class="partner-logo">
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <p>As imagens nesse site são de inteira responsabilidade dos proprietários dos estabelecimentos cadastrados em nosso banco de dados. <a href="../privacidade.html">Termos de Uso e Privacidade</a></p>
    
    </div>
`;

if (footerElement) {
  footerElement.innerHTML = footerHTML;
}