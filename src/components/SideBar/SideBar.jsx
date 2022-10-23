import React from "react";
import styles from "./SideBar.module.css"

import { NavLink } from "react-router-dom";

const SideBar = ({ state }) => {

    const friendsElements = state.sideBarPage.friendsData.map((friend) => {
        return <div key={friend.id} className={styles.item}>
            <img alt={friend.name} src={friend.profilePicture} width={"50px"} height={"50px"} />
            <NavLink to={`/dialogs/${friend.id}`}>{friend.name}</NavLink>
        </div>
    });
    return (
        <div className={styles.area}>
            <h2>Your Best Friends</h2>
            {friendsElements}
        </div>
    )
};

export default SideBar;