import React, { useContext } from 'react'
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
    const { mainColor } = useContext(themeContext);
    return (
        <aside>
            <h5 style={{ color: mainColor }}>Solid Work</h5>
            <div className="links">
                <ul>
                    <li><a href="/"><FacebookOutlinedIcon sx={{ color: mainColor, fontSize: 'medium' }} /></a></li>
                    <li><a href="/"><TwitterIcon sx={{ color: mainColor, fontSize: 'medium' }} /></a></li>
                    <li><a href="/"><GitHubIcon sx={{ color: mainColor, fontSize: 'medium' }} /></a></li>
                    <li><a href="/"><LanguageIcon sx={{ color: mainColor, fontSize: 'medium' }} /></a></li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar