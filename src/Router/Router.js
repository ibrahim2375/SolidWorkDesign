// import React from 'react';
import React, { createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//redux
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { get_user } from '../Redux/actions/Actions'
//components
import Home from '../Home'
import About from '../About'
import Works from '../Works'
import EditPosts from '../EditPosts'
import CreatePost from '../CreatePost'
import ManagePosts from '../ManagePosts'
import SinglePost from '../components/SinglePost'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
//import to protect router
import ProtectForLoginAndRegister from './ProtectForLoginAndRegister'
import ProtectForUserPages from './ProtectForUserPages'
export const Context = createContext();
function RouterComponent({ mainColor, spanState, stateOFthemeChange, classAnimation }) {
    //dispatch
    const dispatch = useDispatch();
    const user_data = useSelector(state => state.user_reducer);
    //axios connection for cookies on  between it and the server
    axios.defaults.withCredentials = true;
    ///////get user data
    const getUser = async () => {
        await axios.get(process.env.REACT_APP_LOGIN_TO_APP).then((response) => {
            dispatch(get_user(response.data.user, response.data.loggedIn));
        }).catch((error) => {
            console.log(error.message);
        })
    }
    useEffect(() => {
        getUser();
    })
    return (
        <Router>
            <Context.Provider value={{ mainColor, spanState, stateOFthemeChange, classAnimation }}>
                <Routes >
                    <Route exact path='/' element={<Home />}>
                    </Route>
                    <Route exact path='/works' element={<Works />}>
                    </Route>
                    <Route exact path='/about' element={<About />}>
                    </Route>
                    <Route exact path='/works/create' element={
                        <ProtectForUserPages IsloggedIn={user_data.user_state} >
                            <CreatePost />
                        </ProtectForUserPages>
                    }>
                    </Route>
                    <Route exact path='/works/manage' element={
                        <ProtectForUserPages IsloggedIn={user_data.user_state} >
                            <ManagePosts />
                        </ProtectForUserPages>
                    }>
                    </Route>
                    <Route exact path='/works/edit/:id' element={
                        <ProtectForUserPages IsloggedIn={user_data.user_state} >
                            <EditPosts />
                        </ProtectForUserPages>
                    }>
                    </Route>

                    <Route exact path='/works/:id' element={<SinglePost />}>
                    </Route>
                    <Route path='/login' element={
                        <ProtectForLoginAndRegister IsloggedIn={user_data.user_state} >
                            <Login />
                        </ProtectForLoginAndRegister>
                    }>
                    </Route>
                    <Route path='/register' element={
                        <ProtectForLoginAndRegister IsloggedIn={user_data.user_state} >
                            <Register />
                        </ProtectForLoginAndRegister>
                    }>
                    </Route>
                </Routes>
            </Context.Provider >
        </Router >
    )
}

export default RouterComponent