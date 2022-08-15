import React from "react";
import styles from "./Convos.module.css";

import Message from "../Message/Message";

const Convos = (props) => {

    const messagesElements = props.userConvo.messages.map((message) => {
        return(<Message id={message.id} text={message.text} senderId={message.senderId}/>)
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
                <button className={styles.addButton} onClick={sendMessage}>
                    <img height="30px" src="add.png" alt="" />
                </button>
            </div>
        </div>
    )
};

export default Convos;
