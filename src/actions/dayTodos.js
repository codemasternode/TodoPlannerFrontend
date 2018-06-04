import axios from 'axios'

export const successFatchedDayTodos = 'success_Fetched_DayTodos'
export const failFatchedDayTodos = 'fail_Fetched_DayTodos'
export const removeSuccess = 'remove_Day_Todo_Success'
export const removeFail = 'remove_Day_Todo_Fail'

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
export function deleteDayTodo(_id) {
    return (dispatch) => {
        axios(`http://localhost:8080/deleteDayTodo/${_id}`, {
            method: 'DELETE',
            headers: {
                'x-auth': localStorage.getItem('tokenAuth')
            }
        }).then((res) => {
            dispatch(removeDayTodoSuccess(_id))
        }).catch((e) => {
            console.log(e)
        })
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
