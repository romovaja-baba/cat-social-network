import usersReducer, { follow, setCurrentPage, setFetching, setTotalUserCount, setUsers, unfollow } from "../redux/users-reducer";

let state = {
    usersData: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
};

test("correct users data", () => {
    let newState = usersReducer(state, setUsers([{id: 1, name: "user", followed: false}]));
    expect(newState.usersData).toHaveLength(1);
});

test("correct page of users", () => {
    let newState = usersReducer(state, setCurrentPage(2));
    expect(newState.currentPage).toBe(2);
});

test("correct number of total user count", () => {
    let newState = usersReducer(state, setTotalUserCount(100));
    expect(newState.totalUserCount).toBe(100);
});

test("fetching status changed", () => {
    let newState = usersReducer(state, setFetching(true));
    expect(newState.isFetching).toBe(true);
})

test("followed status changed to true", () => {
    let newStateWithUsers = usersReducer(state, setUsers([{id: 1, name: "user", followed: false}]));
    let newState = usersReducer(newStateWithUsers, follow(1))
    expect(newState.usersData.find(i => i.id === 1).followed).toBe(true);
});

test("followed status changed to false", () => {
    let newStateWithUsers = usersReducer(state, setUsers([{id: 1, name: "user", followed: true}]));
    let newState = usersReducer(newStateWithUsers, unfollow(1))
    expect(newState.usersData.find(i => i.id === 1).followed).toBe(false);
});