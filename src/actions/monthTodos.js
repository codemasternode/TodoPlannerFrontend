import axios from 'axios'

export const successFatchedMonthTodos = 'success_Fetched_MonthTodos'
export const failFatchedMonthTodos = 'fail_Fetched_MonthTodos'

export function successFetch(months) {
    return {
        type: successFatchedMonthTodos,
        months
    }
}

export function failedFetch() {
    return {
        type: failFatchedMonthTodos
    }
}

export function fetchMonthTodos() {
    return (dispatch) => {
        axios('http://localhost:8080/allMonthTodos', {
            method: 'GET',
            headers: {
                'x-auth': localStorage.getItem('tokenAuth')
            }
        }).then((res) => {
            dispatch(successFetch(res.data))
        }).catch((e) => {
            dispatch(failedFetch())
        })
    }
}