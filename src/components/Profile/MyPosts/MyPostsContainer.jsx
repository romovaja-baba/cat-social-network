import React from "react";

import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ state, dispatch }) => {

    let addPost = () => {
        dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        dispatch(updateNewPostTextActionCreator(text))
    };

    return <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText} />;
};

export default MyPostsContainer;