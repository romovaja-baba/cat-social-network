import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.postsArea}>

            <div className={styles.newPost}>
                <textarea placeholder="What's on your meownd?"></textarea>
                <button>Add Post</button>
            </div>

            <div className={styles.posts}>
                <Post message="Hope you guys had a PURRfect weekend!" likeCount="24"/>
                <Post message="Whassup??" likeCount="12"/>
                <Post message="Hello everyone on this platform!!" likeCount="9"/>
            </div>

        </div>
    )
};

export default MyPosts;