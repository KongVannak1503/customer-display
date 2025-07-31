import React from 'react'
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { cartItems } from '../../data/CardItem';


const LiveCartDetailItem = () => {
    return (
        <Paper
            elevation={3}
            className='bg-color-default'
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 0,
                overflow: 'hidden',
            }}
        >
            {/* Header */}
            <Box sx={{ px: 2, py: 1.5, borderBottom: 1.5, borderColor: 'gray', display: 'flex' }}>
                <Typography flex={1} variant="h6" fontWeight="bold">Ticket</Typography>
                <Typography variant="h6" fontWeight="bold">Dine-in</Typography>
            </Box>

            {/* Body */}
            <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
                {cartItems.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 2,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar
                                sx={{ width: 56, height: 56, mr: 2 }}
                                src={item.image}
                                alt={item.name}
                            />
                            <Box>
                                <Typography variant="subtitle2" fontWeight="bold">
                                    {item.name}
                                </Typography>
                                {item.extras?.map((extra, idx) => (
                                    <Typography variant="body2" color="text.secondary" key={idx}>
                                        {extra}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                            ${item.price.toFixed(2)}
                        </Typography>
                    </Box>
                ))}
            </Box>
            {/* Footer */}
            <Box
                sx={{
                    px: 2,
                    py: 1.5,
                    textAlign: 'right',
                    borderTop: 1.5,
                    borderColor: 'gray',
                }}
            >
                <div className="flex justify-between mb-2">
                    <Typography variant="subtitle1" fontWeight="bold" >
                        Total Quantity
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" align='end'>
                        4
                    </Typography>
                </div>
                <div className="flex justify-between mb-2">
                    <Typography variant="subtitle1" fontWeight="bold" >
                        Sub Total
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" align='end'>
                        $ 13,50
                    </Typography>
                </div>
                <div className="flex justify-between mb-2">
                    <Typography variant="subtitle1" fontWeight="bold" >
                        Discount (0.0%)
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" align='end'>
                        $ 0.00
                    </Typography>
                </div>
                <div className="flex justify-between mb-2">
                    <Typography variant="subtitle1" fontWeight="bold" >
                        VAT (0.0)
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" align='end'>
                        $ 0.00
                    </Typography>
                </div>
                <div className="flex justify-between mb-2">
                    <Typography variant="subtitle1" fontWeight="bold" >
                        Total Price (USD)
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" align='end'>
                        $ 13,50
                    </Typography>
                </div>
                <div className="flex justify-between mb-2">
                    <Typography variant="subtitle1" fontWeight="bold" >
                        Total Price (KH)
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" align='end'>
                        ៛ 54,104.63
                    </Typography>
                </div>
            </Box>
        </Paper>
    )
}

export default LiveCartDetailItem
