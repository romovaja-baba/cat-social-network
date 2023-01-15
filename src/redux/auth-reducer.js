import { authAPI } from "../api/api"

const SET_AUTH_USER_DATA = "app/auth/SET_AUTH_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
};

export const setAuthUserData = (id, email, login, isLoggedIn) => (
    { type: SET_AUTH_USER_DATA, payload: { id, email, login, isLoggedIn } });

export const authMe = () => async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, setError) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(authMe())
    } else {
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

export default authReducer;