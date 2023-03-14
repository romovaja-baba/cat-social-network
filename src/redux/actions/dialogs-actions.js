export const types = {
    SEND_MESSAGE: "app/dialogs/SEND_MESSAGE"
}

export const sendMessage = (userId, newMessageText) => ({ type: types.SEND_MESSAGE, userId, newMessageText });
