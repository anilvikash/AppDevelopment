import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import SignedOutLink from './SignedOutLink';

const NavBar = () => {
  return (
    <div className="containers">
    
      <div className="nav-contain">
       
        <span className="brand-logo">VIRTUAL JOB FAIR</span>

        <div className="right-flow">
          <ul className='right'>
            <li className="r1"><NavLink to='/register'>Signup</NavLink></li>
            <li className="r1"><NavLink to='/Dashboard'>Dashboard</NavLink></li>
            <li className="r1"><NavLink to='/About'>About us</NavLink></li>
            <li className="r1"><NavLink to='/'>LogOut</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
