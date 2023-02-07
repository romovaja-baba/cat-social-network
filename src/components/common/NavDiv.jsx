import { NavLink } from "react-router-dom";

const NavDiv = ({to, name}) => {
    const SelectedLink = () => select => select.isActive ? "active-nav-item" : "nav-item";

    return <div><NavLink to={to} className={SelectedLink()}>{name}</NavLink></div>
}

export default NavDiv;