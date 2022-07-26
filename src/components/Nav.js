import React, { useState, useEffect, useContext, useCallback } from 'react'
//css
import '../css/Nav.css'
import axios from 'axios'
//icons 
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';
//context  
import { Context } from '../Router/Router';

//links 
import { Link } from 'react-router-dom'
function Nav() {
    const [Icon, setIcon] = useState(SortIcon);
    const [IconColor, setIconColor] = useState('#8b5cdd');
    const [navState, setNavState] = useState('none');
    const [navColor, setNavColor] = useState('black');
    const [userState, setuserState] = useState(false);
    const [UserName, setUserName] = useState('');
    const { userData } = useContext(Context);
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
    const handelNav = () => {
        // //without resizeing
        if (window.innerWidth >= 768) {
            setNavState('flex');
            setIcon(CloseIcon);
            setIconColor('white');
        }
        //resizeing
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                setNavState('flex');
                setIcon(CloseIcon);
                setIconColor('white');
            } else {
                setNavState('none');
                setIcon(SortIcon);
                setIconColor('#8b5cdd');
            }
        })
        //scrolling
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400 && window.innerWidth <= 768) {
                setNavState('none');
                setIcon(SortIcon);
                setIconColor('#8b5cdd');
            }
        })
        if (window.location.pathname === '/') {
            setNavColor('white');
        }
    }
    const logOut = async () => {
        await axios.delete('http://localhost:5000/logout').then((res) => {
            console.log(res.data)
            // window.location.reload();
            window.location.href = '/';
        }).catch((err) => console.log(err.message));
    }
    const getdata = () => {
        if (userData.loggedIn === true) {
            setuserState(true);
            setUserName(userData.user.name);
        } else {
            setuserState(false);
            setUserName('');
        }
    }
    useEffect(() => {
        handelNav()
    }, [])
    useEffect(() => {
        getdata();
    })
    return (
        <>
            <div className="list-bar" onClick={toggleNav}>
                <Icon sx={{ color: IconColor, fontSize: '30px' }} className="icon-list" />
            </div>
            <nav style={{ display: navState }} className="navBar">
                <ul style={{ color: navColor }}>
                    <li><a className='link' href="/" style={{ color: navColor }}>Home</a></li>
                    <li><a className='link' href="/works" style={{ color: navColor }}>Works</a></li>
                    <li><a className='link' href="/about" style={{ color: navColor }}>About</a></li>
                    {
                        userState === true ? (
                            <>
                                <li><a className='link' href="/works/create" style={{ color: navColor }}>CreatePost</a></li>
                                <li><a className='link' href="/works/manage" style={{ color: navColor }}>My Posts</a></li>
                            </>
                        ) : null
                    }

                </ul>
                <div className="nav-right">
                    {
                        userState === true ? (
                            <>
                                <h5 className="text-center mb-0" style={{ color: navColor }}>{UserName ?? null}</h5>
                                <button className="btn-contact" style={{ color: navColor }} onClick={logOut}>LogOut</button>
                            </>
                        ) : <Link to="/login" className="btn-contact" style={{ color: navColor }}>LogIn</Link>
                    }
                </div>
                <div className="shape-style1"></div>
                <div className="shape-style2"></div>
            </nav >
        </>
    )
}

export default React.memo(Nav)