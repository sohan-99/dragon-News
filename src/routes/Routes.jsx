/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivetRoute from "./PrivetRoute";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivetRoute><News></News></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path:'/career',
                element:<Career></Career>
            }
        ]

    }
])

export default router