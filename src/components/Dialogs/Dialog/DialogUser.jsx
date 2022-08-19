import React from "react";
import styles from "./DialogUser.module.css";

import { NavLink } from "react-router-dom";

const DialogUser = ({profilePicture, name, id}) => {
    const SelectedLink = () => {
        return (
            select => select.isActive ? styles.active : styles.listItem
        );
    };

    return (
        <div className={styles.listItem}>
            <img src={profilePicture} alt={name} width={"55px"} height={"55px"} />
            <NavLink to={`/dialogs/${id}`} className={SelectedLink()}>
                {name}
            </NavLink>
        </div>
    )
};

export default DialogUser;