import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserId } from "../redux/resultReducer";
import { useDispatch } from "react-redux"

function Home() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
      const data = new FormData(e.currentTarget)
      const userData = {
        userName : data.get("userName")
      }
      
      const {userName} = userData
      console.log(userName)

      if(userData && userData.userName){
        dispatch(setUserId(userName))
        navigate("/quiz")
      }

    }

  return (
    <div className="container mt-5">
      <p>Welcom to quizze</p>
      <div className="container w-25 my-5 ">
        <form className="form-floating" onSubmit={handleSubmit} >
          <input
            type="text"
            name="userName"
            className="form-control"
            id="userName"
            placeholder="name@example.com"
          />
          <label for="floatingInputValue">Type your username</label>
          <button type="submit" className="btn btn-primary btn-lg my-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
