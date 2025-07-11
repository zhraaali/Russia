

import React from 'react';
import './MoscowInfoSection.css';
import sportIcon from '../../assets/images/sport-faculty-svgrepo-com.png'
import historyIcon from '../../assets/images/history-svgrepo-com.png'
 import treeIcon from '../../assets/images/tree-evergreen-svgrepo-com (1).png'
import studentIcon from '../../assets/images/student-svgrepo-com.png'
import metroIcon from '../../assets/images/metro-svgrepo-com.png'
import peopleIcon from '../../assets/images/people-svgrepo-com (1).png'
// import sportIcon from '../../assets/images'
// import sportIcon from '../../assets/images'
// أيقونات SVG بسيطة (يمكنك استبدالها بأيقونات حقيقية)









const MoscowInfoSection = () => {
  return (
    <section className="moscow-info-section">
      <h2 className="moscow-info-title">معلومات عن موسكو</h2>

      <div className="info-cards-grid-moscow">
        {/* البطاقة 1: الفعاليات المتنوعة */}
        <div className="info-card-moscow">
          <div className="info-icon-wrapper"> {/* غلاف جديد للأيقونة لتموضعها */}
            <div className="info-icon-circle">
              <img src={historyIcon}/>
            </div>
          </div>
          {/* <p className="card-heading">موسكو تعد بحق مدينة الفعاليات المتنوعة</p> */}
          <p className="card-description-moscow">
          موسكو تُعد بحق مدينة الفعاليات المتنوعة
            حيث تجمع بين التاريخ العريق والحداثة النابضة بالحياة. في كل زاوية من المدينة تجد نشاطات مختلفة. كما تحتضن موسكو مهرجانات موسيقية وثقافية على مدار العام. إضافة إلى عروض الأزياء التاريخية وسباقات كلاب الهاسكي في الشتاء.
          </p>
        </div>

        {/* البطاقة 2: الرياضة */}
        <div className="info-card-moscow">
          <div className="info-icon-wrapper">
            <div className="info-icon-circle">
              <img src={sportIcon}/>
            </div>
          </div>
          {/* <p className="card-heading">موسكو تعد أبرز مدن الرياضة</p> */}
          <p className="card-description-moscow">
          موسكو تُعد واحدة من أبرز مدن الرياضة
            حيث تجمع بين البنية التحتية المتطورة والتقاليد الرياضية العريقة. المدينة استضافت الحدث العالمي الكبير مثل الألعاب الأولمبية الصيفية 1980. تضم موسكو عددًا هائلًا من الملاعب و الصالات الرياضية.
          </p>
        </div>

        {/* البطاقة 3: الطلاب والتعليم */}
        <div className="info-card-moscow">
          <div className="info-icon-wrapper">
            <div className="info-icon-circle">
              <img src={studentIcon}/>
            </div>
          </div>
          {/* <p className="card-heading">موسكو تعد مدينة مثالية للطلاب</p> */}
          <p className="card-description-moscow">
          موسكو تُعد مدينة مثالية للطلاب
            بفضل تنوع جامعاتها وجودة التعليم فيها. توفر فرصًا ممتازة للمنح الدراسية والسكن بأسعار معقولة نسبيًا. كما أن الحياة الثقافية فيها غنية مما يمنح الطلاب فرصة للاستمتاع بالمسرح المتاحف والمهرجانات.
          </p>
        </div>

        {/* البطاقة 4: الطبيعة والمساحات الخضراء */}
        <div className="info-card-moscow">
          <div className="info-icon-wrapper">
            <div className="info-icon-circle">
              <img src={treeIcon}/>
            </div>
          </div>
          {/* <p className="card-heading">موسكو ليست فقط مدينة ناطحات السحاب</p> */}
          <p className="card-description-moscow">
          موسكو ليست فقط مدينة ناطحات السحاب
            والتاريخ العريق بل هي أيضًا واحدة من أكثر العواصم خضرة في أوروبا. وتضم مئات الحدائق والمساحات الطبيعية. من أبرز هذه الحدائق: غوركي، زاريادي، إيزمايلوفسكي، سوكولنيكي، كولومينسكوي.
          </p>
        </div>

        {/* البطاقة 5: التفاهمات والثقافات */}
        <div className="info-card-moscow">
          <div className="info-icon-wrapper">
            <div className="info-icon-circle">
              <img src={peopleIcon}/>
            </div>
          </div>
          {/* <span className="card-description-moscow"ت</span> */}
          <p className="card-description-moscow">
          موسكو تُجسد بحق مدينة متعددة الثقافات
            حيث يعيش فيها ملايين الأشخاص من خلفيات عرقية ودينية متنوعة. هذا التنوع يظهر أيضًا في الحياة اليومية: من المساجد والكنائس والمعابد إلى المدارس التي تدرس بلغات مختلفة و المهرجانات التي تحتفل بثقافات متعددة.
          </p>
        </div>

        {/* البطاقة 6: مترو موسكو */}
        <div className="info-card-moscow">
          <div className="info-icon-wrapper">
            <div className="info-icon-circle">
              <img src={metroIcon}/>
            </div>
          </div>
          {/* <p className="card-heading">يعتبر مترو موسكو من أكثر شبكات المترو جاذبية في العالم</p> */}
          <p className="card-description-moscow">
          يُعتبر مترو موسكو من أكثر شبكات المترو جاذبية في العالم
            بل و يلقب أحيانًا بقصر الشعب تحت الأرض يتميز بتصميمه المعماري الفخم الذي يجمع بين الفن الكلاسيكي و الحداثة. ومن أبرز المحطات الجذابة: كومسومولسكايا، ماياكوفسكايا، كييفسكايا.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoscowInfoSection;