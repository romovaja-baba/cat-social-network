import React from "react";
import DialogUser from "./Dialog/DialogUser";
import ConvosContainer from "./Convos/ConvosContainer";
import { useParams } from "react-router-dom";

import "../../styles/Dialogs.scss";

const Dialogs = ({dialogsPage}) => {

    const { id } = useParams();

    let userConvo = dialogsPage.convosData.find(convo => convo.userId === parseInt(id));

    let dialogElements = dialogsPage.dialogUserData.map(dialog =>
        <DialogUser name={dialog.name} id={dialog.id} key={dialog.id} profilePicture={dialog.profilePicture} />);

    return (
        <div className="dialogs-area">
            <div className="dialogs-users-list">
                {dialogElements}
            </div>
            <div className="dialogs-messages-area">
                {userConvo && (<ConvosContainer userConvo={userConvo}/>)}
            </div>
        </div>
    )
};

export default Dialogs;