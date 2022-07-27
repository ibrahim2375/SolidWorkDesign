import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
//components
import Links from './Links'
import Nav from './Nav'
import SideBar from './SideBar'
import SinglePostStyle from './SinglePostStyle'
function SinglePost() {
    const params = useParams();
    const [post, setpost] = useState([]);
    useEffect(() => {
        const getPost = async () => {
            await Axios.get(`${process.env.REACT_APP_SINGLE_POST_APP}${params.id}`).then((res) => {
                setpost(res.data);
            }).catch((e) => {
                console.log(e.message);
            })
        }
        getPost();
    }, [params]);
    return (
        <div className="single-post">
            <div className="container">
                <Nav />
                <SideBar />
                <Links />
                <SinglePostStyle company={post.company} title={post.title} email={post.email} website={post.website} description={post.description} img={post.img} />
            </div>
        </div>
    )
}


export default React.memo(SinglePost)