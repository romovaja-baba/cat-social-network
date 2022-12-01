import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile}) => {
    
    return (
        <div className="profile-area">
            <ProfileInfo profile={profile}/>
            <MyPostsContainer />
        </div>
    )
};

export default Profile;