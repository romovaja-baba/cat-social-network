import React from "react";
import styles from "./Dialogs.module.css";
import { Route, Routes } from "react-router-dom";

import DialogUser from "./Dialog/DialogUser";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(dialog =>
        <DialogUser name={dialog.name} id={dialog.id} key={dialog.id} profilePicture={dialog.profilePicture} />);

    let messages = props.messages.map(message => <Message key={message.id} text={message.text} senderId={message.senderId} />);

    let messagesElements = props.messages.map(message =>
        <Route path={`/dialogs/${message.id}`} element={messages} />);

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        return alert(text);
    }

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {dialogElements}
            </div>
            <div className={styles.content}>
                <Routes>
                    {messagesElements}
                </Routes>
                <div className={styles.messageInput}>
                    <textarea ref={newMessage} placeholder="Enter your message here..."></textarea>
                    <button className={styles.addButton} onClick={() => { sendMessage() }}>
                        <img height="30px" src="add.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;