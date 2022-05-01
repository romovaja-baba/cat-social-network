import React from "react";
import styles from "./Dialogs.module.css";

import DialogUser from "./Dialog/DialogUser";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map( dialog => <DialogUser name={dialog.name} id={dialog.id}/> );
    let messagesElements = props.messages.map( message => <Message text={message.text}/> );

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {dialogElements}
            </div>
            <div className={styles.content}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;