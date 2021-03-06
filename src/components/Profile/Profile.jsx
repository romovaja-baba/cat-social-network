import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={styles.container}>

            <ProfileInfo/>

            <MyPosts posts={props.posts} addPost={props.addPost}/>

        </div>
    )
};

export default Profile;