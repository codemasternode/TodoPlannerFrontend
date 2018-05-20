import axios from 'axios'
import _ from 'lodash'



export const success_register = 'success_register'
export const failed_register = 'failed_register'


export function successRegister(payload) {
    return {
        type: success_register,
        payload
    }
}

export function failedRegister(payload) {
    return {
        type: failed_register,
        payload
    }
}

export default function registerUser(data, callback) {
    console.log(data)
    return (dispatch) => {
        axios.post('http://localhost:8080/users', _.pick(data, ['email', 'password', 'name', 'lastname']))
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    dispatch(successRegister(res.data))
                    callback()
                } else {
                    dispatch(failedRegister(res.data))
                }
            })
    }
}