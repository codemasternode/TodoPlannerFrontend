import { failed_register, successRegister, success_register } from '../actions/register'

export default function (state= {}, action) {
    switch (action.type) {
        case success_register:
            return action.payload
        case failed_register:
            return action.payload
        default:
            return state
    }
}