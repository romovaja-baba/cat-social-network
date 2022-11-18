import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

import defaultProfilePicture from "../../../images/defaultPP.jpg"

const ProfileInfo = ({ profile }) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={styles.mainInfo}>
            <div className={styles.profilePicture}>
                <img height={"200px"} alt="" src={profile.photos.large || defaultProfilePicture}/>
            </div>
            <div className={styles.profileName}>
                {profile.fullName}
            </div>
        </div>
    )
};

export default ProfileInfo;