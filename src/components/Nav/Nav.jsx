import LogoutButton from "../common/LogoutButton";
import { isLoggedInSelector } from "../../utils/selectors";

import { useSelector } from "react-redux";

import "../../styles/Nav.scss";
import NavDiv from "../common/NavDiv";

const Nav = () => {
    const isLoggedIn = useSelector(isLoggedInSelector);

    if (!isLoggedIn) return null;

    const navLinks = [
        { to: "/feed", name: "Feed" },
        { to: "/users", name: "Find Users" },
        { to: "/profile", name: "Profile" },
        { to: "/dialogs", name: "Dialogs" },
        { to: "/music", name: "Music" },
        { to: "/settings", name: "Settings" }
    ]

    return (
        <nav className="nav-area">
            {navLinks.map(obj => <NavDiv to={obj.to} name={obj.name} key={obj.name} />)}
            <LogoutButton />
        </nav>
    )
};

export default Nav;