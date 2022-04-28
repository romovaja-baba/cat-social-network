import React from "react";
import styles from './Nav.module.css';

import { NavLink } from "react-router-dom";

const Nav = () => {

    const SelectedLink = () => {
        return (
            select => select.isActive ? styles.active : styles.item
        );
    }
    return (
        <nav className={styles.container}>
            <div className={styles.item}><NavLink to="/feed" className={SelectedLink()}>Feed</NavLink></div>
            <div className={styles.item}><NavLink to="/profile" className={SelectedLink()}>Profile</NavLink></div>
            <div className={styles.item}><NavLink to="/dialogs" className={SelectedLink()}>Messages</NavLink></div>
            <div className={styles.item}><NavLink to="/music" className={SelectedLink()} >Music</NavLink></div>
            <div className={styles.item}><NavLink to="/settings" className={SelectedLink()} >Settings</NavLink></div>
        </nav>
    )
};

export default Nav;