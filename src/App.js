import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import FeedContainer from './components/Feed/FeedContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>


        <div className='container'>
          <div className="side-container">
            <Nav />
            <SideBarContainer />
          </div>

          <div className='content'>
            <Routes>
              <Route path="/feed" element={<FeedContainer />} />
              <Route path="/users" element={<UsersContainer/>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/dialogs/:id" element={<DialogsContainer />} />
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
