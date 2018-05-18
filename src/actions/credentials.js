import axios from 'axios'

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
    const options = {
        method: 'GET',
        url: 'http://localhost:8080/verify/me',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-auth': localStorage.getItem('tokenAuth')
        },
        json: true
    }
    return (dispatch) => {
        try {
            axios.get(options).then((res) => {
                dispatch(successFetchCred(res))
            }).catch((e) => {
                dispatch(failedFetchCred())
            })
        } catch (e) {
            dispatch(failedFetchCred())
        }

    }
}

