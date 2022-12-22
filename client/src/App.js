import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css';
import Home from "./component/Home";
import Question from "./component/Question";
import Result from "./component/Result";
import { AllowUser } from "./ResultCount/countResult";
import Timer from "./component/Timer"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/quiz",
    element: <AllowUser> <Question/> </AllowUser> 
  },
  {
    path: "/result",
    element: <AllowUser> <Result/> </AllowUser> 
  },
  {
    path: "/timer",
    element: <Timer/> 
  }

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />      
    </div>
  );
}

export default App;
