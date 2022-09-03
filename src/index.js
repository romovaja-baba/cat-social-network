import './index.css';
import store from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (store) => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()} />
        </React.StrictMode>
    )
};
rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);