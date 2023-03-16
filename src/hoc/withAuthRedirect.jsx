import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => () => {
    const isLoggedIn = useSelector(state => state.app.isInitSuccess);

    if (!isLoggedIn) {
        return <Navigate to={'/login'} />
    }
    return <Component />
};
