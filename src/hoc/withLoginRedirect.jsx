import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const withLoginRedirect = (Component) => (props) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (isLoggedIn) {
        return <Navigate to={'/profile'} />
    }

    return < Component />
};