import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainInfo}>
                <div className={styles.profilePicture}>
                    <img height={"200px"} alt="" src="https://us.123rf.com/450wm/nengloveyou/nengloveyou1404/nengloveyou140400107/27500065-portrait-thai-yellow-cat-brown-eyed-expressive-look-isolated-on-white.jpg?ver=6" />
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