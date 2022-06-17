import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
   const navigate = useNavigate();
   const location = useLocation();

   const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
    auth
  );

    if(loading || sending){
        return <Loading/>
    }

  let errorElement;

  if (error) {
    errorElement = <div> <p style={{color: "red"}}>Error: {error?.message}</p> </div>
     
   }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    };

    let from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }

    const navigateRegister = () => {
        navigate("/register");
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
        toast('Sent email');
        }
        else{
            toast("Please enter your Email address");
        }
    }

    return (
        <div>
            <h1 className='text-primary text-center'>Please Login</h1>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref= {passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button onClick= {handleSubmit} variant="primary w-50 mx-auto d-block mb-3" type="submit" name= "submit">
                    Login
                </Button>
                {errorElement}
                <p className='pe-auto'>New to Genius Car? <Link to= "/register" className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

                <p className='pe-auto'>Forget Password? <button className=' btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                <SocialLogin/>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;