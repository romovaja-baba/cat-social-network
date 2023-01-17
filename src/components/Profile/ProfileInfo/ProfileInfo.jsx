import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import defaultProfilePicture from "../../../images/defaultPP.jpg";

import ProfileStatus from "./ProfileStatus";
import { useDispatch } from "react-redux";
import { saveProfilePicture } from "../../../redux/profile-reducer";

import "../../../styles/Profile.scss";

const ProfileInfo = ({ profile, isOwner }) => {

    const dispatch = useDispatch();

    const onProfilePictureSelected = (e) => {
        if (e.target.files.length) {
            dispatch(saveProfilePicture(e.target.files[0]))
        }
    }

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className="profile-maininfo-area">
            <div className="profile-maininfo-profilepicture">
                <img alt="" src={profile.photos.large || defaultProfilePicture} />
                {isOwner &&
                    <div className="profile-picture-update">
                        <label for="file-upload" className="profile=picture-update-button">
                            Update Picture
                        </label>
                        <input id="file-upload" type="file" onChange={onProfilePictureSelected}/>
                    </div>
                }
            </div>
            <div className="profile-maininfo">
                <div className="profile-maininfo-name">{profile.fullName}</div>
                <ProfileStatus isOwner={isOwner} />
            </div>
        </div>
    )
};

export default ProfileInfo;