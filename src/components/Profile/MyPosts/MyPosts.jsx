import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import AddPostForm from "../../common/Forms/AddPostForm";
import { postsSelector } from "../../../utils/selectors";

import "../../../styles/Posts.scss";

const MyPosts = () => {
    const posts = useSelector(postsSelector);
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