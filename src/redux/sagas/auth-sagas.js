import { call, put, takeEvery } from "redux-saga/effects";
import { setCaptcha, setAuthUserData, types } from "../actions/auth-actions";
import { authAPI, securityAPI } from "../../api/api";

export function* authMe() {
    try {
        const response = yield call(authAPI.authMe);
        const data = yield call(() => new Promise(res => res(response.data)));

        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            yield put(setAuthUserData(id, email, login, true))
        } else {
            yield put(setAuthUserData(null, null, null, false))
        }
    }
    catch (error) {
        // console.log(error)
        yield put(setAuthUserData(null, null, null, false))
    }
}

export function* watchAuthMe() {
    yield takeEvery(types.AUTH_ME, authMe);
}

function* login(loginInfo) {
    try {
        const response = yield call(authAPI.login, loginInfo);
        if (response.data.resultCode === 0) {
            yield authMe()
        } else if (response.data.resultCode === 10) {
            yield getCaptcha()
        } else {
            loginInfo.loginInfo.setError("server", { message: response.data.message })
        }
    }
    catch (error) {
        // TODO: remove console log, add error logic
        // loginInfo.setError("server", { message: response.data.message })
        console.log(error)
    }
}

export function* watchLogin() {
    yield takeEvery(types.LOGIN, login);
}

function* logout() {
    try {
        const response = yield call(authAPI.logout);
        if (response.data.resultCode === 0) {
            yield put(setAuthUserData(null, null, null, false));
        }
    }
    catch (error) {
        // TODO: remove console log, add error logic
        console.log(error)
    }

}

export function* watchLogout() {
    yield takeEvery(types.LOGOUT, logout);
}

function* getCaptcha() {
    try {
        const response = yield call(securityAPI.getCaptcha);
        const captcha = response.data.url;
        yield put(setCaptcha(captcha))
    }
    catch (error) {
        // TODO: remove console log, add error logic
        console.log(error)
    }
}

export function* watchGetCaptcha() {
    yield takeEvery(types.GET_CAPTCHA, getCaptcha)
}
