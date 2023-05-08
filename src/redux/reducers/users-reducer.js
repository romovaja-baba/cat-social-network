import { types } from '../actions/users-actions'
import { updateObjectInArray } from '../../utils/objectHelper.js'

let initialState = {
    usersData: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERS:
            return {
                ...state,
                usersData: action.users,
            }
        case types.FOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {
                    followed: true,
                }),
            }
        case types.UNFOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {
                    followed: false,
                }),
            }
        case types.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case types.SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount,
            }
        case types.SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state
    }
}

export default usersReducer
