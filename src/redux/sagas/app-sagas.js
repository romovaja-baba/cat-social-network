import { put, takeEvery } from "redux-saga/effects";
import { authMe } from "../actions/auth-actions";
import { types, initializationSuccess } from "../actions/app-actions";

function* initialization() {
    yield put(authMe())
    yield put(initializationSuccess())
}
export function* watchInitialize() {
    yield takeEvery(types.INITIALIZATION, initialization)
}
