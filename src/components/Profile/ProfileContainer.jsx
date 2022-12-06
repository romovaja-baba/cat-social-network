import Profile from "./Profile";

import { getUserProfile } from "../../redux/profile-reducer";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const ProfileAPIComponent = ({ profile, getUserProfile }) => {

    let { id } = useParams();
    useEffect(() => {
        getUserProfile(id);
    });

    return (
        <Profile profile={profile} />
    )
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

const ProfileContainer = connect(mapStateToProps, { getUserProfile })(ProfileAPIComponent);

export default ProfileContainer;
