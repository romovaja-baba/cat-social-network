import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Feed from './components/Feed/Feed';
import SideBar from './components/SideBar/SideBar';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>


        <div className='container'>
          <div className="side-container">
            <Nav />
            <SideBar friends={props.friends} />
          </div>

          <div className='content'>
            <Routes>
              <Route path="/feed" element={<Feed news={props.news} />} />
              <Route path="/profile" element={<Profile
                posts={props.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />} />
              <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs} convos={[]} />} />
              <Route path="/dialogs/:id" element={<Dialogs dialogs={props.dialogs} convos={props.convos} />} />
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
