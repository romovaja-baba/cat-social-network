import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./User.module.css"
import defaultProfilePicture from "../../../images/defaultPP.jpg";

const User = ({ user, follow, unfollow }) => {
    return (
        <div className={styles.listItem}>
            <div className={styles.leftSide}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small || defaultProfilePicture} alt="" />
                </NavLink>
                {user.followed ?
                    <button className={styles.unfollowButton} onClick={() => unfollow(user.id)}>Unfollow</button> :
                    <button className={styles.followButton} onClick={() => follow(user.id)}>Follow</button>
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