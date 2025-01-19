import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const routes = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/donate">Donate</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/video">Video</NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-[1000px]   mx-auto ">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {routes}
            </ul>
          </div>
          <Link to="/">
            <img className="w-[70px] h-[70px] rounded-full" src={logo} alt="" />
          </Link>
          <Link to="/">
            <span className="ml-5 text-lg font-bold">
              Farjana&apos;s Charity
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{routes}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
