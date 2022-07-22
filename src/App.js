import React, { createContext, useState } from 'react';
//packages bootstarp
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//components
import Nav from './components/Nav'
import Landing from './components/Landing'
import SideBar from './components/SideBar'
// import Info from './components/Info'
import Main from './components/Main'
import Links from './components/Links'
//css
import './css/App.css';

export const themeContext = createContext();
function App() {
    //color of body theme
    const [bg, setbg] = useState('#8b5cdd');
    const [mainColor, setmainColor] = useState('white');
    const [stateOFthemeChange, setstateOFthemeChange] = useState(false);
    const [spanState, setspanState] = useState(false);
    //change theme
    window.onscroll = () => {
        if (window.scrollY >= 250) {
            setstateOFthemeChange(true);
            setbg('white');
            setmainColor('#8b5cdd');
        } else if (window.scrollY <= 250) {
            setstateOFthemeChange(false);
            setmainColor('white');
        }
        if (window.scrollY >= 400) {
            setspanState(true);
        }
        if (window.scrollY < 400) {
            setspanState(false);
        }
        if (window.scrollY >= 1400) {
            setspanState(false);
        }

    }
    //change theme
    return (
        <themeContext.Provider value={{ bg, mainColor, spanState, stateOFthemeChange }}>
            <div className="App">
                <div>
                    <header >
                        <div className="container">
                        <Nav />
                        </div>
                        <Landing opacity={stateOFthemeChange ? '0' : '1'} />
                    </header>
                    <SideBar />
                    <Links />
                </div>
                <Main />
            </div>
        </themeContext.Provider>
    );
}

export default App;
