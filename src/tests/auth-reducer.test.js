import authReducer, { setAuthUserData, setCaptcha } from "../redux/auth-reducer";

let state = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false,
    captcha: null
};

test("authorized user", () => {
    let newState = authReducer(state, setAuthUserData(1, "iii@gmail.com", "iii", true));
    expect(newState.id).toBe(1);
    expect(newState.email).toBe("iii@gmail.com");
    expect(newState.login).toBe("iii");
    expect(newState.isLoggedIn).toBe(true)
});

test("passed captcha", () => {
    let newState = authReducer(state, setCaptcha("123ABC"));
    expect(newState.captcha).toBe("123ABC");
});