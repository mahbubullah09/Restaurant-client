import { useContext } from "react";
import { AuthContex } from "../../provider/AuthProvider";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
    const [cart] = useCart();
    const { user, singout } = useContext(AuthContex);
    const [isAdmin] = useAdmin();

    const handleLogout = () => {
        singout();
    };

    const navOption = (
        <div className='flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 font-bold'>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}
            >
                HOME
            </NavLink>
            {isAdmin ? (
                <NavLink
                    to="/dashboard/adminhome"
                    className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}
                >
                    DASHBOARD
                </NavLink>
            ) : (
                <NavLink
                    to="/dashboard/userhome"
                    className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}
                >
                    DASHBOARD
                </NavLink>
            )}
            <NavLink
                to="/menu"
                className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}
            >
                MENU
            </NavLink>
            <NavLink
                to="/ourshop"
                className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}
            >
                SHOP
            </NavLink>
            <NavLink
                to="/dashboard/cart"
                className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}
            >
                <button className='flex items-center relative text-xl'>
                    <FaCartPlus />
                    <p className='relative -top-0 -right-0 lg:absolute lg:-top-4 lg:-right-3 bg-orange-500 text-sm px-2 rounded-full'>
                        {cart?.length}
                    </p>
                </button>
            </NavLink>
            {!user ? (
                <Link to={'/login'}>
                    <button className='font-bold'> LOG IN</button>
                </Link>
            ) : (
                <button onClick={handleLogout} className='font-bold'> LOG OUT</button>
            )}
        </div>
    );

    return (
        <div>
            <div className="navbar bg-black bg-opacity-70 backdrop-blur-md fixed z-50 w-full text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navOption}
                        </ul>
                    </div>
                    <div className='flex flex-col text-white'>
                        <h2 className='font-extrabold text-lg lg:text-2xl'>BISTRO BOSS</h2>
                        <h3 className='font-bold text-sm lg:text-lg'>Restaurant</h3>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
