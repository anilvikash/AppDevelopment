import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice"; 
import './NavBar.css';
import SignedOutLink from './SignedOutLink';
const NavBar=()=>{
  const user = useSelector(selectUser);
  
  const username =
    user.user && user.user.username ? user.user.username : "Guest"; 
    return(
        <>
            <div className="containers">
            <div className="nav-contain">
                <Link to='loginbtn' className="brand-logo">VIRTUAL  JOB  FAIR</Link>
                <div className="right-flow">
            <ul className='right'>
                <li className="r1"><NavLink to='/register'>Signup</NavLink></li>
                <li className="r1"><NavLink to='/'>Login</NavLink></li>
                
                <li className="r1"><NavLink to='/'>LogOut</NavLink></li>
                <li className="r1"><NavLink to='/footer'>About us</NavLink></li>
                <li className="r1"><NavLink to='/que'>Dashboard</NavLink></li>
            </ul>
        </div>
                </div>
                <div className="user">Welcome {username} !!</div> 
            </div>
               
        </>
        
    )
}
export default NavBar;