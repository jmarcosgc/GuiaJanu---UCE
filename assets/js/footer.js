const footerElement = document.querySelector('.site-footer');

const footerHTML = `
  <footer id="contato" class="site-footer">

    <div class="footer-main">

      <div class="footer-left-column">

        <div class="footer-col contact-info">
          <a href="https://www.google.com/maps/place/Janu%C3%A1ria,+MG" class="location-link" target="_blank">
            <div class="location-text">
              <p>Januária - MG</p>
              <p>Rua Padre Henrique - Centro</p>
            </div>
            <img src="../assets/img/Social Icons/ponteiro.png" alt="Icone de localização" class="location-icon">
          </a>
          <br>
          <p>(11) 4002-8922</p>
          <p>turismo@guiajanu.com</p>
        </div>

        <div class="footer-col links-col">
          <h4>O que fazer</h4>
          <ul>
            <li><a href="#">Como Chegar</a></li>
            <li><a href="#">Atendimento ao Turista</a></li>
            <li><a href="#">Calendário de Eventos</a></li>
            <li><a href="#">Meios de Transporte</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-right-column">
        <div class="footer-col links-col">
          <h4>Descubra Januária</h4>
          <ul>
            <li><a href="#">Passeios</a></li>
            <li><a href="#">Praia</a></li>
            <li><a href="#">Praças</a></li>
            <li><a href="#">Hospedagem</a></li>
            <li><a href="#">Igrejas</a></li>
            <li><a href="#">Mirante</a></li>
            <li><a href="#">Rota da Cachaça</a></li>
            <li><a href="#">Feira</a></li>
          </ul>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 GuiaJanu - Todos os direitos reservados.</p>
      
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
                <img src="../assets/img/Logo/IFNMG3.png" alt="Logo IFNMG Campus Januária" class="partner-logo">
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
                <img src="../assets/img/Social Icons/insta_logo.png" alt="Logo UCE-BSI" class="partner-logo logo-insta">
              </a>
            </div>
            
            <div class="logo-item">
              <a href="https://www.instagram.com/petadmifnmg" target="_blank" class="logo-link">
                <p>PET-ADM</p>
                <img src="../assets/img/Parcerias/PETADM.png" alt="Logo PET-ADM" class="partner-logo">
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
                <img src="../assets/img/Parcerias/SETUR.png" alt="Setur" class="partner-logo">
              </a>
            </div>
            
            <div class="logo-item">
              <a href="https://www.instagram.com/la_belle_janu" target="_blank" class="logo-link">
                <p>La Belle Janu</p>
                <img src="../assets/img/Social Icons/insta_logo.png" alt="La Belle Janu" class="partner-logo logo-insta">
              </a>
            </div>
            
            <div class="logo-item">
              <a href="https://www.youtube.com/c/SERTÕESGERAIS" target="_blank" class="logo-link">
                <p>Canal Sertões Gerais</p>
                <img src="../assets/img/Parcerias/SERTOESGERAIS.png" alt="Canal Sertão Mineiro" class="partner-logo">
              </a>
            </div>
            
          </div>
        </div>

      </div>
      
      <p>As imagens nesse site são de inteira responsabilidade dos proprietários dos estabelecimentos cadastrados em nosso banco de dados.</p>
    
    </div>

  </footer>
`;

if (footerElement) {
      footerElement.innerHTML = footerHTML;
    }