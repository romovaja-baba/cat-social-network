import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/Nav.scss";

const Nav = () => {

    const SelectedLink = () => {
        return (
            select => select.isActive ? "active-nav-item" : "nav-item"
        );
    }
    return (
        <nav className="nav-area">
            <div><NavLink to="/feed" className={SelectedLink()}>Feed</NavLink></div>
            <div><NavLink to="/users" className={SelectedLink()}>Find Users</NavLink></div>
            <div><NavLink to="/profile" className={SelectedLink()}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={SelectedLink()}>Messages</NavLink></div>
            <div><NavLink to="/music" className={SelectedLink()}>Music</NavLink></div>
            <div><NavLink to="/settings" className={SelectedLink()}>Settings</NavLink></div>
        </nav>
    )
};

export default Nav;