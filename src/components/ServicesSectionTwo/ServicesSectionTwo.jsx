import React from 'react';
import './ServicesSectionTwo.css';
import dottedLineBackgroundTwo from '../../assets/images/ww2.png'; // استيراد صورة الخلفية للصف العلوي
import locationIcon from '../../assets/images/location-round-svgrepo-com@2x.png'
import InternetIcon from '../../assets/images/internet-surfing-1-svgrepo-com.png'
import HotelIcon from '../../assets/images/hotel-svgrepo-com (1).png'



const ServicesSectionTwo = () => {
  return (
    <section className="services-section-two">
      
      <div className="services-layout-container-two top-row-layout" style={{ backgroundImage: `url(${dottedLineBackgroundTwo})` }}>
        

        {/* خدمة جداول للأماكن السياحية */}
        <div className="service-item-two absolute-positioned-item location-pos">
          <div className="service-icon-wrapper-two">
            <div className="service-icon-two"><img src={locationIcon} loading="lazy"/></div>
            <div className="service-text-two">جداول للأماكن السياحية و إمكانية تغييرها حسب الرغبة</div>
          </div>
        </div>

        {/* خدمة شراء خطوط وباقات انترنت */}
        <div className="service-item-two absolute-positioned-item internet-pos ">
          <div className="service-icon-wrapper-two " style={{marginTop:'10em',marginLeft:'4em'}}>
          <div className="service-text-two">شراء خطوط و باقات انترنت</div>
            <div className="service-icon-two "><img src={InternetIcon} loading="lazy"/></div>
            
          </div>
        </div>

        {/* خدمة إقامة في فنادق */}
        <div className="service-item-two absolute-positioned-item hotel-pos">
          <div className="service-icon-wrapper-two">
            <div className="service-icon-two"><img src={HotelIcon} loading="lazy"/></div>
            <div className="service-text-two">إقامة في فنادق خمس نجوم أو أربع نجوم حسب الرغبة بأفضل الأسعار</div>
          </div>
        </div>

        
      </div>

      
    </section>
  );
};

export default ServicesSectionTwo;