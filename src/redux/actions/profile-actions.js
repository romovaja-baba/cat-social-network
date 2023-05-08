export const types = {
    ADD_POST: 'app/profile/ADD_POST',
    DELETE_POST: 'app/profile/DELETE_POST',
    GET_USER_PROFILE: 'app/profile/GET_USER_PROFILE',
    SET_USER_PROFILE: 'app/profile/SET_USER_PROFILE',
    GET_STATUS: 'app/profile/GET_STATUS',
    SET_STATUS: 'app/profile/SET_STATUS',
    UPDATE_STATUS: 'app/profile/UPDATE_STATUS',
    SAVE_PROFILE_PICTURE: 'app/profile/SAVE_PROFILE_PICTURE',
    SAVE_PROFILE_PICTURE_SUCCESS: 'app/profile/SAVE_PROFILE_PICTURE_SUCCESS',
    SAVE_PROFILE_INFO: 'app/profile/SAVE_PROFILE_INFO',
    SAVE_PROFILE_INFO_SUCCESS: 'app/profile/SAVE_PROFILE_INFO_SUCCESS',
}

export const addPost = (newPostText) => ({ type: types.ADD_POST, newPostText })
export const deletePost = (postId) => ({ type: types.DELETE_POST, postId })
export const setUserProfile = (profile) => ({ type: types.SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: types.SET_STATUS, status })
export const saveProfilePictureSuccess = (pics) => ({
    type: types.SAVE_PROFILE_PICTURE_SUCCESS,
    pics,
})
export const saveProfileInfoSuccess = (profile) => ({
    type: types.SAVE_PROFILE_INFO_SUCCESS,
    profile,
})

export const getUserProfile = (id) => ({ type: types.GET_USER_PROFILE, id })
export const getStatus = (id) => ({ type: types.GET_STATUS, id })
export const updateStatus = (status) => ({ type: types.UPDATE_STATUS, status })
export const saveProfileInfo = (profile) => ({ type: types.SAVE_PROFILE_INFO, profile })
export const saveProfilePicture = (pic) => ({ type: types.SAVE_PROFILE_PICTURE, pic })
