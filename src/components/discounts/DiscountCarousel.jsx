import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Paper } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { discountItems } from '../../data/DiscountItems';
import { FadeInImage } from './FadeInImage';

export default function DiscountCarousel() {
    const sliderRef = useRef();
    const [loaded, setLoaded] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <Slider ref={sliderRef} {...settings}>
                {discountItems.map((item, index) => (
                    <Box key={index} sx={{ width: '100vw', height: '100vh' }}>
                        <Paper
                            elevation={3}
                            sx={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                borderRadius: 0,
                            }}
                        >
                            {/* Right Side - Image */}
                            <Box sx={{ position: 'absolute', right: 0, width: '50%', height: '100%' }}>
                                <FadeInImage src={item.image} alt={item.name} />
                            </Box>

                            {/* Left Side - Background & Text */}
                            <Box
                                sx={{
                                    width: '80%',
                                    position: 'relative',
                                    flex: 2,
                                    height: '100%',
                                    color: 'white',
                                    padding: 4,
                                    paddingLeft: 6,
                                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 956 555" fill="none"><path d="M-1 0H755.538C755.538 0 674.15 45.9931 674.15 193.222C674.15 411.368 955.875 555 955.875 555H-1V0Z" fill="%23931012"/></svg>')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 10, mb: 1 }}>
                                    {item.category}
                                </Typography>
                                <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
                                    VOUCHER
                                </Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <Box
                                        sx={{
                                            mt: 2,
                                            border: '5px solid white',
                                            px: 4,
                                            py: 1,
                                            borderRadius: '5px',
                                        }}
                                    >
                                        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                                            {item.discount} Off
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
