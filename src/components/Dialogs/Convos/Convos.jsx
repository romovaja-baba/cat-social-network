import React from "react";
import Message from "../Message/Message";
import addImage from "../../../images/add.svg"

import "../../../styles/Dialogs.scss";

const Convos = ({ userConvo, newMessageText, updateNewMessageText, sendMessage }) => {
    const messagesElements = userConvo.messages.map((message) => {
        return (<Message id={message.id} text={message.text} senderId={message.senderId} key={message.id} />)
    })

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        sendMessage(userConvo.userId);
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        updateNewMessageText(text);
    }

    return (
        <div className="convo-area">
            <div className="convo-messages-area">{messagesElements}</div>
            <div className="convo-input">
                <textarea
                    ref={newMessageElement}
                    onChange={onMessageChange}
                    value={newMessageText}
                    placeholder="Enter your message here..."/>
                <img src={addImage} alt="" height={"40px"} onClick={onSendMessageClick} className="convo-addbutton" />
            </div>
        </div>
    )
};

export default Convos;
