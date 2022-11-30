import React from "react";
import "../../../styles/Dialogs.scss";

const Message = ({ text, senderId }) => {
    return (
        <div className={senderId === 0 ? "message-myself message-item" : "message-others message-item"}>
            {text}
        </div>
    )
};

export default Message;