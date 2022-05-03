const state = {

    dialogsPage: {
        dialogUserData: [
            { id: 1, name: "Vlawd" },
            { id: 2, name: "Ameowlinda" },
            { id: 3, name: "Dr. Pawbert Whiskman" },
            { id: 4, name: "Hissley" },
            { id: 5, name: "Hecker" }
        ],
        messagesData: [
            { id: 1, text: "hey dude" },
            { id: 2, text: "yo whatsup" },
            { id: 3, text: "wanna play elder scrolls tonight?" },
            { id: 4, text: "np" }
        ]
    },

    profilePage: {
        postsData: [
            { id: 1, text: "Hello everyone on this platform!!", likeCount: "9", date: Date("06/22/2022") },
            { id: 2, text: "Whassup??", likeCount: "12", date: Date("07/02/2022") },
            { id: 3, text: "Hope you guys had a PURRfect weekend!", likeCount: "24", date: Date("18/02/2022") }
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
    }
};

export default state;

