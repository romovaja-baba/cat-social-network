import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({addPost, updateNewPostText, posts}) => {

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
        <div className={styles.postsArea}>
            <div className={styles.newPost}>
                <textarea ref={newPostElement} onChange={onPostChange} placeholder="What's on your meownd?" />
                <img height="40px" src="add.svg" alt="" className={styles.addButton} onClick={onAddPost} />
            </div>

            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;