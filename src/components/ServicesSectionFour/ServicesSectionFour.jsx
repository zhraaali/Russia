import React from 'react'
import './ServicesSectionFour.css'
import dottedLineBackgroundTwo from '../../assets/images/ww3.png'; 
import caricon from '../../assets/images/car-limousine-svgrepo-com.svg'
import simIcon from '../../assets/images/sim-card-7-svgrepo-com.png'
import airportIcon from '../../assets/images/airport-departure-svgrepo-com.png'
import HotelIcon from '../../assets/images/hotel-svgrepo-com (1).png'
const ServicesSectionFour = () => {
  return (
    <section className="services-section-four">
    {/* عنوان القسم (إذا كنت تريده) */}
    {/* <h2 className="services-title">الخدمات الأخرى</h2> */}

    {/* الصف العلوي */}
    <div className="services-layout-container-four top-row-layout" style={{ backgroundImage: `url(${dottedLineBackgroundTwo})` }}>
    

      {/* خدمة جداول للأماكن السياحية */}
      <div className="service-item-four absolute-positioned-item location-pos-four">
        <div className="service-icon-wrapper-four">
          <div className="service-text-four" style={{marginBottom:'1em'}}>نقل من و إلى المطار</div>
          <div className="service-text-four mobile padingtext4" style={{marginBottom:'1em'}}>تأمين سيارة كل النهار صغيرة أو كبيرة و السفر ضمن المدن الروسية</div>
          <div className="service-icon-four">
            <img src={airportIcon} />
            <img src={caricon} className='mobile-img'/>
          </div>
        </div>
      </div>

      
      

    
    </div>


  </section>
  )
}

export default ServicesSectionFour