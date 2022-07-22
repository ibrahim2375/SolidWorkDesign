import React, { useState, useEffect } from 'react'
//css
import '../css/Nav.css'
//icons 
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';
function Nav() {
    const [Icon, setIcon] = useState(SortIcon);
    const [navState, setNavState] = useState('flex');
    const toggleNav = () => {
        if (navState === 'none') {
            setNavState('flex');
            setIcon(CloseIcon);
        } else {
            setNavState('none');
            setIcon(SortIcon);
        }
    }
    //general function to handle navbar state

    // window.addEventListener('resize', () => {
    //     if (window.innerWidth >= 768) {
    //         setNavState('flex');
    //     } else {
    //         setNavState('none');
    //         setIcon(SortIcon);
    //     }
    // })
    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 400 && window.innerWidth <= 768) {
    //         setNavState('none');
    //         setIcon(SortIcon);
    //     } else {
    //         setNavState('flex');
    //         setIcon(CloseIcon);
    //     }
    // })
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
    }, [])
    return (
        <>
            <div className="list-bar" onClick={toggleNav}>
                <Icon sx={{ color: 'white', fontSize: '30px' }} className="icon-list" />
            </div>
            <nav style={{ display: navState }}>
                <ul>
                    <li>Home</li>
                    <li>Works</li>
                    <li>About</li>
                </ul>
                <button className="btn-contact">Contact</button>
                <div className="shape-style1"></div>
                <div className="shape-style2"></div>
            </nav>
        </>
    )
}

export default Nav