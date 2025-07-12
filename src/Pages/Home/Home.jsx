import React from 'react'
import HeroSection from '../../components/Hero/Hero'
import Service from '../../components/Service/Service'
import FeaturedToursSection from '../../components/FeaturedToursSection/FeaturedToursSection'
import ImportantInfoSection from '../../components/ImportantInfoSection/ImportantInfoSection'
import FamousSection from '../../components/FamousSection/FamousSection'
import Footer from '../../components/Footer/Footer'
import { useRef } from 'react'

const Home = () => {
  const serviceRef = useRef(null);

  // دالة للتمرير إلى قسم الجولات المميزة
  const scrollToFeaturedTours = () => {
    serviceRef.current.scrollIntoView({
      behavior: 'smooth', // يجعل التمرير سلسًا
      block: 'start',     // يضع القسم في بداية منطقة العرض
    });
  };
  const tourRef = useRef(null);

  // دالة للتمرير إلى قسم الجولات المميزة
  const scrollTotours = () => {
    tourRef.current.scrollIntoView({
      behavior: 'smooth', // يجعل التمرير سلسًا
      block: 'start',     // يضع القسم في بداية منطقة العرض
    });
  };
  return (
    <>
        <HeroSection scrollToFeaturedTours={scrollToFeaturedTours} scrollTotours={scrollTotours}/>
        <div ref={serviceRef}>
        <Service/>
        </div>
        <div ref={tourRef}>
        <FeaturedToursSection />
        </div>
        <ImportantInfoSection/>
        <FamousSection/>
        <Footer/>
    </>
  )
}

export default Home