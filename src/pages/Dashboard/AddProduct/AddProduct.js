import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const product = data;
        fetch('https://aqueous-citadel-84780.herokuapp.com/addProduct', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('new product added successfully');
                    reset()
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <TextField sx={{ width: '50%', mt: 1 }} placeholder='name' {...register("productName")} /> <br />
                <TextField sx={{ width: '50%', mt: 1 }} placeholder='description' {...register("description")} /> <br />
                <TextField sx={{ width: '50%', mt: 1 }} placeholder='image-Link' {...register("image")} /> <br />
                <TextField sx={{ width: '50%', mt: 1 }} type="number" placeholder='price' {...register("price")} /> <br />
                <Button sx={{ mt: 2, width: '50%' }} type="submit">Submit</Button>
                {/* <input type="submit" /> */}
            </form>
        </div>
    );
};

export default AddProduct;