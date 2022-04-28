import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.post}>
                <img className={styles.postProfilePicture} alt="" src="https://us.123rf.com/450wm/nengloveyou/nengloveyou1404/nengloveyou140400107/27500065-portrait-thai-yellow-cat-brown-eyed-expressive-look-isolated-on-white.jpg?ver=6" />
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