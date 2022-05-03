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


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>


        <div className='container'>
          <Nav />

          <div className='content'>
            <Routes>
              <Route path="/feed" element={<Feed news={props.news}/>} />
              <Route path="/profile" element={<Profile posts={props.posts}/>} />
              <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
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
