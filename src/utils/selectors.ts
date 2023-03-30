import type { RootState } from "../redux/redux-store";
//app
export const isInitSuccessSelector = (state: RootState) => state.app.isInitSuccess;
export const initializationSelector = (state: RootState) => state.app.initialization;

//auth
export const isLoggedInSelector = (state: RootState) => state.auth.isLoggedIn;
export const loginSelector = (state: RootState) => state.auth.login;
export const myProfileIdSelector = (state: RootState) => state.auth.id;
export const captchaSelector = (state: RootState) => state.auth.captcha;

//sidebar
export const sideBarFriendsSelector = (state: RootState) => state.sideBarPage.friendsData;

//profile
export const profileSelector = (state: RootState) => state.profilePage.profile;
export const statusTextSelector = (state: RootState) => state.profilePage.status;
export const postsSelector = (state: RootState) => state.profilePage.postsData;

//dialogs
export const convosSelector = (state: RootState) => state.dialogsPage.convosData;
export const dialogUserSelector = (state: RootState) => state.dialogsPage.dialogUserData;

//users
export const usersPageSelector = (state: RootState) => state.usersPage;

//feed
export const newsSelector = (state: RootState) => state.feedPage.newsData;