import { failFatchedMonthTodos, successFatchedMonthTodos } from '../actions/monthTodos'


export default function (state = {}, action) {
    switch (action.type) {
        case successFatchedMonthTodos:
            console.log(action)
            return state
        case failFatchedMonthTodos:
            return state
        default:
            return state
    }
}