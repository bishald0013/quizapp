import * as Action from "../redux/resultReducer"
import { postServerData } from "../ResultCount/countResult"

export const pushAnswer = (result) => async (dispatch) =>  {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResult = (index, checked) => async(dispatch) =>  {
    try {
        dispatch(Action.updateResultAction(index))
    } catch (error) {
        console.log(error)
    }
}

export const userResult = (resultData) => {
    const { result, username } = resultData
    (async () => {
       try {
        if(result !== [] && !username){
            throw new Error("Result not found")
        }else{
            await postServerData("https://localhost:9000/api/result", resultData, data => data)
        }
       } catch (error) {
            console.log(error)
       }
    })()

}