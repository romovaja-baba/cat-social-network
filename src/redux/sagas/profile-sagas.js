import { call, put, takeEvery } from 'redux-saga/effects'

import { profileAPI } from '../../api/api'
import {
    saveProfileInfoSuccess,
    saveProfilePictureSuccess,
    setStatus,
    types,
} from '../actions/profile-actions'
import { setUserProfile } from '../actions/profile-actions'

//GET USER PROFILE
function* getUserProfile(id) {
    try {
        let response = yield call(profileAPI.getUserProfile, id)
        yield put(setUserProfile(response.data))
    } catch (error) {
        console.log(error)
    }
}
export function* watchGetUserProfile() {
    yield takeEvery(types.GET_USER_PROFILE, getUserProfile)
}

//GET STATUS
function* getStatus(id) {
    try {
        let response = yield call(profileAPI.getStatus, id)
        yield put(setStatus(response.data))
    } catch (error) {
        console.log(error)
    }
}
export function* watchGetStatus() {
    yield takeEvery(types.GET_STATUS, getStatus)
}

//UPDATE STATUS
function* updateStatus(status) {
    try {
        let response = yield call(profileAPI.updateStatus, status)
        if (response.data.resultCode === 0) {
            yield put(setStatus(status.status))
        }
    } catch (error) {
        console.log(error)
    }
}
export function* watchUpdateStatus() {
    yield takeEvery(types.UPDATE_STATUS, updateStatus)
}

//SAVE PROFILE PICTURE
function* saveProfilePicture(pic) {
    try {
        let response = yield call(profileAPI.saveProfilePicture, pic)
        if (response.data.resultCode === 0) {
            yield put(saveProfilePictureSuccess(response.data.data.photos))
        }
    } catch (error) {
        console.log(error)
    }
}
export function* watchSaveProfilePicture() {
    yield takeEvery(types.SAVE_PROFILE_PICTURE, saveProfilePicture)
}

//SAVE PROFILE INFO
function* saveProfileInfo(profile) {
    try {
        let response = yield call(profileAPI.saveProfileInfo, profile)
        if (response.data.resultCode === 0) {
            yield put(saveProfileInfoSuccess(profile.profile))
        }
    } catch (error) {
        console.log(error)
    }
}
export function* watchSaveProfileInfo() {
    yield takeEvery(types.SAVE_PROFILE_INFO, saveProfileInfo)
}
