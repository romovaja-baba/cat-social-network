import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import "../../../styles/Profile.scss";
import AddPostForm from "../../common/Forms/AddPostForm";

const MyPosts = () => {

    const posts = useSelector(state => state.profilePage.postsData);
    let postsElements = posts.map(post => <Post key={post.id} post={post} />);

    return (
        <div className="posts-area">
            <AddPostForm/>
            <div className="posts-list">{postsElements}</div>
        </div>
    )
};

export default MyPosts;