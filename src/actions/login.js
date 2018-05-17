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
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        data: values,
        url: 'http://localhost:8080/auth'
    }
    return (dispatch) => {
        axios.post('http://localhost:8080/auth', values)
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
            }).catch((e) => {
                dispatch(loginOnFailed(e))
                dispatch(reset('loginForm'))
            })
    }
}