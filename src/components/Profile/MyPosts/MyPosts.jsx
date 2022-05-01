import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post key={post.id} message={post.text} likeCount={post.likeCount}/>);

    return (
        <div className={styles.postsArea}>

            <div className={styles.newPost}>
                <textarea placeholder="What's on your meownd?"></textarea>
                <button className={styles.addButton}><img height="30px" src="add.png" alt=""/></button>
            </div>

            <div className={styles.posts}>
                {postsElements}
            </div>

        </div>
    )
};

export default MyPosts;