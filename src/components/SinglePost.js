import React, { useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux'
import { get_single_post } from '../Redux/actions/Actions'
//components
import Links from './Links'
import Nav from './Nav'
import SideBar from './SideBar'
import SinglePostStyle from './SinglePostStyle'
function SinglePost() {
    const params = useParams();
    const dispatch = useDispatch();
    const get_post = useSelector(state => state.posts_reducer.single_post);
    const getPost = async () => {
        await Axios.get(`${process.env.REACT_APP_SINGLE_POST_APP}${params.id}`).then((res) => {
            dispatch(get_single_post(res.data));
        }).catch((e) => {
            console.log(e.message);
        })
    }
    useEffect(() => {
        getPost();
    });
    return (
        <div className="single-post">
            <div className="container">
                <Nav />
                <SideBar />
                <Links />
                <SinglePostStyle company={get_post.company} title={get_post.title} email={get_post.email} website={get_post.website} description={get_post.description} img={get_post.img} />
            </div>
        </div>
    )
}


export default React.memo(SinglePost)