import React, { createContext, useState } from 'react';
//packages bootstarp
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//components


import Home from './Home';
import Works from './Works';
//css
import './css/App.css';
//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const themeContext = createContext();
function App() {
    //color of body theme
    const [bg, setbg] = useState('#8b5cdd');
    const [mainColor, setmainColor] = useState('white');
    const [stateOFthemeChange, setstateOFthemeChange] = useState(false);
    const [spanState, setspanState] = useState(false);
    //change theme
    window.onscroll = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 250) {
            setstateOFthemeChange(true);
            setbg('white');
            setmainColor('#8b5cdd');
        } else if (window.scrollY <= 250) {
            setstateOFthemeChange(false);
            setmainColor('white');
        }
        if (window.scrollY >= 7900) {
            setmainColor('white');
        } else if (window.scrollY < 7900 && window.scrollY > 250) {
            setmainColor('#8b5cdd');
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
        <Router>
            <themeContext.Provider value={{ bg, mainColor, spanState, stateOFthemeChange }}>
                <div className="App">
                    <Routes >
                        <Route exact path='/' element={<Home />}>
                        </Route>
                        <Route exact path='/works' element={<Works />}>
                        </Route>
                    </Routes>
                    {/* <Footer /> */}
                </div>
            </themeContext.Provider>
        </Router>
    );
}

export default App;
