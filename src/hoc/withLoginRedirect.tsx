import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";
import { isLoggedInSelector } from "../utils/selectors";

export const withLoginRedirect = (Component: FC) => () => {
    const isLoggedIn = useAppSelector(isLoggedInSelector);

    if (isLoggedIn) {
        return <Navigate to={'/profile'} />
    }

    return <Component />
};