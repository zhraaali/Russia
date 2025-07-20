import React from 'react';
import './ServicesSectionTwo.css';
import dottedLineBackgroundTwo from '../../assets/images/ww2.png'; // استيراد صورة الخلفية للصف العلوي
import locationIcon from '../../assets/images/location-round-svgrepo-com@2x.png'
import InternetIcon from '../../assets/images/internet-surfing-1-svgrepo-com.png'
import HotelIcon from '../../assets/images/hotel-svgrepo-com (1).png'
import locationIconMobile from '../../assets/images/document-svgrepo-com.png'


const ServicesSectionTwo = () => {
  return (
    <section className="services-section-two">
      
      <div className="services-layout-container-two top-row-layout" style={{ backgroundImage: `url(${dottedLineBackgroundTwo})` }}>
        

        {/* خدمة جداول للأماكن السياحية */}
        <div className="service-item-two absolute-positioned-item location-pos">
          <div className="service-icon-wrapper-two location-pos">
            <div className="service-icon-two">
              <img src={locationIcon} />
              <img src={locationIconMobile} className='mobile-img'/>
            </div>
            {/* <div className="service-icon-two-mobile"><img src={locationIconMobile} /></div> */}
            <div className="service-text-two">جداول للأماكن السياحية و إمكانية تغييرها حسب الرغبة</div>
            <div className="service-text-two mobile padingtext">المساعدة في الأوراق المطلوبة</div>
          </div>
        </div>

        {/* خدمة شراء خطوط وباقات انترنت */}
        <div className="service-item-two absolute-positioned-item internet-pos ">
          <div className="service-icon-wrapper-two internet-pos" style={{marginTop:'10em',marginLeft:'4em'}}>
          <div className="service-text-two">شراء خطوط و باقات انترنت</div>
          <div className="service-text-two mobile padingtext">جداول للأماكن السياحية و إماكنية تغيرها حسب الرغبة</div>
            <div className="service-icon-two ">
              <img src={InternetIcon} />
              <img src={locationIcon} className='mobile-img'/>
            </div>
            
          </div>
        </div>

        {/* خدمة إقامة في فنادق */}
        <div className="service-item-two absolute-positioned-item hotel-pos">
          <div className="service-icon-wrapper-two hotel-pos">
            <div className="service-icon-two">
              <img src={HotelIcon} />
              <img src={InternetIcon} className='mobile-img'/>
            </div>
            <div className="service-text-two">إقامة في فنادق خمس نجوم أو أربع نجوم حسب الرغبة بأفضل الأسعار</div>
            <div className="service-text-two mobile">شراء خطوط و باقات أنترنيت</div>
          </div>
        </div>

        
      </div>

      
    </section>
  );
};

export default ServicesSectionTwo;