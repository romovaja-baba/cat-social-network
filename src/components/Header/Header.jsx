import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authMe } from "../../redux/auth-reducer";

import catLogo from "../../images/cat.png"

import "../../styles/Header.scss";

const Header = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const login = useSelector(state => state.auth.login)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authMe())
    }, [dispatch, isLoggedIn]);

    return (
        <header className="header-area">
            <div className="header-logo">
                <img height={"60px"} alt="" src={catLogo} />
            </div>
            <div className="header-title">
                MEOWGRAM
            </div>
            <div className="header-login">
                {isLoggedIn ?
                    <NavLink to={"/profile"}>{login}</NavLink> :
                    <NavLink to={"/login"}>{"LOGIN"}</NavLink>}
            </div>
        </header>
    )
};

export default Header;