import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const dialogUserData = [
  {id: 1, name: "Vlawd"},
  {id: 2, name: "Ameowlinda"},
  {id: 3, name: "Dr. Pawbert Whiskman"},
  {id: 4, name: "Hissley"},
  {id: 5, name: "Hecker"}
];

const messagesData = [
  {id: 1, text: "hey dude"},
  {id: 2, text: "yo whatsup"},
  {id: 3, text: "wanna play elder scrolls tonight?"},
  {id: 4, text: "np"}
];

const postsData = [
  {id: 1, text: "Hello everyone on this platform!!", likeCount: "9"},
  {id: 2, text: "Whassup??", likeCount: "12"},
  {id: 3, text: "Hope you guys had a PURRfect weekend!", likeCount: "24"}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogUserData} messages={messagesData} posts={postsData}/>
  </React.StrictMode>
);
