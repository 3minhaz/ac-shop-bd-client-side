import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Navigation from '../../Navigation/Navigation';

const Register = () => {
    const location = useLocation();
    const history = useHistory();
    const [passMatch, setPassMatch] = useState(null);
    const { registerWithEmail } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (data.password !== data.password2) {
            return setPassMatch(true)
        }
        else {
            // console.log(data);
            registerWithEmail(data.name, data.email, data.password, location, history)
            setPassMatch(false)
        }
    };
    return (

        <Box>
            <Navigation ></Navigation>
            <form style={{ marginTop: 20 }} onSubmit={handleSubmit(onSubmit)}>
                {/* <input type='text' placeholder='name' {...register("name", { required: true })} /> */}
                <TextField sx={{ width: 1 / 4, m: 1 }} label="name" type="text"  {...register("name", { required: true })} />

                <br />
                {/* <input type='email' placeholder='your email' {...register("email", { required: true })} /> */}
                <TextField sx={{ width: 1 / 4, }} label="email" type="email"  {...register("email", { required: true })} />

                <br />
                {/* <input type='password' placeholder='password' {...register("password", { required: true })} /> */}
                <TextField sx={{ width: 1 / 4, m: 1 }} label="password" type="password" {...register("password", { required: true })} />
                <br />
                {/* <input type='password' placeholder='Retype Your password' {...register("password2", { required: true })} /> */}
                <TextField sx={{ width: 1 / 4, m: 1 }} label="Retype Your password" type="password" {...register("password2", { required: true })} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <Button sx={{ m: 2, width: 1 / 4 }} type="submit" value="Register" variant="contained">Register</Button>

                {/* <Button variant='contained' type="submit" value="Register" /> */}
            </form>
            {passMatch && <p>pass not matched</p>}
            <Typography>
                <Link style={{ textDecoration: 'none', }} to='/login'>Already Registered?click to login</Link>
            </Typography>
        </Box>
    );
};

export default Register;