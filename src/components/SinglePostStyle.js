import React from 'react'
//css 
import '../css/SinglePostStyle.css'
function SinglePostStyle({ img, title, description, company, website, email }) {
    return (
        <div className="post-style d-flex align-items-center justify-content-center flex-column">
            <div className="head d-flex align-items-center justify-content-center flex-column mb-2">
                <h1>{title}</h1>
                <span>{company}</span>
                <div className="image">
                    <img src={`/uploads/${img}`} alt="" />
                </div>
            </div>
            <hr />
            <div className="content d-flex align-items-center justify-content-center flex-column mb-2 w-100">
                <h2>Job Description</h2>
                <p className="text-muted">{description}</p>
                <div className="content-buttons d-flex align-items-center justify-content-center flex-column  w-75">
                    <a className="btn btn-outline-dark mb-1 w-100" href={`mailto:${email}`}>Contact</a>
                    <a className="btn btn-outline-dark  mb-1 w-100" href={website} title="visit website">Viste Website</a>
                </div>
            </div>

        </div>
    )
}

export default React.memo(SinglePostStyle)