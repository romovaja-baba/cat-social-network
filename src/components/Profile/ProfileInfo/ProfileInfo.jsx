import { useState } from "react";
import { useDispatch } from "react-redux";
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileInfoForm from "../../common/Forms/ProfileInfoForm";
import ProfileSocials from "./ProfileSocials";

import { saveProfilePicture } from "../../../redux/profile-reducer";
import defaultProfilePicture from "../../../images/defaultPP.jpg";

import "../../../styles/Profile.scss";

const ProfileInfo = ({ profile, isOwner }) => {

    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);

    const onProfilePictureSelected = (e) => {
        if (e.target.files.length) {
            dispatch(saveProfilePicture(e.target.files[0]))
        }
    }

    if (!profile) return <Preloader />

    return (
        <div className="profile-maininfo-area">
            <div className="profile-maininfo-profilepicture">
                <img alt="" src={profile.photos.large || defaultProfilePicture} />
                {isOwner &&
                    <div className="profile-picture-update">
                        <label htmlFor="file-upload" className="profile=picture-update-button">
                            Update Picture
                        </label>
                        <input id="file-upload" type="file" onChange={onProfilePictureSelected} />
                    </div>
                }
                {isOwner &&
                    <div className="profile-maininfo-edit">
                        <button onClick={() => setEditMode(true)} >Edit Profile</button>
                    </div>
                }
            </div>

            {editMode ? <ProfileInfoForm disableEditMode={() => setEditMode(false)} /> :
                <div className="profile-maininfo">
                    <div className="profile-maininfo-name">{profile.fullName}</div>
                    <ProfileStatus isOwner={isOwner} />
                    <div className="profile-maininfo-colored">
                        <div className="profile-maininfo-job-area">
                            <div className="profile-maininfo-job-item active-text">
                                {profile.lookingForAJob ? `Looking for a job : 
                                ${profile.lookingForAJobDescription}` : `Not looking for a job`}
                            </div>

                            <div className="profile-maininfo-socials">
                                {Object.entries(profile.contacts).map(social => {
                                    return <ProfileSocials key={social} social={social} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

export default ProfileInfo;