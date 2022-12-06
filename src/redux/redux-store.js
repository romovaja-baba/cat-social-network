import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk"; //необязательно

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

let store = configureStore({reducer: reducers}, applyMiddleware(thunk)); 
//applymiddleware уже по умолчанию включены в toolkit

export default store;