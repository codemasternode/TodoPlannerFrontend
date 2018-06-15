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