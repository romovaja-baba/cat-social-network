let initialState = {
    friendsData: [
        { id: 1, name: 'Vlawd', profilePicture: 'http://localhost:3000/cool-cat.jpg' },
        { id: 2, name: 'Ameowlinda', profilePicture: 'http://localhost:3000/soft-cat.jpg' },
        { id: 3, name: 'Dr. Whiskman', profilePicture: 'http://localhost:3000/doctor-cat.jpg' },
    ],
}

const sideBarReducer = (state = initialState, action) => {
    return state
}

export default sideBarReducer
