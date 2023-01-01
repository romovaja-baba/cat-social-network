import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import defaultProfilePicture from "../../../images/defaultPP.jpg";

import "../../../styles/Profile.scss";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile }) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className="profile-maininfo-area">
            <div className="profile-maininfo-profilepicture">
                <img alt="" src={profile.photos.large || defaultProfilePicture} />
            </div>
            <div className="profile-maininfo">
                <div className="profile-maininfo-name">{profile.fullName}</div>
                <ProfileStatus />
            </div>
        </div>
    )
};

export default ProfileInfo;