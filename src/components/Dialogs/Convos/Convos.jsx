import React from "react";
import styles from "./Convos.module.css";
import Message from "../Message/Message";

import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../../redux/dialogs-reducer";

const Convos = ({ state, userConvo, dispatch }) => {

    const messagesElements = userConvo.messages.map((message) => {
        return (<Message id={message.id} text={message.text} senderId={message.senderId} key={message.id} />)
    })

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        dispatch(sendMessageActionCreator(userConvo.userId));
        newMessageElement.current.value = '';
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={styles.content}>
            <div className={styles.messagesArea}>{messagesElements}</div>
            <div className={styles.messageInput}>
                <textarea ref={newMessageElement} onChange={onMessageChange} placeholder="Enter your message here..."></textarea>
                {/* TODO: fix to add.svg */}
                <img src="../add.svg" alt="" height={"40px"} onClick={sendMessage} className={styles.addButton} />
            </div>
        </div>
    )
};

export default Convos;
