import React from 'react';
import './FeaturedToursSection.css';
// يمكنك استيراد الصورة مباشرة هنا
import moscowImage from '../../assets/images/eac37e124ffa14030bbcc438ab28bb31 (1)@2x.png'; // افترض أن الصورة موجودة في مجلد assets
import backimg from '../../assets/images/Rectangle 3.svg'
import Tourone from '../TourOne/Tourone';
import sotchiimg from './../../assets/images/sochi7.png'
import Tourtwo from '../TourTwo/Tourtwo';
import santimg from '../../assets/images/84ce45360f2cce080890802bbced194b.png'
import mourmensk from '../../assets/images/4-Northern-Lights-at-Aurora-Village-min.png'
const FeaturedToursSection = (props) => {
  return (
    <section className="featured-tours-section">
      <h2 className="section-title">وجهات سياحية مميزة</h2>
      <Tourone title="موسكو"
        backimg={backimg}
        moscowImage={moscowImage}
        desc=" موسكو هي عاصمة روسيا وأكبر مدنها. تقع في قلب البلاد على نهر موسكفا.
            تعد المركز السياسي والاقتصادي والثقافي لروسيا. تتميز ببنية تحتية متطورة، ونظام مترو يُعد من
            الأفضل عالميًا كما تزخر بالمعالم الشهيرة مثل الساحة الحمراء، كاتدرائية القديس باسيل،
            وغيرها الكثير."/>
            <Tourtwo title="سانت بطرسبرغ"
      backimg={backimg}
      moscowImage={santimg}
      desc="سانت بطرسبرغ، التي تُلقب بـفينيسيا الشمال هي ثاني أكبر مدن روسيا بعد موسكو تُعد من أجمل مدن أوروبا من حيث الطابع المعماري والثقافي تتميز المدينة بشبكة من القنوات والجسور
      وتضم معالم شهيرة مثل متحف الإرميتاج"/>
        <Tourone title="سوتشي"
        backimg={backimg}
        moscowImage={sotchiimg}
        desc=" سوتشي هي مدينة روسية ساحلية تقع على ضفاف البحر الأسود في إقليم كراسنودار تُعد من أبرز الوجهات السياحية في روسيا خاصةً في فصل الصيف
        و تشتهر بمناخها المعتدل سوتشي تُعرف أيضًا بلقب الريفييرا الروسية و تستقطب ملايين الزوار سنوياً بفضل شواطئها و منتجعاتها الصحية"
      />
      <Tourtwo title=" مورمنسك"
      backimg={backimg}
      moscowImage={mourmensk}
      desc="مدينة روسية تقع في أقصى شمال غرب البلاد تُعرف مورمانسك بلقب مدينة الليل القطبي تشهد صيفاً بليالي بيضاء لا تغيب فيها الشمس هذه الظواهر الطبيعية تجعلها وجهة فريدة لعشاق الطبيعة والظواهر الفلكية
      مثل الشفق القطبي"/>
      {/* إذا كان هناك المزيد من الوجهات، يمكنك تكرار `tour-item` أو جعلها ديناميكية */}
      {/*
      <div className="tour-item">
        <div className="tour-details">
          <h3>وجهة أخرى</h3>
          <p>وصف للوجهة الأخرى هنا.</p>
        </div>
        <div className="tour-image-container">
          <img src={anotherImage} alt="Another Destination" className="tour-image" />
        </div>
      </div>
      */}
    </section>
  );
};

export default FeaturedToursSection;