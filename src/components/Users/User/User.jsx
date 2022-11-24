import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./User.module.css"
import defaultProfilePicture from "../../../images/defaultPP.jpg";

import { usersAPI } from "../../../api/api";
import { useState } from "react";

const User = ({ user, follow, unfollow }) => {

    let [disabled, setDisabled] = useState(false);

    return (
        <div className={styles.listItem}>
            <div className={styles.leftSide}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small || defaultProfilePicture} alt="" />
                </NavLink>
                {user.followed ?
                    <button className={disabled ? styles.disabledButton : styles.unfollowButton}
                        onClick={() => {
                            setDisabled(true);
                            usersAPI.unfollowUser(user.id).then((data) => {
                                if (data.resultCode === 0) {
                                    unfollow(user.id)
                                }
                                setDisabled(false);
                            })
                        }}>Unfollow</button> :
                    <button className={disabled ? styles.disabledButton : styles.followButton}
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
            <div className={styles.content}>
                <div className={styles.mainInfo}>
                    <div className={styles.name}>{user.name}</div>
                    <div className={styles.status}>{user.status}</div>
                </div>
                {/* <div className={styles.location}>
                    <div className={styles.locationItem}>user.location.city</div>
                    <div className={styles.locationItem}>user.location.country</div>
                </div> */}
            </div>
        </div>
    )
}

export default User;