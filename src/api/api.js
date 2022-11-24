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
            .then(response => { return response.data })
    },
    getUserProfile(id, myProfile = 26803) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${id || myProfile}`)
            .then(response => { return response.data })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => { return response.data })
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => { return response.data })
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(response => { return response.data })
    }
}
