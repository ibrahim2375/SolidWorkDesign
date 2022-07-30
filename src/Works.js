import React, { useEffect } from 'react'
import Axios from 'axios';
///components
import Links from './components/Links'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import WorksPosts from './components/WorksPosts'
//redux
import { useDispatch } from 'react-redux'
import { get_Posts } from './Redux/actions/Actions'

function Works() {
    /////////////////////////redux/////////////////////////
    const dispatch = useDispatch();
    const getPosts = async () => {
        await Axios.get(process.env.REACT_APP_GET_POSTS).then((res) => {
            dispatch(get_Posts(res.data))
        });
    }
    /////////////////////////redux/////////////////////////
    useEffect(() => {
        getPosts();
    })
    return (
        <div className="works">
            <div className="container">
                <Nav />
                <SideBar />
                <Links />
                <WorksPosts />
            </div>
        </div>
    )
}

export default Works