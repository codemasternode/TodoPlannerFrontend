import { loginSuccess, loginFailed } from '../actions/login'
import { logoutSuccess } from '../actions/logout'

const defaultState = {
    authenticated: false
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case loginSuccess:
            return { ...state, authenticated: true, error: '' }
        case loginFailed:
            return { ...state, error: action.payload.response.data.message }
        case logoutSuccess:
            return { authenticated: false, error: '' }
        default:
            return state
    }
}