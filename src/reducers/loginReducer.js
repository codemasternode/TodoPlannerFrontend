import { success, failed } from '../actions/login'

const defaultState = {
    authenticated: false
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case success:
            return { ...state, authenticated: true }
        case failed:
            return { ...state, error: action.payload.data.message }
        default:
            return state
    }
}