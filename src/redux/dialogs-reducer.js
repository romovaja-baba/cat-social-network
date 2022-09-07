const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {

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