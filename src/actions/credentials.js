import axios from 'axios'
import { loginOnSuccess } from './login'

export const successFetchCredentials = 'success_fetch_credentials'
export const failedFetchCredentials = 'failed_fetch_credentials'


export function successFetchCred(payload) {
    return {
        type: successFetchCredentials,
        payload
    }
}

export function failedFetchCred() {
    return {
        type: failedFetchCredentials
    }
}

export default function fetchCredentials() {
    return (dispatch) => {
        if (localStorage.getItem('user_email') == undefined) {
            axios.get('https://boiling-sands-54275.herokuapp.com/verify/me', {
                headers: {
                    'x-auth': localStorage.getItem('tokenAuth')
                }
            }).then((response) => {
                dispatch(successFetchCred(response.data))
                localStorage.setItem('user_email', response.data.email)
                localStorage.setItem('user_name', response.data.name)
                localStorage.setItem('user_lastname', response.data.lastname)
            }).catch((error) => {
                dispatch(failedFetchCred())
            });
        } else {
            dispatch(successFetchCred({
                email: localStorage.getItem('user_email'),
                name: localStorage.getItem('user_name'),
                lastname: localStorage.getItem('user_lastname')
            }))
            dispatch(loginOnSuccess({ hi: 'hi' }))
        }

    }
}

