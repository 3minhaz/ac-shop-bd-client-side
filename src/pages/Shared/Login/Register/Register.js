import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const location = useLocation();
    const history = useHistory();
    const [passMatch, setPassMatch] = useState(null);
    const { registerWithEmail } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        if (data.password !== data.password2) {
            return setPassMatch(false)
        }
        else {
            // console.log(data);
            registerWithEmail(data.name, data.email, data.password, location, history)
            setPassMatch(true)
        }
    };
    return (
        <div style={{ marginTop: 15 }} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='name' {...register("name", { required: true })} /> <br />
                <input type='email' placeholder='your email' {...register("email", { required: true })} /> <br />
                <input type='password' placeholder='password' {...register("password", { required: true })} />
                <br />
                <input type='password' placeholder='Retype Your password' {...register("password2", { required: true })} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Register" />
            </form>
            {!passMatch && <p>pass not matched</p>}
            <Link style={{ textDecoration: 'none', paddingTop: 10 }} to='/login'>Already Registered?click to login</Link>
        </div>
    );
};

export default Register;