import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>

            <h2>Navbar</h2>
            <Outlet />
            

        </div>
    );
};

export default MainLayout;