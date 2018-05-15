export const logoutSuccess = 'logout_success'
export const logoutFailed = 'logout_failed'


export function logoutOnSuccess() {
    return {
        type:  logoutSuccess
    }
}

export function logoutOnFailed() {
    return {
        type: logoutFailed
    }
}

export default function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem('access_token')
        dispatch(logout_success())
    }
}