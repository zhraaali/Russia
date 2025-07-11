import React from 'react';
import './ServiceSectionThree.css'
import dottedLineBackgroundTwo from '../../assets/images/ww3.png'; 
import caricon from '../../assets/images/car-limousine-svgrepo-com.svg'
import simIcon from '../../assets/images/sim-card-7-svgrepo-com.png'
import airportIcon from '../../assets/images/airport-departure-svgrepo-com.png'


   
   const ServiceSectionThree = () => {
     return (
        <section className="services-section-two">
      {/* عنوان القسم (إذا كنت تريده) */}
      {/* <h2 className="services-title">الخدمات الأخرى</h2> */}

      {/* الصف العلوي */}
      <div className="services-layout-container-two top-row-layout" style={{ backgroundImage: `url(${dottedLineBackgroundTwo})` }}>
      

        {/* خدمة جداول للأماكن السياحية */}
        <div className="service-item-two absolute-positioned-item location-pos-three">
          <div className="service-icon-wrapper-two">
            <div className="service-text-two">جداول للأماكن السياحية و إمكانية تغييرها حسب الرغبة</div>
            <div className="service-icon-two"><img src={airportIcon}/></div>
          </div>
        </div>

        {/* خدمة شراء خطوط وباقات انترنت */}
        <div className="service-item-two absolute-positioned-item internet-pos-three ">
          <div className="service-icon-wrapper-two " style={{marginTop:'10em',marginLeft:'4em'}}>
          <div className="service-icon-two "><img src={simIcon}/></div>
          <div className="service-text-two">شراء خطوط و باقات انترنت</div>
            
            
          </div>
        </div>

        {/* خدمة إقامة في فنادق */}
        <div className="service-item-two absolute-positioned-item hotel-pos-three">
          <div className="service-icon-wrapper-two">
            <div className="service-text-two">تأمين سيارة كل النهار صغيرة او كبيرة و السفر ضمن المدن الروسية</div>
            {/* <div className="service-icon-two"><HotelIcon /></div> */}
            <div className="service-icon-two"><img src={caricon}/></div>
          </div>
        </div>

      
      </div>


    </section>
     )
   }
   
   export default ServiceSectionThree

