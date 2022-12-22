import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Question from './Question'
import Result from './Result'


function Timer() {

    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)

    useEffect(() => {
      let timer = setIntervalt(() => {
        
        setSecond(second+1);
          
          if(second === 59){
            setMinute(minute+1);
            setSecond(0)
          }

      }, 1000)
    
      return ()=> clearInterval(timer); 
    })

  return (
    <div className="container">
      <h1>{minute}:{second}</h1>
      {
        minute === 5 ? <Result></Result> : <Question></Question>
      }
    </div>
  )
}

export default Timer