import React from 'react'
//images 
import Image from '../images/sw3.jpg'
//css 
import '../css/Sections.css'
function Sections() {
    return (
        <section>
            <div className="content">
                <div className="image">
                    <img src={Image} alt="" />
                </div>
                <div className="section-data">
                    <h1>Well Good</h1>
                    <p>Preventative digital mental health care for businesses</p>
                    <a href="/">View Project</a>
                </div>

            </div>
        </section>
    )
}
export default Sections