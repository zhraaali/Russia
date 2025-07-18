import React from 'react';
import './ServiceSectionThree.css'
import dottedLineBackgroundTwo from '../../assets/images/ww3.png'; 
import caricon from '../../assets/images/car-limousine-svgrepo-com.svg'
import simIcon from '../../assets/images/sim-card-7-svgrepo-com.png'
import airportIcon from '../../assets/images/airport-departure-svgrepo-com.png'
import HotelIcon from '../../assets/images/hotel-svgrepo-com (1).png'

   
   const ServiceSectionThree = () => {
     return (
        <section className="services-section-three">
      {/* عنوان القسم (إذا كنت تريده) */}
      {/* <h2 className="services-title">الخدمات الأخرى</h2> */}

      {/* الصف العلوي */}
      <div className="services-layout-container-three top-row-layout" style={{ backgroundImage: `url(${dottedLineBackgroundTwo})` }}>
      

        {/* خدمة جداول للأماكن السياحية */}
        <div className="service-item-three absolute-positioned-item location-pos-three">
          <div className="service-icon-wrapper-three">
            <div className="service-text-three" style={{marginBottom:'1em'}}>نقل من و إلى المطار</div>
            <div className="service-text-three mobile" style={{marginBottom:'1em'}}>إقامة في فنادق خمس نجوم أو أربع نجوم حسب الرغبة بأفضل الأسعار</div>
            <div className="service-icon-three">
              <img src={airportIcon} />
              <img src={HotelIcon} className='mobile-img'/>
            </div>
          </div>
        </div>

        {/* خدمة شراء خطوط وباقات انترنت */}
        <div className="service-item-three absolute-positioned-item internet-pos-three ">
          <div className="service-icon-wrapper-three " style={{marginTop:'10em',marginLeft:'4em'}}>
          <div className="service-icon-three ">
            <img src={simIcon} className='imgsim'/>
            <img src={simIcon} className='mobile-img' />
          </div>
          <div className="service-text-three">شراء بطاقة هاتف وكرت بنك تبديل عملة</div>
          <div className="service-text-three mobile">شراء بطاقة هاتف وكرت بنك تبديل عملة</div>
            
            
          </div>
        </div>

        {/* خدمة إقامة في فنادق */}
        <div className="service-item-three absolute-positioned-item hotel-pos-three">
          <div className="service-icon-wrapper-three">
            <div className="service-text-three" style={{marginBottom:'1em'}}>تأمين سيارة كل النهار  صغيرة او كبيرة   و السفر ضمن المدن الروسية</div>
            <div className="service-text-three mobile" style={{marginBottom:'1em'}}>نقل من و إلى المطار</div>
            {/* <div className="service-icon-two"><HotelIcon /></div> */}
            <div className="service-icon-three">
              <img src={caricon} className='carimg'/>
              <img src={airportIcon} className='mobile-img'/>
            </div>
          </div>
        </div>

      
      </div>


    </section>
     )
   }
   
   export default ServiceSectionThree

