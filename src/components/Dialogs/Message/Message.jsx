import React from "react";
import styles from "./Message.module.css";

const Message = ({text, senderId}) => {
    return (
        <div className={senderId === 0 ? styles.myself : styles.others}>
            <div className={styles.message}>
                {text}
            </div>
        </div>
    )
};

export default Message;