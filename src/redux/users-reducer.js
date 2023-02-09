import { usersAPI } from "../api/api";

import { updateObjectInArray } from "../utils/objectHelper";

let FOLLOW = "app/users/FOLLOW";
let UNFOLLOW = "app/users/UNFOLLOW";
let SET_USERS = "app/users/SET_USERS";
let SET_CURRENT_PAGE = "app/users/SET_CURRENT_PAGE";
let SET_TOTAL_USER_COUNT = "app/users/SET_TOTAL_USER_COUNT";
let SET_FETCHING = "app/users/SET_FETCHING";

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
                usersData: updateObjectInArray(state.usersData, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, "id", {followed: false})
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


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setFetching(true));
    dispatch(setCurrentPage(currentPage));
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUserCount(response.data.totalCount))
}

const followUnfollowLogic = async (dispatch, userId, apiMethod, actionCreator) => {
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
}
export const followUser = (userId) => async (dispatch) => {
    followUnfollowLogic(dispatch, userId, usersAPI.followUser, follow);
}

export const unfollowUser = (userId) => async (dispatch) => {
    followUnfollowLogic(dispatch, userId, usersAPI.unfollowUser, unfollow)
}
export default usersReducer;