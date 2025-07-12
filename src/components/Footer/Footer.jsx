import React from 'react';
import './Footer.css';
import whatsappIcon from '../../assets/images/whatsapp-svgrepo-com.svg'
import telegramIcon from '../../assets/images/telegram-svgrepo-com (1).svg'



const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content-wrapper">
       

        <div className="contact-info">
          <h3 className="contact-title">:تواصل معنا</h3>
          <div className="contact-item">
            <a href="https://wa.me/79268270788" target="_blank" rel="noopener noreferrer">
              79268270788+ <span className="icon-wrapper whatsapp-bg"><img src={whatsappIcon} /></span>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://t.me/Russia_gulf" target="_blank" rel="noopener noreferrer">
              Russia_gulf@ <span className="icon-wrapper telegram-bg"><img src={telegramIcon} /></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;