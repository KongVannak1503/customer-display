import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({ open, toggleDrawer }) {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
            }}
        >
            <Toolbar>
                <IconButton edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <RouterLink
                    to="/dashboard"
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <Typography variant="h6" noWrap>
                        MUI Dashboard
                    </Typography>
                </RouterLink>
            </Toolbar>
        </AppBar>
    );
}
