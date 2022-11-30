import React from "react";
import { NavLink } from "react-router-dom";

import "../../../styles/Dialogs.scss";

const DialogUser = ({profilePicture, name, id}) => {
    const SelectedLink = () => {
        return (
            select => select.isActive ? "active-dialog dialog-user-item" : "dialog-user-item"
        );
    };

    return (
        <div className="dialog-user-area">
            <img src={profilePicture} alt={name} />
            <NavLink to={`/dialogs/${id}`} className={SelectedLink()}>
                {name}
            </NavLink>
        </div>
    )
};

export default DialogUser;