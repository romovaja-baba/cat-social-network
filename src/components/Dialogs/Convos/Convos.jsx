import React from "react";
import Message from "../Message/Message";
import AddMessageForm from "../../common/Forms/AddMessageForm";
import "../../../styles/Dialogs.scss";

const Convos = ({ userConvo }) => {

    const messagesElements = userConvo.messages.map((message) => {
        return (<Message id={message.id} text={message.text} senderId={message.senderId} key={message.id} />)
    })

    return (
        <div className="convo-area">
            <div className="convo-messages-area">{messagesElements}</div>
            <AddMessageForm userConvo={userConvo}/>
        </div>
    )
};

export default Convos;
