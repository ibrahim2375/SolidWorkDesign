import React, { useContext  } from 'react'
//css 
import '../css/Info.css'
//import context      
import { themeContext } from '../App';
function Info() {
    const {  mainColor, spanState } = useContext(themeContext);

    return (
        <div className="info mt-5 container">
            <span style={{ display: spanState ? 'block' : 'none' }}>hello</span>
            <p style={{ color: mainColor }}>
                Pick up the phone. Call us. Ask us the difficult questions you don’t have answers to.
                We’re a digital transformation agency for ambitious organisations. We take ideas and transform them into opportunities,
                using cutting-edge user experience design, technical innovation and our passion for digital excellence. We don’t
                shy away from projects that seem too out of reach,
                unachievable or even impossible. We welcome the challenge and deliver the success.
            </p>
        </div>
    )
}

export default Info