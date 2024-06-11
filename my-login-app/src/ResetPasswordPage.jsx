import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';  // Ensure this CSS file has the styles needed for your forms

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Submit new password to the server or password reset API
    console.log('New Password Set:', password);
    // Redirect to login or success page
  };

  return (
    <div className="login-container">
      <h2>Set New Password</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="password">New Password</label>
        <input 
          id="password" 
          type="password" 
          value={password} 
          onChange={handlePasswordChange} 
          placeholder="Enter new password" 
        />

        <label htmlFor="confirm-password">Confirm New Password</label>
        <input 
          id="confirm-password" 
          type="password" 
          value={confirmPassword} 
          onChange={handleConfirmPasswordChange} 
          placeholder="Confirm new password" 
        />

        <button type="submit">Set New Password</button>
      </form>

      <div className="footer-links">
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
