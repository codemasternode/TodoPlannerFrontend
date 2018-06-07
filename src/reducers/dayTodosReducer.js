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
            console.log(todo)
            return {
                ...state, todo
            }
        case removeSuccess:
            console.log(state)
            const newState = _.filter(state.data, (ele) => {
                return ele._id != action.payload
            })
            console.log(newState)
            return newState
        default:
            return state
    }
}