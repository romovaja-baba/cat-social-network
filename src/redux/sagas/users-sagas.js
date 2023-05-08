import { call, put, takeEvery } from 'redux-saga/effects'
import { usersAPI } from '../../api/api'
import {
    follow,
    setCurrentPage,
    setFetching,
    setTotalUserCount,
    setUsers,
    types,
    unfollow,
} from '../actions/users-actions'

//GET USERS
function* getUsers(usersInfo) {
    try {
        yield put(setFetching(true))
        yield put(setCurrentPage(usersInfo.usersInfo.currentPage))
        let response = yield call(usersAPI.getUsers, usersInfo)
        yield put(setFetching(false))
        yield put(setUsers(response.data.items))
        yield put(setTotalUserCount(response.data.totalCount))
    } catch (error) {
        console.log(error)
    }
}
export function* watchGetUsers() {
    yield takeEvery(types.GET_USERS, getUsers)
}

//FOLLOW
function* followUser(userId) {
    try {
        let response = yield call(usersAPI.followUser, userId)
        if (response.data.resultCode === 0) {
            yield put(follow(userId.userId))
        }
    } catch (error) {
        console.log(error)
    }
}
export function* watchFollowUser() {
    yield takeEvery(types.FOLLOW, followUser)
}

//UNFOLLOW
function* unfollowUser(userId) {
    try {
        let response = yield call(usersAPI.unfollowUser, userId)
        if (response.data.resultCode === 0) {
            yield put(unfollow(userId.userId))
        }
    } catch (error) {
        console.log(error)
    }
}
export function* watchUnfollowUser() {
    yield takeEvery(types.UNFOLLOW, unfollowUser)
}
