import React from "react";
import styles from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile}) => {
    
    return (
        <div className={styles.container}>

            <ProfileInfo profile={profile}/>

            <MyPostsContainer />

        </div>
    )
};

export default Profile;