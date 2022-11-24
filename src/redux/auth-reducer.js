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
                ...action.data,
                isLoggedIn: true
            }
        default: return state;
    }
};

export const setAuthUserData = (id, email, login) => ({ type: SET_AUTH_USER_DATA, data: {id, email, login} })

export default authReducer;