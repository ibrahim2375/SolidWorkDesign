import React, { useState } from 'react'
//images 
import Image from '../images/sw3.jpg'
//css 
import '../css/Sections.css'
function Sections() {
    const [classAnimation, setclassAnimation] = useState('');
    window.addEventListener('scroll', () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 1100) {
            setclassAnimation('section-animation');
        }
    })
    return (
        <section className={classAnimation}>
            <div className="content">
                <div className="image">
                    <img src={Image} alt="" />
                </div>
                <div className={`section-data`}>
                    <h1 className={classAnimation}>Well Good</h1>
                    <p className={classAnimation}>Preventative digital mental health care for businesses</p>
                    <a className={classAnimation} href="/">View Project</a>
                </div>

            </div>
        </section>
    )
}
export default Sections