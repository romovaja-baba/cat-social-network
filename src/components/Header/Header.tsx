import { useEffect } from "react";
import catLogo from "../../images/cat.png";
import { authMe } from "../../redux/actions/auth-actions";
import "../../styles/Header.scss";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { isLoggedInSelector, loginSelector } from "../../utils/selectors";
import NavDiv from "../common/NavDiv";

const Header = () => {
    const isLoggedIn: boolean = useAppSelector(isLoggedInSelector);
    const login: string = useAppSelector(loginSelector);

    const dispatch = useAppDispatch();
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
                {isLoggedIn ? <NavDiv to="/profile" name={login} /> : <NavDiv to="/login" name="LOGIN" />}
            </div>
        </header>
    )
};

export default Header;