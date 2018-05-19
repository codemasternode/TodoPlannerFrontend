import { successFetchCredentials, failedFetchCredentials } from '../actions/credentials'

export default function (state = {}, action) {
    switch (action.type) {
        case successFetchCredentials:
            var { email, name, lastname } = action.payload
            var newState = {
                email,
                name,
                lastname
            }
            return newState;
        case failedFetchCredentials:
            var newState = {
                error: 'Twoja sesja wygasła'
            }
            return newState
        default:
            return state;
    }
}