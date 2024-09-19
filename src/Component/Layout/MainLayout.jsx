import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    const location = useLocation();
    const loginPage = location.pathname.includes('login');
    const signupPage = location.pathname.includes('signup');

    return (
        <div className='mx-auto'>
            {/* Show Navbar on all pages except login/signup */}
            {(!loginPage && !signupPage) && <Navbar />}
            
            {/* Add sufficient padding to avoid overlap with fixed navbar */}
            {/* For example, adjust padding based on screen sizes */}
            <div className="pt-[70px] lg:pt-[100px]">
                <Outlet />
            </div>
            
            {/* Show Footer on all pages except login/signup */}
            {(!loginPage && !signupPage) && <Footer />}
            
            <Toaster />
        </div>
    );
};

export default MainLayout;
