import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css';
import Home from "./component/Home";
import Question from "./component/Question";
import Result from "./component/Result";
import { AllowUser } from "./ResultCount/countResult";


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
