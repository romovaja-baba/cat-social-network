import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

const App = () => {

  return (
    <BrowserRouter>
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
              <Route path="/login" element={<Login/>} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/users" element={<UsersContainer/>} />
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
    </BrowserRouter>
  )
};

export default App;
