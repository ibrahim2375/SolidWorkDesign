import React from 'react'
import Links from './components/Links'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import WorksPosts from './components/WorksPosts'
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
        </div>
    )
}

export default Works