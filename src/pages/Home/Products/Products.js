import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            {products.map(product => <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <img width="100%" src={product.image} alt="" />
                        <p>{product.description.slice(0, 60)}</p>
                        <h2>price: {product.price}</h2>
                        <Button>buy now</Button>
                    </Grid>
                </Grid>
            </Box>)}
        </Container>
    );
};

export default Products;