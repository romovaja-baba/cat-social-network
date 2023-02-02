import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import "../../../styles/Posts.scss";
import AddPostForm from "../../common/Forms/AddPostForm";

const MyPosts = () => {
    const posts = useSelector(state => state.profilePage.postsData);
    return (
        <div className="posts-area">
            <AddPostForm />
            <div className="posts-list">
                { posts.map(post => <Post key={post.id} post={post} />).reverse() }
            </div>
        </div>
    )
};

export default React.memo(MyPosts);