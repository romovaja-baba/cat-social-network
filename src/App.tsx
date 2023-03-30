import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import "./styles/App.scss";

import Preloader from './components/common/Preloader';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import SideBar from './components/SideBar/SideBar';
import { initialize } from './redux/actions/app-actions';
import { initializationSelector, isInitSuccessSelector, isLoggedInSelector } from "./utils/selectors";
import { useAppDispatch, useAppSelector } from './utils/hooks';

const Feed = lazy(() => import("./components/Feed/Feed"));
const Dialogs = lazy(() => import("./components/Dialogs/Dialogs"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const Music = lazy(() => import("./components/Music/Music"));
const Settings = lazy(() => import("./components/Settings/Settings"));
const Login = lazy(() => import("./components/Login/Login"));

const App = () => {
    const initialization: boolean = useAppSelector(initializationSelector);
    const isLoggedIn: boolean = useAppSelector(isLoggedInSelector);
    const isInitSuccess = useAppSelector(isInitSuccessSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!initialization) dispatch(initialize());
    }, [dispatch, initialization])

    if (!initialization) return <Preloader/>;

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
                            <Route path="/" element={isInitSuccess ?
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
}

export default App;
