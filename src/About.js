import React, { useState } from 'react'
//icons 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//components
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Links from './components/Links'
import Img1 from './images/about1.jpg'
import Img2 from './images/about2.jpg'
import Img3 from './images/about3.jpg'
// import ImgTeam from './images/teamimg.png'
//css 
import './css/About/About.css'
function About() {
    const [classAnimation_A, setclassAnimation_A] = useState('');
    const fadeInA = () => {
        const reveal = document.querySelectorAll('.reveal-a');
        for (let i = 0; i < reveal.length; i++) {
            let windowHeight = window.innerHeight;
            let getTop = reveal[i].getBoundingClientRect().top;
            let revealPoint = 100;
            if (getTop < windowHeight - revealPoint) {
                setclassAnimation_A('reveal-a-animation')
            } else {
                setclassAnimation_A('');
            }
        }
    }
    window.addEventListener('scroll', fadeInA)
    return (
        <div className="about">
            <header >
                <div className="container">
                    <div className="shape1-style-animation"></div>
                    <div className="shape2-style-animation"></div>
                    <div className="shape3-style-animation"></div>
                    <Nav />
                    <div className="about-head-content">
                        <h1 className="text-center mt-5 about-header-txt display-3">A decade of success</h1>
                        <div className="line"></div>
                        <div className="arrow"><ExpandMoreIcon className="arrow-icon fs-1" /></div>
                    </div>
                </div>
            </header>
            <SideBar />
            <Links />
            <div className="about-main-content container">
                <div className="about-main-content-img d-flex align-items-center justify-content-center w-90 ">
                    <img src={Img1} alt="" />
                </div>
                <div className="about-main-content-txt d-flex align-items-center justify-content-center w-90 ">
                    <p>Ten years is a long time. Enough to grow a team from four to forty. People who work at
                        Parallax are inquisitive, talented problem solvers dedicated to the pursuit of digital excellence.</p>
                </div>
                {/* section */}
                <div className={`about-main-content-section ${classAnimation_A} reveal-a`}>
                    <div className="about-main-content-section-img">
                        <img src={Img2} alt="" />
                    </div>
                    <div className="about-main-content-section-details">
                        <h1 className="display-3 fw-bold">Always challenging the norm.</h1>
                        <p className="text-muted ">We understand the risks of the latest and greatest and know how to deliver
                            large digital projects at the forefront of technical possibility with a
                            balanced approach to risk mitigation. Trust us to deliver a transformative
                            user experience married with technical
                            excellence across a broad range of projects and industry sectors.</p>
                    </div>
                </div>
                {/* section */}
                {/* section */}
                <div className={`about-main-content-section section2`}>
                    <div className="about-main-content-section-details">
                        <h1 className="display-3 fw-bold">Always challenging the norm.</h1>
                        <p className="text-muted ">We understand the risks of the latest and greatest and know how to deliver
                            large digital projects at the forefront of technical possibility with a
                            balanced approach to risk mitigation. Trust us to deliver a transformative
                            user experience married with technical
                            excellence across a broad range of projects and industry sectors.</p>
                    </div>
                    <div className="about-main-content-section-img">
                        <img src={Img3} alt="" />
                    </div>
                </div>
                {/* section */}
                {/* team section */}
                {/* <div className={`about-main-content-section`}>
                    <div className="about-main-content-section-details">
                        <h1 className="display-3 fw-bold">Meet the team.</h1>
                        <p className="text-muted ">Trust us to deliver a transformative
                            user experience married with technical
                            excellence across a broad range of projects and industry sectors.</p>
                    </div>
                    <div className="about-main-content-section-img team-img ">
                        <img src={ImgTeam} alt="" />
                    </div>
                </div> */}
                {/* team section */}
            </div>
            <Footer />

        </div>
    )
}
// const  SectionAboutPage = ()=> {} 
export default About