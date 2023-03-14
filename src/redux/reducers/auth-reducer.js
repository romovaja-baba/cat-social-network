import { types } from "../actions/auth-actions";

let initialState = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case types.SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }
        default: return state;
    }
};

export default authReducer;