import React from "react";
import "../../styles/SideBar.scss";
import { NavLink } from "react-router-dom";

const SideBar = ({friends}) => {

    const friendsElements = friends.map((friend) => {
        return <div key={friend.id} className="sidebar-item">
            <img alt={friend.name} src={friend.profilePicture} />
            <NavLink to={`/dialogs/${friend.id}`}>{friend.name}</NavLink>
        </div>
    });
    return (
        <div className="sidebar-area">
            <div className="sidebar-title">Your Best Friends</div>
            <div className="sidebar-list">{friendsElements}</div>
        </div>
    )
};

export default SideBar;