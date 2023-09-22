import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const SignedOutLink=()=>{
    return(
        <div className="right-flow">
        <ul className='right'>
            <li><NavLink to='/register'>Signup</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
            <li><NavLink to='/'>LogOut</NavLink></li>
            <li><NavLink to='/footer'>About us</NavLink></li>
            <li><NavLink to='/que'>Dashboard</NavLink></li>
        </ul>
        </div>
           
     
    )
}
export default SignedOutLink;