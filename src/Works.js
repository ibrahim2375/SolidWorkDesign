import React, { useEffect, useState } from 'react'
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

    return (
        <div className="works">
            <div className="container">
                <Nav />
                <SideBar />
                <Links />
                <div className="conatainer d-flex justify-content-center mt-4">
                    <SearchAndShowPosts />
                </div>
                <WorksPosts />
            </div>
        </div>
    )
}
const SearchAndShowPosts = _ => {
    /////////////////////////redux/////////////////////////
    const dispatch = useDispatch();
    const [search, setsearch] = useState('');
    const getPosts = async () => {
        await Axios.post(process.env.REACT_APP_GET_POSTS, {
            search: search,
        }).then((res) => {
            dispatch(get_Posts(res.data))
        });
    }
    /////////////////////////redux/////////////////////////
    useEffect(() => {
        getPosts();
    }, [search])
    return (
        <div className="input-group rounded my-5 my-lg-0 my-md-0 w-75">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" onChange={(e) => setsearch(e.target.value)} />
        </div>

    )
}

export default Works