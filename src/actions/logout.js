export const logout_success = 'logout_success'
export const logout_failed = 'logout_failed'


export function logoutOnSuccess() {
    return {
        type: logout_success
    }
}

export function logoutOnFailed() {
    return {
        type: logout_failed
    }
}

export default function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem('access_token')
        dispatch(logout_success())
    }
}