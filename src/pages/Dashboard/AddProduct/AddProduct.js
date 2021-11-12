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
                <input placeholder='name' {...register("productName")} /> <br />
                <input placeholder='description' {...register("description")} /> <br />
                <input placeholder='image-Link' {...register("image")} /> <br />
                <input type="number" placeholder='price' {...register("price")} /> <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;