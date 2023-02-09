import profileReducer, { setStatus, addPost, deletePost } from "../redux/profile-reducer";

let state = {
    profile: null,
    status: '',
    postsData: [
        { id: 1, text: "Hello everyone on this platform!!", user: "Catmond Purrvic", likeCount: "9" },
        { id: 2, text: "Whassup??", user: "Catmond Purrvic", likeCount: "12" },
        { id: 3, text: "Hope you guys had a PURRfect weekend!", user: "Catmond Purrvic", likeCount: "24" }
    ]
};

test('incremented length of posts after adding', () => {
    let newState = profileReducer(state, addPost("new post"));
    expect(newState.postsData).toHaveLength(4);
});

test("adequate new post text", () => {
    let newState = profileReducer(state, addPost("new post"));
    expect(newState.postsData[3].text).toBe("new post");
});

test("decremented length of posts after deleting", () => {
    let newState = profileReducer(state, deletePost(1));
    expect(newState.postsData).toHaveLength(2);
});

test("length of posts stayed the same", () => {
    let newState = profileReducer(state, deletePost(1000));
    expect(newState.postsData.length).toStrictEqual(state.postsData.length);
});

test("changed status", () => {
    let newState = profileReducer(state, setStatus("new status"));
    expect(newState.status).not.toBe(state.status);
});

test("adequate status", () => {
    let newState = profileReducer(state, setStatus("new post"));
    expect(newState.status).toBe("new post");
});