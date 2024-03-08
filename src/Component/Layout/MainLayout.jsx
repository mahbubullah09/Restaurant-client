import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>

           <Navbar/>
            <Outlet />
            <Footer/>
            

        </div>
    );
};

export default MainLayout;