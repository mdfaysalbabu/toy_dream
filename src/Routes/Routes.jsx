import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import Addtoy from "../Components/Toy/Addtoy";
import Error from "../Components/Error/Error";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'addtoy',
          element:<Addtoy></Addtoy>
        }
      ]
      
    },
    {
        path:'login',
        element:<Login></Login>
    },
    {
        path:'register',
            element:<Register></Register>
    }
    
  ]);
export default router;