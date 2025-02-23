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
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddDonation from "../Pages/Dashboard/AddDonation";
import UpdateDonation from "../Pages/Dashboard/UpdateDonation";
import AllDonations from "../Pages/Dashboard/AllDonations";
import AllPayments from "../Pages/Dashboard/AllPayments";
import SingleDonation from "../Pages/Dashboard/SingleDonation";
import Welcome from "../Pages/Dashboard/Welcome";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/donate",
        element: <Donate></Donate>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/video",
        element: <Video></Video>,
      },
      {
        path: "/categories/:category",
        element: <CategoryWiseDonations />,
      },
      {
        path: "/donations/:id",
        element: <DonationDetails />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path:"/dashboard",
        element:<Welcome/>
      },
      {
        path: "addDonation",
        element: <AddDonation />
      },
      {
        path:"updateDonation/:id",
        element:<UpdateDonation/>
      },
      {
        path: "manageDonation",
        element:<AllDonations/>
      },
      {
        path:"allPayments",
        element:<AllPayments/>
      },
      {
        path:"donationDetails/:id",
        element:<SingleDonation/>
      }
    ],
  },
]);
export default Routes;
