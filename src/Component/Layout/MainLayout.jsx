import React from 'react';
import Home from '../Home/Home';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {

    const location = useLocation()
    console.log(location);

    const loginPage = location.pathname.includes('login')
    const sinupPage = location.pathname.includes('singup')
    return (
        <div className=' mx-auto'>

          {loginPage || sinupPage ||   <Navbar />}
            <Outlet />
           {loginPage || sinupPage ||  <Footer />}


        </div>
    );
};

export default MainLayout;