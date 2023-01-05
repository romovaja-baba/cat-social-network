import React from "react";
import { NavLink } from "react-router-dom";

import LogoutButton from "../common/LogoutButton";

import "../../styles/Nav.scss";
import { useSelector } from "react-redux";

const Nav = () => {

    const SelectedLink = () => select => select.isActive ? "active-nav-item" : "nav-item";

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (isLoggedIn) {
        return (
            <nav className="nav-area">
                <div><NavLink to="/feed" className={SelectedLink()}>Feed</NavLink></div>
                <div><NavLink to="/users" className={SelectedLink()}>Find Users</NavLink></div>
                <div><NavLink to="/profile" className={SelectedLink()}>Profile</NavLink></div>
                <div><NavLink to="/dialogs" className={SelectedLink()}>Messages</NavLink></div>
                <div><NavLink to="/music" className={SelectedLink()}>Music</NavLink></div>
                <div><NavLink to="/settings" className={SelectedLink()}>Settings</NavLink></div>
                <LogoutButton />
            </nav>
        )
    } else {
        return;
    }
};

export default Nav;