import React from "react";
import styles from "./SideBar.module.css"

const SideBar = (props) => {
    return (
        <div className={styles.area}>
            <div>friend 1</div>
            <div>friend 2</div>
            <div>friend 3</div>
        </div>
    )
};

export default SideBar;