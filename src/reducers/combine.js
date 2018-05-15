import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import credReducer from './credReducer'

const rootReducer = combineReducers({
    form: formReducer,
    loginResult: credReducer
})

export default rootReducer;