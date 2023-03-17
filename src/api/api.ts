import axios from "axios";
import { ILogin } from "../interfaces/auth.interface";
import { IProfile } from "../interfaces/profile.interface";
import { IUsersToApi } from "../interfaces/users.interface";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "eaa51dd2-35e8-4e9d-a461-05fcfc1bcdae"
    }
});

export const usersAPI = {
    getUsers(payload : {usersInfo: IUsersToApi}) {
        return instance.get(`users?page=${payload.usersInfo.currentPage}&count=${payload.usersInfo.pageSize}`)
    },
    followUser(payload : {userId: number}) {
        return instance.post(`follow/${payload.userId}`)
    },
    unfollowUser(payload: {userId: number}) {
        return instance.delete(`follow/${payload.userId}`)
    }
};

export const profileAPI = {
    getUserProfile(payload: {id: number}) {
        return instance.get(`profile/${payload.id}`)
    },
    getStatus(payload: {id: number}) {
        return instance.get(`profile/status/${payload.id}`)
    },
    updateStatus(payload: {status: string}) {
        return instance.put(`profile/status/`, { status: payload.status })
    },
    saveProfilePicture(payload: {pic: string}) {
        let formData = new FormData();
        formData.append("image", payload.pic)
        return instance.put(`profile/photo`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
    },
    saveProfileInfo(payload: {profile: IProfile}) {
        return instance.put(`profile`, payload.profile)
    }
};

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
    },
    login(payload: {loginInfo: ILogin}) {
        const {email, password, rememberMe, captcha} = payload.loginInfo;
        return instance.post('auth/login', { email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete('auth/login');
    }
};

export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url');
    }
}
