export const types = {
    AUTH_ME: "app/auth/AUTH_ME",
    LOGIN: "app/auth/LOGIN",
    LOGOUT: "app/auth/LOGOUT",
    SET_AUTH_USER_DATA: "app/auth/SET_AUTH_USER_DATA",
    GET_CAPTCHA: "app/security/GET_CAPTCHA",
    SET_CAPTCHA: "app/security/SET_CAPTCHA"
}

export const authMe = () => ({ type: types.AUTH_ME });
export const login = (loginInfo) => ({
    type: types.LOGIN,
    loginInfo
});
export const logout = () => ({ type: types.LOGOUT });
export const setAuthUserData = (id, email, login, isLoggedIn) => (
    { type: types.SET_AUTH_USER_DATA, payload: { id, email, login, isLoggedIn } });
export const getCaptcha = () => ({ type: types.GET_CAPTCHA })
export const setCaptcha = (captcha) => ({ type: types.SET_CAPTCHA, captcha });