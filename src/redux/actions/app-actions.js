export const types = {
    INITIALIZATION: 'app/INITIALIZATION',
    INITIALIZATION_SUCCESS: 'app/INITIALIZATION_SUCCESS',
    INITIALIZATION_FAIL: 'app/INITIALIZATION_FAIL',
    INITIALIZATION_RESET: 'app/INITIALIZATION_RESET'
}
export const initialize = () => ({ type: types.INITIALIZATION });
export const initializationSuccess = () => ({ type: types.INITIALIZATION_SUCCESS });
export const initializationFail = () => ({ type: types.INITIALIZATION_FAIL });
export const initializationReset = () => ({ type: types.INITIALIZATION_RESET })
