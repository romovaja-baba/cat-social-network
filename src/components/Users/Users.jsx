import React from "react";
import styles from "./Users.module.css";
import axios from "axios";

import User from "./User/User";
import { useState, useEffect } from "react";

const Users = ({ users, follow, unfollow, setUsers }) => {

    const [page, setPage] = useState(1);

    let showMoreUsers = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
            .then((response) => {
                setUsers(response.data.items);
                setPage(page + 1)
            })
    };
    
    useEffect(() => {
        if (users.length) return;
        showMoreUsers();
    });



    let usersElements = users.map(user =>
        <User
            user={user}
            key={user.id}
            follow={follow}
            unfollow={unfollow} />
    )

    return (
        <div className={styles.usersArea}>
            <div className={styles.itemsArea}>
                {usersElements}
            </div>
            <div className={styles.buttonArea}>
                <button className={styles.button} onClick={showMoreUsers}>Show More</button>
            </div>
        </div>
    )
}

export default Users;