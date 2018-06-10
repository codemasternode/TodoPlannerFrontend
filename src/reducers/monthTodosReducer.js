import { failFatchedMonthTodos, successFatchedMonthTodos, successDeleteMonthTodo, successAddMonthTodo } from '../actions/monthTodos'
import _ from 'lodash'


export default function (state = {}, action) {
    switch (action.type) {
        case successFatchedMonthTodos:
            return action.months
        case successAddMonthTodo:
            return state.concat(action.todo)
        case failFatchedMonthTodos:
            return state
        case successDeleteMonthTodo:
            return _.filter(state, (value) => {
                return value._id != action.id
            })
        default:
            return state
    }
}