import { failedFetchCredentials, successFetchCredentials, successFetchCred } from '../actions/credentials'

export default function (state=null, action) {
    switch (action.type) {
        case successFetchCredentials:
            const { data } = action.payload
            var newState = {
                user_email: data.email,
                user_name: data.name,
                user_lastname: data.lastname
            }
            return newState
        case failedFetchCredentials:
            var newState = {
                error: 'Twoja sesja wygasła'
            }
            return newState
        default:
            return state;
    }
}