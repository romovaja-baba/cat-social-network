import React from "react";
import styles from "./DialogUser.module.css";

import { NavLink } from "react-router-dom";

const DialogUser = (props) => {
    const SelectedLink = () => {
        return (
            select => select.isActive ? styles.active : styles.listItem
        );
    };
    return (
        <div className={styles.listItem}><NavLink to={`/dialogs/${props.id}`} className={SelectedLink()}>{props.name}</NavLink></div>
    )
};

export default DialogUser;