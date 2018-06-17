import axios from 'axios'
import { reset } from 'redux-form'

export const loginSuccess = 'login_success'
export const loginFailed = 'login_failed'

export function loginOnSuccess(payload) {
    return {
        type: loginSuccess,
        payload
    }
}
export function loginOnFailed(payload) {
    return {
        type: loginFailed,
        payload
    }
}

export default function loginUser(values, callback) {
    return (dispatch) => {
        axios.post('https://boiling-sands-54275.herokuapp.com/auth', values)
            .then((res) => {
                if (res.data.success) {
                    localStorage.setItem('tokenAuth', res.data.token)
                    dispatch(loginOnSuccess(res))
                    dispatch(reset('loginForm'))
                    callback()
                }
                else {
                    dispatch(loginOnFailed(res))
                    dispatch(reset('loginForm'))
                }
            }, err => {
                dispatch(loginOnFailed(err))
                dispatch(reset('loginForm'))
            })
    }
}