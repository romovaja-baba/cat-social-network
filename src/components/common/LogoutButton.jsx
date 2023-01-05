import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { logout } from "../../redux/auth-reducer";

import "../../styles/Common.scss";

const LogoutButton = () => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const { handleSubmit } = useForm();

    const onSubmit = () => {
        dispatch(logout());
        <Navigate to="/login" />
    }

    if (isLoggedIn) {
        return (
            <form className="logout-btn-container" onSubmit={handleSubmit(onSubmit)}>
                <button className="logout-btn" type="submit">
                    LOGOUT
                </button>
            </form>
        )
    } else return;
};

export default LogoutButton;