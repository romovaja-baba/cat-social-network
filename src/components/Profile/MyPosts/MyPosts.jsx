import React from "react";
import Post from "./Post/Post";
import addImage from "../../../images/add.svg"

import "../../../styles/Profile.scss";

const MyPosts = ({addPost, updateNewPostText, posts, newPostText}) => {

    let postsElements = posts.map(
        post => <Post key={post.id} post={post} />
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        addPost();
    };

    let onPostChange = () => {
        const text = newPostElement.current.value;
        updateNewPostText(text);
    };

    return (
        <div className="posts-area">
            <div className="posts-newpost">
                <textarea ref={newPostElement} value={newPostText} onChange={onPostChange} placeholder="What's on your meownd?" />
                <img src={addImage} alt="" className="posts-addbutton" onClick={onAddPost}/>
            </div>

            <div className="posts-list">
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;