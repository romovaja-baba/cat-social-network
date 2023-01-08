import { authAPI } from "../api/api"

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

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

export const authMe = () => (dispatch) => {
    authAPI.authMe().then((response) => {
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    })
}

export const authMeWithReturn = () => async (dispatch) => {
    const response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, setError) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(authMe())
        } else {
            setError("server", {
                message: response.data.messages
            })
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default authReducer;