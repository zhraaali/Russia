import React from 'react';
import './Serviceone.css'; // تأكد من أن اسم الملف هو ServiceOne.css
import dottedLineBackground from '../../assets/images/ww11.png'; // استيراد صورة الخلفية
import ticketIcon from '../../assets/images/Layer 2.png'
// أيقونات SVG الداخلية (بلون أبيض) - تبقى كما هي
import cardIcon from '../../assets/images/Credit Card 1.png'
import caricon from '../../assets/images/car-2-svgrepo-com.png'
import documentIcon from '../../assets/images/document-svgrepo-com.png'


const ServiceOne = (props) => { // تم تغيير اسم المكون ليتناسب مع اسم الملف
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