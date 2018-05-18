import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import credReducer from './credReducer'
import overallData from './overallDataReducer'

const rootReducer = combineReducers({
    form: formReducer,
    loginResult: credReducer,
    user: overallData
})

export default rootReducer;