import React, { useState, useEffect } from 'react'
// import axios from 'axios'
//redux
import { useSelector } from 'react-redux'
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
import * as PostsManageApi from './utils/PostsManage'
function ManagePosts() {
    const [postsState] = useState(true);
    const userPosts = useSelector(state => state.user_reducer.user_posts);
    useEffect(() => {
        PostsManageApi.getMyPosts();
    },[])
    return (
        <div className="container">
            <Nav />
            <SideBar />
            <Links />
            {/* my posts */}
            <div className="my-posts container d-flex align-items-center justify-content-center flex-column gap-3 my-5 my-lg-0 my-md-0">
                {
                    postsState === true ? null : <MessageForNewUser />
                }
                {/* /////////////////// */}
                {
                    userPosts.map((posts) => {
                        return (
                            <MyPosts key={posts.id} title={posts.title} description={posts.description} company={posts.company} lastUpdate={posts.updatedAt} id={posts.id} />
                        )
                    })
                }
                {/* /////////////////// */}
            </div>

            {/* my posts */}
        </div>
    )
}
const MyPosts = ({ title, company, description, lastUpdate, id }) => {
 
    return (
        <div className="card text-center w-100 my-3 my-lg-0 my-md-0">
            <div className="card-header data-head-footer fs-3 fw-bold">{title}</div>
            <div className="card-body">
                <h5 className="card-title">{company}</h5>
                <p className="card-text">{description}</p>
                <div className="btns-data w-100 d-flex align-items-center justify-content-end flex-row gap-2 ">
                    <button className="btn btn-outline-light" onClick={() => PostsManageApi.deletePost(id)}><DeleteForeverIcon className="icon-data-manage" /></button>
                    <Link to={`/works/edit/${id}`} className="btn  btn-outline-light"><ModeEditIcon className="icon-data-manage" /></Link>
                </div>
            </div>
            <div className="card-footer text-muted  bg-light">{lastUpdate}</div>
        </div>
    )
}
const MessageForNewUser = () => {
    return (
        <div className="alert w-100 my-5 my-lg-0 my-md-0" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important  message. .</p>
            <p className="mb-0">if you not have any posts click <Link to="/works/create" className="fw-bold fs-5 text-light">here</Link> to Create and found workers.</p>
        </div>
    )
}
export default ManagePosts

