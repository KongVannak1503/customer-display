import React from 'react'
import { Box, Typography, Paper } from '@mui/material';
import LiveCartImageItem from './LiveCartImageItem';
import LiveCartDetailItem from './LiveCartDetailItem';

const LiveCartComponent = () => {
    return (
        <Box display="flex" width="100vw" height="100vh">
            <Box flex={1}>
                <LiveCartImageItem />
            </Box>

            <Box flex={1} className="bg-color-default">
                <LiveCartDetailItem />
            </Box>
        </Box>
    )
}

export default LiveCartComponent
