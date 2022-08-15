import { rerenderEntireTree } from "../render";

const state = {

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
                    { id: 1, text: "hey dude1", senderId: 1 },
                    { id: 2, text: "yo whatsup", senderId: 0 },
                    { id: 3, text: "wanna play elder scrolls tonight?", senderId: 1 },
                    { id: 4, text: "np", senderId: 0 }
                ]
            },
            {
                userId: 2, 
                messages: [
                    { id: 1, text: "hey dude2", senderId: 1 },
                    { id: 2, text: "yo whatsup", senderId: 0 },
                    { id: 3, text: "wanna play elder scrolls tonight?", senderId: 1 },
                    { id: 4, text: "np", senderId: 0 }
                ]
            },
            {
                userId: 3, 
                messages: [
                    { id: 1, text: "hey dude3", senderId: 1 },
                    { id: 2, text: "yo whatsup", senderId: 0 }
                ]
            },
            {
                userId: 4, 
                messages: [
                    { id: 1, text: "hey dude4", senderId: 1 }
                ]
            },
            {
                userId: 5, 
                messages: [
                    { id: 1, text: "hey dude5", senderId: 1 }
                ]
            },

        ]
    },

    profilePage: {
        postsData: [
            { id: 1, text: "Hello everyone on this platform!!", likeCount: "9" },
            { id: 2, text: "Whassup??", likeCount: "12" },
            { id: 3, text: "Hope you guys had a PURRfect weekend!", likeCount: "24" }
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
};

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likeCount: "0"
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;
