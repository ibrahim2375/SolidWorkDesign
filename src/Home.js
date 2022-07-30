import React, { useContext, useEffect } from 'react'
import axios from 'axios'
//redux
import { useDispatch } from 'react-redux'
import { home_posts } from './Redux/actions/Actions'
/// compnents
import Main from './components/Main'
import Landing from './components/Landing'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Links from './components/Links'
import { Context } from './Router/Router';

function Home() {
    const { stateOFthemeChange } = useContext(Context);
    const dispatch = useDispatch();
    const getHomeData = async _ => {
        await axios.get(process.env.REACT_APP_HOME_SECTIONS).then((res) => {
            dispatch(home_posts(res.data));
        })
    }
    useEffect(() => {
        getHomeData();
    });
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