import { createBrowserRouter } from "react-router-dom";
import Register from "../Component/Register";

let routes=createBrowserRouter([
    {
        path:"/",
        element:<Register></Register>
    }
])
export default routes