import React from "react";
import styles from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ state, dispatch }) => {
    return (
        <div className={styles.container}>

            <ProfileInfo />

            <MyPostsContainer state={state} dispatch={dispatch} />

        </div>
    )
};

export default Profile;