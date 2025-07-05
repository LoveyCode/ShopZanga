import React, { useState } from 'react';
import './css/LoginSignup.css';

const LoginSignup = () => {
const [state, setState] = useState('Login');
const [formData, setFormData] =useState({
  username:'',
  password:'',
  email:''
})


const changeHandler = (e)=>{
  setFormData({...formData, [e.target.name]:e.target.value})
}

const login =async()=>{
console.log('Login Function executed', formData);

let responseData;
await fetch('https://zanga-dtb7.onrender.com/login',{
  method: 'POST',
  headers:{
    Accept:'application/form-data',
    'Content-Type':'application/json',
  },
  body: JSON.stringify(formData),
}).then((response)=> response.json())
   .then((data)=>responseData=data)
if(responseData.success) {
  localStorage.setItem('auth-token', responseData.token);
  window.location.replace('/');
}
else{
  alert(responseData.errors)
}
}


const signup =async()=>{
  console.log('Sign Up Function executed', formData);
let responseData;
await fetch('https://zanga-dtb7.onrender.com/signup',{
  method: 'POST',
  headers:{
    Accept:'application/form-data',
    'Content-Type':'application/json',
  },
  body: JSON.stringify(formData),
}).then((response)=> response.json()).then((data)=>responseData=data)
if(responseData.success) {
  localStorage.setItem('auth-token', responseData.token);
  window.location.replace('/');
}
else{
  alert(responseData.errors)
}
}


  return (
    <div className='loginSignUp'>
    <div className="loginSignUp-container">
      <h1>{state}</h1>
      <div className="loginSignUp-fields">
        {state==='Sign Up'? <input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' />:<></>}
        <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email Address'/>
        <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password'/>
      </div>
      <button onClick={()=>{state==='Login'?login():signup()}}>Continue</button>
      {state ==='Sign Up'
      ?<p className="loginSignUp-login">Already Have an account?  <span onClick={()=>{setState('Login')}}>Login</span></p>
    :<p className="loginSignUp-login">Create an Account? <span  onClick={()=>{setState('Sign Up')}}>Click here</span></p>}
      
    <div className="loginSignUp-agree">
      <input type="checkbox" name='' id=''/>
      <p>By continuing, I agree to the terms of use & privacy policy.</p>
    </div>
    </div>

    </div>
  )
}


export default LoginSignup;