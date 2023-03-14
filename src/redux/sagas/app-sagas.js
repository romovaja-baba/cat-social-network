import { put, takeEvery } from "redux-saga/effects";
import { authMe } from "../actions/auth-actions";
import { types, initializationSuccess } from "../actions/app-actions";

function* initialization() {
    try {
        yield put(authMe())
        yield put(initializationSuccess())
    }
    catch (error) {
        console.log(error)
    }
    
}
export function* watchInitialize() {
    yield takeEvery(types.INITIALIZATION, initialization)
}
