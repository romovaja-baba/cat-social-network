import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const Dialogs = () => {

    const SelectedLink = () => {
        return (
            select => select.isActive ? styles.active : styles.listItem
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <div className={styles.listItem}><NavLink to="/dialogs/1" className={SelectedLink()}>Vlawd</NavLink></div>
                <div className={styles.listItem}><NavLink to="/dialogs/2" className={SelectedLink()}>Ameowlinda</NavLink></div>
                <div className={styles.listItem}><NavLink to="/dialogs/3" className={SelectedLink()}>Dr. Pawbert Whiskman</NavLink></div>
                <div className={styles.listItem}><NavLink to="/dialogs/4" className={SelectedLink()}>Hissley</NavLink></div>
                <div className={styles.listItem}><NavLink to="/dialogs/5" className={SelectedLink()}>Hecker</NavLink></div>

            </div>
            <div className={styles.content}>
                <div className={styles.message}>Hey dude</div>
                <div className={styles.message}>Yo what's up</div>
            </div>
        </div>
    )
};

export default Dialogs;