import axios from 'axios'

export const success = 'login_success'
export const failed = 'login_failed'

export function loginSuccess(respone) {
    return {
        type: success,
        respone
    }
}

export function loginFailed(respone) {
    return {
        type: failed,
        respone
    }
}

export function postLoginParameters(email, password) {
    return (dispatch) => {
        axios.post('localhost:8080', { email, password })
            .then((response) => {
                if (response.status == 400 || response.success == false) {
                    dispatch(loginFailed(response))
                } else {
                    dispatch(loginSuccess(response))
                }
            }).catch((response) => {
                dispatch(loginFailed(response))
            })
    }
}