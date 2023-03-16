import { types } from "../actions/app-actions";

let initialState = {
    initialization: false,
    isInitSuccess: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.INITIALIZATION:
        //     return {
        //         ...state,
        //         initialization: true
        //     }
        case types.INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialization: true,
                isInitSuccess: true
            }
        case types.INITIALIZATION_FAIL:
            return {
                ...state,
                initialization: true,
                isInitSuccess: false
            }
        case types.INITIALIZATION_RESET:
            return {
                ...state,
                // initialization: false,
                isInitSuccess: false
            }
        default: return state;
    }
};

export default appReducer;