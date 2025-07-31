import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';

import LanIcon from '@mui/icons-material/Lan'; // Placeholder logo
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArticleIcon from '@mui/icons-material/Article';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import logo from '../../assets/Logo.webp';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 86;

const menuItems = [
    { label: 'LIVE', path: '/live-cart', icon: <ShoppingCartIcon /> },
    { label: 'DISCOUNT', path: '/discount', icon: <LocalOfferIcon /> },
    { label: 'ITEM', path: '/item', icon: <NewReleasesIcon /> },
];

export default function CustomSidebar() {
    const location = useLocation();
    const settingsSelected = location.pathname.startsWith('/settings');
    return (
        <Drawer
            variant="permanent"
            open
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    height: '98.5vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '16px',
                    backgroundColor: '#eef8f5ff',
                    margin: '5px',
                    overflow: 'hidden',
                    boxShadow: 3,
                    position: 'fixed',
                    bottom: 4
                },
            }}
        >
            {/* Logo */}
            <Link to="/dashboard" style={{ width: '100%' }}>
                <Box
                    className='!border-b-2 !border-gray-200 hover:bg-[#2bbd7e21] cursor-pointer w-100 h-[60px] pb-2 py-2'
                    sx={{ flexShrink: 0, width: '100%' }}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </Box>
            </Link>
            {/* Menu List */}
            <Box
                sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    width: '100%',
                }}
            >
                <List sx={{ width: '100%', pt: 0 }}>

                    {menuItems.map((item) => {
                        const selected = location.pathname.startsWith(item.path);
                        return (
                            <ListItem
                                key={item.label}
                                disablePadding
                                className='border-b-2 border-gray-200'
                                sx={{
                                    justifyContent: 'center',
                                    p: 0.5,
                                    '&:hover': {
                                        backgroundColor: '#2bbd7e21',
                                    },

                                }}
                            >
                                <ListItemButton
                                    component="a"
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`shadow-md !border-1 !border-gray-300 ${selected ? 'bg-color-primary' : 'bg-color-default'}`}
                                    // to={item.path}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: '100%',
                                        borderRadius: 3,
                                        py: 0.7,
                                        color: selected ? '#fff' : '#333',
                                    }}
                                >
                                    <ListItemIcon
                                        className={` ${selected ? '!text-white' : ''}`}
                                        sx={{
                                            minWidth: 0,
                                            fontSize: 24,
                                            justifyContent: 'center',
                                        }}

                                    >
                                        {React.cloneElement(item.icon, {
                                            sx: { fontSize: 25 },
                                        })}
                                    </ListItemIcon>
                                    <Typography
                                        className={` ${selected ? '!text-white' : ''}`}
                                        sx={{
                                            fontSize: '0.70rem',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
            {/* box end */}
            <Box
                sx={{
                    width: '100%',
                    flexShrink: 0,
                    p: 0.5,
                    '&:hover': {
                        backgroundColor: '#2bbd7e21',
                    },
                }}
            >
                <ListItemButton
                    component={Link}
                    className={`!shadow-md !border-1 !border-gray-300 ${settingsSelected ? 'bg-color-primary' : 'bg-color-default'}`}
                    to="settings"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        borderRadius: 3,
                        py: 0.7,
                        '&:hover': {
                            backgroundColor: settingsSelected ? 'red' : '#eef6f8',
                        },
                    }}
                >
                    <ListItemIcon
                        className={settingsSelected ? '!text-white' : ''}
                        sx={{
                            minWidth: 0,
                            fontSize: 24,
                            justifyContent: 'center',
                        }}
                    >
                        <SettingsIcon sx={{ fontSize: 25 }} />
                    </ListItemIcon>
                    <Typography
                        className={settingsSelected ? '!text-white' : ''}
                        sx={{
                            fontSize: '0.70rem',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        Settings
                    </Typography>
                </ListItemButton>
            </Box>
        </Drawer>
    );
}
