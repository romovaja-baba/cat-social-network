import React from "react";
import styles from "./SideBar.module.css"

import { NavLink } from "react-router-dom";

const SideBar = (props) => {

    let friendsElements = props.friends.map(friend => <div className={styles.item}><NavLink to={`/dialogs/${props.id}`}>{friend.name}</NavLink></div>)

    return (

        <div className={styles.area}>
            <h2>Your Friends</h2>
            {friendsElements}
        </div>
    )
};

export default SideBar;