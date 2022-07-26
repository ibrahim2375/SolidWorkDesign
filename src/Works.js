import React from 'react'
import Links from './components/Links'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import WorksPosts from './components/WorksPosts'
// import Footer from './components/Footer'
function Works() {
    return (
        <div className="works">
            <div className="container">
                <Nav />
                <SideBar />
                <Links />
                {/* work components */}
                <WorksPosts />
            </div>
                {/* <Footer /> */}
        </div>
    )
}

export default Works