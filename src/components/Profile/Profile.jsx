import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, addPost, updateNewPostText}) => {
    return (
        <div className={styles.container}>

            <ProfileInfo/>

            <MyPosts posts={posts} addPost={addPost} updateNewPostText={updateNewPostText }/>

        </div>
    )
};

export default Profile;