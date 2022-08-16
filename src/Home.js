import React, { useContext, useEffect } from 'react'
/// compnents
import Main from './components/Main'
import Landing from './components/Landing'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Links from './components/Links'
import { Context } from './Router/Router';
import * as HomeDate from './utils/HomeApi'
function Home() {
    const { stateOFthemeChange } = useContext(Context);
    useEffect(() => {
        HomeDate.getHomeData();
    }, []);
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