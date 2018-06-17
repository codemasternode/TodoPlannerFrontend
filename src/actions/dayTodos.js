import axios from 'axios'
import { logoutOnSuccess } from './logout'
import history from '../components/helpers/history'
import { push } from 'react-router-redux'


export const successFatchedDayTodos = 'success_Fetched_DayTodos'
export const failFatchedDayTodos = 'fail_Fetched_DayTodos'
export const removeSuccess = 'remove_Day_Todo_Success'
export const removeFail = 'remove_Day_Todo_Fail'
export const addTodo = 'add_Todo_success'
export const failAddTodo = 'add_Todo_fail'

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

export function removeDayTodoSuccess(id) {
    return {
        type: removeSuccess,
        payload: id
    }
}

export function removeDayTodoFail() {
    return {
        type: removeFail
    }
}

export function successAddTodo(todo) {
    return {
        type: addTodo,
        todo
    }
}

export function failedAddTodo() {
    return {
        type: failAddTodo
    }
}


export function deleteDayTodo(_id) {
    return (dispatch) => {
        axios(`https://boiling-sands-54275.herokuapp.com/deleteDayTodo/${_id}`, {
            method: 'DELETE',
            headers: {
                'x-auth': localStorage.getItem('tokenAuth')
            }
        }).then((res) => {
            dispatch(removeDayTodoSuccess(_id))
        }).catch((e) => {
            history.push('/')
        })
    }
}

export function fetchDayTodos(nowTime, addTime, callback, rej) {
    return (dispatch) => {
        axios('https://boiling-sands-54275.herokuapp.com/allDayTodos', {
            method: 'GET',
            headers: {
                'x-auth': localStorage.getItem('tokenAuth')
            }
        }).then((res) => {
            const filteredData = callback(res.data)
            dispatch(successFetch(filteredData))
        }).catch((e) => {
            dispatch(push('/dashboard'))
        })
    }
}

export function addDayTodo(todo) {
    return (dispatch) => {
        axios('https://boiling-sands-54275.herokuapp.com/newDayTodo', {
            method: 'POST',
            headers: {
                'x-auth': localStorage.getItem('tokenAuth')
            },
            data: todo
        }).then((res) => {
            dispatch(successAddTodo(todo))
        }).catch((e) => {
            history.push('/dashboard')
        })
    }
}
