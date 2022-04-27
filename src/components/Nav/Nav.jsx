import React from "react";
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.item}><a href="s">Profile</a></div>
            <div className={styles.item}><a href="s">Messages</a></div>
            <div className={styles.item}><a href="s">News</a></div>
            <div className={styles.item}><a href="s">Settings</a></div>
        </nav>
    )
};

export default Nav;