import React from 'react';
import './footer.css';
import youtube from '../../assets/iconYoutube.svg'
import twitter from '../../assets/iconTwitter.svg'
import linkedin from '../../assets/iconLinkedin.svg'
import facebook from '../../assets/iconFacebook.svg'
import instagram from '../../assets/iconInstagram.svg'
import telegram from '../../assets/iconTelegram.svg' 
import ExemploLogo from '../../assets/exemploLogo.jpg';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img className="logo" src={ExemploLogo} alt="Logo" />

        <p id="copyright">Todos os direitos reservados &copy; 2024</p>
        
        <div className="redes-links">
          <p className="redes-links_p-redes">Acompanhe Nossas Redes</p>
          <div className="redes-links_img-redes">
            <a href=""><img src={youtube} alt="Youtube"/></a>
            <a href=""><img src={twitter} alt="Twitter"/></a>
            <a href=""><img src={linkedin} alt="LinkedIn"/></a>
            <a href=""><img src={facebook} alt="Facebook"/></a>
            <a href=""><img src={instagram} alt="Instagram"/></a>
            <a href=""><img src={telegram} alt="Telegram"/></a>
          </div>
        </div>
        
      </div>
      
     
      
    </footer>
  );
}

export default Footer;