import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import state from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
    dialogs={state.dialogsPage.dialogUserData}
    messages={state.dialogsPage.messagesData}
    posts={state.profilePage.postsData}
    news={state.feedPage.newsData}/>
  </React.StrictMode>
);
