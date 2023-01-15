import { authMe } from "./auth-reducer";

const INITIALIZATION_SUCCESS = 'app/INITIALIZATION_SUCCESS';

let initialState = {
    initialization: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialization: true
            }
        default: return state;
    }
};

export const initializationSuccess = () => ({ type: INITIALIZATION_SUCCESS });

export const initialize = () => async (dispatch) => {
    await dispatch(authMe());
    dispatch(initializationSuccess());
}

export default appReducer;