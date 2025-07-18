import React from 'react'
import './Service.css'
import Serviceone from '../Serviceone/Serviceone'
import ServicesSectionTwo from '../ServicesSectionTwo/ServicesSectionTwo'
import ServiceSectionThree from '../ServiceSectionThree/ServiceSectionThree'
import ServicesSectionFour from '../ServicesSectionFour/ServicesSectionFour'
const Service = () => {
  return (
    <div className='service' id='trans1'>
        <h2>الخدمات</h2>
        <Serviceone/>
        <ServicesSectionTwo/>
        <ServiceSectionThree/>
        <ServicesSectionFour/>
    </div>
  )
}

export default Service