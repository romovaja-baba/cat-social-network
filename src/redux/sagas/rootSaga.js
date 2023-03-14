import { spawn } from "redux-saga/effects";
import { watchInitialize } from "./app-sagas";
import { watchAuthMe, watchGetCaptcha, watchLogin, watchLogout } from "./auth-sagas";
import {
    watchGetStatus, watchGetUserProfile, watchSaveProfileInfo,
    watchSaveProfilePicture, watchUpdateStatus
} from "./profile-sagas";
import { watchFollowUser, watchGetUsers, watchUnfollowUser } from "./users-sagas";


export default function* rootSaga() {
    yield spawn(watchInitialize);
    yield spawn(watchAuthMe);
    yield spawn(watchLogin);
    yield spawn(watchLogout);
    yield spawn(watchGetCaptcha);
    yield spawn(watchGetUserProfile);
    yield spawn(watchGetStatus);
    yield spawn(watchUpdateStatus);
    yield spawn(watchSaveProfilePicture);
    yield spawn(watchSaveProfileInfo);
    yield spawn(watchGetUsers);
    yield spawn(watchFollowUser);
    yield spawn(watchUnfollowUser);
}