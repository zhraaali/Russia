import React from 'react'
import './Service.css'
import Serviceone from '../Serviceone/Serviceone'
import ServicesSectionTwo from '../ServicesSectionTwo/ServicesSectionTwo'
import ServiceSectionThree from '../ServiceSectionThree/ServiceSectionThree'
const Service = () => {
  return (
    <div className='service' id='trans1'>
        <h2>الخدمات</h2>
        <Serviceone/>
        <ServicesSectionTwo/>
        <ServiceSectionThree/>
    </div>
  )
}

export default Service