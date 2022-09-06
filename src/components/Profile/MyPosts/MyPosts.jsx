import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = ({ state, dispatch }) => {

    let postsElements = state.profilePage.postsData.map(
        post => <Post key={post.id} post={post} />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        dispatch(addPostActionCreator());
        newPostElement.current.value = '';
    };

    let onPostChange = () => {
        const text = newPostElement.current.value;
        dispatch(updateNewPostTextActionCreator(text))
    };

    return (
        <div className={styles.postsArea}>
            <div className={styles.newPost}>
                <textarea ref={newPostElement} onChange={onPostChange} placeholder="What's on your meownd?" />
                <img height="40px" src="add.svg" alt="" className={styles.addButton} onClick={addPost} />
            </div>

            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;