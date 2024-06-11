import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';  // Make sure this CSS file includes all necessary styles

const ForgotPasswordPage = () => {
  const navigate = useNavigate();  // Hook for navigating programmatically

  const handleReset = () => {
    // Simulate sending the reset link via email or SMS
    console.log("Reset link sent to email or phone.");

    // Navigate to the ResetPasswordPage
    navigate('/reset-password');
  };

  return (
    <div className="login-container">
      <h2>Reset Password</h2>
      <p>Please enter your email address or phone number to receive a link to reset your password.</p>
      
      <label htmlFor="email-phone">Email Address or Phone Number</label>
      <input 
        id="email-phone" 
        type="text" 
        placeholder="Enter email or phone number" // Added placeholder
        />

      <button onClick={handleReset}>Send Reset Link</button>
      
      <div className="footer-links">
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
