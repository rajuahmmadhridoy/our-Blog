import React from 'react';

const Register = () => {
    return (
        <div className="register_component">
            <span className="registerTitle">register</span>
            <form action="" className="registerForm">
                <label htmlFor="username">Username</label>
                <input type="text" name="" id="username" placeholder="Username..." />
                <label htmlFor="email">Email</label>
                <input type="text" name="" id="email" placeholder="Enter your email..." />
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" placeholder="Enter your Password..." />
                <button className="registerBtn">register</button>
            </form>
                <button className="logIn">Login</button>
        </div>
    );
};

export default Register;