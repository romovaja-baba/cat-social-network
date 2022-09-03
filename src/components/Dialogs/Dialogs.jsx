import React from "react";
import styles from "./Dialogs.module.css";

import DialogUser from "./Dialog/DialogUser";
import Convos from "./Convos/Convos";
import { useParams } from "react-router-dom";

const Dialogs = ({ state }) => {

    const { id } = useParams();

    let userConvo = state.dialogsPage.convosData.find(convo => convo.userId === parseInt(id));

    let dialogElements = state.dialogsPage.dialogUserData.map(dialog =>
        <DialogUser name={dialog.name} id={dialog.id} key={dialog.id} profilePicture={dialog.profilePicture} />);

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {dialogElements}
            </div>
            <div className={styles.content}>
                {userConvo && (<Convos userConvo={userConvo} state={state}/>)}
            </div>
        </div>
    )
};

export default Dialogs;