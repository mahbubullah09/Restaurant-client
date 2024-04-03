import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';
import { FaCartPlus } from "react-icons/fa";
import useCart from '../../hooks/useCart';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAdmin from '../../hooks/useAdmin';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Navbar = () => {

    const [cart] = useCart()



    
    const { user, singout } = useContext(AuthContex)

    const [isAdmin] = useAdmin()
    // const axiosPublic = useAxiosPublic()
    // const { data: isAdmin } = useQuery({
    //     queryKey: [user?.email, 'isAdmin'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/users/admin/${user.email}`);
    //         // console.log(res.data);
    //         return res.data?.admin;
    //     }
    // })
  

    const handleLogout = () => {
        singout()

    }



    const navOption = < >

        
            <div className='flex flex-col lg:flex-row gap-2 font-bold '>
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

           {
            isAdmin ?
            <ul><NavLink to="/dashboard/adminhome"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
            }
        >
            DASHBOARD</NavLink></ul>
            :
            <ul><NavLink to="/dashboard/userhome"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
            }
        >
            DASHBOARD</NavLink></ul>
           }
            <ul><NavLink to="/menu"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
            > MENU</NavLink></ul>
            <ul> <NavLink
                to="/ourshop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
            > SHOP</NavLink></ul>
            <ul> <NavLink
                to="/dashboard/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
            >
                <button className=' flex items-center relative text-xl '><FaCartPlus /> <p className='relative -top-0 -right-0 lg:absolute lg:-top-4 lg:-right-3 bg-orange-500 text-sm px-2 rounded-full'>{cart?.length}</p> </button></NavLink></ul>
            <>
                {
                    !user ? <Link to={'/login'}> <button className='  font-bold '> LOG IN</button></Link>
                        :
                        <button onClick={handleLogout} className='  font-bold '> LOG OUT</button>
                }

            </>

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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>

                    <div className='flex flex-col  text-white'>
                        <h2 className=' font-extrabold text-2xl'>BISTRO BOSS</h2>
                        <h3 className='font-bold text-xl'>Restaurant</h3>
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