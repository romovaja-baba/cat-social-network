import { setUserProfile } from "../../redux/profile-reducer";

import axios from "axios";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const ProfileAPIComponent = ({ profile, setUserProfile }) => {

    const { id } = useParams();
    let [user, setUser] = useState(null);
    
    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then((response) => {
                setUserProfile(response.data);
                setUser(id);
            })
    }, [user, setUser, id, setUserProfile])

    return (
        <Profile profile={profile}/>
    )
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileAPIComponent);

export default ProfileContainer;
