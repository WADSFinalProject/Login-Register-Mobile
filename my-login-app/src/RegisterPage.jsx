import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import googleIcon from './assets/google.png';  // Path to your Google login image
import phoneIcon from './assets/Phone.png';  // Path to your phone login image

const RegisterPage = () => {
  return (
    <div className="login-container">
      <h2>Sign Up</h2>

      <label htmlFor="name">Full Name</label>
      <input 
        id="name" 
        type="text" 
        placeholder="Enter your full name"  // Added placeholder
      />

      <label htmlFor="email">Email Address or Phone Number</label>
      <input 
        id="email" 
        type="text" 
        placeholder="Enter your email address or phone number"  // Added placeholder
      />
      
      <label htmlFor="password">Password</label>
      <input 
        id="password" 
        type="password" 
        placeholder="Create a password"  // Added placeholder
      />
      
      <label htmlFor="confirm-password">Confirm Password</label>
      <input 
        id="confirm-password" 
        type="password" 
        placeholder="Confirm your password"  // Added placeholder
      />
      
      <button>Register</button>

      <div className="separator">
        <div className="line"></div>
        <span className="separator-text">or register with</span>
        <div className="line"></div>
      </div>

      <div className="alternative-login">
        <button>
          <img src={googleIcon} alt="Register with Google" />
        </button>
        <Link to="/register-phone">
          <button title="Register with Phone">
            <img src={phoneIcon} alt="Register with Phone" />
          </button>
        </Link>
        {/* You can add more social media or authentication options here */}
      </div>

      <div className="footer-links">
        <Link to="/" className="forgot-password">Already have an account? Log in</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
