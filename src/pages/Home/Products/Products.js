import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Products = () => {
    const [products, setProducts] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('https://aqueous-citadel-84780.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleProductBuy = id => {
        history.push(`/placeOrder/${id}`)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                {products.map(product =>
                    <Grid item xs={12} md={4}>
                        <img width="100%" src={product.image} alt="" />
                        <p>{product.description.slice(0, 60)}</p>
                        <h2>price: {product.price}</h2>
                        <Button onClick={() => handleProductBuy(product._id)}>buy now</Button>
                    </Grid>
                )}
            </Grid>
        </Container >
    );
};

export default Products;