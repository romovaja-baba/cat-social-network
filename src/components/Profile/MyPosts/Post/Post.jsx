import React from "react";
import styles from "./Post.module.css";

const Post = ({post}) => {

    return (
        <div className={styles.item}>
            <div className={styles.post}>
                <div className={styles.postUserInfo}>
                    <img className={styles.postProfilePicture} alt="" src="https://us.123rf.com/450wm/nengloveyou/nengloveyou1404/nengloveyou140400107/27500065-portrait-thai-yellow-cat-brown-eyed-expressive-look-isolated-on-white.jpg?ver=6" />
                    <div>{post.user}</div>
                </div>
                <div className={styles.postMessage}>{post.text}</div>
            </div>
            <div className={styles.postLike}>
                {post.likeCount}
                <img height={"20px"} src="./heart.png" alt="" />
            </div>
        </div>
    );
};

export default Post;