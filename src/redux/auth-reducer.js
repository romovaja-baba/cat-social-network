import { authAPI, securityAPI } from "../api/api"

const SET_AUTH_USER_DATA = "app/auth/SET_AUTH_USER_DATA";
const SET_CAPTCHA = "app/security/SET_CAPTCHA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }
        default: return state;
    }
};

export const setAuthUserData = (id, email, login, isLoggedIn) => (
    { type: SET_AUTH_USER_DATA, payload: { id, email, login, isLoggedIn } });

export const setCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha });


export const authMe = () => async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha, setError) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(authMe())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        setError("server", {
            message: response.data.messages
        })
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptcha = () => async (dispatch) => {
    let response = await securityAPI.getCaptcha();
    let captcha = response.data.url;
    dispatch(setCaptcha(captcha));
}

export default authReducer;