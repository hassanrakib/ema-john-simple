import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <p><label htmlFor="email">Email:</label></p>
                    <input id="email" type="email" name="email" placeholder='email' required/>
                </div>
                <div className="form-control">
                    <p><label htmlFor="password">Password:</label></p>
                    <input id="password" type="password" name="password" placeholder='password' required/>
                </div>
                <div className="form-control">
                    <input type="submit" value="Login" />
                </div>
            </form>
            <p>New to Ema John? <Link to="/signup">Create New Account</Link></p>
        </div>
    );
};

export default Login;