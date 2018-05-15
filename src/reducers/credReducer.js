import { loginSuccess, loginFailed } from '../actions/login'

const defaultState = {
    authenticated: false
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case loginSuccess:
            return { ...state, authenticated: true }
        case loginFailed:
            return { ...state, error: action.payload.response.data.message }
        default:
            return state
    }
}