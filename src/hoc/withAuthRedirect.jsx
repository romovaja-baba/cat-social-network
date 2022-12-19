import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => (props) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to={'/login'} />
    }
    return <Component />
};