import React from 'react';
import './ImportantInfoSection.css';
import plugIcon from '../../assets/images/plugging-electricity-svgrepo-com (1).png'
import paymentIcon from '../../assets/images/card-svgrepo-com (1).png'
import languageIcon from '../../assets/images/circle-rubel-line-svgrepo-com.png'
import busIcon from '../../assets/images/Path 11.png'
import currencyIcon from '../../assets/images/circle-rubel-line-svgrepo-com.png'
import climateIcon from '../../assets/images/weather.png'


const ImportantInfoSection = () => {
  return (
    <div className='important'>
      <section className="important-info-section">
      <div className='important-section-inner'>
      <h2 className="info-title">معلومات هامة</h2>
      <div className="info-cards-grid">
       
      
        <div className="info-card electric">
          <div className="card-icon"><img src={currencyIcon} /></div>
          <h3 className="card-title">العملة الرسمية</h3>
          <p className="card-description">
            العملة الرسمية في روسيا هي الروبل الروسي.
            يتكون الروبل من 100 وحدة عملة
            الكونيك، يصدر الروبل من قبل البنك المركزي الروسي.
          </p>
        </div>
        
     
        <div className="info-card payment">
          <div className="card-icon"><img src={paymentIcon} /></div>
          <h3 className="card-title">طريقة الدفع</h3>
          <p className="card-description">
          النقد (الكاش) و البطاقات المصرفية التحويلات البنكية: شائعة بين الأفراد والشركات
          الدفع الإلكتروني: عبر تطبيقات مثل <p className='special-p'>Sberbank Online و YooMoney و QIWI</p>
          </p>
        </div>
        <div className="info-card card-right">
          <div className="card-icon"><img src={plugIcon} /></div>
          <h3 className="card-title"> مخارج الكهرباء</h3>
          <p className="card-description">
            الجهد الكهربائي: 220-240 فولت.
            مخارج الاستخدام أجهزة من خارج روسيا
            فقط تحتاج إلى محول أو قابس متوافق.
          </p>
        </div>

     
        <div className="info-card electric2">
          <div className="card-icon"><img src={climateIcon} /></div>
          <h3 className="card-title">المناخ</h3>
          <p className="card-description">
            روسيا تتميز بمناخ قاري متطرف، حيث يسودها
            الشتاء طويل وقارس في معظم المناطق
            بينما الصيف قصير لكنه قد يكون منعشاً
            ومقبولاً.
          </p>
        </div>
      

        <div className="info-card payment2">
          <div className="card-icon"><img src={busIcon} /></div>
          <h3 className="card-title">المواصلات</h3>
          <p className="card-description">
            تعد المواصلات في موسكو من بين الأكثر تطوراً
            وتنظيماً في العالم، وتوفر خيارات متنوعة
            مثل مترو موسكو والحافلات والخدمات الكهربائية
            سيارات الأجرة وتطبيقات النقل و بطاقات النقل.
          </p>
        </div>
       
        <div className="info-card card-right2">
          <div className="card-icon"><img src={languageIcon} /></div>
          <h3 className="card-title">اللغة</h3>
          <p className="card-description">
            اللغة الرسمية في موسكو هي اللغة الروسية.
            موسكو مدينة سياحية تستخدم فيها لغات أوسع في
            مسارحها متاحفها الفنادق والمطاعم.
            هناك فرق بين الروسية الإنجليزية والألمانية.
          </p>
        </div>
      </div>
      </div>
    </section>
    </div>
  );
};

export default ImportantInfoSection;