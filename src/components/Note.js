import React from 'react'
//css
import '../css/Note.css'
function Note() {
    return (
        <div className="container">
            <div className="note">
                <p>We use research, strategy and design to
                    innovate and solve complex problems.
                    Our team of thinkers and doers create
                    digital products and campaigns to drive
                    real performance and commercial value.</p>
                <div className="line">
                </div>
            </div>
        </div>
    )
}

export default React.memo(Note);