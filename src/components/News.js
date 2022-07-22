import React, { useState } from 'react'
//css
import '../css/News.css'
//icons  
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function News() {
    const [classAnimation, setclassAnimation] = useState('');
    window.addEventListener('scroll', () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 5500) {
            setclassAnimation('section-animation');
        }
    })
    return (
        <div className={`news ${classAnimation}`}>
            <div className="text-content">
                <div className="txt">
                    <span>Lorem, ipsum dolor sit ametumquam pariatur architecto magni </span>
                    <p>
                        numquam pariatur architecto magni
                        commodi ipsam fugit cupiditate debitis
                        reprehenderit quod, ad accusamus dolores
                        consequatur consequaturconsequatur.</p>
                </div>
                <div className="news-footer">
                    <span>development</span>
                    <span className="news-arrow"><ArrowRightAltIcon  /></span>
                </div>
            </div>

        </div>

    )
}

export default News