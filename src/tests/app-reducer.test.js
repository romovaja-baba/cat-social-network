import { initialize } from "../redux/actions/app-actions";
import appReducer from "../redux/reducers/app-reducer";

let state = {
    initialization: false
};

test("initialization success", () => {
    let newState = appReducer(state, initialize());
    expect(newState.initialization).toBe(true);
});