import { useState } from 'react';
import './App.css';
import googleIcon from './assets/google.png';  // Path to your Google login image
import phoneIcon from './assets/Phone.png';  // Path to your phone login image
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // State hooks for managing input fields
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'email-phone') {
      setEmailPhone(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  // Simulate form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Login Submitted with:', { emailPhone, password });
    // Here you would typically handle the login logic or call an API
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="login-container">
        <h2>Log in</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email-phone">Email or phone number</label>
          <input 
            id="email-phone" 
            type="text" 
            value={emailPhone} 
            onChange={handleInputChange} 
            placeholder="Enter your email or phone number"  // Added placeholder
          />

          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            value={password} 
            onChange={handleInputChange} 
            placeholder="Enter your password"  // Added placeholder
          />

          <button type="submit">Log in</button>
        </form>

        <div className="separator">
          <div className="line"></div>
          <span className="separator-text">or log in with</span>
          <div className="line"></div>
        </div>

        <div className="alternative-login">
          <button onClick={() => console.log("Google login attempted")}>
            <img src={googleIcon} alt="Log in with Google" />
          </button>
        </div>

        <div className="footer-links">
          <Link to="/forgot-password" className="forgot-password">Forgot your password?</Link>
          <div className="signup-link">
            <Link to="/register">Don’t have an account? Sign up</Link>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
