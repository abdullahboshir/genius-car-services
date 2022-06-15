import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./register.css"

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate("/login")
    }

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Please Register</h1>
            <form  onSubmit={handleRegister} className= "register-form">
                <input type="name" name="Name" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="Email" id="" placeholder='Your Email' required />
                <br />
                <input type="password" name="Password" id=""  placeholder='Password' required />
                <br />
                <input type="password" name="Confirm Password" id=""  placeholder='Confirm Password' required />
                <br />
                <input type="button" value="Register" />
                <p className='pe-auto'>You have already an account? <Link to= "/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            </form>
        
        </div>
    );
};

export default Register;