import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "f6f0f970-09fc-4182-a803-b02a7bc668e4"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    }
};

export const profileAPI = {
    getUserProfile(id, myProfile = 26803) {
        return instance.get(`profile/${id || myProfile}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    }
};

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
    }
}
