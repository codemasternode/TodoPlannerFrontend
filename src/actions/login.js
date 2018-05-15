import axios from 'axios'
import reduxThunk from 'redux-thunk'

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
        // axios(options).then((response) => {
        //     console.log(response)
        //     if (response.success == true) {
        //         callback()
        //         dispatch(loginSuccess(response))
        //     } else {
        //         dispatch(loginFailed(response))
        //     }
        // }).catch((e) => {
        //     dispatch(loginFailed(e))
        // })
        axios.post('http://localhost:8080/auth', values)
            .then((res) => {
                if (res.data.success) {
                    localStorage.setItem('tokenAuth', res.data.token)
                    dispatch(loginOnSuccess(res))
                    
                    callback()
                }
                else {
                    dispatch(loginOnFailed(res))
                }
            }).catch((e) => {
                dispatch(loginOnFailed(e))
            })
    }
}