import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { getUserProfile } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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

export default withAuthRedirect(Profile);
