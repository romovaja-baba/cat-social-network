import { types } from "../actions/profile-actions";

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
        case types.ADD_POST:
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
        case types.DELETE_POST:
            return {
                ...state,
                postsData: [...state.postsData.filter(post => post.id !== action.postId)]
            }
        case types.SET_USER_PROFILE:
            const photos = state.profile ? { ...state.profile.photos } : {}
            return {
                ...state,
                profile: action.profile, photos: photos
            };
        case types.SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case types.SAVE_PROFILE_PICTURE_SUCCESS:
            return {
                ...state, profile: { ...state.profile, photos: action.pics }
            }
        case types.SAVE_PROFILE_INFO_SUCCESS:
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
}

export default profileReducer;