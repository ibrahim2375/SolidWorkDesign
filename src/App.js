import React, { useState, useEffect } from 'react';
import axios from 'axios'
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
    //////////////
    const [userData, setuserData] = useState([]);
    axios.defaults.withCredentials = true;
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
    ///////////////////////////////////////////////////////
    //   USER   //
    ////////////////////////////////////////////////////
    //axios connection for cookies on  between it and the server
    axios.defaults.withCredentials = true;
    ///////get user data
    const getUser = async () => {
        await axios.get('http://localhost:5000/loggedIn').then((response) => {
            setuserData(response.data);
        }).catch((error) => {
            console.log(error.message);
        })
    }
    // getUser();

    useEffect(() => {
        getUser();
    }, [])
    return (
        <div className="App">
            <RouterComponent mainColor={mainColor} spanState={spanState} stateOFthemeChange={stateOFthemeChange} classAnimation={classAnimation} userData={userData} />
        </div>
    );
}

export default App;
