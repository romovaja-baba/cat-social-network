export const types = {
    SAGA_INITIALIZATION: 'app/SAGA_INITIALIZATION',
    INITIALIZATION_SUCCESS: 'app/INITIALIZATION_SUCCESS',
    INITIALIZATION_FAIL: 'app/INITIALIZATION_FAIL',
}
export const initialize = () => ({ type: types.SAGA_INITIALIZATION })
export const initializationSuccess = () => ({ type: types.INITIALIZATION_SUCCESS })
export const initializationFail = () => ({ type: types.INITIALIZATION_FAIL })
