import React from "react";
import Convos from "./Convos";

import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../../redux/dialogs-reducer";

const ConvosContainer = ({ state, userConvo, dispatch }) => {

    let onSendMessageClick = () => {
        dispatch(sendMessageActionCreator(userConvo.userId));
    }

    let onMessageChange = (body) => {
        dispatch(updateNewMessageTextActionCreator(body));
    }

    return <Convos updateNewMessageText={onMessageChange} sendMessage={onSendMessageClick} userConvo={userConvo}/>
};

export default ConvosContainer;
