import React from 'react'
//redux
import { useSelector } from 'react-redux'
//components
import Info from './Info'
import Sections from './Sections'
import Note from './Note'
import DevelopmentSection from './DevelopmentSection'
import News from './News'
//images 
import Image2 from '../images/sw4.jpg'
function Main() {
    const posts_in_home = useSelector(state => state.home_posts_reducer.home_posts);
    return (
        <div className="container">
            <Info />
            {
                posts_in_home.map((section) => {
                    return <Sections key={section.id} title={section.title} description={section.description} img={section.img} />
                })
            }
            <Note />
            <div className="d-flex  flex-wrap  w-100 mt-5" style={{ justifyContent: 'center', gap: '100px' }}>
                <News />
                <News />
            </div>
            <DevelopmentSection Image={Image2} />
        </div>
    )
}

export default React.memo(Main)