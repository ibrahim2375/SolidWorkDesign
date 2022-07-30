import React, { useState } from 'react';
//redux
import { Provider } from 'react-redux'
import store from './Redux/store'
//packages bootstarp
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//components
import RouterComponent from './Router/Router'
//css
import './css/App.css';
function App() {
    // themes and animations variables
    const [classAnimation, setclassAnimation] = useState('');
    const [mainColor, setmainColor] = useState('white');
    const [stateOFthemeChange, setstateOFthemeChange] = useState(false);
    const [spanState, setspanState] = useState(false);
    const changeColors = () => {
        const sidebareComponentAbove = document.querySelectorAll('.color-of-sidebar-change');
        for (let i = 0; i < sidebareComponentAbove.length; i++) {
            let getComponentTop = sidebareComponentAbove[i].getBoundingClientRect().top;
            if (getComponentTop < 500) {
                setmainColor('white');
            }
            else if (window.scrollY >= 250) {
                setstateOFthemeChange(true);
                setmainColor('#8b5cdd');
            } else if (window.scrollY <= 250) {
                setstateOFthemeChange(false);
                setmainColor('white');
            }
            //span
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
    }
    //add fade In animation to some components sended through context     
    //end change theme
    const fadeIn = () => {
        const reveal = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveal.length; i++) {
            let windowHeight = window.innerHeight;
            let getTop = reveal[i].getBoundingClientRect().top;
            let revealPoint = 100;
            if (getTop < windowHeight - revealPoint) {
                setclassAnimation('reveal-animation')
            } else {
                setclassAnimation('');
            }
        }
    }
    window.addEventListener('scroll', () => {
        fadeIn();
        changeColors();
    });


    ////////////loader//////////
    // window.addEventListener('load', () => {
    //     let loader = document.getElementById('loader');
    //     loader.style.display = 'none';
    // })
    ////////////loader//////////
    return (
        <Provider store={store}>
            <div className="App">
                {/* <div className="loader" id="loader">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div> */}
                <RouterComponent mainColor={mainColor} spanState={spanState} stateOFthemeChange={stateOFthemeChange} classAnimation={classAnimation} />
            </div>
        </Provider>
    );
}

export default App;
