import Header from "./Header";
import { authMe } from "../../redux/auth-reducer";

import { connect } from "react-redux";
import { useEffect } from "react";

const HeaderAPIContainer = ({ isLoggedIn, login, authMe }) => {
    useEffect(() => { authMe() })
    return ( <Header isLoggedIn={isLoggedIn} login={login} /> )
};

let mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        login: state.auth.login
    }
};

const HeaderContainer = connect(mapStateToProps, { authMe })(HeaderAPIContainer)

export default HeaderContainer;