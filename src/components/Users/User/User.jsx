import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import defaultProfilePicture from "../../../images/defaultPP.jpg";

import "../../../styles/UserCard.scss";

const User = ({ user, followUser, unfollowUser }) => {

    const dispatch = useDispatch();

    return (
        <div className="usercard-area">
            <div className="usercard-left-side">
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small || defaultProfilePicture} alt="" />
                </NavLink>
                {user.followed ?
                    <button className="unfollow-button" onClick={() => dispatch(unfollowUser(user.id))}>
                        Unfollow
                    </button> :
                    <button className="follow-button" onClick={() => dispatch(followUser(user.id))}>
                        Follow
                    </button>
                }
            </div>
            <div className="usercard-content">
                <div className="usercard-name">{user.name}</div>
                <div className="usercard-status">{user.status}</div>
            </div>
        </div>
    )
}

export default User;