const state = {

    dialogsPage: {
        dialogUserData: [
            { id: 1, name: "Vlawd", profilePicture: "http://localhost:3000/cool-cat.jpg" },
            { id: 2, name: "Ameowlinda", profilePicture: "http://localhost:3000/soft-cat.jpg"},
            { id: 3, name: "Dr. Pawbert Whiskman", profilePicture: "http://localhost:3000/doctor-cat.jpg"},
            { id: 4, name: "Hissley", profilePicture: "http://localhost:3000/teddy-bear-cat.jpg"},
            { id: 5, name: "Hecker", profilePicture: "http://localhost:3000/hecker-cat.jpg"}
        ],
        messagesData: [
            { id: 1, text: "hey dude", senderId: 1 },
            { id: 2, text: "yo whatsup", senderId: 0 },
            { id: 3, text: "wanna play elder scrolls tonight?", senderId: 1 },
            { id: 4, text: "np", senderId: 0 }
        ]
    },

    profilePage: {
        postsData: [
            { id: 1, text: "Hello everyone on this platform!!", likeCount: "9", date: "06/22/2022" },
            { id: 2, text: "Whassup??", likeCount: "12", date: "07/02/2022" },
            { id: 3, text: "Hope you guys had a PURRfect weekend!", likeCount: "24", date: "18/02/2022" }
        ]
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
            { id: 2, name: "Ameowlinda", profilePicture: "http://localhost:3000/soft-cat.jpg"},
            { id: 3, name: "Dr. Pawbert Whiskman", profilePicture: "http://localhost:3000/doctor-cat.jpg"}
        ]
    }
};

export default state;

