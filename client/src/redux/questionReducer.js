import { createSlice } from "@reduxjs/toolkit"

//create reducer
export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answer: [],
        trace : 0
    },

    reducers : {
        startExamAction : (state, action) => {

            let {question, answer} = action.payload
            return {
                ...state,
                queue : question,
                answer : answer
            }
        },
        nextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        prevAction : (state) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        },
        resatAllAction : () => {
            return {
                queue: [],
                answer: [],
                trace : 0
            }
        }
    }
})

export const { startExamAction, nextAction, prevAction, resatAllAction } = questionReducer.actions

export default questionReducer.reducer