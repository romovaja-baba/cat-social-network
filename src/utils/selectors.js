//auth
export const isLoggedInSelector = state => state.auth.isLoggedIn;
export const initializationSelector = state => state.app.initialization;
export const loginSelector = state => state.auth.login;
export const myProfileIdSelector = state => state.auth.id;
export const captchaSelector = state => state.auth.captcha;

//sidebar
export const sideBarFriendsSelector = state => state.sideBarPage.friendsData;

//profile
export const profileSelector = state => state.profilePage.profile;
export const profileIdSelector = state => state.profilePage.profile.userId;
export const statusTextSelector = state => state.profilePage.status;
export const postsSelector = state => state.profilePage.postsData;

//dialogs
export const convosSelector = state => state.dialogsPage.convosData;
export const dialogUserSelector = state => state.dialogsPage.dialogUserData;

//users
export const usersPageSelector = state => state.usersPage;

//feed
export const newsSelector = state => state.feedPage.newsData;