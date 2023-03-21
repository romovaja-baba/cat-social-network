export interface IProfile {
    userId: number,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: IContacts,
    photos: { small: string, large: string },
}

export interface IContacts {
    [key: string]: string
}