import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./styles/App.scss"

import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import FeedContainer from './components/Feed/FeedContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div>
          <HeaderContainer />
        </div>


        <div className='app-container'>
          <div className="app-side-container">
            <Nav />
            <SideBarContainer />
          </div>

          <div className='app-content'>
            <Routes>
              <Route path="/feed" element={<FeedContainer />} />
              <Route path="/users" element={<UsersContainer/>} />
              <Route path="/profile/:id" element={<ProfileContainer />} />
              <Route path="/profile" element={<ProfileContainer />} />
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
