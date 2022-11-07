import React from "react";
import styles from "./Users.module.css";

import User from "./User/User";

const Users = ({ users, follow, unfollow, setUsers }) => {

    let usersElements = users.map(user =>
        <User
            user={user}
            key={user.id}
            follow={follow}
            unfollow={unfollow}/>
    )

    return (
        <div className={styles.usersArea}>
            <div className={styles.itemsArea}>
                {usersElements}
            </div>
            <div className={styles.buttonArea}>
                <button className={styles.button}>Show More</button>
            </div>
        </div>
    )
}

export default Users;