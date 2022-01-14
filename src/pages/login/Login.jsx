import React from 'react';

const Login = () => {
    return (
        <div className="login_component">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label htmlFor="email">Email</label>
                <input type="text" name="" id="email" placeholder="Enter your email..." />
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" placeholder="Enter your Password..." />
                <button className="loginButton">Login</button>
            </form>
                <button className="registerButton">Register</button>
        </div>
    );
};

export default Login;