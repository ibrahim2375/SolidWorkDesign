import React from 'react'
//icons 
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
//components
import Links from './components/Links'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import { Link } from 'react-router-dom'
//css 
import './css/ManagePosts.css'
function ManagePosts() {
    return (
        <div className="container">
            <Nav />
            <SideBar />
            <Links />
            {/* my posts */}
            <div className="my-posts container d-flex align-items-center justify-content-center flex-column gap-3 my-5 my-lg-0 my-md-0">
                {/* /////////////////// */}
                <div className="card text-center w-100 my-3 my-lg-0 my-md-0">
                    <div className="card-header data-head-footer fs-3 fw-bold">Title</div>
                    <div className="card-body">
                        <h5 className="card-title">company</h5>
                        <p className="card-text">Description</p>
                        <div className="btns-data w-100 d-flex align-items-center justify-content-end flex-row gap-2 ">
                            <Link to="/manage/delete" className="btn btn-outline-light "><DeleteForeverIcon className="icon-data-manage" /></Link>
                            <Link to="/manage/edit" className="btn  btn-outline-light"><ModeEditIcon className="icon-data-manage" /></Link>
                        </div>
                    </div>
                    <div className="card-footer text-muted  bg-light">2 days ago</div>
                </div>
                {/* /////////////////// */}

            </div>

            {/* my posts */}
        </div>


    )
}

export default ManagePosts

