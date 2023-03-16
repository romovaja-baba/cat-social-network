import { put, takeEvery } from "redux-saga/effects";
import { authMe } from "../actions/auth-actions";
import { types, initializationSuccess, initializationFail } from "../actions/app-actions";

function* initialization() {
    try {
        yield put(authMe())
        yield put(initializationSuccess())
    }
    catch (error) {
        console.log(error)
        yield put(initializationFail())
    }
}
export function* watchInitialize() {
    yield takeEvery(types.INITIALIZATION, initialization)
}
