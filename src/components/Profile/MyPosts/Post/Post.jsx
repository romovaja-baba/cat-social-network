import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {

    return (
        <div className={styles.item}>
            <div className={styles.post}>
                <img className={styles.postProfilePicture} alt="" src="https://us.123rf.com/450wm/nengloveyou/nengloveyou1404/nengloveyou140400107/27500065-portrait-thai-yellow-cat-brown-eyed-expressive-look-isolated-on-white.jpg?ver=6" />
                <div>
                    <div className={styles.postMessage}>{props.post.text}</div>
                    <div className={styles.postDate}><date>{props.post.date}</date></div>
                </div>

            </div>

            <div className={styles.postLike}>
                <span>{props.post.likeCount}</span>
                <span><img height={"20px"} src="./heart.png" alt="" /></span>
            </div>
        </div>
    );
};

export default Post;