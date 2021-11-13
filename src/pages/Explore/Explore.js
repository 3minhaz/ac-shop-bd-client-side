import { Button, CircularProgress, Container, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {
        fetch('https://aqueous-citadel-84780.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLoading(false)
            })
    }, [])

    const handleProductBuy = id => {
        history.push(`/placeOrder/${id}`)
    }
    return (
        <div>
            <Navigation></Navigation>

            <Container>
                {isLoading && <CircularProgress />}
                <h2>Lets explore products and accessories</h2>
                <Grid sx={{ my: 2 }} container spacing={4}>
                    {
                        products.map(product => <Grid key={product._id} item xs={12} md={4}>
                            <Paper sx={{ p: 2 }} elevation={3} >
                                <img style={{ width: '100%', height: '200px' }} src={product.image} alt="" />
                                <h2>{product.productName}</h2>
                                <p>{product.description.slice(0, 60)}</p>
                                <h2>price: {product.price}</h2>
                                <Button variant="contained" onClick={() => handleProductBuy(product._id)}>buy now</Button>
                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Explore;