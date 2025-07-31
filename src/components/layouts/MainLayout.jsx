// MainLayout.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    // const [collapsed, setCollapsed] = useState(false);

    // const toggleDrawer = () => {
    //     setCollapsed(!collapsed);
    // };

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <Navbar open={!collapsed} toggleDrawer={toggleDrawer} /> */}
            <Sidebar />
            <Box className='bg-gray-100 min-h-[100vh]' component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'transparent', }}>
                <Outlet />
            </Box>
        </Box>
    );
}
