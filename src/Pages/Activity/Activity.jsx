import { Helmet } from 'react-helmet-async'
import ActivitiesSection from '../../components/ActivitiesSection/ActivitiesSection'
import Footer from '../../components/Footer/Footer'

const Activity = () => {
  return (
    <>
      <Helmet>
        <title>فعاليات السياحة في روسيا | أنشطة ومغامرات لا تنسى</title>
        <meta
          name='description'
          content='اكتشف أفضل الفعاليات والأنشطة السياحية في روسيا: رحلات بالمنطاد، تجارب عسكرية، عربات الهاسكي، جولات بانورامية وغيرها من المغامرات'
        />
        <meta
          name='keywords'
          content='فعاليات روسيا, أنشطة سياحية روسيا, مغامرات روسيا, جولات روسيا, المنطاد الروسي, عربة الهاسكي, التجربة العسكرية روسيا'
        />

        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://russia-ten.vercel.app/activities'
        />
        <meta
          property='og:title'
          content='فعاليات السياحة في روسيا | أنشطة ومغامرات لا تنسى'
        />
        <meta
          property='og:description'
          content='اكتشف أفضل الفعاليات والأنشطة السياحية في روسيا'
        />

        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='فعاليات السياحة في روسيا | أنشطة ومغامرات لا تنسى'
        />
        <meta
          name='twitter:description'
          content='اكتشف أفضل الفعاليات والأنشطة السياحية في روسيا'
        />

        <link
          rel='canonical'
          href='https://russia-ten.vercel.app/activities'
        />
      </Helmet>
      <ActivitiesSection />
      <Footer />
    </>
  )
}

export default Activity
