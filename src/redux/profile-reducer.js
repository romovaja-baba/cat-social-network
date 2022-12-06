import { usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    profile: null,
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
                text: state.newPostText,
                likeCount: "0",
                user: "Catmond Purrvic"
            };
            if (newPost.text) {
                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    newPostText: ''
                };
            } else {
                alert('Post cannot be empty!')
            };
            break;
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE: {
            const photos = state.profile ? { ...state.profile.photos } : {}
            return {
                ...state,
                profile: action.profile, photos: photos
            }
        }
        default: return state;
    }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (id) => {
    return (dispatch) => {
        usersAPI.getUserProfile(id)
            .then((data) => {
                dispatch(setUserProfile(data));
            })
    }
};

export default profileReducer;