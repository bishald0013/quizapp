import {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import * as Action from "../redux/questionReducer"
import { getServerData } from "../ResultCount/countResult.js"


//fetch question hook to fetch api data ans det value to store
export const useFetchQuestion = () => {

    const dispatch = useDispatch()
    const [getData, setGetData] = useState({
        isLoading: false,
        apiData: [],
        serverError: null
   })

   useEffect(() => {
        setGetData(prev => ({...prev, isLoading: true}));
        //async function to fetch data
        (async () => {
            try {
                // let question = await data
                const [{question, answer}] = await getServerData("https://localhost:9000/api/question")
                console.log({answer, question})

                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoading: false}))
                    setGetData(prev => ({...prev, apiData: question }))
                    
                    dispatch(Action.startExamAction({question : question, answer}))
                }else{
                    throw new Error("No question available")
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading: false}))
                setGetData(prev => ({...prev, serverError: error}))
            }
        })();
   }, [dispatch]);

   return [getData, setGetData];

}

export const NextAction = () => async (dispatch) => {
    try {
        dispatch(Action.nextAction())
    } catch (error) {
        console.log(error)
    }
}

export const PrevAction = () => async (dispatch) => {
    try {
        dispatch(Action.prevAction())
    } catch (error) {
        console.log(error)
    }
}