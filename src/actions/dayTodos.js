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

export function fetchDayTodos(nowTime, addTime, callback) {
    return (dispatch) => {
        axios('http://localhost:8080/allDayTodos', {
            method: 'GET',
            headers: {
                'x-auth': localStorage.getItem('tokenAuth')
            }
        }).then((res) => {
            console.log(res.data)
            const filteredData = callback(res.data)
            dispatch(successFetch(filteredData))
        }).catch((e) => {
            dispatch(failedFetch())
        })
    }
}
