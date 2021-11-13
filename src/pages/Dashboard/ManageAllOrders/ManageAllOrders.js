import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isShipped, setIsShipped] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://aqueous-citadel-84780.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setIsLoading(false)
            })
    }, [isShipped])
    const handleShipped = id => {
        fetch(`https://aqueous-citadel-84780.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'shipped' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('change status to shipped');
                    setIsShipped(true);
                }
            });
    }

    const handleDelete = id => {
        const proceed = window.confirm('are you sure,you want to delete the items');
        if (proceed) {
            fetch(`https://aqueous-citadel-84780.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('order deleted successfully')
                        setIsShipped(true);
                    }
                })
        }
    }
    return (
        <div>
            <h3>manage all orders.{orders.length}</h3>
            {isLoading && <CircularProgress />}
            {orders.map(order => <Paper sx={{ p: 1, m: 2 }} elevation={3} key={order._id}>
                <Typography sx={{ mr: 2, fontSize: 18 }} variant="caption" gutterBottom xs={12}>
                    email: {order.email_add_by_user}
                </Typography>
                <Typography sx={{ mr: 2, fontSize: 18 }} variant="caption" gutterBottom>
                    Product:  {order.product.productName}
                </Typography>
                <Typography sx={{ mr: 2, fontSize: 18 }} variant="caption" gutterBottom>
                    Address:  {order.address}
                </Typography>
                <Typography sx={{ mr: 2, fontSize: 18, backgroundColor: 'tomato', p: 1, borderRadius: 10 }} variant="caption" gutterBottom>
                    Status:  <span style={{ color: 'white' }}>{order.status}</span>
                </Typography>
                <Button onClick={() => handleShipped(order._id)} sx={{ mr: 1, }} variant="contained" color="success">Shipped</Button>
                <Button onClick={() => handleDelete(order._id)} variant="outlined" color="error">Delete</Button>
            </Paper>)}
        </div>
    );
};

export default ManageAllOrders;