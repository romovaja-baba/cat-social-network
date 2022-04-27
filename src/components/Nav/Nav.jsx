import React from "react";
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.item}><a href="/feed">Feed</a></div>
            <div className={styles.item}><a href="/profile">Profile</a></div>
            <div className={styles.item}><a href="/dialogs">Messages</a></div>
            <div className={styles.item}><a href="/music">Music</a></div>
            <div className={styles.item}><a href="/settings">Settings</a></div>
        </nav>
    )
};

export default Nav;