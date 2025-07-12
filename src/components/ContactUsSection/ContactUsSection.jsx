import React from 'react';
import './ContactUsSection.css';
import logoImage from '../../assets/images/russia dubia logo.png'; // تأكد من المسار الصحيح للشعار
import WhatsAppIcon from '../../assets/images/whatsapp-svgrepo-com.svg'
import TelegramIcon from '../../assets/images/telegram-svgrepo-com (1).svg'

const ContactUsSection = () => {
  return (
    <section className="contact-us-section">
      <h2 className="contact-us-title">تواصل معنا</h2>
      <div className="contact-logo">
        <img src={logoImage} alt="Russia & Gulf Logo" className="logo-image" />
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <span className="contact-number">+79268270788</span>
          <a href="https://wa.me/79268270788" target="_blank" rel="noopener noreferrer" className="whatsapp-icon-link">
            {/* <WhatsAppIcon /> */}
            <img src={WhatsAppIcon} alt="WhatsApp" />
          </a>
        </div>
        <div className="contact-item">
        
          <span className="contact-telegram">@Russia_golf</span>
          <a href="https://t.me/Russia_golf" target="_blank" rel="noopener noreferrer" className="telegram-icon-link">
            {/* <TelegramIcon /> */}
            <img src={TelegramIcon} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;