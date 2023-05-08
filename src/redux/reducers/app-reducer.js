import { types } from '../actions/app-actions'

let initialState = {
    isInitFinished: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INITIALIZATION_SUCCESS:
            return {
                ...state,
                isInitFinished: true,
            }
        case types.INITIALIZATION_FAIL:
            return {
                ...state,
                isInitFinished: true,
            }
        default:
            return state
    }
}

export default appReducer
