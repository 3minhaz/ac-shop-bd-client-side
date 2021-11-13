import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [isDeleted])
    console.log(products);
    const handleProductDelete = id => {
        fetch(`http://localhost:5000/products?id=${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('successfully deleted');
                    setIsDeleted(true);
                }
            })
    }
    return (
        <div>
            <h2>Total products. {products.length}</h2>
            <Grid container spacing={3}>
                {
                    products.map(product => <Grid sx={{ p: 3 }} key={product._id} item xs={12} md={6}>
                        <Paper elevation={3} >
                            <img style={{ width: '75%', height: '25vh', }} src={product.image} alt="" />
                            <Typography variant="h4" sx={{ textAlign: 'left', marginLeft: 2 }}>
                                Product Name: {product.productName}
                            </Typography>
                            <Typography variant="h6" sx={{ textAlign: 'left', marginLeft: 2 }}>
                                Price: {product.price}
                            </Typography>
                            <Button onClick={() => handleProductDelete(product._id)} sx={{ textAlign: 'left' }}>Delete</Button>
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </div>
    );
};

export default ManageProducts;