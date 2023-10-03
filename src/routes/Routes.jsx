/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../pages/Home/Home";




const router = createBrowserRouter([
    {
        path: '/',
        element:<Roots></Roots>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
        ]

    }
])

export default router