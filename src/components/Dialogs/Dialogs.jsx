import React from "react";
import styles from "./Dialogs.module.css";

import DialogUser from "./Dialog/DialogUser";
import ConvosContainer from "./Convos/ConvosContainer";
import { useParams } from "react-router-dom";

const Dialogs = ({dialogsPage}) => {

    const { id } = useParams();

    let userConvo = dialogsPage.convosData.find(convo => convo.userId === parseInt(id));

    let dialogElements = dialogsPage.dialogUserData.map(dialog =>
        <DialogUser name={dialog.name} id={dialog.id} key={dialog.id} profilePicture={dialog.profilePicture} />);

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {dialogElements}
            </div>
            <div className={styles.content}>
                {userConvo && (<ConvosContainer userConvo={userConvo}/>)}
            </div>
        </div>
    )
};

export default Dialogs;