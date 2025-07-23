import { Helmet } from 'react-helmet-async'
import Footer from '../../components/Footer/Footer'
import MoscowInfoSection from '../../components/MoscowInfoSection/MoscowInfoSection'

const Information = () => {
  return (
    <>
      <Helmet>
        <title>موسكو | دليل شامل عن عاصمة روسيا السياحية</title>
        <meta
          name='description'
          content='كل ما تريد معرفته عن موسكو: معالمها التاريخية، الحياة الثقافية، النقل المتميز، المساحات الخضراء، والتنوع الثقافي في العاصمة الروسية'
        />
        <meta
          name='keywords'
          content='موسكو, السياحة في موسكو, معالم موسكو, مترو موسكو, جامعات موسكو, حدائق موسكو, ثقافة موسكو, تاريخ موسكو'
        />

        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://russia-gulf.vercel.app/moscow'
        />
        <meta
          property='og:title'
          content='موسكو | دليل شامل عن عاصمة روسيا السياحية'
        />
        <meta
          property='og:description'
          content='اكتشف موسكو: التاريخ، الثقافة، المعالم، والأنشطة في العاصمة الروسية'
        />

        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='موسكو | دليل شامل عن عاصمة روسيا السياحية'
        />
        <meta
          name='twitter:description'
          content='اكتشف موسكو: التاريخ، الثقافة، المعالم، والأنشطة في العاصمة الروسية'
        />

        <link
          rel='canonical'
          href='https://russia-gulf.vercel.app/moscow'
        />

        <script type='application/ld+json'>
          {`
            {
              "@context": "https://schema.org",
              "@type": "City",
              "name": "موسكو",
              "description": "عاصمة روسيا وأكبر مدنها، مركز ثقافي وسياحي مهم",
              "url": "https://russia-gulf.vercel.app/moscow",
              "sameAs": "https://www.wikidata.org/wiki/Q649",
              "image": "%PUBLIC_URL%/images/moscow-social.jpg",
              "containsPlace": {
                "@type": "TouristAttraction",
                "name": "مترو موسكو",
                "description": "أجمل نظام مترو في العالم بمحطاته الفنية"
              }
            }
          `}
        </script>
      </Helmet>
      <MoscowInfoSection />
      <Footer />
    </>
  )
}

export default Information
