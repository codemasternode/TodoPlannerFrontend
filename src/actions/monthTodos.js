import axios from 'axios'

export const successFatchedMonthTodos = 'success_Fetched_MonthTodos'
export const failFatchedMonthTodos = 'fail_Fetched_MonthTodos'
export const successDeleteMonthTodo = 'success_Delete_MonthTodo'
export const successAddMonthTodo = 'success_Add_MonthTodo'

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

export function successAdd(todo) {
    return {
        type: successAddMonthTodo,
        todo
    }
}


export function fetchMonthTodos() {
    return (dispatch) => {
        axios('https://boiling-sands-54275.herokuapp.com/allMonthTodos', {
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
        axios(`https://boiling-sands-54275.herokuapp.com/deleteMonthTodo/${id}`, {
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
    console.log(values)
    return (dispatch) => {
        axios('https://boiling-sands-54275.herokuapp.com/newMonthTodo', {
            method: 'POST',
            data: values,
            headers: {
                'x-auth': localStorage.getItem('tokenAuth')
            }
        }).then((res) => {
            dispatch(successAdd(values))
        })
    }
}