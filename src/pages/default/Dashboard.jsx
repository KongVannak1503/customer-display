import React from 'react';
import { Breadcrumbs, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <>
            <Card className='bg-color-primary-lighter'>
                <CardContent>
                    <Typography variant="h4">
                        Welcome to Dashboard!
                    </Typography>
                </CardContent>
            </Card>
        </>

    );
}
