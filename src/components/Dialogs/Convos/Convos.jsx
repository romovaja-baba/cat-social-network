import React from "react";
import styles from "./Convos.module.css";
import Message from "../Message/Message";

const Convos = ({ userConvo, newMessageText, updateNewMessageText, sendMessage }) => {
    console.log(newMessageText);

    const messagesElements = userConvo.messages.map((message) => {
        return (<Message id={message.id} text={message.text} senderId={message.senderId} key={message.id} />)
    })

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        sendMessage(userConvo);
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        updateNewMessageText(text);
    }

    return (
        <div className={styles.content}>
            <div className={styles.messagesArea}>{messagesElements}</div>
            <div className={styles.messageInput}>
                <textarea
                    ref={newMessageElement}
                    onChange={onMessageChange}
                    value={newMessageText}
                    placeholder="Enter your message here..."/>
                {/* TODO: fix to add.svg */}
                <img src="../add.svg" alt="" height={"40px"} onClick={onSendMessageClick} className={styles.addButton} />
            </div>
        </div>
    )
};

export default Convos;
