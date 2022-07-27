// import React from 'react';
import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function RouterComponent({ mainColor, spanState, stateOFthemeChange, classAnimation, userData }) {
    const [userState, setUserState] = useState();
    useEffect(() => {
        setUserState(userData.loggedIn);
    })
    return (
        <Router>
            <Context.Provider value={{ mainColor, spanState, stateOFthemeChange, classAnimation, userData }}>
                <Routes >
                    <Route exact path='/' element={<Home />}>
                    </Route>
                    <Route exact path='/works' element={<Works />}>
                    </Route>
                    <Route exact path='/about' element={<About />}>
                    </Route>
                    <Route exact path='/works/create' element={
                        <ProtectForUserPages IsloggedIn={userState} >
                            <CreatePost />
                        </ProtectForUserPages>
                    }>
                    </Route>
                    <Route exact path='/works/manage' element={
                        <ProtectForUserPages IsloggedIn={userState} >
                            <ManagePosts />
                        </ProtectForUserPages>
                    }>
                    </Route>
                    <Route exact path='/works/edit/:id' element={
                        <ProtectForUserPages IsloggedIn={userState} >
                            <EditPosts />
                        </ProtectForUserPages>
                    }>
                    </Route>

                    <Route exact path='/works/:id' element={<SinglePost />}>
                    </Route>
                    <Route path='/login' element={
                        <ProtectForLoginAndRegister IsloggedIn={userState} >
                            <Login />
                        </ProtectForLoginAndRegister>
                    }>
                    </Route>
                    <Route path='/register' element={
                        <ProtectForLoginAndRegister IsloggedIn={userState} >
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