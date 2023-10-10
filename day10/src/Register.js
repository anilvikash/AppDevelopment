import React, { useState } from 'react';
import './Register.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '', 
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const nav = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    // Reset errors
    setErrors({
      firstName: '',
      email: '',
      phoneNumber: '', // Reset phoneNumber error
      password: '',
    });

    let hasError = false;

    // Validation for First Name
    if (!formData.firstName.trim()) {
      setErrors({ ...errors, firstName: 'First Name is required.' });
      hasError = true;
    }

    // Validation for Email
    if (!formData.email.trim()) {
      setErrors({ ...errors, email: 'Email is required.' });
      hasError = true;
    } else if (!isValidEmail(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email format.' });
      hasError = true;
    }

    // Validation for Phone Number
    if (!formData.phoneNumber.trim()) {
      setErrors({ ...errors, phoneNumber: 'Phone Number is required.' });
      hasError = true;
    } else if (!isValidPhone(formData.phoneNumber)) {
      setErrors({ ...errors, phoneNumber: 'Invalid phone number format.' });
      hasError = true;
    }

    // Validation for Password
    if (!formData.password.trim()) {
      setErrors({ ...errors, password: 'Password is required.' });
      hasError = true;
    }

    // If there are no errors, proceed with registration
    if (!hasError) {
      console.log('First Name:', formData.firstName);
      console.log('Email Address:', formData.email);
      console.log('Phone Number:', formData.phoneNumber);
      console.log('Password:', formData.password);
      // You can send the registration data to your backend here
      nav('/');
    }
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    // For a basic example, you can use a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };








  const isValidPhone = (phone) => {
    // Implement your phone number validation logic here
    // For a basic example, you can use a regular expression
    const phonePattern = /^\d{10}$/; // Assuming 10-digit phone numbers
    return phonePattern.test(phone);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          {errors.firstName && <div className="error-message">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <button type="button" className="submit-button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
