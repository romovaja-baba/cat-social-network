import { types } from "../actions/app-actions";

let initialState = {
    initialization: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialization: true
            }
        default: return state;
    }
};

export default appReducer;