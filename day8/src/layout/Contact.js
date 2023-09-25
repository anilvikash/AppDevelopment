import React, { Component } from 'react';
import '../layout/Contact.css';
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div className="background-image">
        <h2>
          <Link to='/Home'>
            <div className="continue-btn">Back</div>
          </Link>
        </h2>
        <div className="content-column">
          <div style={{ textAlign: "center", marginTop: "50px" }}>
             <h2>Website</h2>
            <p>www.e-jobfair.com</p>
            <h2>Email Address</h2>
            <p>e-jobfair@gmail.com</p>
            
            <div className='ph'></div>
            <h2>Phone Number</h2>
            <p>FOR ANY QUERIES, YOU MAY CALL US AT<br></br>1800-4546-8749</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
