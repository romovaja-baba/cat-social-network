export interface IMessage {
    id: number,
    text: string,
    senderId: number
}

export interface IUserConvo {
    userId: number,
    messages: IMessage[]
}