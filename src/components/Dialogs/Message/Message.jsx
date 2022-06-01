import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={props.senderId === 0 ? styles.myself : styles.others}>
            <div className={styles.message}>
                {props.text}
            </div>
        </div>
    )
};

export default Message;