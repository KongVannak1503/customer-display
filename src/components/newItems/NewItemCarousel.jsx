import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Paper } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { discountItems } from '../../data/DiscountItems';

export default function NewItemCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <Slider {...settings}>
                {discountItems.map((item, index) => (
                    <Box key={index} sx={{ width: '100vw', height: '100vh' }}>
                        <Paper
                            elevation={3}
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 0,
                                overflow: 'hidden',
                                position: 'relative',
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 1,
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 2,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: '#fff',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    p: 4,
                                }}
                            >
                                <Typography variant="h3" fontWeight="bold">
                                    {item.name}
                                </Typography>
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    {item.category}
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
