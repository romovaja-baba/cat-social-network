import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavDiv from "../common/NavDiv";

import { authMe } from "../../redux/actions/auth-actions";
import { isLoggedInSelector, loginSelector } from "../../utils/selectors";

import catLogo from "../../images/cat.png"

import "../../styles/Header.scss";

const Header = () => {
    const isLoggedIn = useSelector(isLoggedInSelector);
    const login = useSelector(loginSelector);

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
                {isLoggedIn ?<NavDiv to="/profile" name={login}/> : <NavDiv to="/login" name="LOGIN"/>}
            </div>
        </header>
    )
};

export default Header;