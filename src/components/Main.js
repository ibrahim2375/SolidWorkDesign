import React from 'react'
//components
import Info from './Info'
import Sections from './Sections'
import Note from './Note'
import DevelopmentSection from './DevelopmentSection'
import News from './News'
//images 
import Image1 from '../images/sw2.jpg'
import Image2 from '../images/sw4.jpg'
function Main() {
    return (
        <div className="container">
            <Info />
            <Sections  />
            <Sections />
            <Sections />
            <Sections />
            <Note />
            <DevelopmentSection Image={Image1} />
            <div className="d-flex  flex-wrap  w-100 vh-100 " style={{ justifyContent: 'center', gap: '100px' }}>
                <News />
                <News />
            </div>
            <DevelopmentSection Image={Image2} />
        </div>
    )
}

export default Main