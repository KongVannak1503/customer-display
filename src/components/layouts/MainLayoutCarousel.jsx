// MainLayout.jsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function MainLayoutCarousel() {
    // const [collapsed, setCollapsed] = useState(false);

    // const toggleDrawer = () => {
    //     setCollapsed(!collapsed);
    // };

    return (
        <Box sx={{ display: 'flex' }}>
            <Box>
                <Outlet />
            </Box>
        </Box>
    );
}
