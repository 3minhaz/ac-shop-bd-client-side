import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault();
        fetch('https://aqueous-citadel-84780.herokuapp.com/users', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: data.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('successfully done admin')
                    reset();
                }
            })

    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField style={{ width: '50%' }} {...register("email")} label="email" variant="standard" />
                <Button type="submit" variant="contained">submit</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;