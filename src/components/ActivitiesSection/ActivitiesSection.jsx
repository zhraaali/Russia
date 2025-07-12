import React from 'react';
import './ActivitiesSection.css';
import Activity from '../Activity/Activity';
import img2 from '../../assets/images/motor.png'
import img1 from '../../assets/images/motor2.png'
import blueBackImg from '../../assets/images/wave3.png'
import skyBackImg from '../../assets/images/wave5.png'
import img3 from '../../assets/images/hasky.png'
import img4 from '../../assets/images/army.png'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.png'
import img7 from '../../assets/images/img7.png'
import img8 from '../../assets/images/Stage-drift-M2-bmw2_avec-scaled.png'
import img9 from '../../assets/images/dsc_9034.png'
import img10 from '../../assets/images/img10.png'
import img11 from '../../assets/images/6d2f0ce997c983cc62e6264f874a96d6.png'
import img12 from '../../assets/images/Russian-Dacha-gty-img.png'
import img13 from '../../assets/images/img13.png'
import img14 from '../../assets/images/photo_2025-01-23_14-30-06.png'
import img15 from '../../assets/images/img15.png'
// import img15 from '../../assets/images/1b21b0cc0919342123eb8273b33d4e28 (1).png'
import img16 from '../../assets/images/img16.png'
import img17 from '../../assets/images/e0d7e93e3b48afed25b1c8aca8c1c1ab.png'
import img18 from '../../assets/images/85128f850d2553f746c9d7446c4a1f1c.png'
import img19 from '../../assets/images/71.png'
import img20 from '../../assets/images/panorama360-1140x761.png'
const ActivitiesSection = () => {
  return (
    <section className="activities-section">
      <h2 className="activities-title">الفعاليات</h2>

      <div className='activites-container'>
      <Activity img={blueBackImg}
                bgImage1={img1}
                title1="البقي العملاق"
                bgImage2={img2}
                title2=" الدباب الثلجي"
      />
       <Activity img={skyBackImg}
                bgImage1={img3}
                title2="التجربة العسكرية"
                bgImage2={img4}
                title1="عربة الهاسكي"
      />
      <Activity img={blueBackImg}
                bgImage1={img6}
                title1="السيرك الروسي"
                bgImage2={img5}
                title2="المنطاد"
      />
      <Activity img={skyBackImg}
                bgImage1={img8}
                title1="  سيارات Drift"
                bgImage2={img7}
                title2="كارتينغ" />
      <Activity img={blueBackImg}
                bgImage1={img10}
                title1=" الكروز الملكي البنورامي"
                bgImage2={img9}
                title2="اللعب مع الدب"
      />
      <Activity img={skyBackImg}
                bgImage1={img12}
                title1="الريف الروسي"
                bgImage2={img11}
                title2="حديقة الحيوان"
      />
      <Activity img={blueBackImg}
                bgImage1={img14}
                title1="عربة الخيل"
                bgImage2={img13}
                title2="تلفريك"
      />
      <Activity img={skyBackImg}
                bgImage1={img16}
                title2="جزيرة الأحلام"
                bgImage2={img15}
                title1="zipline"
      />
      <Activity img={blueBackImg}
                bgImage1={img18}
                title1="  جولة سياحية مع سيارة"
                bgImage2={img17}
                title2="استئجار يخت"
                />
      <Activity img={skyBackImg}
                bgImage1={img19}
                title1="هيليكوبتر"
                bgImage2={img20}
                title2="بانوراما 360"
      />
      {/* <Activity/> */}
      {/* <Activity/> */}
      {/* <Activity/> */}
      {/* <Activity/> */}
      
      </div>
    </section>
     
  );
};

export default ActivitiesSection;