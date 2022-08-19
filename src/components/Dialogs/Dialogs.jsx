import React from "react";
import styles from "./Dialogs.module.css";

import DialogUser from "./Dialog/DialogUser";
import Convos from "./Convos/Convos";
import { useParams } from "react-router-dom";

const Dialogs = ({ convos, dialogs }) => {

    const { id } = useParams();

    let userConvo = convos.find(convo => convo.userId === parseInt(id));

    let dialogElements = dialogs.map(dialog =>
        <DialogUser name={dialog.name} id={dialog.id} key={dialog.id} profilePicture={dialog.profilePicture} />);

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {dialogElements}
            </div>
            <div className={styles.content}>
                {userConvo && (<Convos userConvo={userConvo}/>)}
            </div>
        </div>
    )
};

export default Dialogs;