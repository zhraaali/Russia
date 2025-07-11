import React from 'react'
import './FamousSection.css'
import FamousLandmarksSection from '../FamousLandmarksSection/FamousLandmarksSection'
import img1 from './../../assets/images/0fc07aaf6cc0a161db7492fbf3ec9d11.png'
import img2 from '../../assets/images/63c5373e0fc867310d57243b.png'
import img3 from '../../assets/images/9d656dd8880c14e012a5cca4b9fbcf95.png'
import img4 from '../../assets/images/biterhof.png'
import img5 from '../../assets/images/russia-st-petersburg-top-attractions-church-savior-spilled-blood.png'
import img6 from '../../assets/images/f2a86a26eb89ac4dfaf661c52b77f98a.png'
import img7 from '../../assets/images/7686d76d393624b16473a8ec441d6709 (1).png'
import img8 from '../../assets/images/360_F_312785854_NkRhaR5Uq2rVRRuqTdWEmHOHxPs88xOL (2).png'
import img9 from '../../assets/images/cdef9dee428e85547106bad41a930f13.png'
const FamousSection = () => {
  return (
    <section className="famous-section">
    <h2 className="landmarks-title">أشهر المعالم السياحية</h2>
    <FamousLandmarksSection btn="موسكو"
        title1="محطة مترو موسكو"
        img1={img1}
    
        title2="الساحة الحمراء"
        img2={img2}
    
        title3="الكرملين"
        img3={img3}
    
    />
    <FamousLandmarksSection btn="سانت بطرسبرغ"
        title1="قصر بيترهوف"
        img1={img4}
    
        title2="كنيسة الدم المسفوك"
        img2={img5}
    
        title3="قصر الشتاء"
        img3={img6}
    
    />
    <FamousLandmarksSection btn="سوتشي"
        title1="Krasnaya Polyana"
        img1={img7}
    
        title2="سوتشي بارك"
        img2={img8}
    
        title3="جبل أخون"
        img3={img9}
    
    /></section>
  )
}

export default FamousSection