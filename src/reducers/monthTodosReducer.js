import { failFatchedMonthTodos, successFatchedMonthTodos, successDeleteMonthTodo } from '../actions/monthTodos'
import _ from 'lodash'


export default function (state = {}, action) {
    switch (action.type) {
        case successFatchedMonthTodos:
            console.log(action)
            return action.months
        case failFatchedMonthTodos:
            return state
        case successDeleteMonthTodo:
            return _.filter(state.months, (value) => {
                return value._id != action.id
            })
        default:
            return state
    }
}