import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import credReducer from './credReducer'
import overallData from './overallDataReducer'
import registerReducer from './registerReducer'
import dayTodos from './dayTodosReducer'

const rootReducer = combineReducers({
    form: formReducer,
    loginResult: credReducer,
    user: overallData,
    register: registerReducer,
    dayTodos
})

export default rootReducer;