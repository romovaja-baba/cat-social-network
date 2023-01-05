import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    profile: null,
    status: '',
    postsData: [
        { id: 1, text: "Hello everyone on this platform!!", user: "Catmond Purrvic", likeCount: "9" },
        { id: 2, text: "Whassup??", user: "Catmond Purrvic", likeCount: "12" },
        { id: 3, text: "Hope you guys had a PURRfect weekend!", user: "Catmond Purrvic", likeCount: "24" }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                text: action.newPostText,
                likeCount: "0",
                user: "Catmond Purrvic"
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };

        case SET_USER_PROFILE:
            const photos = state.profile ? { ...state.profile.photos } : {}
            return {
                ...state,
                profile: action.profile, photos: photos
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default: return state;
    }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (id) => (dispatch) => {
    profileAPI.getUserProfile(id)
        .then((response) => {
            dispatch(setUserProfile(response.data));
        })
}

export const getStatus = (id) => (dispatch) => {
    profileAPI.getStatus(id)
        .then((response) => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;