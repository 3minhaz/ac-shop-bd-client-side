import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    useEffect(() => {
        fetch(`http://localhost:5000/placeOrder/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const onSubmit = data => {
        data.email = user.email;
        data.product = product;
        data.status = 'pending';
        console.log(data);
        fetch('http://localhost:5000/placeOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully ordered placed');
                    reset();
                }
            })
    };
    return (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img width="100%" src={product.image} alt="" />
                    <Typography sx={{ fontWeight: 400 }} variant="h2" gutterBottom component="div">
                        {product.productName}
                    </Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: 15 }} variant="caption" gutterBottom component="div">
                        {product.description}
                    </Typography>
                    <Typography sx={{ fontWeight: 400 }} variant="h3" gutterBottom component="div">
                        BDT: {product.price} Tk
                    </Typography>
                </Grid>
                <Grid item xs={12} md={7}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField sx={{ my: 1, width: '50%' }} {...register("name", { required: true })} defaultValue={user.displayName} type="text" /> <br />
                        <TextField sx={{ my: 1, width: '50%' }} defaultValue={user.email} {...register("email_add_by_user", { required: true })} type="email" /> <br />
                        <TextField sx={{ my: 1, width: '50%' }} {...register("address", { required: true })} label="address" type="address" /> <br />
                        <TextField sx={{ my: 1, width: '50%' }} {...register("contact", { required: true })} label="give your phone number" type="number" /> <br />
                        <Button sx={{ width: '50%', my: 3 }} variant="contained" type="submit">place order</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PlaceOrder;