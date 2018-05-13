import axios from 'axios'
import reduxThunk from 'redux-thunk'

export const success = 'login_success'
export const failed = 'login_failed'

function loginSuccess(payload) {
    return {
        type: success,
        payload
    }
}
function loginFailed(payload) {
    return {
        type: failed,
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
                
                if (res.data.success == true) {
                    localStorage.setItem('tokenAuth', res.data.token)
                    dispatch(loginSuccess(res))
                    callback()
                }
                else {
                    dispatch(loginFailed(res))
                }
            }).catch((e) => {
                console.log(e)
            })
    }
}