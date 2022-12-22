import React from 'react'
import {Link} from "react-router-dom"
import { resatAllAction } from '../redux/questionReducer'
import {useDispatch, useSelector} from "react-redux"
import { resatResultAction } from '../redux/resultReducer'
import { useEffect } from 'react'
import {attempt_number, marks} from "../ResultCount/countResult"
import { userResult } from '../hooks/setResult'


function Result() {

  const dispatch = useDispatch()

  const { questions : { queue, answer}, result: {result, useId}} = useSelector(state => state)

  useEffect(() => {
    console.log(totalMarks)
  })

  const totalPionts = queue.length * 10;
  const attempt = attempt_number(result)
  const totalMarks = marks(result, answer, 10) 


  function handleClick() {
    dispatch(resatAllAction())
    dispatch(resatResultAction())
  }

  userResult({
    result, 
    username : userId,
    attempt,
    points: totalMarks

  })

  return (
    <div className='container'>
      <h1>UserName</h1>
      <h1>Total points: {totalMarks}</h1>
      <h1>Total attempts: {attempt}</h1>
      <Link to="/">
      <button onClick={handleClick} class="btn btn-primary mx-5" type="button">Restart</button>
      </Link>
    </div>
  )
}

export default Result