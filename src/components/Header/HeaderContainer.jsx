import Header from "./Header";
import { authMe } from "../../redux/auth-reducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HeaderContainer = () => {
    
    const dispatch = useDispatch();
    useEffect(() => dispatch(authMe()));

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const login = useSelector(state => state.auth.login)

    return (<Header isLoggedIn={isLoggedIn} login={login} />)
};

export default HeaderContainer;