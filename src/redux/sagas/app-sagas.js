import { put, call, takeEvery } from 'redux-saga/effects'
import { authMe } from './auth-sagas'
import { types, initializationSuccess, initializationFail } from '../actions/app-actions'

function* initialization() {
    try {
        yield call(authMe)
        yield put(initializationSuccess())
    } catch (error) {
        console.log(error)
        yield put(initializationFail())
    }
}
export function* watchInitialize() {
    yield takeEvery(types.SAGA_INITIALIZATION, initialization)
}
