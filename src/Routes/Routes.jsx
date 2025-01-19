import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUS/AboutUs";

const Routes =createBrowserRouter([
    {
        path: '/',
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            }
        ]
    }
]);
export default Routes;