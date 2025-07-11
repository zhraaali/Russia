import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css'; // استيراد ملف CSS
import heroimg from './../../assets/images/روسيل44.png'
const HeroSection = () => {
  return (
    
        <div className="hero-section">
            {/* <div className='img-container'> */}
                <img src={heroimg}/>
            {/* </div> */}
       <div className="hero-overlay"></div> 
      <Container className="hero-content text-center text-md-start">
        <Row className="justify-content-center justify-content-md-start hero-inner">
          <Col md={10} lg={8}>
            <h1 className="hero-title animated-title">
              روسيا والخليج
            </h1>
            <p className="hero-subtitle animated-subtitle">
              شركة خدمات سياحية تأسست عام 2023
            </p>
            <div className="hero-buttons mt-4">
              <Button variant="primary" size="lg" className="hero-button me-3 animated-button">
                وجهات سياحية
              </Button>
              <Button variant="secondary" size="lg" className="hero-button animated-button">
                الخدمات
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
};

export default HeroSection;


