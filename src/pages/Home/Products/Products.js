import { Button, Container, Grid, Paper } from '@mui/material';
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
        // <Container sx={{ my: 4 }}>

        //     <Grid sx={{ my: 2 }} container spacing={4}  >
        //         {
        //             products.slice(0, 6).map(product =>
        //                 <Grid sx={{ my: 2, boxShadow: 2 }} item xs={12} md={4}>
        //                     <Box sx={{ boxShadow: 2, p: 2 }}>
        //                         <img width="90%" height="200px" src={product.image} alt="" />
        //                         <p>{product.description.slice(0, 60)}</p>
        //                         <h2>price: {product.price}</h2>
        //                         <Button variant="contained" onClick={() => handleProductBuy(product._id)}>buy now</Button>
        //                     </Box>
        //                 </Grid>
        //             )
        //         }
        //     </Grid>
        // </Container >
        <Container>
            <Grid sx={{ my: 2 }} container spacing={4}>
                {
                    products.slice(0, 6).map(product => <Grid key={product._id} item xs={12} md={4} sx={{ height: '120%' }}>
                        <Paper sx={{ p: 2 }} elevation={3} >
                            <img style={{ width: '75%', height: '25vh', }} src={product.image} alt="" />
                            <h2>{product.productName}</h2>
                            <p>{product.description.slice(0, 60)}</p>
                            <h2>price: {product.price}</h2>
                            <Button variant="contained" onClick={() => handleProductBuy(product._id)}>buy now</Button>
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Products;