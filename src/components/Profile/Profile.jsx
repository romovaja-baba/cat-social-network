import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainInfo}>
                <div className={styles.profilePicture}>
                    <img height={"200px"} alt="" src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" />
                </div>
                <div className={styles.profileName}>
                    Catmond Purrvic
                </div>
            </div>

            
            <MyPosts />
            
        </div>
    )
};

export default Profile;