import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(
        post => <Post key={post.id} post={post} />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        newPostElement.current.value = '';
    };

    let onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }; 

    return (
        <div className={styles.postsArea}>

            <div className={styles.newPost}>
                <textarea ref={newPostElement} onChange={onPostChange} placeholder="What's on your meownd?" />
                <button className={styles.addButton} onClick={ addPost }>
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