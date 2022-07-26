import React, { createRef, useState } from 'react'
// css
import '../css/Landing.css'
//packages
// import Tilt from 'react-vanilla-tilt'
function Landing({ opacity }) {
    const [xPosition, setXPosition] = useState();
    const [yPosition, setYPosition] = useState();
    const ref = createRef();
    const Animate = () => {

        ref.current.onmousemove = (e) => {
            let x = e.pageX * -1 / 15;
            let y = e.pageY * -1 / 15;
            setXPosition(x);
            setYPosition(y);
        }
    }

    return (
        <div className="landing" onMouseMove={Animate}>
            <div className='center_text'>
                <h1 className='display-1'> Digital..</h1>
                <h1 className='display-1'> Delivered.</h1>
                <p className='text-center w-75' >Parallax is a digital consultancy with innovation at its core. We solve complex problems and build leading digital products.</p>
            </div>
            <div id="carouselExampleSlidesOnly" className="carousel  slide w-100 h-100" data-bs-ride="carousel" style={{ opacity: opacity }}>
                <div className="carousel-inner w-100 h-100">
                    <div ref={ref} className="carousel-item active w-100 h-100 " style={{ backgroundPositionX: xPosition, backgroundPositionY: yPosition }} >
                    </div>
                
                </div>
            </div>
        </div>

    )
}

export default React.memo(Landing)