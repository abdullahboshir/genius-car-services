import React from 'react';
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    
     if(loading || loading1){
          return <Loading/>
     }

  if (error || error1) {
   errorElement = <div> <p style={{color: "red"}}>Error: {error?.message} {error1?.message}</p> </div>
    
  }

if(user || user1){
navigate("/home")
}

    return (
        <div>
        <div className='d-flex align-items-center'>
           <div style={{height: "1px"}} className='bg-primary w-50' />
           <p className='mt-2 px-2'>or</p>
           <div style={{height: "1px"}} className='bg-primary w-50' /> 
        </div>
        {errorElement}
        <button onClick={() => signInWithGoogle()} className='btn btn-info mx-auto d-block w-50'>
        <img style={{width: "25px", marginRight: "10px"}} src={google} alt="" />
             Google Sign in</button>
        <button  className='btn btn-info mx-auto d-block w-50 mt-3'>
        <img style={{width: "30px", marginRight: "10px"}} src={facebook} alt="" />
             Facebook Sign in</button>
        <button onClick={() => signInWithGithub()} className='btn btn-info mx-auto d-block w-50 mt-3'>
        <img style={{width: "30px", marginRight: "10px"}} src={github} alt="" />
             Github Sign in </button>
        </div>
    );
};

export default SocialLogin;