import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { getUserProfile } from "../../redux/profile-reducer";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {

    const profile = useSelector(state => state.profilePage.profile);
    const dispatch = useDispatch();

    let { id } = useParams();
    useEffect(() => dispatch(getUserProfile(id)));

    return (
        <div className="profile-area">
            <ProfileInfo profile={profile} />
            <MyPosts />
        </div>
    )
};

export default Profile;
