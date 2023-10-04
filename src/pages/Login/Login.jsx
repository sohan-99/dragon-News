/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        // const email =e.target.email.value;
        // const password= e.target.password.value;
        // console.log(email,password);
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form);
        console.log(form.get('password'));
    }
    return (
        <div>
            <Navber></Navber>
            <h1 className="text-3xl my-10 text-center">Please Login</h1>

            <form onSubmit={handleLogin} className="w-2/4 md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mt-4 ">Don't have an account <Link  className='text-blue-600 font-bold' to='/register'>Register</Link></p>






        </div>
    );
};

export default Login;