export const logoutSuccess = 'logout_success'
export const logoutFailed = 'logout_failed'


export function logoutOnSuccess() {
    return {
        type: logoutSuccess
    }
}

export function logoutOnFailed() {
    return {
        type: logoutFailed
    }
}

export default function logoutUser(callback) {
    return (dispatch) => {
        localStorage.clear()
        dispatch(logoutOnSuccess())
        callback()
    }
}