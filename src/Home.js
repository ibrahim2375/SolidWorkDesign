import React, { useContext } from 'react'
import Main from './components/Main'
import Landing from './components/Landing'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
// import Info from './components/Info'
import Links from './components/Links'
import { themeContext } from './App';

function Home() {
    const { stateOFthemeChange } = useContext(themeContext);

    return (
        <>
            <header >
                <div className="container">
                    <Nav />
                </div>
            </header>
            <SideBar />
            <Links />
            <Landing opacity={stateOFthemeChange ? '0' : '1'} />
            <Main />
            <Footer />

        </>
    )
}

export default Home