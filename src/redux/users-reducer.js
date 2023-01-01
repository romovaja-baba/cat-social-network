import { usersAPI } from "../api/api";

let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
let SET_FETCHING = "SET_FETCHING";


let initialState = {
    usersData: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
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
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default: return state
    }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUserCount = (totalCount) => ({ type: SET_TOTAL_USER_COUNT, totalCount });
export const setFetching = (isFetching) => ({ type: SET_FETCHING, isFetching })


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize)
            .then((response) => {
                dispatch(setFetching(false));
                dispatch(setUsers(response.data.items));
                dispatch(setTotalUserCount(response.data.totalCount))
            })
    }
};
export const unfollowUser = (userId) => {
    return (dispatch) => {
        usersAPI.unfollowUser(userId)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
            })
    }
};
export const followUser = (userId) => {
    return (dispatch) => {
        usersAPI.followUser(userId)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
            })
    }
}; 
export default usersReducer;