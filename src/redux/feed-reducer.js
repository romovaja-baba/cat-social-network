let initialState = {
    newsData: [
        { id: 1, title: "title 1", text: "news number 1", likeCount: "230" },
        { id: 2, title: "title 2", text: "news number 2", likeCount: "433" },
        { id: 3, title: "title 3", text: "news number 3", likeCount: "44" },
        { id: 4, title: "title 4", text: "news number 4", likeCount: "3133" },
        { id: 5, title: "title 5", text: "news number 5", likeCount: "319" },
        { id: 6, title: "title 6", text: "news number 6", likeCount: "190" }
    ]
};

const feedReducer = (state = initialState, action) => {

    return state
};

export default feedReducer;