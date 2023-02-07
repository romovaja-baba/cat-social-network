import { profileAPI } from "../api/api";

const ADD_POST = "app/profile/ADD_POST";
const DELETE_POST = "app/profile/DELETE_POST";
const SET_USER_PROFILE = "app/profile/SET_USER_PROFILE";
const SET_STATUS = "app/profile/SET_STATUS";
const SAVE_PROFILE_PICTURE_SUCCESS = "app/profile/SAVE_PROFILE_PICTURE_SUCCESS";
const SAVE_PROFILE_INFO_SUCCESS = "app/profile/SAVE_PROFILE_INFO_SUCCESS";

let initialState = {
    profile: null,
    status: '',
    postsData: [
        { id: 1, text: "Hello everyone on this platform!!", user: "Catmond Purrvic", likeCount: "9" },
        { id: 2, text: "Whassup??", user: "Catmond Purrvic", likeCount: "12" },
        { id: 3, text: "Hope you guys had a PURRfect weekend!", user: "Catmond Purrvic", likeCount: "24" }
    ]
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

        case DELETE_POST:
            return {
                ...state,
                postsData: [...state.postsData.filter(post => post.id !== action.postId)]
            }

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
        case SAVE_PROFILE_PICTURE_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.pics}
            }
        case SAVE_PROFILE_INFO_SUCCESS:
            return {
                ...state, profile: {
                    ...state.profile, 
                    fullName: action.profile.fullName,
                    lookingForAJob: action.profile.lookingForAJob,
                    lookingForAJobDescription: action.profile.lookingForAJobDescription,
                    aboutMe: action.profile.aboutMe
                }
            }
        default: return state;
    }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const saveProfilePictureSuccess = (pics) => ({type: SAVE_PROFILE_PICTURE_SUCCESS, pics});
export const saveProfileInfoSuccess = (profile) => ({type: SAVE_PROFILE_INFO_SUCCESS, profile});

export const getUserProfile = (id) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(id);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (id) => async (dispatch) => {
    let response = await profileAPI.getStatus(id)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const saveProfilePicture = (pic) => async (dispatch) => {
    let response = await profileAPI.saveProfilePicture(pic);
    if (response.data.resultCode === 0) {
        dispatch(saveProfilePictureSuccess(response.data.data.photos));
    }
}

export const saveProfileInfo = (profile) => async (dispatch) => {
     let response = await profileAPI.saveProfileInfo(profile);
     if (response.data.resultCode === 0) {
        dispatch(saveProfileInfoSuccess(profile))
     } 
}

export default profileReducer;