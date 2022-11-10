let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";

let initialState = {
    usersData: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state, 
                usersData: action.users
            }
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return { ...user }
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return { ...user }
                })
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        default: return state
    }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUserCountActionCreator = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount})

export default usersReducer;