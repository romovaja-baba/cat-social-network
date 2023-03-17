import { FC } from "react";
import { isLoggedInSelector } from "../utils/selectors";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";

export const withAuthRedirect = (Component: FC) => () => {
    const isLoggedIn = useAppSelector(isLoggedInSelector);

    if (!isLoggedIn) {
        return <Navigate to={'/login'} />
    }
    return <Component />
};
