import './App.css'

import { HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom/dist'
import Activity from './Pages/Activity/Activity'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Information from './Pages/Information/Information'
import NavbarComponent from './components/Navbar/Navbar'
function App() {
  return (
    <HelmetProvider>
      <div className='App'>
        <NavbarComponent />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/activity'
            element={<Activity />}
          />
          <Route
            path='/informations'
            element={<Information />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          {/* <HeroSection/> */}
          {/* <Service/> */}

          {/* <FeaturedToursSection/> */}
          {/* <ImportantInfoSection/> */}

          {/* <FamousSection/> */}
          {/* <Footer/> */}
          {/* <ActivitiesSection/> */}
          {/* <MoscowInfoSection/> */}
          {/* <ContactUsSection/> */}
        </Routes>
      </div>
    </HelmetProvider>
  )
}

export default App

// مكون لـ Navbar (سننشئه في الخطوة التالية)
// import Navbar from './components/Navbar/Navbar';
// import { Route, Router, Routes } from 'react-router-dom';

// // مكونات الصفحات الفعلية التي ستعرض المحتوى الكامل لكل مسار
// // سنقوم بدمج الأقسام التي تنتمي لصفحة واحدة داخل مكون واحد
// const HomePage = () => (
//   <>
//     <HeroSection />
//     <Service />
//     <MoscowInfoSection />
//     <FeaturedToursSection />
//     {/* ربما أقسام أخرى تنتمي للصفحة الرئيسية */}
//   </>
// );

// const ActivitiesPage = () => (
//   <>
//     <ActivitiesSection />
//     {/* يمكن إضافة أقسام أخرى ذات صلة بالفعاليات هنا */}
//   </>
// );

// const MoscowInfoPage = () => (
//   <>
//     <ImportantInfoSection />
//     <FamousLandmarksSection />
//     {/* يمكن إضافة أقسام أخرى ذات صلة بمعلومات موسكو هنا */}
//   </>
// );

// const ContactPage = () => (
//   <>
//     <ContactUsSection />
//   </>
// );

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* شريط التنقل سيكون موجوداً دائماً في الأعلى */}
//         <Navbar />

//         {/* تعريف المسارات */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/activities" element={<ActivitiesPage />} />
//           <Route path="/moscow-info" element={<MoscowInfoPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           {/* يمكن إضافة مسار لصفحة 404 إذا أردت */}
//           {/* <Route path="*" element={<div>404 Page Not Found</div>} /> */}
//         </Routes>

//         {/* الفوتر يمكن أن يكون موجوداً دائماً في الأسفل */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
