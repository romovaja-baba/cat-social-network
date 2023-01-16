import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./styles/App.scss"

import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Feed from './components/Feed/Feed';
import SideBar from './components/SideBar/SideBar';
import UsersContainer from './components/Users/UsersContainer';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { initialize } from './redux/app-reducer';

const App = () => {
  const initialization = useSelector(state => state.app.initialization);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
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
            <Routes>
              <Route path="/" element={isLoggedIn ? <Navigate to={"/profile"} /> : <Navigate to={"/login"} />} />
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
          </div>
        </div>
      </div>
  )
};

export default App;
