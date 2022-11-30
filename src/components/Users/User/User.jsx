import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";
import { useState } from "react";
import defaultProfilePicture from "../../../images/defaultPP.jpg";

import "../../../styles/UserCard.scss";

const User = ({ user, follow, unfollow }) => {

    let [disabled, setDisabled] = useState(false);

    return (
        <div className="usercard-area">
            <div className="usercard-left-side">
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small || defaultProfilePicture} alt="" />
                </NavLink>
                {user.followed ?
                    <button className={disabled ? "disabled-button" : "unfollow-button"}
                        onClick={() => {
                            setDisabled(true);
                            usersAPI.unfollowUser(user.id).then((data) => {
                                if (data.resultCode === 0) {
                                    unfollow(user.id)
                                }
                                setDisabled(false);
                            })
                        }}>Unfollow</button> :
                    <button className={disabled ? "disabled-button" : "follow-button"}
                        onClick={() => {
                            setDisabled(true);
                            usersAPI.followUser(user.id).then((data) => {
                                if (data.resultCode === 0) {
                                    follow(user.id)
                                }
                                setDisabled(false);
                            });
                        }}>Follow</button>
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