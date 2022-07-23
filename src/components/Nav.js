import React, { useState, useEffect } from 'react'
//css
import '../css/Nav.css'
//icons 
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';
//context  

//links 
// import { Link } from 'react-router-dom'
function Nav() {
    const [Icon, setIcon] = useState(SortIcon);
    const [IconColor, setIconColor] = useState('#8b5cdd');
    const [navState, setNavState] = useState('flex');
    const [navColor, setNavColor] = useState('black');

    const toggleNav = () => {
        if (navState === 'none') {
            setNavState('flex');
            setIcon(CloseIcon);
            setIconColor('white');
        } else {
            setNavState('none');
            setIcon(SortIcon);
            setIconColor('#8b5cdd');
        }
    }
    //general function to handle navbar state

    useEffect(() => {
        //without resizeing
        if (window.innerWidth >= 768) {
            setNavState('flex');
            setIcon(CloseIcon);

        } else {
            setNavState('none');
            setIcon(SortIcon);
        }
        //resizeing
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                setNavState('flex');
                setIcon(CloseIcon);

            } else {
                setNavState('none');
                setIcon(SortIcon);
            }
        })
        //scrolling
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400 && window.innerWidth <= 768) {
                setNavState('none');
                setIcon(SortIcon);
            }
        })
        if (window.location.pathname === '/') {
            setNavColor('white');
        }
    }, [])
    return (
        <>
            <div className="list-bar" onClick={toggleNav}>
                <Icon sx={{ color: IconColor, fontSize: '30px' }} className="icon-list" />
            </div>
            <nav style={{ display: navState }}>
                <ul style={{ color: navColor }}>
                    <li><a className='link' href="/" style={{ color: navColor }}>Home</a></li>
                    <li><a className='link' href="/works" style={{ color: navColor }}>Works</a></li>
                    <li><a className='link' href="/about" style={{ color: navColor }}>About</a></li>
                </ul>
                <button className="btn-contact" style={{ color: navColor }}>Contact</button>
                <div className="shape-style1"></div>
                <div className="shape-style2"></div>
            </nav>
        </>
    )
}

export default Nav