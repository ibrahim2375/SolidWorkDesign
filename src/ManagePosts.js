import React, { useState, useEffect } from 'react'
import axios from 'axios'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { get_user_posts } from './Redux/actions/Actions'
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
    const [postsState, setpostsState] = useState(true);
    const dispatch = useDispatch();
    const userPosts = useSelector(state => state.user_reducer.user_posts);
    const getMyPosts = async () => {
        await axios.get(process.env.REACT_APP_GET_MY_POST).then((response) => {
            if (response.data.msg === undefined) {
                dispatch(get_user_posts(response.data));
                setpostsState(true);
            } else {
                setpostsState(false);
            }
        }).catch((err) => {
            console.log(err.message);
            alert('Error: ' + err.message);
        })
    }
    useEffect(() => {
        getMyPosts();
    })
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
    const deletePost = async (id) => {
        await axios.delete(`${process.env.REACT_APP_DELETE_POST}${id}`).then((response) => {
            console.log(response.data);
            window.location.reload();
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="card text-center w-100 my-3 my-lg-0 my-md-0">
            <div className="card-header data-head-footer fs-3 fw-bold">{title}</div>
            <div className="card-body">
                <h5 className="card-title">{company}</h5>
                <p className="card-text">{description}</p>
                <div className="btns-data w-100 d-flex align-items-center justify-content-end flex-row gap-2 ">
                    <button className="btn btn-outline-light" onClick={() => deletePost(id)}><DeleteForeverIcon className="icon-data-manage" /></button>
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

