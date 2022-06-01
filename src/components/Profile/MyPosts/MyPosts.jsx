import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(
        post => <Post key={post.id} post={post} />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        newPostElement.current.value = '';
        props.addPost(text);
        
    };

    return (
        <div className={styles.postsArea}>

            <div className={styles.newPost}>
                <textarea ref={newPostElement} placeholder="What's on your meownd?"></textarea>
                <button className={styles.addButton} onClick={() => { addPost() }}>
                    <img height="30px" src="add.png" alt="" />
                </button>
            </div>

            <div className={styles.posts}>
                {postsElements}
            </div>

        </div>
    )
};

export default MyPosts;