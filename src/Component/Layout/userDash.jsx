import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaDatabase, FaMessage, FaPaypal, FaShapes, FaShop } from "react-icons/fa6";
import { GiCalendar, GiDatabase, GiForkKnifeSpoon, GiStarsStack } from "react-icons/gi";
import { IoMdMail, IoMdMenu } from "react-icons/io";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { CiForkAndKnife } from "react-icons/ci";
import { BsFillMenuButtonWideFill, BsFillPersonVcardFill } from "react-icons/bs";
import useAdmin from "../../hooks/useAdmin";



const UserDash = () => {
   

    const [isAdmin] = useAdmin()

    return (
        <div className="flex">

            {/* drawer */}

            <div className="w-[280p] bg-[#D1A054] min-h-screen p-4">

                <div className="my-8">
                    <h1 className="font-bold text-2xl">BISTRO BOSS</h1>
                    <h3 className="ext-lg tracking-[7px] font-bold">Restaurant</h3>
                </div>


                {
                    isAdmin ?
                    <>
                    <div className="space-y-2">
                        <ul className="">
                            <li><NavLink to={'/dashboard/adminhome'}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            > <button className="flex uppercase items-center text-lg gap-2 font-medium "> <FaHome /> Admin Home</button></NavLink></li>
                        </ul>


                        <ul className="">
                            <li><NavLink to={'/dashboard/additem'}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            > <button className="flex uppercase items-center text-lg gap-2 font-medium "> <GiForkKnifeSpoon />add items</button></NavLink></li>
                        </ul>

                        <ul className="">
                            <li><NavLink to={'/dashboard/manageitems'}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            > <button className="flex uppercase items-center text-lg gap-2 font-medium "> <BsFillMenuButtonWideFill />manage items</button></NavLink></li>
                        </ul>


                        <ul className="">
                            <li><NavLink to={'/dashboard/managebookings'}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            > <button className="flex uppercase items-center text-lg gap-2 font-medium  "> <FaBook /> Manage bookings</button></NavLink></li>
                        </ul>


                        <ul className="">
                            <li><NavLink to={'/dashboard/manegeusers'}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            > <button className="flex uppercase items-center text-lg gap-2 font-medium  "> <BsFillPersonVcardFill /> all users</button></NavLink></li>
                        </ul>


                    </div>
                </>
                        :
                        <>
                            <div className="space-y-2">
                                <ul className="">
                                    <li><NavLink to={'/dashboard/userhome'}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white" : ""
                                        }
                                    > <button className="flex uppercase items-center text-lg gap-2 font-medium "> <FaHome /> User Home</button></NavLink></li>
                                </ul>


                                <ul className="">
                                    <li><NavLink to={'/dashboard/reserve'}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white" : ""
                                        }
                                    > <button className="flex uppercase items-center text-lg gap-2 font-medium "> <FaDatabase /> reservation</button></NavLink></li>
                                </ul>

                                <ul className="">
                                    <li><NavLink to={'/dashboard/payment'}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white" : ""
                                        }
                                    > <button className="flex uppercase items-center text-lg gap-2 font-medium "> <FaPaypal /> payment history</button></NavLink></li>
                                </ul>


                                <ul className="">
                                    <li><NavLink to={'/dashboard/cart'}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white" : ""
                                        }
                                    > <button className="flex uppercase items-center text-lg gap-2 font-medium  "> <FaShoppingCart /> My Cart</button></NavLink></li>
                                </ul>


                                <ul className="">
                                    <li><NavLink to={'/dashboard/review'}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white" : ""
                                        }
                                    > <button className="flex uppercase items-center text-lg gap-2 font-medium  "> <GiStarsStack /> add review</button></NavLink></li>
                                </ul>

                                <ul className="">
                                    <li><NavLink to={'/dashboard/booking'}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white" : ""
                                        }
                                    > <button className="flex uppercase items-center text-lg gap-2 font-medium  "> <GiCalendar />my booking</button></NavLink></li>
                                </ul>


                            </div>
                        </>

                }


                <hr className="my-10" />

                <div className="space-y-2">
                    <ul className="">
                        <li><NavLink to={'/'}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white" : ""
                            }
                        > <button className="flex uppercase items-center text-lg gap-2 font-medium "> <FaHome />  Home</button></NavLink></li>
                    </ul>

                    <ul className="">
                        <li><NavLink to={'/menu'}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white" : ""
                            }
                        > <button className="flex uppercase items-center text-lg gap-2 font-medium "> <IoMdMenu />  Menu</button></NavLink></li>
                    </ul>

                    <ul className="">
                        <li><NavLink to={'/shop'}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white" : ""
                            }
                        > <button className="flex uppercase items-center text-lg gap-2 font-medium "> <FaShop />  Shop</button></NavLink></li>
                    </ul>

                    <ul className="">
                        <li><NavLink to={'/contact'}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white" : ""
                            }
                        > <button className="flex uppercase items-center text-lg gap-2 font-medium "> <IoMdMail />  Contact</button></NavLink></li>
                    </ul>


                </div>


            </div>

            {/* dash content  */}

            <div className="flex-1 p-8">

                <Outlet />

            </div>
        </div>
    );
};

export default UserDash;