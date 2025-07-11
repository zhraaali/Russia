import React from 'react'
import HeroSection from '../../components/Hero/Hero'
import Service from '../../components/Service/Service'
import FeaturedToursSection from '../../components/FeaturedToursSection/FeaturedToursSection'
import ImportantInfoSection from '../../components/ImportantInfoSection/ImportantInfoSection'
import FamousSection from '../../components/FamousSection/FamousSection'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <Service/>
        <FeaturedToursSection/>
        <ImportantInfoSection/>
        <FamousSection/>
        <Footer/>
    </>
  )
}

export default Home