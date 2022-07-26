import React, { useContext, useState } from 'react'

//css  
import '../css/Links.css'
//import context  
import { Context } from '../Router/Router';

function Links() {

    const [linksState, setlinksState] = useState(false);
    window.addEventListener('scroll', () => {
        window.innerWidth <= 992 ? setlinksState(true) : setlinksState(false);
    })
    window.addEventListener("resize", () => {
        window.innerWidth <= 992 ? setlinksState(true) : setlinksState(false);
    })
    return (
        <>
            {
                linksState ? "" : <Ulinks />
            }
        </>

    )
}
const Ulinks = () => {
    const { stateOFthemeChange } = useContext(Context);
    return (
        <ul style={{ display: stateOFthemeChange ? 'block' : 'none' }} className="links_right">
            <li><a href="/">Home</a></li>
            <li><a href="/">Work</a></li>
            <li><a href="/">about</a></li>
        </ul >
    )
}

export default React.memo(Links)
