import React, { useState } from 'react'
//css
import '../css/Development.css'
function DevelopmentSection({ Image }) {
    const [classAnimation_d, setclassAnimation_d] = useState('');
    const fadeInD = () => {
        const reveal = document.querySelectorAll('.reveal-d');
        for (let i = 0; i < reveal.length; i++) {
            let windowHeight = window.innerHeight;
            let getTop = reveal[i].getBoundingClientRect().top;
            let revealPoint = 100;
            if (getTop < windowHeight - revealPoint) {
                setclassAnimation_d('reveal-d-animation')
            } else {
                setclassAnimation_d('');
            }
        }
    }
    window.addEventListener('scroll', fadeInD)
    return (
        <div className={`development-section ${classAnimation_d}reveal-d`}>
            <div className="image-content">
                <img src={Image} alt="" />
            </div>
            <div className="text-content">
                <div className="txt">
                    <h4>We use research, strategy and design to innovate </h4>
                    <p>
                        solve complex problems.Our team of thinkers and doers create
                        digital products and campaigns to drive real performance
                        and commercial value..</p>
                </div>
            </div>

        </div>
    )
}

export default React.memo(DevelopmentSection)