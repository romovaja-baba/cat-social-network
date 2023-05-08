export const types = {
    GET_USERS: 'app/users/GET_USERS',
    FOLLOW: 'app/users/FOLLOW',
    UNFOLLOW: 'app/users/UNFOLLOW',
    SET_USERS: 'app/users/SET_USERS',
    SET_CURRENT_PAGE: 'app/users/SET_CURRENT_PAGE',
    SET_TOTAL_USER_COUNT: 'app/users/SET_TOTAL_USER_COUNT',
    SET_FETCHING: 'app/users/SET_FETCHING',
}

export const getUsers = (usersInfo) => ({ type: types.GET_USERS, usersInfo })
export const follow = (userId) => ({ type: types.FOLLOW, userId })
export const unfollow = (userId) => ({ type: types.UNFOLLOW, userId })
export const setUsers = (users) => ({ type: types.SET_USERS, users })
export const setCurrentPage = (page) => ({ type: types.SET_CURRENT_PAGE, page })
export const setTotalUserCount = (totalCount) => ({ type: types.SET_TOTAL_USER_COUNT, totalCount })
export const setFetching = (isFetching) => ({ type: types.SET_FETCHING, isFetching })
