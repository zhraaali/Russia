import React from 'react'
import './Tourtwo.css'
const Tourtwo = (props) => {
  return (
    <div className="tour-item">
      
        <div className="tour-image-container">
        <div>
            <img src={props.backimg} className="tour-image-back" />
            {/* <div className='inner-img'> */}
            

            {/* </div> */}
          </div>
          <img src={props.moscowImage} alt="Moscow" className="tour-image" />
        </div>
        <div className="tour-details">
          <h3>{props.title}</h3>
          <p>
           {props.desc}
          </p>
        </div>
      </div>
  )
}

export default Tourtwo