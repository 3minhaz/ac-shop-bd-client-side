import { Button, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { Box, padding } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const [isDelete, setIsDelete] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://ac-shop-bd.onrender.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setIsLoading(false)
            })
    }, [isDelete])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('are you sure ,you want to delete the items');
        if (proceed) {
            fetch(`https://ac-shop-bd.onrender.com/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsDelete(true)
                        alert('successfully deleted')
                    }
                })
        }
    }

    return (
        <div>
            {isLoading && <CircularProgress />}
            <Grid container spacing={2}>
                {orders.map(order => <Grid key={order._id} item xs={12} md={4}>
                    <Paper elevation={3} >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 1,
                                my: 3,
                                bgcolor: 'background.paper',
                            }}
                        >
                            <img width="50%" height="100" src={order.product.image} alt="" />
                            <Typography variant='h5' sx={{ backgroundColor: 'tomato', height: '25%', p: 1, borderRadius: '8px', color: 'white' }}>
                                {order.status}
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'left', ml: 2 }} variant='h3'>
                            {order.product.productName}
                        </Typography>
                        <Typography sx={{ textAlign: 'left', ml: 2 }} display="block" variant='caption'>
                            {order.product.description.slice(0, 90)} ......
                        </Typography>
                        <Button onClick={() => handleDeleteOrder(order._id)} variant='contained' sx={{ my: 2 }}>Delete</Button>
                    </Paper>
                </Grid>)}


            </Grid>

        </div>
    );
};

export default MyOrders;