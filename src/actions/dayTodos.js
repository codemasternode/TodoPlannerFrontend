export const successFatchedDayTodos = 'success_Fetched_DayTodos'
export const failFatchedDayTodos = 'fail_Fetched_DayTodos'

export function success(payload) {
    return {
        type: successFatchedDayTodos,
        payload
    }
}

export function failed() {
    return {
        type: failFatchedDayTodos
    }
}

export default function fetchDayTodos() {
    return (dispatch) => {
        
    }
}
