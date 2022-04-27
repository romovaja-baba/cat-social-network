import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.post}>
                <img className={styles.postProfilePicture} alt="" src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" />
                <div className={styles.postMessage}>{props.message}</div>
            </div>
            
            <div className={styles.postLike}>
                <span>{props.likeCount}</span>
                <span><img height={"20px"} src="./heart.png" alt=""/></span>
            </div>
        </div>
    );
};

export default Post;