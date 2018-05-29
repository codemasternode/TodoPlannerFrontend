import { successFatchedDayTodos, failFatchedDayTodos } from '../actions/dayTodos'

export default function (state = {}, action) {
    switch (action.type) {
        case successFatchedDayTodos:
            return {
                data: action.payload
            }
        case failFatchedDayTodos:
            return state
        default:
            return state
    }
}