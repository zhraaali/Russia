import React from 'react';
import './Serviceone.css'; // تأكد من أن اسم الملف هو ServiceOne.css
import dottedLineBackground from '../../assets/images/ww11.png'; // استيراد صورة الخلفية
import ticketIcon from '../../assets/images/Layer 2.png'
// أيقونات SVG الداخلية (بلون أبيض) - تبقى كما هي
import cardIcon from '../../assets/images/Credit Card 1.png'
import caricon from '../../assets/images/car-2-svgrepo-com.png'
import documentIcon from '../../assets/images/document-svgrepo-com.png'
const CardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" fill="#FFFFFF"/>
    <path d="M2 9H22V7C22 6.44772 21.5523 6 21 6H3C2.44772 6 2 6.44772 2 7V9ZM2 15H22V17C22 17.5523 21.5523 18 21 18H3C2.44772 18 2 17.5523 2 17V15Z" fill="#FFFFFF"/>
  </svg>
);

const CarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.92 6.01C18.72 5.61 18.2 5.42 17.7 5.53L12 6.84L6.3 5.53C5.8 5.42 5.28 5.61 5.08 6.01L3 10V18C3 18.55 3.45 19 4 19H5C5.55 19 6 18.55 6 18V17H18V18C18 18.55 18.45 19 19 19H20C20.55 19 21 18.55 21 18V10L18.92 6.01ZM6.85 15C6.3 15 5.85 14.55 5.85 14C5.85 13.45 6.3 13 6.85 13C7.4 13 7.85 13.45 7.85 14C7.85 14.55 7.4 15 6.85 15ZM17.15 15C16.6 15 16.15 14.55 16.15 14C16.15 13.45 16.6 13 17.15 13C17.7 13 18.15 13.45 18.15 14C18.15 14.55 17.7 15 17.15 15Z" fill="#FFFFFF"/>
  </svg>
);

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="#FFFFFF"/>
  </svg>
);

// أيقونة الطائرة المنقطة في بداية الخط
const PlaneIconDotted = () => (
  <svg className="dotted-plane-icon" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.25 24.35L48 3L41.6 9.4L25.35 25.65L22.25 24.35ZM25.65 27.75L24.35 25.65L9.4 41.6L3 48L25.65 27.75Z" fill="#9BC4EA"/>
  </svg>
);

const ServiceOne = () => { // تم تغيير اسم المكون ليتناسب مع اسم الملف
  return (
    <section className="services-section">
      {/* <h2 className="services-title">الخدمات</h2> */}
      {/* حاوية للأيقونات مع صورة الخلفية */}
      <div className="services-layout-container" style={{ backgroundImage: `url(${dottedLineBackground})` }}>
        {/* أيقونة الطائرة في بداية المسار */}
        {/* <div className="plane-icon-pos absolute-positioned-item">
          <PlaneIconDotted />
        </div> */}

        {/* خدمة تذاكر الطيران */}
        <div className="service-item absolute-positioned-item ticket-pos">
          <div className="service-icon-wrapper">
            <div className="service-icon"><img src={ticketIcon} /></div>
            <div className="service-text">تذاكر طيران بأفضل الأسعار</div>
          </div>
        </div>

        {/* خدمة إصدارات بطاقات بنكية */}
        <div className="service-item absolute-positioned-item card-pos">
          <div className="service-icon-wrapper">
            
            <div className="service-text">إصدارات بطاقات بنكية</div>
            <div className="service-icon"><img src={cardIcon} /></div>
          </div>
        </div>

        {/* خدمة الإستقبال من المطار */}
        <div className="service-item absolute-positioned-item car-pos">
          <div className="service-icon-wrapper">
            <div className="service-icon"><img src={caricon} className='imgcar'/></div>
            <div className="service-text">الإستقبال من المطار بجميع أنواع السيارات الفاخرة و السياحية</div>
          </div>
        </div>

        {/* خدمة المساعدة في الأوراق المطلوبة */}
        <div className="service-item absolute-positioned-item document-pos">
          <div className="service-icon-wrapper">
            <div className="service-text">المساعدة في الأوراق المطلوبة</div>
            <div className="service-icon"><img src={documentIcon} /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;