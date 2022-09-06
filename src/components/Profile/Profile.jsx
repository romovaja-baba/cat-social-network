import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ state, dispatch }) => {
    return (
        <div className={styles.container}>

            <ProfileInfo />

            <MyPosts state={state} dispatch={dispatch} />

        </div>
    )
};

export default Profile;