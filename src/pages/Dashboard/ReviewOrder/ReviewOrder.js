import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const ReviewOrder = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.userName = user.displayName;
        fetch('https://ac-shop-bd.onrender.com/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('review added successfully');
                    reset();
                }
                console.log(data);
            })

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField sx={{ mb: 1, width: '35%' }} label="product name" type="text" {...register("productName", { required: true })} /> <br />
                <TextField sx={{ mb: 1, width: '35%' }} label="review description" type="text"{...register("details", { required: true })} /> <br />
                <TextField sx={{ mb: 1, width: '35%' }} label="rating" type="number" {...register("rating", { min: 0, max: 5 }, { required: true },)} /> <br />
                {errors.rating && (
                    <p>Please enter value between 0 and 5</p>
                )}
                <Button type="submit" sx={{ mt: 2, width: '35%' }} variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default ReviewOrder;