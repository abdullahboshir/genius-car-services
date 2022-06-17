import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./register.css";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';


const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);

      const [agree, setAgree] = useState(false);

    const navigateLogin = event => {
        navigate("/login")
    }

    if(user){
        console.log("user is here", user)
    }

    if(loading || updating){
        return <Loading/>
    }

    let errorElement;

    if (error) {
      errorElement = <p style={{color: "red"}}>Error: {error?.message}</p>
       
     }
  

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        // const checked = event.target.terms.checked; 
        if(password !== confirmPassword){
            return;
        }
       
        await  createUserWithEmailAndPassword(email, password); 
        await updateProfile({ displayName: name});
        alert('Updated profile');
        navigate("/")
    }

    return (
        <div  className= "register-form">
            <h1 style={{textAlign: "center"}}>Please Register</h1>
            <form  onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <br />
                <input type="password" name="password" id=""  placeholder='Password' required />
                <br />
                <input type="password" name="confirmPassword" id=""  placeholder='Confirm Password' required />
                {errorElement}
                <br />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree? "ps-2 text-danger" : "ps-2 text-primary"} htmlFor="terms">Accept terms and Conditions</label> */}
                <label className={`ps-2 ${agree? "" : "text-danger"}`} htmlFor="terms">Accept terms and Conditions</label>

                <input disabled= {!agree} 
                className='btn btn-primary mt-2 w-50 mx-auto d-block' 
                type="submit" 
                value="Register" />

                <p className='pe-auto'>You have already an account? <Link to= "/login" className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        
        </div>
    );
};

export default Register;