import logo from './logo.svg';
import './App.css';

import NavbarComponent from './components/Navbar/Navbar';
import HeroSection from './components/Hero/Hero';
import FeaturedToursSection from './components/FeaturedToursSection/FeaturedToursSection';
import backimg from './assets/images/Rectangle 3.svg'
import moscowImage from './assets/images/eac37e124ffa14030bbcc438ab28bb31 (1)@2x.png'
import Service from './components/Service/Service';
import ImportantInfoSection from './components/ImportantInfoSection/ImportantInfoSection'
import FamousLandmarksSection from './components/FamousLandmarksSection/FamousLandmarksSection';
import FamousSection from './components/FamousSection/FamousSection';
import Footer from './components/Footer/Footer';
import ActivitiesSection from './components/ActivitiesSection/ActivitiesSection';
import MoscowInfoSection from './components/MoscowInfoSection/MoscowInfoSection';
import ContactUsSection from './components/ContactUsSection/ContactUsSection';
import { Route, Routes } from 'react-router-dom/dist';
import Home from './Pages/Home/Home';
import Activity from './Pages/Activity/Activity';
import Information from './Pages/Information/Information';
import Contact from './Pages/Contact/Contact';
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/activity' element={<Activity/>}/>
        <Route path='/informations' element={<Information/>}/>
        <Route path='/contact' element={<Contact/>}/>
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
  );
}

export default App;



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