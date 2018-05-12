import { success, failed } from '../actions/login'

export default function (state, action) {
    switch (action.type) {
        case success:
            console.log(action.payload)
            newState = action.response
            state = newState
            return state
        case failed:
            console.log(action.payload)
            return action.response
        default:
            return state
    }
}