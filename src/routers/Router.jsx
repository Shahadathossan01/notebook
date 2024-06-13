import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {path:'/',element:<Home></Home>},
            {path:'/Home',element:<Home></Home>},
            {path:'/*',element:<h1>There is no routes here!!!!!!!!</h1>}
        ],
    }
])

export default router;