import React from 'react';
import './FamousLandmarksSection.css';
// استيراد صور المعالم
import metroMoscowImg from '../../assets/images/0fc07aaf6cc0a161db7492fbf3ec9d11.png'; // افترض وجود هذه الصور في مجلد assets/images
import redSquareImg from '../../assets/images/63c5373e0fc867310d57243b.png';
import kremlinImg from '../../assets/images/9d656dd8880c14e012a5cca4b9fbcf95.png';

const FamousLandmarksSection = (props) => {
  return (
    <section className="famous-landmarks-section">
      {/* <h2 className="landmarks-title">أشهر المعالم السياحية</h2> */}

      <div className="moscow-button-container">
        <button className="moscow-button">{props.btn}</button>
      </div>

      <div className="landmarks-cards-container">
       
        <div className="landmark-card">
          <p className="landmark-name">{props.title3}</p>
          <div className="landmark-image-wrapper">
            <img src={props.img3} alt="الكرملين" />
          </div>
        </div>
        {/* بطاقة الساحة الحمراء */}
        <div className="landmark-card">
          <p className="landmark-name"> {props.title2}</p>
          <div className="landmark-image-wrapper">
            <img src={props.img2} alt="الساحة الحمراء" />
          </div>
        </div>

      
        <div className="landmark-card">
          <p className="landmark-name">{props.title1}</p>
          <div className="landmark-image-wrapper">
            <img src={props.img1} alt="محطة مترو موسكو" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamousLandmarksSection;