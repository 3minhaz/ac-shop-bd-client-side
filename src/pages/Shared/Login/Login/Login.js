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
        <div style={{ marginTop: 15 }} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' placeholder='email' {...register("email", { required: true })} /> <br />
                <input type='password' placeholder='password' {...register("password", { required: true })} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Login" />
            </form>
            <Link style={{ textDecoration: 'none', paddingTop: 10 }} to='/register'>Not Registered?Click to Register</Link>
        </div>
    );
};

export default Login;