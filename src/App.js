import React from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>

      <div className='header-container'>
        <Header />
      </div>

      <div className='main-container'>
        <Nav />

        <Profile />
      </div>

    </div>
  )
}


export default App;

