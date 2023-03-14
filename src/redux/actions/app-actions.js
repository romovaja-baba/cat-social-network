export const types = {
    INITIALIZATION: "app/INITIALIZATION",
    INITIALIZATION_SUCCESS: 'app/INITIALIZATION_SUCCESS'
}
export const initialize = () => ({ type: types.INITIALIZATION });
export const initializationSuccess = () => ({ type: types.INITIALIZATION_SUCCESS });
