import React from 'react'
//css for
import '../css/Footer.css'
//icons  
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Footer() {
    return (
        <footer className="color-of-sidebar-change">
            <div className="circle-shape"></div>
            <div className="rectangle-shape"></div>
            <div className="footer-content container">
                <div className="first">
                    <span>Egypt</span>
                    <p className="text-center display-6" >The Elbow Rooms,
                        64 Call Lane,
                        Leeds, LS1 6DT</p>
                </div>
                <div className="second">
                    <span>Egypt</span>
                    <p className="text-center display-6">3rd Floor, 6 Duke Street
                        London, W1U 3EN</p>
                </div>
                <div className="third">
                    <p className="text-center display-6">email@gmail.com</p>
                    <div className="subscribe mt-5">
                        <input type="email" name="email" placeholder="Enter Email To subscribe..." />
                        <button><ArrowRightAltIcon /></button>
                    </div>
                </div>
                <p className="rights text-center mt-5">© SolidWork Agency Ltd 2022PrivacyTerms</p>
            </div>
        </footer>
    )
}

export default React.memo(Footer)