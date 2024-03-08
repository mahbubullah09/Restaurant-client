import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>

            <h2>Navbar</h2>
            <Outlet />
            <Footer/>
            

        </div>
    );
};

export default MainLayout;