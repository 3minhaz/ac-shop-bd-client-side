import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const { signInUsingEmail, setIsLoading } = useAuth();
    const location = useLocation()
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        signInUsingEmail(data.email, data.password, location, history)
        // console.log(data)
    };
    return (
        <div style={{ marginTop: 50 }} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField sx={{ width: 1 / 4, }} label="email" type="email" {...register("email", { required: true })} />
                <br />
                <br />
                {/* <input type='password' placeholder='password' {...register("password", { required: true })} /> */}
                <TextField sx={{ width: 1 / 4 }} label="password" type="password" {...register("password", { required: true })} />
                <br />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <Button sx={{ width: 1 / 4 }} type="submit" value="Register" variant="contained">Login</Button>
                {/* <input type="submit" value="Login" /> */}
            </form>
            <Typography style={{ textDecoration: 'none', paddingTop: 10 }}>
                <Link to='/register'>Not Registered?Click to Register</Link>
            </Typography>
        </div>
    );
};

export default Login;