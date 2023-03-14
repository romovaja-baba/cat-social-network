import appReducer from "../redux/app-reducer";

let state = {
    initialization: false
};

test("initialization success", () => {
    let newState = appReducer(state, initializationSuccess());
    expect(newState.initialization).toBe(true);
});