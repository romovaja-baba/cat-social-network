import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../../redux/auth-reducer";

import "../../../styles/Login.scss";

const LoginForm = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const { register, handleSubmit, formState: { errors }, clearErrors, setError, reset } = useForm(
        { mode: "all" }
    );
    const onSubmit = (data) => {
        dispatch(login(data.email, data.password, data.rememberMe, setError));
        reset();
    };

    if (isLoggedIn) {
        return <Navigate to={'/profile'} />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-input-area">
                <input
                    {...register("email", {
                        required: "This field is required", minLength: {
                            value: 5,
                            message: "Your email must be at least 5 characters long"
                        }
                    })}
                    onFocus={() => clearErrors()}
                    className={`login-item ${errors.email ? "red-border" : ""}`}
                    placeholder="E-mail"
                />
                {errors.email &&
                    <div className="login-input-error">
                        {errors.email.message}
                    </div>}
            </div>

            <div className="login-input-area">
                <input
                    {...register("password", {
                        required: {
                            value: true,
                            message: "This field is required"
                        }, maxLength: {
                            value: 15,
                            message: "Your password must be max 15 characters long"
                        }
                    })}
                    onFocus={() => clearErrors()}
                    className={`login-item ${errors.password ? "red-border" : ""}`}
                    placeholder="Password"
                    type="password"
                />
                {errors.password &&
                    <div className="login-input-error">
                        {errors.password.message}
                    </div>}
            </div>

            <div className="login-remember-me">
                <input {...register("rememberMe")} type="checkbox" />
                <div>Remember me</div>
            </div>

            {errors.server &&
                <div className="login-input-error ">
                    {errors.server.message}
                </div>
            }
            <button type="submit" className="login-submit-button">Log In</button>
        </form>
    )
};

export default LoginForm;