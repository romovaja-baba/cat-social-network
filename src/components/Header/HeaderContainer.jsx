import Header from "./Header";

import { connect } from "react-redux";
import { useEffect } from "react";

import { setAuthUserData } from "../../redux/auth-reducer";
import { usersAPI } from "../../api/api";

const HeaderAPIContainer = ({ isLoggedIn, login, setAuthUserData }) => {

    useEffect(() => {
        usersAPI.authMe().then((data) => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    setAuthUserData(id, email, login);
                }
            })
    }, [setAuthUserData])
    return (
        <Header isLoggedIn={isLoggedIn} login={login} />
    )
};

let mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        login: state.auth.login
    };
}

const HeaderContainer = connect(mapStateToProps, { setAuthUserData })(HeaderAPIContainer)

export default HeaderContainer;