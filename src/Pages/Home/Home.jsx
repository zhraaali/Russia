import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import FamousSection from '../../components/FamousSection/FamousSection'
import FeaturedToursSection from '../../components/FeaturedToursSection/FeaturedToursSection'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/Hero/Hero'
import ImportantInfoSection from '../../components/ImportantInfoSection/ImportantInfoSection'
import Service from '../../components/Service/Service'

const Home = () => {
  const serviceRef = useRef(null)

  // دالة للتمرير إلى قسم الجولات المميزة
  const scrollToFeaturedTours = () => {
    serviceRef.current.scrollIntoView({
      behavior: 'smooth', // يجعل التمرير سلسًا
      block: 'start', // يضع القسم في بداية منطقة العرض
    })
  }
  const tourRef = useRef(null)

  // دالة للتمرير إلى قسم الجولات المميزة
  const scrollTotours = () => {
    tourRef.current.scrollIntoView({
      behavior: 'smooth', // يجعل التمرير سلسًا
      block: 'start', // يضع القسم في بداية منطقة العرض
    })
  }
  return (
    <>
      <Helmet>
        <title>السياحة في روسيا | دليل السفر إلى روسيا وأهم المعالم</title>
        <meta
          name='description'
          content='المرجع الشامل للسياحة في روسيا: تأشيرات السفر، أفضل المدن الروسية، المعالم السياحية، نصائح السفر، وتجارب السياح العرب في روسيا'
        />
        <meta
          name='keywords'
          content='السياحة في روسيا, السفر إلى روسيا, تأشيرة روسيا, موسكو, سانت بطرسبرغ, معالم روسيا, جولات سياحية روسيا, فنادق روسيا, الطقس في روسيا'
        />

        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://russia-gulf.vercel.app/'
        />
        <meta
          property='og:title'
          content='السياحة في روسيا | دليل السفر إلى روسيا وأهم المعالم'
        />
        <meta
          property='og:description'
          content='دليلك الكامل للسياحة في روسيا: تأشيرات، مدن، معالم، ونصائح مهمة للسياح العرب'
        />

        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:url'
          content='https://russia-gulf.vercel.app/'
        />
        <meta
          name='twitter:title'
          content='السياحة في روسيا | دليل السفر إلى روسيا وأهم المعالم'
        />
        <meta
          name='twitter:description'
          content='دليلك الكامل للسياحة في روسيا: تأشيرات، مدن، معالم، ونصائح مهمة للسياح العرب'
        />

        <link
          rel='canonical'
          href='https://russia-gulf.vercel.app/'
        />
      </Helmet>
      <HeroSection
        scrollToFeaturedTours={scrollToFeaturedTours}
        scrollTotours={scrollTotours}
      />
      <div ref={serviceRef}>
        <Service />
      </div>
      <div ref={tourRef}>
        <FeaturedToursSection />
      </div>
      <ImportantInfoSection />
      <FamousSection />
      <Footer />
    </>
  )
}

export default Home
