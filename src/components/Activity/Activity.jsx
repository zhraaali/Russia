import React from 'react'
import './Activity.css'
import blueWaveBackground from '../../assets/images/wave3.png'
const Activity = (props) => {
  const imgStyle ={
    backgroundImage: `url(${props.bgImage1})`
  };
  const img2Style ={
    backgroundImage: `url(${props.bgImage2})`
  };
  return (

    
    <div className='activity-inner'>
      <div className="background-wave">
        <img src={props.img} alt="خلفية موجة زرقاء" className="wave-img" />
      

      <div className="activities-cards-container">
        {/* بطاقة الدباب الثلجي */}
        <div className="activity-card snowmobile-card" style={imgStyle}>
          <div className="card-overlay">
            <p className="card-name">{props.title1} </p>
          </div>
        </div>

        {/* بطاقة البقي العملاق */}
        <div className="activity-card atv-card" style={img2Style}>
          <div className="card-overlay">
            <p className="card-name"> {props.title2}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};


export default Activity