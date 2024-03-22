import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const navOption = < >

        <div className='flex flex-col lg:flex-row gap-2 font-bold text-lg'>
            <ul ><NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
            >
                HOME
            </NavLink></ul>

            <ul>  <NavLink
                > CONTACT US</NavLink> </ul>

            <ul><NavLink>
                DASHBOARD</NavLink></ul>
            <ul><NavLink to="/menu"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
           >OUR MENU</NavLink></ul>
            <ul> <NavLink
                to="/ourshop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
            >OUR SHOP</NavLink></ul>
           <Link to={'/login'}> <button className=' text-lg font-bold '> LOG IN</button></Link>

        </div>

    </>
    return (
        <div>
            <div className="navbar bg-[#15151580]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>

                    <div className='flex flex-col  text-white'>
                        <h2 className=' font-extrabold text-3xl'>BISTRO BOSS</h2>
                        <h3 className='font-bold text-2xl'>Restaurant</h3>
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