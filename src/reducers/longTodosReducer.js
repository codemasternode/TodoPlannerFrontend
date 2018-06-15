import { TodosConsts } from '../consts'

export default function (state = {}, action) {
    switch (action.type) {
        case TodosConsts.LONG_FETCH_SUCCESS:
            return action.payload
        case TodosConsts.LONG_FETCH_FAILED:
            return state
        default:
            return state
    }
}