import React from "react";
import styles from "./Convos.module.css";

import Message from "../Message/Message";

const Convos = ({ userConvo }) => {

    const messagesElements = userConvo.messages.map((message) => {
        return (<Message id={message.id} text={message.text} senderId={message.senderId} />)
    })

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        return alert(text);
    }

    return (
        <div className={styles.content}>
            <div className={styles.messagesArea}>{messagesElements}</div>
            <div className={styles.messageInput}>
                <textarea ref={newMessage} placeholder="Enter your message here..."></textarea>
                {/* TODO: fix to add.svg */}
                <img src="../add.svg" alt="" height={"40px"} onClick={sendMessage} className={styles.addButton} />
            </div>
        </div>
    )
};

export default Convos;
