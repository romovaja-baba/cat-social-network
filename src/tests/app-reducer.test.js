import { initialize } from '../redux/actions/app-actions'
import appReducer from '../redux/reducers/app-reducer'

let state = {
    isInitFinished: false,
}

test('initialization success', () => {
    let newState = appReducer(state, initialize())
    expect(newState.isInitFinished).toBe(true)
})
