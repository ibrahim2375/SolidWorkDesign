import React from 'react';
//css 
import '../css/Sections.css'
function Sections({ img, description, title, fadeAnimation }) {
    return (
        <section>
            <div className="content">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className={`section-data`}>
                    <h1 >{title}</h1>
                    <p>{description}</p>
                    <a href="/">View Work</a>
                </div>
            </div>
        </section>
    )
}
export default React.memo(Sections)