import axios from 'axios'

export const successFatchedDayTodos = 'success_Fetched_DayTodos'
export const failFatchedDayTodos = 'fail_Fetched_DayTodos'

export function successFetch(payload) {
    return {
        type: successFatchedDayTodos,
        payload
    }
}

export function failedFetch() {
    return {
        type: failFatchedDayTodos
    }
}

export function fetchDayTodos() {
    return (dispatch) => {
        axios('http://localhost:8080/allDayTodos', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'x-auth': localStorage.getItem('tokenAuth')
            }
        }).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
    }
}
