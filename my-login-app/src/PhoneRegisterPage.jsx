import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';  // Ensure this CSS file has the styles needed for your forms

const PhoneRegisterPage = () => {
  return (
    <div className="login-container">
      <h2>Sign Up with Phone</h2>

      <label htmlFor="phone-number">Phone Number</label>
      <input 
        id="phone-number" 
        type="text" 
        placeholder="Enter your phone number"  // Placeholder added
      />

      <label htmlFor="name">Full Name</label>
      <input 
        id="name" 
        type="text" 
        placeholder="Enter your full name"  // Placeholder added
      />

      <label htmlFor="password">Password</label>
      <input 
        id="password" 
        type="password" 
        placeholder="Create a password"  // Placeholder added
      />

      <label htmlFor="confirm-password">Confirm Password</label>
      <input 
        id="confirm-password" 
        type="password" 
        placeholder="Confirm your password"  // Placeholder added
      />

      <button>Register</button>

      <div className="footer-links">
        <Link to="/register">Use Email Instead</Link>
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
};

export default PhoneRegisterPage;
