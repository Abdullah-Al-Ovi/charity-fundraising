
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import { FaHome } from "react-icons/fa";


const Drawer = () => {
    const navigate = useNavigate()
    return (
        <div className="p-4">
            <div  className="my-10 " >
                <img className="w-[100px] mx-auto"  src={logo} alt="" />
            </div>
            <ul className="space-y-3 font-medium">
                
                
                     
                        <li><NavLink to='/dashboard/addDonation' style={({ isActive }) => {
                            return { color: isActive ? 'blue' : '' }
                        }}>Add donation</NavLink></li>
                        <li><NavLink to='/dashboard/manageDonation' style={({ isActive }) => {
                            return { color: isActive ? 'blue' : '' }
                        }}>Manage donation</NavLink></li>
                        <li><NavLink to='/dashboard/allPayments' style={({ isActive }) => {
                            return { color: isActive ? 'blue' : '' }
                        }} >All payments</NavLink></li>

                  

                <div className="divider font-bold"></div>

                <li ><NavLink className="flex items-center gap-1" to='/'><FaHome></FaHome> <span>Home</span></NavLink></li>
               

            </ul>
        </div>
    );
};

export default Drawer;