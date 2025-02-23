import { Outlet } from "react-router-dom";


import { Helmet } from "react-helmet";
import Footer from "../../SharedComponents/Footer/Footer";
import Drawer from "./Drawer";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Helmet>
        <title>Farjana&apos;s Charity | Dashboard</title>
      </Helmet>
      <div className="w-full lg:w-[20%] min-h-full bg-slate-300">
        <Drawer></Drawer>
      </div>
      <div className="flex-1 m-7">
        <Outlet></Outlet>
        <div className="mt-44">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
