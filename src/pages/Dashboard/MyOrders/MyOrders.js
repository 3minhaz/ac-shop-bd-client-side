import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const [isDelete, setIsDelete] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDelete])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('are you sure ,you want to delete the items');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
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
                            <img width="50%" src={order.product.image} alt="" />
                            <Typography variant='h5'>
                                hard coded
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'left' }} variant='h3'>
                            {order.product.productName}
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} display="block" variant='caption'>
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