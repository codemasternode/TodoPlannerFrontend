import axios from 'axios'


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
    return (dispatch) => {
        axios.post('http://localhost:8080/users')
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