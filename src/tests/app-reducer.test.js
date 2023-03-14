import { initializationSuccess } from "../redux/actions/app-actions";
import appReducer from "../redux/reducers/app-reducer";

let state = {
    initialization: false
};

test("initialization success", () => {
    let newState = appReducer(state, initializationSuccess());
    expect(newState.initialization).toBe(true);
});