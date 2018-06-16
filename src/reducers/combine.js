import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import credReducer from './credReducer'
import overallData from './overallDataReducer'
import registerReducer from './registerReducer'
import dayTodos from './dayTodosReducer'
import monthTodos from './monthTodosReducer'
import longTodos from './longTodosReducer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    form: formReducer,
    loginResult: credReducer,
    user: overallData,
    register: registerReducer,
    dayTodos,
    monthTodos,
    longTodos,
    router: routerReducer
})

export default rootReducer;