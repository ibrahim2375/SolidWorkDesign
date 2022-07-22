import React from 'react'
//css
import '../css/Development.css'

function DevelopmentSection({ Image }) {
    return (
        <div className="development-section">
            <div className="image-content">
                <img src={Image} alt="" />
            </div>

            <div className="text-content">
                <div className="txt">
                    <h4>Lorem, ipsum dolor sit amet </h4>
                    <p>
                        numquam pariatur architecto magni
                        commodi ipsam fugit cupiditate debitis
                        reprehenderit quod, ad accusamus dolores
                        consequatur consequaturconsequatur.</p>
                </div>
            </div>

        </div>
    )
}

export default DevelopmentSection