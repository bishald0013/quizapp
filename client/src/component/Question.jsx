import React from 'react'
import Quiz from './Quiz'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { NextAction, PrevAction } from '../hooks/FetchQuestion'
import { pushAnswer } from '../hooks/setResult'
import {Navigate} from "react-router-dom"

function Question() {

    const [checked, setChecked] = useState(undefined) 

    const result = useSelector(state => state.result.result)
    const {queue, trace} = useSelector(state => state.questions)
    const dispatch = useDispatch()
    
    useEffect(() => {
      console.log(result)
    })

    function onNext (){
        console.log("On next")
        if(trace < queue.length){

          //update trace value by 1
          dispatch(NextAction())
          
          //insert a new element in an array
          if(result.length <= trace){
            dispatch(pushAnswer(checked))
          }

        }

        setChecked(undefined)

    }

    function onPrev (){
        console.log("on prev")
        if(trace > 0){
          dispatch(PrevAction())
        }
    }

    function onChecked(check) {
      console.log(check)
      setChecked(check)
    }

    if(result.length && result.length >= queue.length){
      return <Navigate to='/result' replace={true} ></Navigate>
    }

  return (
    <div className='container'>
        <div className="displayQuestion">
          <Quiz onChecked={onChecked} />
        </div>
        <div class="d-grid gap-2 d-md-block my-5">
          {trace > 0 ? <button onClick={onPrev} class="btn btn-primary mx-5" type="button">Prev</button> : <></>}
            
            <button onClick={onNext} class="btn btn-primary mx-5" type="button">Next</button>
        </div>
    </div>
  )
}

export default Question