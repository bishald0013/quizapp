import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useFetchQuestion } from "../hooks/FetchQuestion.js";
import { updateResult } from "../hooks/setResult.js";
import { updateResultAction } from "../redux/resultReducer.js";

function Quiz({onChecked}) {
  const [checked, setChecked] = useState(undefined);
  const {trace} = useSelector(state => state.questions)
  const [{isLoading, apiData, serverError}] = useFetchQuestion()

  useSelector(state => console.log(state))
  const questions = useSelector(state => state.questions.queue[state.questions.trace])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateResult({trace, checked}))
  }, [checked])

  function onSelect(i) {
    onChecked(i)
    setChecked(i)
  }

  if(isLoading) return <h2>isLoading</h2>
  if(serverError) return <h2>{serverError || "Something went wrong"}</h2>

  return (
    <div className="container w-25 my-5">
      <h1 className="my-5">{questions?.question}</h1>
      <div class="form-check">
        <ul key={questions?.id}>
          {questions?.options.map((q, i) => (
            <div key={i}>
              <input
                class="form-check-input"
                type="checkbox"
                value={false}
                id={`q${i}-option`}
                onChange={() => onSelect(i)}
              />
              <label class="form-check-label" htmlFor={`q${i}-option`}>
                {q}
              </label>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
