import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUS/AboutUs";
import { Contact } from "../Pages/Contact/Contact";
import Donate from "../Pages/Donate/Donate";
import Gallery from "../Pages/Gallery/Gallery";
import Video from "../Pages/Video/Video";
import CategoryWiseDonations from "../Pages/CategoryWiseDonations/CategoryWiseDonations";
import DonationDetails from "../Pages/DonationDetails.jsx/DonationDetails";

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
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:"/donate",
                element:<Donate></Donate>
            },
            {
                path:"/gallery",
                element:<Gallery></Gallery>
            },
            {
                path:"/video",
                element:<Video></Video>
            },
            {
                path:"/categories/:category",
                element:<CategoryWiseDonations/>
            },
            {
                path:"/donations/:id",
                element:<DonationDetails/>
            }
            
            
        ]
    }
]);
export default Routes;