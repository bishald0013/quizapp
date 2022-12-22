import { combineReducers, configureStore } from "@reduxjs/toolkit"
import  questionReducer  from "./questionReducer"
import  resultReducer  from "./resultReducer"

const rootReducer = combineReducers({
    questions: questionReducer,
    result: resultReducer

})

// create store 
export default configureStore({ reducer : rootReducer})