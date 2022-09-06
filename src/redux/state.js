const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const store = {

    _state: {
        dialogsPage: {
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
        },

        profilePage: {
            postsData: [
                { id: 1, text: "Hello everyone on this platform!!", user: "Catmond Purrvic", likeCount: "9" },
                { id: 2, text: "Whassup??", user: "Catmond Purrvic", likeCount: "12" },
                { id: 3, text: "Hope you guys had a PURRfect weekend!", user: "Catmond Purrvic", likeCount: "24" }
            ],
            newPostText: ''
        },

        feedPage: {
            newsData: [
                { id: 1, title: "title 1", text: "news number 1", likeCount: "230" },
                { id: 2, title: "title 2", text: "news number 2", likeCount: "433" },
                { id: 3, title: "title 3", text: "news number 3", likeCount: "44" },
                { id: 4, title: "title 4", text: "news number 4", likeCount: "3133" },
                { id: 5, title: "title 5", text: "news number 5", likeCount: "319" },
                { id: 6, title: "title 6", text: "news number 6", likeCount: "190" }
            ]
        },

        sideBarPage: {
            friendsData: [
                { id: 1, name: "Vlawd", profilePicture: "http://localhost:3000/cool-cat.jpg" },
                { id: 2, name: "Ameowlinda", profilePicture: "http://localhost:3000/soft-cat.jpg" },
                { id: 3, name: "Dr. Whiskman", profilePicture: "http://localhost:3000/doctor-cat.jpg" }
            ]
        }

    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() { },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 10,
                text: this._state.dialogsPage.newMessageText,
                senderId: 0
            };
            if (newMessage.text) {
                this._state.dialogsPage.convosData.find(convo => convo.userId === action.userId).messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
            } else {
                alert('Please type a message!')
            };
            store.rerenderEntireTree(store);
        } 
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
        }
        else if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                likeCount: "0",
                user: "Catmond Purrvic"
            };
            if (newPost.text) {
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = '';
            } else {
                alert('Post cannot be empty!')
            };
            store.rerenderEntireTree(store);
        } 
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
        }
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const sendMessageActionCreator = (userId) => ({ type: SEND_MESSAGE, userId: userId });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default store;
window.store = store;