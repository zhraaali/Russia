import { Helmet } from 'react-helmet-async'
import ContactUsSection from '../../components/ContactUsSection/ContactUsSection'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>اتصل بنا - السياحة في روسيا | تواصل مباشر مع الدعم</title>
        <meta
          name='description'
          content='تواصل مع فريق الدعم للسياحة في روسيا عبر الواتساب أو التليجرام للحصول على استشارات ومعلومات عن الرحلات والجولات السياحية'
        />
        <meta
          name='keywords'
          content='اتصال روسيا, دعم سياحي روسيا, واتساب روسيا, تليجرام روسيا, استفسارات سياحية روسيا, أرقام اتصال روسيا'
        />

        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://russia-ten.vercel.app/contact'
        />
        <meta
          property='og:title'
          content='اتصل بنا - السياحة في روسيا | تواصل مباشر مع الدعم'
        />
        <meta
          property='og:description'
          content='تواصل مع فريق الدعم للسياحة في روسيا عبر الواتساب أو التليجرام'
        />

        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='اتصل بنا - السياحة في روسيا | تواصل مباشر مع الدعم'
        />
        <meta
          name='twitter:description'
          content='تواصل مع فريق الدعم للسياحة في روسيا عبر الواتساب أو التليجرام'
        />

        <link
          rel='canonical'
          href='https://russia-ten.vercel.app/contact'
        />
      </Helmet>
      <ContactUsSection />
    </>
  )
}

export default Contact
