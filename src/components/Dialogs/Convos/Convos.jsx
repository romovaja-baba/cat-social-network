import React from "react";
import Message from "../Message/Message";
import addImage from "../../../images/add.svg"
import { useSelector, useDispatch } from "react-redux";
import "../../../styles/Dialogs.scss";

import { sendMessage, updateNewMessageText } from "../../../redux/dialogs-reducer";

const Convos = ({ userConvo }) => {

    const newMessageText = useSelector(state => state.dialogsPage.newMessageText);

    const messagesElements = userConvo.messages.map((message) => {
        return (<Message id={message.id} text={message.text} senderId={message.senderId} key={message.id} />)
    })

    let newMessageElement = React.createRef();

    const dispatch = useDispatch();

    let onSendMessageClick = () => dispatch(sendMessage(userConvo.userId));
    let onMessageChange = () => dispatch(updateNewMessageText(newMessageElement.current.value));

    return (
        <div className="convo-area">
            <div className="convo-messages-area">{messagesElements}</div>
            <div className="convo-input">
                <textarea
                    ref={newMessageElement}
                    onChange={onMessageChange}
                    value={newMessageText}
                    placeholder="Enter your message here..." />
                <img src={addImage} alt="" height={"40px"} onClick={onSendMessageClick} className="convo-addbutton" />
            </div>
        </div>
    )
};

export default Convos;
