import { types } from '../actions/dialogs-actions'

const host = process.env.REACT_APP_HOST

let initialState = {
    dialogUserData: [
        { id: 1, name: 'Vlawd', profilePicture: `${host}/cool-cat.jpg` },
        { id: 2, name: 'Ameowlinda', profilePicture: `${host}/soft-cat.jpg` },
        { id: 3, name: 'Dr. Whiskman', profilePicture: `${host}/doctor-cat.jpg` },
        { id: 4, name: 'Hissley', profilePicture: `${host}/teddy-bear-cat.jpg` },
        { id: 5, name: 'Hecker', profilePicture: `${host}/hecker-cat.jpg` },
    ],

    convosData: [
        {
            userId: 1,
            messages: [
                { id: 1, text: 'y1', senderId: 1 },
                { id: 2, text: 'm1', senderId: 0 },
                { id: 3, text: 'y2?', senderId: 1 },
                { id: 4, text: 'm2', senderId: 0 },
            ],
        },
        {
            userId: 2,
            messages: [
                { id: 1, text: 'y1', senderId: 1 },
                { id: 2, text: 'm1', senderId: 0 },
                { id: 3, text: 'y2', senderId: 1 },
                { id: 4, text: 'm2', senderId: 0 },
            ],
        },
        {
            userId: 3,
            messages: [{ id: 1, text: 'y1', senderId: 1 }],
        },
        {
            userId: 4,
            messages: [
                { id: 1, text: 'y1', senderId: 1 },
                { id: 2, text: 'm1', senderId: 0 },
            ],
        },
        {
            userId: 5,
            messages: [
                { id: 1, text: 'y1', senderId: 1 },
                { id: 2, text: 'm1', senderId: 0 },
                { id: 3, text: 'y1', senderId: 1 },
            ],
        },
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_MESSAGE:
            let newMessage = {
                id: 10,
                text: action.newMessageText,
                senderId: 0,
            }
            return {
                ...state,
                convosData: state.convosData.map((convo) => {
                    if (convo.userId === action.userId) {
                        return { ...convo, messages: [...convo.messages, newMessage] }
                    }
                    return convo
                }),
            }
        default:
            return state
    }
}

export default dialogsReducer
