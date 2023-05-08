import { sendMessage } from '../redux/actions/dialogs-actions'
import dialogsReducer from '../redux/reducers/dialogs-reducer'

let state = {
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

test('sent message', () => {
    let newState = dialogsReducer(state, sendMessage(1, 'message'))
    expect(newState.convosData.find((i) => i.userId === 1).messages).toHaveLength(5)
})
