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
                { id: 1, text: "hey dude", senderId: 1 },
                { id: 2, text: "yo whatsup", senderId: 0 },
                { id: 3, text: "wanna play elder scrolls tonight?", senderId: 1 },
                { id: 4, text: "np", senderId: 0 }
            ]
        },
        {
            userId: 2,
            messages: [
                { id: 1, text: "hiii how u like to eat out tonight?", senderId: 1 },
                { id: 2, text: "ofc!!", senderId: 0 },
                { id: 3, text: "you treat me to dinner then ;)", senderId: 1 },
                { id: 4, text: "...", senderId: 0 }
            ]
        },
        {
            userId: 3,
            messages: [
                { id: 1, text: "dont call me, im busy", senderId: 1 },
            ]
        },
        {
            userId: 4,
            messages: [
                { id: 1, text: "heeey rmbr me?~~~", senderId: 1 }
            ]
        },
        {
            userId: 5,
            messages: [
                { id: 1, text: "i know your password, now send me 1ml rupees or i leak all ur photos", senderId: 1 },
                { id: 2, text: "ooh nice i forgot it long ago", senderId: 0 },
                { id: 3, text: "get help", senderId: 1 }
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
                state.convosData.find(convo => convo.userId === action.userId).messages.push(newMessage);
                state.newMessageText = '';
            } else {
                alert('Please type a message!')
            };
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    };
};

export const sendMessageActionCreator = (userId) => ({ type: SEND_MESSAGE, userId: userId });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;