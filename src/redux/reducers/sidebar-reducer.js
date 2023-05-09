const host = process.env.REACT_APP_HOST

let initialState = {
    friendsData: [
        { id: 1, name: 'Vlawd', profilePicture: `${host}/cool-cat.jpg` },
        { id: 2, name: 'Ameowlinda', profilePicture: `${host}/soft-cat.jpg` },
        { id: 3, name: 'Dr. Whiskman', profilePicture: `${host}/doctor-cat.jpg` },
    ],
}

const sideBarReducer = (state = initialState, action) => {
    return state
}

export default sideBarReducer
