import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "./Post/Post";
import addImage from "../../../images/add.svg";
import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import "../../../styles/Profile.scss";

const MyPosts = () => {

    const posts = useSelector(state => state.profilePage.postsData);
    const newPostText = useSelector(state => state.profilePage.newPostText);

    let postsElements = posts.map(post => <Post key={post.id} post={post} />);

    let newPostElement = React.createRef();

    const dispatch = useDispatch();
    let onAddPost = () => dispatch(addPost());
    let onPostChange = () => dispatch(updateNewPostText(newPostElement.current.value));

    return (
        <div className="posts-area">
            <div className="posts-newpost">
                <textarea ref={newPostElement} value={newPostText} onChange={onPostChange} placeholder="What's on your meownd?" />
                <img src={addImage} alt="" className="posts-addbutton" onClick={onAddPost} />
            </div>

            <div className="posts-list">{postsElements}</div>
        </div>
    )
};

export default MyPosts;