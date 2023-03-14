import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appReducer from "./reducers/app-reducer";
import authReducer from "./reducers/auth-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import feedReducer from "./reducers/feed-reducer";
import profileReducer from "./reducers/profile-reducer";
import rootSaga from "./sagas/rootSaga";
import sideBarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    feedPage: feedReducer,
    sideBarPage: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

let store = configureStore(
    {
        reducer: reducers,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            }).concat(sagaMiddleware)
    });

sagaMiddleware.run(rootSaga);

export default store;