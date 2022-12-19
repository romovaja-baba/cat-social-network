import React from "react";
import DialogUser from "./Dialog/DialogUser";
import Convos from "./Convos/Convos";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../styles/Dialogs.scss";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const Dialogs = () => {
    const { id } = useParams();

    const convosData = useSelector(state => state.dialogsPage.convosData);
    const dialogUserData = useSelector(state => state.dialogsPage.dialogUserData);

    let userConvo = convosData.find(convo => convo.userId === parseInt(id));
    let dialogElements = dialogUserData.map(dialog =>
        <DialogUser name={dialog.name} id={dialog.id} key={dialog.id} profilePicture={dialog.profilePicture} />);

    return (
        <div className="dialogs-area">
            <div className="dialogs-users-list">
                {dialogElements}
            </div>
            <div className="dialogs-messages-area">
                {userConvo && (<Convos userConvo={userConvo} />)}
            </div>
        </div>
    )
};

export default withAuthRedirect(Dialogs);