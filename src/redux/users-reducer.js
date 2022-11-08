let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";

let initialState = {
    usersData: [
    //     {id: 1, followed: true, name: "Natasha", profilePicture: "http://localhost:3000/nevdupljonysz.jpg", status: "hey there", location: {city: "New York", country: "USA"}},
    //     {id: 2, followed: true, name: "Abdul", profilePicture: "http://localhost:3000/nevdupljonysz.jpg", status: "i am looking for a job", location: {city: "Manila", country: "The Philippines"}},
    //     {id: 3, followed: false, name: "Gata", profilePicture: "http://localhost:3000/nevdupljonysz.jpg", status: "hey there", location: {city: "Daegu", country: "South Korea"}},
    //     {id: 4, followed: true, name: "Andrew", profilePicture: "http://localhost:3000/nevdupljonysz.jpg", status: "pls find me", location: {city: "Oxford", country: "UK"}},
    //     {id: 5, followed: false, name: "Lisa", profilePicture: "http://localhost:3000/nevdupljonysz.jpg", status: "hey there", location: {city: "Dublin", country: "Ireland"}},
    //     {id: 6, followed: false, name: "Sara", profilePicture: "http://localhost:3000/nevdupljonysz.jpg", status: "i am lonely", location: {city: "Tokyo", country: "Japan"}},
    //     {id: 7, followed: true, name: "Kuma", profilePicture: "http://localhost:3000/nevdupljonysz.jpg", status: "i am kuma", location: {city: "Fukuoka", country: "Japan"}}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state, 
                usersData: [...state.usersData, ...action.users]
            }
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return { ...user }
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return { ...user }
                })
            }
        default: return state
    }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })

export default usersReducer;