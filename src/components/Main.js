import React, { useState, useEffect } from 'react'
//components
import Info from './Info'
import Sections from './Sections'
import Note from './Note'
import DevelopmentSection from './DevelopmentSection'
import News from './News'
import Axios from 'axios'
//images 
import Image2 from '../images/sw4.jpg'
function Main() {
    const [sectionsData, setsectionsData] = useState([]);
    useEffect(() => {
        Axios.get(process.env.REACT_APP_HOME_SECTIONS).then((res) => {
            setsectionsData(res.data);
        })

    }, [])
    return (
        <div className="container">
            <Info />
            {
                sectionsData.map((section) => {
                    return <Sections key={section.id} title={section.title} description={section.description} img={section.img} />

                })
            }
            <Note />
            {/* <DevelopmentSection Image={Image1} /> */}
            <div className="d-flex  flex-wrap  w-100 mt-5" style={{ justifyContent: 'center', gap: '100px' }}>
                <News />
                <News />
            </div>
            <DevelopmentSection Image={Image2} />
        </div>
    )
}

export default React.memo(Main)