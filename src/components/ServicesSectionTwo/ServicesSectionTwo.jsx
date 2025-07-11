import React from 'react';
import './ServicesSectionTwo.css';
import dottedLineBackgroundTwo from '../../assets/images/ww2.png'; // استيراد صورة الخلفية للصف العلوي
import locationIcon from '../../assets/images/location-round-svgrepo-com@2x.png'
import InternetIcon from '../../assets/images/internet-surfing-1-svgrepo-com.png'
import HotelIcon from '../../assets/images/hotel-svgrepo-com (1).png'



const ServicesSectionTwo = () => {
  return (
    <section className="services-section-two">
      {/* عنوان القسم (إذا كنت تريده) */}
      {/* <h2 className="services-title">الخدمات الأخرى</h2> */}

      {/* الصف العلوي */}
      <div className="services-layout-container-two top-row-layout" style={{ backgroundImage: `url(${dottedLineBackgroundTwo})` }}>
        {/* أيقونة طائرة في بداية الصف العلوي */}
        {/* <div className="plane-icon-start-top absolute-positioned-item">
          <PlaneIconLeft />
        </div> */}

        {/* خدمة جداول للأماكن السياحية */}
        <div className="service-item-two absolute-positioned-item location-pos">
          <div className="service-icon-wrapper-two">
            <div className="service-icon-two"><img src={locationIcon}/></div>
            <div className="service-text-two">جداول للأماكن السياحية و إمكانية تغييرها حسب الرغبة</div>
          </div>
        </div>

        {/* خدمة شراء خطوط وباقات انترنت */}
        <div className="service-item-two absolute-positioned-item internet-pos ">
          <div className="service-icon-wrapper-two " style={{marginTop:'10em',marginLeft:'4em'}}>
          <div className="service-text-two">شراء خطوط و باقات انترنت</div>
            <div className="service-icon-two "><img src={InternetIcon}/></div>
            
          </div>
        </div>

        {/* خدمة إقامة في فنادق */}
        <div className="service-item-two absolute-positioned-item hotel-pos">
          <div className="service-icon-wrapper-two">
            <div className="service-icon-two"><img src={HotelIcon}/></div>
            <div className="service-text-two">إقامة في فنادق خمس نجوم أو أربع نجوم حسب الرغبة بأفضل الأسعار</div>
          </div>
        </div>

        {/* أيقونة طائرة في نهاية الصف العلوي */}
        {/* <div className="plane-icon-end-top absolute-positioned-item">
          <PlaneIconRight />
        </div> */}
      </div>

      {/* الصف السفلي - سيتطلب صورة خلفية مختلفة أو تكرار ww2.png بضبط مختلف */}
      {/* لتجنب تعقيد تحميل صورتين مختلفتين، سنستخدم نفس الصورة ww2.png ولكن بضبط خلفية مختلف في CSS */}
      {/* <div className="services-layout-container-two bottom-row-layout" style={{ backgroundImage: `url(${dottedLineBackgroundTwo})` }}> */}
        {/* أيقونة طائرة في بداية الصف السفلي */}
        {/* <div className="plane-icon-start-bottom absolute-positioned-item">
          <PlaneIconLeft />
        </div> */}

        {/* خدمة شراء بطاقة هاتف وكرت بنك */}
        {/* <div className="service-item-two absolute-positioned-item simcard-pos">
          <div className="service-icon-wrapper-two">
            <div className="service-icon-two"><SIMCardIcon /></div>
            <div className="service-text-two">شراء بطاقة هاتف وكرت بنك تبديل عملة</div>
          </div>
        </div> */}

        {/* خدمة تأمين سيارة */}
        {/* <div className="service-item-two absolute-positioned-item car-insurance-pos">
          <div className="service-icon-wrapper-two">
            <div className="service-icon-two"><CarInsuranceIcon /></div>
            <div className="service-text-two">تأمين سيارة كل النهار صغيرة أو كبيرة و السفر ضمن المدن الروشية</div>
          </div>
        </div> */}

        {/* أيقونة طائرة في نهاية الصف السفلي */}
        {/* <div className="plane-icon-end-bottom absolute-positioned-item">
          <PlaneIconRight />
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default ServicesSectionTwo;