import React from 'react';
import '../css/signup.css';
const SignUp = () => {
  return (
    <div className='Signcontainer'>
      <div className='login'>
        <h3>Log In</h3>
        <div className='email'>
          <p>Email</p>
          <input className='field' type="text"></input>
        </div>
        <div className='password'>
          <p>Password</p>
          <input className='field' type="text"></input>
        </div>
      </div>
    </div>
  );
};

export default SignUp;