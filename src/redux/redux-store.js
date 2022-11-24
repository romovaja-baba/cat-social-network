import { configureStore, combineReducers } from "@reduxjs/toolkit";

import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer";
import feedReducer from "./feed-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    feedPage: feedReducer,
    sideBarPage: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = configureStore({
    reducer: reducers
});

export default store;