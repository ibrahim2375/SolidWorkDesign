import React, { useContext, useEffect, useState } from 'react'
//css       
import '../css/SideBar.css'
//icons   
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
//import context      
import { themeContext } from '../App';
function SideBar() {
    const [colorOfSideState, setcolorOfSideState] = useState(false);
    const { mainColor } = useContext(themeContext);
    useEffect(() => {
        if (window.location.pathname !== '/') {
            setcolorOfSideState(true);
        }
    }, []);
    return (
        <aside>
            <h5 style={{ color: colorOfSideState ? '#8b5cdd' : mainColor }}>Solid Work</h5>
            <div className="links">
                <ul>
                    <li><a href="/"><FacebookOutlinedIcon sx={{ color: colorOfSideState ? '#8b5cdd' : mainColor, fontSize: 'medium' }} /></a></li>
                    <li><a href="/"><TwitterIcon sx={{ color: colorOfSideState ? '#8b5cdd' : mainColor, fontSize: 'medium' }} /></a></li>
                    <li><a href="/"><GitHubIcon sx={{ color: colorOfSideState ? '#8b5cdd' : mainColor, fontSize: 'medium' }} /></a></li>
                    <li><a href="/"><LanguageIcon sx={{ color: colorOfSideState ? '#8b5cdd' : mainColor, fontSize: 'medium' }} /></a></li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar