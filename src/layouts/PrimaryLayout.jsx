import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar';

const PrimaryLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default PrimaryLayout;