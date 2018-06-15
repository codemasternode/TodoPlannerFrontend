import { TodosConsts } from '../consts'
import { longTodosService } from '../services'


export function fetchLongTodos() {
    function success(payload) {
        return {
            type: TodosConsts.LONG_FETCH_SUCCESS,
            payload
        }
    }
    function failed() {
        return {
            type: TodosConsts.LONG_FETCH_FAILED
        }
    }

    return (dispatch) => {
        longTodosService.fetch().then(
            todos => {
                dispatch(success(todos.data))
            },
            error => {
                dispatch(failed())
            })
    }
}


export function updateLongTodo(values) {
    console.log(values)
    function success(payload) {
        return {
            type: TodosConsts.LONG_POST_SUCCESS,
            payload
        }
    }

    function failed() {
        return {
            type: TodosConsts.LONG_POST_FAILED
        }
    }

    return (dispatch) => {
        longTodosService.update(values)
            .then((ok) => {
                console.log(ok)
                dispatch(success())
            }, (err) => {
                dispatch(failed())
            })
    }
}