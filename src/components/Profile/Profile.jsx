import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { getUserProfile } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { profileSelector, myProfileIdSelector, statusTextSelector } from "../../utils/selectors";

const Profile = () => {

    const profile = useSelector(profileSelector, shallowEqual);
    const myProfileId = useSelector(myProfileIdSelector);
    const statusText = useSelector(statusTextSelector);
    const dispatch = useDispatch();

    let { id } = useParams();
    useEffect(() => {
        dispatch(getUserProfile(id || myProfileId));
    }, [dispatch, id, myProfileId]);

    return (
        <div className="profile-area">
            <ProfileInfo profile={profile} isOwner={!id} statusText={statusText} id={id || myProfileId} />
            {profile && <MyPosts profilePicture={profile.photos.small} />}
        </div>
    )
};

export default withAuthRedirect(Profile);
