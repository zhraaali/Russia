// import React from 'react';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import './Navbar.css'; // استيراد ملف CSS
// import { Link } from 'react-router-dom/dist';

// const NavbarComponent = () => {
//   return (
//     <Navbar expand="lg" className="custom-navbar">
//       <Container>
//         {/* <Navbar.Brand href="#home" className="navbar-logo"> */}
          
//           {/* <span className="logo-text">T&T</span>  */}
//         {/* </Navbar.Brand> */}
//         {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto custom-nav-links"> 
//             <Nav.Link  className="nav-link-item active"><Link to='/'>الرئيسية</Link></Nav.Link>
//             <Nav.Link  className="nav-link-item"><Link to='/activity'>الفعاليات</Link></Nav.Link>
//             <Nav.Link  className="nav-link-item"><Link to='/informations'>معلومات عن موسكو</Link></Nav.Link>
//             <Nav.Link  className="nav-link-item contact-us-link"><Link to='/contact'>تواصل معنا</Link></Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComponent;

















import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; // لا نحتاج لـ Button هنا
import './Navbar.css'; // استيراد ملف CSS
import { Link, useLocation } from 'react-router-dom'; // استيراد Link و useLocation
import logoimg from '../../assets/images/russia dubia logo.png';
// const NavbarComponent = () => {
//   const location = useLocation(); // للحصول على المسار الحالي لتحديد العنصر النشط

//   return (
//     <Navbar expand="lg" className="custom-navbar" dir="rtl"> {/* إضافة dir="rtl" للتحكم في الاتجاه */}
//       <Container>
//         {/* Navbar.Brand سيكون هو الشعار أو اسم الموقع */}
//         {/* <Navbar.Brand as={Link} to="/" className="navbar-logo"> */}
//           {/* يمكنك وضع شعار هنا <img src="/path/to/your/logo.png" alt="Logo" /> */}
//           {/* <span className="logo-text">روسيا والخليج</span> */}
//         {/* </Navbar.Brand> */}

//         {/* زر التبديل (Hamburger menu) الذي يظهر على الشاشات الصغيرة */}
//         {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

//         {/* المحتوى الذي ينهار على الشاشات الصغيرة */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           {/* ms-auto يدفع العناصر إلى اليمين في LTR، ولكن في RTL يدفعها لليسار.
//               سنستخدم w-100 و justify-content-end أو justify-content-center للتحكم.
//           */}
//           <Nav className="w-100 justify-content-end custom-nav-links"> {/* ms-auto قد لا يكون مناسباً في RTL */}
//             <Nav.Link
//               as={Link}
//               to='/'
//               className={`nav-link-item ${location.pathname === '/' ? 'active' : ''}`}
//             >
//               الرئيسية
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to='/activity'
//               className={`nav-link-item ${location.pathname === '/activities' ? 'active' : ''}`}
//             >
//               الفعاليات
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to='/moscow-info' 
//               className={`nav-link-item ${location.pathname === '/moscow-info' ? 'active' : ''}`}
//             >
//               معلومات عن موسكو
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to='/contact'
//               className={`nav-link-item  ${location.pathname === '/contact' ? 'active' : ''}`}
//             >
//               تواصل معنا
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComponent;




import { useState, useEffect } from 'react'; 
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import './Navbar.css';
// import { Link, useLocation } from 'react-router-dom';

// استيراد شعارك
// import logoImage from '../../assets/russia-gulf-logo.png';

const NavbarComponent = () => {
  const location = useLocation(); // للحصول على المسار الحالي
  const [showLogoAndBlueText, setShowLogoAndBlueText] = useState(false);

  // useEffect لمراقبة تغيير المسار وتحديث الحالة
  useEffect(() => {
    // إذا كان المسار ليس الصفحة الرئيسية ('/')، أظهر الشعار واجعل النص أزرق
    if (location.pathname !== '/') {
      setShowLogoAndBlueText(true);
    } else {
      // إذا كان المسار هو الصفحة الرئيسية، أخفِ الشعار واجعل النص أبيض
      setShowLogoAndBlueText(false);
    }
  }, [location.pathname]); // إعادة تشغيل التأثير عند تغيير المسار

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${showLogoAndBlueText ? 'navbar-scrolled' : ''}`} // إضافة كلاس conditional
      dir="rtl"
    >
      <Container className="container-nav">
        {/* الشعار - يظهر فقط عندما تكون showLogoAndBlueText صحيحة */}
        {showLogoAndBlueText && (
          <Navbar.Brand as={Link} to="/" className="navbar-logo">
            <img src={logoimg} alt="Russia & Gulf Logo" className="navbar-logo-image" />
            {/* <span className="logo-text">روسيا والخليج</span> إذا أردت نصًا بجانب الشعار */}
          </Navbar.Brand>
        )}

        {/* زر التبديل (Hamburger menu) */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-end custom-nav-links">
            {/* روابط التنقل */}
            <Nav.Link
              as={Link}
              to='/'
              className={`nav-link-item ${location.pathname === '/' ? 'active' : ''}`}
            >
              الرئيسية
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/activity'
              className={`nav-link-item ${location.pathname === '/activities' ? 'active' : ''}`}
            >
              الفعاليات
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/informations'
              className={`nav-link-item ${location.pathname === '/moscow-info' ? 'active' : ''}`}
            >
              معلومات عن موسكو
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/contact'
              className={`nav-link-item  ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              تواصل معنا
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;