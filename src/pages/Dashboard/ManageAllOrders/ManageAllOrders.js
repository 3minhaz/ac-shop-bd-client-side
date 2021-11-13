import { Button, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isShipped, setIsShipped] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isShipped])
    const handleShipped = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
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
        fetch(`http://localhost:5000/orders/${id}`, {
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
    return (
        <div>
            <h3>manage all orders.{orders.length}</h3>
            {orders.map(order => <Paper sx={{ p: 1 }} elevation={3} key={order._id}>
                <Typography sx={{ mr: 2, fontSize: 18 }} variant="caption" gutterBottom xs={12}>
                    email: {order.email_add_by_user}
                </Typography>
                <Typography sx={{ mr: 2, fontSize: 18 }} variant="caption" gutterBottom>
                    Product:  {order.product.productName}
                </Typography>
                <Typography sx={{ mr: 2, fontSize: 18 }} variant="caption" gutterBottom>
                    Address:  {order.address}
                </Typography>
                <Typography sx={{ mr: 2, fontSize: 18, backgroundColor: 'red', p: 1, borderRadius: 10 }} variant="caption" gutterBottom>
                    Status:  {order.status}
                </Typography>
                <Button onClick={() => handleShipped(order._id)} sx={{ mr: 1, }} >Shipped</Button>
                <Button onClick={() => handleDelete(order._id)} sx={{ mr: 1, }}>Delete</Button>
            </Paper>)}
        </div>
    );
};

export default ManageAllOrders;