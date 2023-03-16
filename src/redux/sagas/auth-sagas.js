import { call, put, takeEvery } from "redux-saga/effects";
import { setCaptcha, setAuthUserData, types } from "../actions/auth-actions";
import { authAPI, securityAPI } from "../../api/api";
import { initializationReset } from "../actions/app-actions";

//AUTH ME
function* authMe() {
    try {
        const response = yield call(authAPI.authMe);
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            yield put(setAuthUserData(id, email, login, true))
        }
    }
    catch (error) {
        console.log(error)
    }
};
export function* watchAuthMe() {
    yield takeEvery(types.AUTH_ME, authMe);
}

//LOGIN
function* login(loginInfo) {
    try {
        const response = yield call(authAPI.login, loginInfo);
        if (response.data.resultCode === 0) {
            yield authMe()
        } else if (response.data.resultCode === 10)
            yield getCaptcha()
    }
    catch (error) {
        // setError("server", { message: response.data.message })
        console.log(error)
    }
}

export function* watchLogin() {
    yield takeEvery(types.LOGIN, login);
}

//LOGOUT
function* logout() {
    try {
        const response = yield call(authAPI.logout);
        if (response.data.resultCode === 0) {
            yield put(setAuthUserData(null, null, null, false));
            yield put(initializationReset())
        }
    }
    catch (error) {
        console.log(error)
    }
    
};
export function* watchLogout() {
    yield takeEvery(types.LOGOUT, logout);
}

//GET CAPTCHA
function* getCaptcha() {
    try {
        const response = yield call(securityAPI.getCaptcha);
        const captcha = response.data.url;
        yield put(setCaptcha(captcha))
    }
    catch (error) {
        console.log(error)
    }
};
export function* watchGetCaptcha() {
    yield takeEvery(types.GET_CAPTCHA, getCaptcha)
}