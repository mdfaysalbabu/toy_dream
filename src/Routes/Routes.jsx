import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Addtoy from "../Components/Toy/Addtoy";
import Error from "../Components/Error/Error";
import Mytoys from "../Components/Mytoys/Mytoys";
import Alltoys from "../Components/Alltoys/Alltoys";
import Blog from "../Components/Blog/Blog";
import Update from "../Components/Mytoys/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addtoy",
        element: <Addtoy></Addtoy>,
      },
      {
        path: "mytoys",
        element: <Mytoys></Mytoys>,
      },
      {
        path: "alltoys",
        element: <Alltoys></Alltoys>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path:"update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/allCars/${params.id}`)
      }
    ],
  },

  
]);
export default router;
