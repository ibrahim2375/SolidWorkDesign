import React, { useContext } from 'react'
//css
import '../css/News.css'
//icons  
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Context } from '../Router/Router';

function News() {
    const { classAnimation } = useContext(Context);
    return (
        <div className={`news ${classAnimation} reveal`}>
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
                    <span className="news-arrow"><ArrowRightAltIcon /></span>
                </div>
            </div>

        </div>


    )
}

export default React.memo(News)