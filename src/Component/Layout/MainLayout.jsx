import React from 'react';
import Home from '../Home/Home';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {

    const location = useLocation()


    const loginPage = location.pathname.includes('login')
    const sinupPage = location.pathname.includes('singup')
    return (
        <div className=' mx-auto'>

          {loginPage || sinupPage ||   <Navbar />}
            <Outlet />
           {loginPage || sinupPage ||  <Footer />}
           <Toaster></Toaster>


        </div>
    );
};

export default MainLayout;