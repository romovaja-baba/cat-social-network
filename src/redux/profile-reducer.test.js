import profileReducer, { setStatus } from "./profile-reducer";
import { addPost, deletePost } from "./profile-reducer";

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
    let action = addPost("new post");
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4);
});

test("adequate new post text", () => {
    let action = addPost("new post");
    let newState = profileReducer(state, action);
    expect(newState.postsData[3].text).toBe("new post");
});

test("decremented length of posts after deleting", () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
});

test("length of posts stayed the same", () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toStrictEqual(state.postsData.length);
});

test("changed status", () => {
    let action = setStatus("new status");
    let newState = profileReducer(state, action);
    expect(newState.status).not.toBe(state.status);
});

test("adequate status", () => {
    let action = setStatus("new post");
    let newState = profileReducer(state, action);
    expect(newState.status).toBeTruthy();
})