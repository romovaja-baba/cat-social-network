import store from './redux/redux-store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <Provider store={store}>
        <BrowserRouter basename='/'>
            <App />
        </BrowserRouter>
    </Provider>
)
