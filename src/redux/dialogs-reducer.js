const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogUserData: [
        { id: 1, name: "Vlawd", profilePicture: "http://localhost:3000/cool-cat.jpg" },
        { id: 2, name: "Ameowlinda", profilePicture: "http://localhost:3000/soft-cat.jpg" },
        { id: 3, name: "Dr. Whiskman", profilePicture: "http://localhost:3000/doctor-cat.jpg" },
        { id: 4, name: "Hissley", profilePicture: "http://localhost:3000/teddy-bear-cat.jpg" },
        { id: 5, name: "Hecker", profilePicture: "http://localhost:3000/hecker-cat.jpg" }
    ],

    convosData: [
        {
            userId: 1,
            messages: [
                { id: 1, text: "y1", senderId: 1 },
                { id: 2, text: "m1", senderId: 0 },
                { id: 3, text: "y2?", senderId: 1 },
                { id: 4, text: "m2", senderId: 0 }
            ]
        },
        {
            userId: 2,
            messages: [
                { id: 1, text: "y1", senderId: 1 },
                { id: 2, text: "m1", senderId: 0 },
                { id: 3, text: "y2", senderId: 1 },
                { id: 4, text: "m2", senderId: 0 }
            ]
        },
        {
            userId: 3,
            messages: [
                { id: 1, text: "y1", senderId: 1 },
            ]
        },
        {
            userId: 4,
            messages: [
                { id: 1, text: "y1", senderId: 1 },
                { id: 2, text: "m1", senderId: 0 }
            ]
        },
        {
            userId: 5,
            messages: [
                { id: 1, text: "y1", senderId: 1 },
                { id: 2, text: "m1", senderId: 0 },
                { id: 3, text: "y1", senderId: 1 }
            ]
        },

    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 10,
                text: state.newMessageText,
                senderId: 0
            };
            if (newMessage.text) {
                return {
                    ...state,
                    convosData: state.convosData.map((convo) => {
                        if (convo.userId === action.userId) {
                            return { ...convo, messages: [...convo.messages, newMessage] };
                        }
                        return convo;
                    }),
                    newMessageText: ''
                };
            } else {
                alert('Please type a message!')
            };
            break;

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    };
};

export const sendMessageActionCreator = (userId) => ({ type: SEND_MESSAGE, userId: userId });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;