import { successFatchedDayTodos, failFatchedDayTodos, removeSuccess, addTodo } from '../actions/dayTodos'
import _ from 'lodash'

export default function (state = {}, action) {
    switch (action.type) {
        case successFatchedDayTodos:
            return {
                data: action.payload
            }
        case failFatchedDayTodos:
            return state
        case addTodo:
            const { todo } = action
            state.data.push(todo)
            return state
        case removeSuccess:

            let newState = _.filter(state.data, (ele) => {
                return ele._id != action.payload
            })
            return newState
        default:
            return state
    }
}