import { combineReducers } from 'redux'
import { notesReducer } from './note'

const rootReduser = combineReducers({
    note: notesReducer
}) 

export default rootReduser