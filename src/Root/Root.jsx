
import Navbar from '../SharedComponents/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../SharedComponents/Footer/Footer';
import { useEffect } from 'react';

const Root = () => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    const avoidNavFoot = location?.pathname === '/about' ? true : false
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {avoidNavFoot || <Footer></Footer>}
        </div>
    );
};

export default Root;