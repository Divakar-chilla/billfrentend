import { createBrowserRouter } from "react-router-dom";
import Register from "../Component/user/Register";
import Login from "../Component/user/Login";
import Main from "../Component/user/main/Main"
import Home from "../Component/user/main/home/Home";
import About from "../Component/user/main/about/About";
import AddBill from "../Component/user/main/addbi;ll/AddBill";
import FilterBill from "../Component/user/main/filterbill/FilterBill";
import Addbills from "../Component/user/main/addbi;ll/AddBill";

let routes=createBrowserRouter([
    {
        path:"/",
        element:<Register></Register>
    },{
        path:"/login",
        element:<Login></Login>
    },{
        path:"/home",
        element:<Main></Main>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:"about",
                element:<About></About>
            },{
                path:"addbills",
                element:<Addbills></Addbills>
            },{
                path:"filterBill",
                element:<FilterBill></FilterBill>

            }
        ]
    }
])
export default routes