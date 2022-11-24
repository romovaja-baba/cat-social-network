import Profile from "./Profile";

import { usersAPI } from "../../api/api";
import { setUserProfile } from "../../redux/profile-reducer";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const ProfileAPIComponent = ({ profile, setUserProfile }) => {

    let { id } = useParams();
    let [user, setUser] = useState(null);

    useEffect(() => {
        usersAPI.getUserProfile(id)
            .then((data) => {
                setUserProfile(data);
                setUser(id);
            })
    }, [user, setUser, id, setUserProfile])

    return (
        <Profile profile={profile} />
    )
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileAPIComponent);

export default ProfileContainer;
