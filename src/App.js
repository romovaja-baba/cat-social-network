import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./styles/App.scss"

import Nav from './components/Nav/Nav';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import Preloader from './components/common/Preloader';
import { initialize } from './redux/app-reducer';
import {initializationSelector, isLoggedInSelector} from "./utils/selectors";

const Feed = lazy(() => import("./components/Feed/Feed"));
const Dialogs = lazy(() => import("./components/Dialogs/Dialogs"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const Music = lazy(() => import("./components/Music/Music"));
const Settings = lazy(() => import("./components/Settings/Settings"));
const Login = lazy(() => import("./components/Login/Login"));

const App = () => {
    const initialization = useSelector(initializationSelector);
    const isLoggedIn = useSelector(isLoggedInSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!initialization) dispatch(initialize());
    }, [dispatch, initialization])

    if (!initialization) return <Preloader />;

    return (
        <div className='app-wrapper'>
            <div>
                <Header />
            </div>

            <div className='app-container'>
                <div className="app-side-container">
                    <Nav />
                    <SideBar />
                </div>

                <div className='app-content'>
                    <Suspense fallback={<div><Preloader /></div>}>
                        <Routes>
                            <Route path="/" element={isLoggedIn ?
                                <Navigate to={"/profile"} /> :
                                <Navigate to={"/login"} />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/feed" element={<Feed />} />
                            <Route path="/users" element={<UsersContainer />} />
                            <Route path="/profile/:id" element={<Profile />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/dialogs" element={<Dialogs />} />
                            <Route path="/dialogs/:id" element={<Dialogs />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    )
};

export default App;
