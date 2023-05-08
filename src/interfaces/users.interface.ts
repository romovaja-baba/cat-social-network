export interface IUser {
    name: string
    id: number
    uniqueUrlName: string
    photos: { small: string; large: string }
    status: string
    followed: boolean
}

export interface IUsersToApi {
    currentPage: number
    pageSize: number
}
