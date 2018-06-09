import axios from 'axios'

export const successFatchedMonthTodos = 'success_Fetched_MonthTodos'
export const failFatchedMonthTodos = 'fail_Fetched_MonthTodos'
export const successDeleteMonthTodo = 'success_Delete_MonthTodo'

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

export function successDelete(id) {
    return {
        type: successDeleteMonthTodo,
        id
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

export function deleteMonthTodo(id) {
    return (dispatch) => {
        axios(`http://localhost:8080/deleteMonthTodo/${id}`, {
            method: 'DELETE',
            headers: {
                'x-auth': localStorage.getItem('tokenAuth')
            }
        }).then((res) => {
            dispatch(successDelete(id))
        })
    }
}

export function addMonthTodo(values) {
    return (dispatch) => {
        axios('http://localhost:8080/newMonthTodo', {
            method: 'POST',
            headers: {
                'x-auth': localStorage.getItem('tokenAuth')
            }
        })
    }
}