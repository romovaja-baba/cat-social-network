import React from "react";
import "../../styles/SideBar.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {

    const friends = useSelector(state => state.sideBarPage.friendsData);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const friendsElements = friends.map((friend) => {
        return <div key={friend.id} className="sidebar-item">
            <img alt={friend.name} src={friend.profilePicture} />
            <NavLink to={`/dialogs/${friend.id}`}>{friend.name}</NavLink>
        </div>
    });

    if (isLoggedIn) {
        return (
            <div className="sidebar-area">
                <div className="sidebar-title">Your Best Friends</div>
                <div className="sidebar-list">{friendsElements}</div>
            </div>
        )
    } else {
        return;
    }
};

export default SideBar;