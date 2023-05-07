import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { logout } from "../../redux/actions/auth-actions";
import { isLoggedInSelector } from "../../utils/selectors";

import "../../styles/Common.scss";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

const LogoutButton = () => {

    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(isLoggedInSelector);

    const { handleSubmit } = useForm();

    const onSubmit = () => {
        dispatch(logout());
        // <Navigate to="/login" />
    }

    if (!isLoggedIn) return null;
    return (
        <form className="logout-btn-container" onSubmit={handleSubmit(onSubmit)}>
            <button className="logout-btn" type="submit">
                LOGOUT
            </button>
        </form>
    )
};

export default LogoutButton;