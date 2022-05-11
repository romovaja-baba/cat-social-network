import React from "react";
import styles from "./SideBar.module.css"

import { NavLink } from "react-router-dom";

const SideBar = (props) => {

    let friendsElements = props.friends.map((friend) => {
        console.log(friend);
        return <div key={friend.id} className={styles.item}>
            <img alt={friend.name} src={friend.profilePicture} width={"64px"} height={"64px"}/>
            <NavLink to={`/dialogs/${friend.id}`}>{friend.name}</NavLink>
        </div>
    });
    return (
        <div className={styles.area}>
            <h2>Your Friends</h2>
            {friendsElements}
        </div>
    )
};

export default SideBar;