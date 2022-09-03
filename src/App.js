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


const App = ({ state }) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>


        <div className='container'>
          <div className="side-container">
            <Nav />
            <SideBar state={state} />
          </div>

          <div className='content'>
            <Routes>
              <Route path="/feed" element={<Feed state={state} />} />
              <Route path="/profile" element={<Profile state={state} />} />
              <Route path="/dialogs" element={<Dialogs state={state} />} />
              <Route path="/dialogs/:id" element={<Dialogs state={state} />} />
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
