import { useForm } from "react-hook-form";
import { login } from "../../../redux/actions/auth-actions";
import { captchaSelector } from "../../../utils/selectors";

import "../../../styles/Login.scss";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { isLoggedInSelector } from "../../../utils/selectors";
import { ILogin } from "../../../interfaces/auth.interface";

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(isLoggedInSelector);
    const captcha = useAppSelector(captchaSelector);

    const {
        register, handleSubmit, formState: { errors }, clearErrors, setError, reset
    } = useForm<ILogin>({ mode: "all" });
    const onSubmit = (data: ILogin) => {
        const loginInfo = {
            email: data.email, password: data.password,
            rememberMe: data.rememberMe, captcha: data.captcha, setError
        }
        dispatch(login(loginInfo));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="login-input-area">
                <input
                    {...register("email", {
                        required: "This field is required",
                        minLength: {
                            value: 5,
                            message: "Your email must be at least 5 characters long"
                        },
                        pattern: {
                            value: /\S+@\S+.\w+/i,
                            message: "Please enter a valid email"
                        },
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
                <input {
                    ...register("password", {
                        required: "This field is required",
                        maxLength: {
                            value: 15,
                            message: "Your password must be max 15 characters long"
                        }
                    })
                }
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

            {(captcha) &&
                <div className="captcha-area">
                    <img src={captcha} alt="captcha" />
                    <input className={errors.captcha ? "captcha-input red-border" : "captcha-input"}
                        {...register("captcha",
                            {
                                required: {
                                    value: true, message: "Captcha is required"
                                }
                            })
                        }
                        placeholder="Enter the captcha" />
                    {errors.captcha &&
                        <div className="captcha-error">
                            {errors.captcha.message}
                        </div>
                    }
                </div>
            }

            {
                errors &&
                <div className="login-input-error ">
                    "There is something wrong"
                </div>
            }
            <button type="submit" className="login-submit-button">Log In</button>
        </form >
    )
};

export default LoginForm;