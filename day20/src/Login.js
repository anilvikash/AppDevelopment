import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {login} from "./Redux/userSlice"
import axios from 'axios';
import './Login.css';
function Login() {
   
        const  [email, setEmail] =  useState('');
        const  [password, setPassword] =  useState('');
        const [errors,setErrors]=useState({});
        const dispatch = useDispatch();        
        const nav= useNavigate();
        const formData = {email,password};
        const routeregister=()=>{
          nav('/Register')
        }
        
        const handleSubmit = async (e) =>
        {
          e.preventDefault();
          const validationErrors = {};
      
          if (!email.trim()) {
            validationErrors.email = "username is required";
          }
          if (!password.trim()) {
            validationErrors.password = "Password is required";
          } else if (password.length < 6) {
            validationErrors.Password = "Password should be at least 6 characters";
          }
          else
    {
      try 
      {
        const response = await axios.post("http://localhost:8080/api/v1/auth/user/authenticate", formData);
        const token=response.data.token;
        console.log(token);
        axios.defaults.headers.common["Autherization"] = `Bearer ${token}`;
        localStorage.setItem("auth",token);
        if(token)
        {
          dispatch(login(email))
          nav('/Home');
        }
      }
      catch (error) {
        alert("invalid login");
        console.error("Error during login:", error);
      }
    }
      
          setErrors(validationErrors);
      
        
      
       }
  return (
    <div className='center'>
      <form onSubmit={handleSubmit}>
      <h2>Login</h2>
        <div className='email'>
        <label>
        Email
        <input type="name"  onChange={(a) => setEmail(a.target.value)} />
        </label>
        <h6>{errors.email && <span>{errors.email}</span>}</h6>
        </div>
        <div className='password'>
        <label>
        Password
        <input type="password" value={password} onChange={(a) => setPassword(a.target.value)} />
        </label>
        <h6>{errors.Password && <span>{errors.Password}</span>}</h6>
        </div>
        <div className='submitbutton'>
        <button type="submit"> Submit </button>
        <p className='p'>If you don't have an account?
        </p>
        <button type='submit' onClick={routeregister} >Register </button>
        </div>
      </form>
      
    </div>
  )
}

export default Login